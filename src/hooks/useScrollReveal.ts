import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Starting state for each `data-reveal` value; elements animate from here to their natural position
const fromVars: Record<string, gsap.TweenVars> = {
  up: { y: 60 },
  left: { x: -80 },
  right: { x: 80 },
  scale: { scale: 0.85 },
}

// Phones stack everything in one column, so side slides become short rises
const mobileFromVars: Record<string, gsap.TweenVars> = {
  up: { y: 32 },
  left: { y: 32 },
  right: { y: 32 },
  scale: { scale: 0.92 },
}

// Accordions, "Read more" and late images change the page height after triggers were measured;
// re-measure once the layout settles so reveals don't fire early or late
let refreshTimer: ReturnType<typeof setTimeout> | undefined
let lastHeight = 0
const heightObserver =
  typeof ResizeObserver === 'undefined'
    ? null
    : new ResizeObserver(([entry]) => {
        const height = entry.contentRect.height
        if (height === lastHeight) return
        lastHeight = height
        clearTimeout(refreshTimer)
        refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 150)
      })
let observers = 0

/**
 * Reveals every `[data-reveal]` element inside the returned ref when it scrolls into view.
 * Elements entering together are staggered. Usage: `<h2 data-reveal="up">`.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return

    if (heightObserver && observers++ === 0) heightObserver.observe(document.body)

    const mm = gsap.matchMedia()

    // Users who asked for less motion just see the content as is
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Read once, not as a matchMedia condition: rotating a phone across the breakpoint
      // would otherwise hide and replay everything already revealed
      const mobile = window.matchMedia('(max-width: 767px)').matches
      const vars = mobile ? mobileFromVars : fromVars
      const items = gsap.utils.toArray<HTMLElement>('[data-reveal]', root)

      items.forEach((item) => {
        gsap.set(item, { autoAlpha: 0, ...(vars[item.dataset.reveal ?? ''] ?? vars.up) })
      })

      ScrollTrigger.batch(items, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: mobile ? 0.7 : 0.9,
            stagger: 0.12,
            ease: 'power3.out',
          }),
      })
    })

    return () => {
      mm.revert()
      if (heightObserver && --observers === 0) heightObserver.disconnect()
    }
  }, [])

  return ref
}
