import { useEffect, useRef, useState } from 'react'
import { reviews } from '@/data/content'
import type { Review, ReviewSource } from '@/types'
import { cn } from '@/lib/utils'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { BbbIcon, ChevronLeftIcon, ChevronRightIcon, FacebookIcon, GoogleIcon, StarIcon } from '../ui/icons'

type Tab = 'all' | ReviewSource

const sourceNames: Record<ReviewSource, string> = {
  facebook: 'Facebook',
  google: 'Google',
  bbb: 'BBB',
}

// Facebook and BBB don't use a 1-5 score in their widgets, so only these tabs show one
const tabs: { id: Tab; label: string; showScore: boolean }[] = [
  { id: 'all', label: 'All Reviews', showScore: true },
  { id: 'facebook', label: 'Facebook', showScore: false },
  { id: 'google', label: 'Google', showScore: true },
  { id: 'bbb', label: 'BBB', showScore: false },
]

function filterReviews(tab: Tab) {
  return tab === 'all' ? reviews.items : reviews.items.filter((review) => review.source === tab)
}

function averageRating(items: Review[]) {
  if (items.length === 0) return 0
  return items.reduce((sum, review) => sum + review.rating, 0) / items.length
}

function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <span className={cn('flex gap-0.5 text-yellow-400', className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} className={cn('size-full', i >= Math.round(rating) && 'text-gray-300')} />
      ))}
    </span>
  )
}

const sourceIcons: Record<ReviewSource, typeof FacebookIcon> = {
  facebook: FacebookIcon,
  google: GoogleIcon,
  bbb: BbbIcon,
}

function SourceIcon({ source, className }: { source: ReviewSource; className?: string }) {
  const Icon = sourceIcons[source]
  return <Icon className={className} />
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <li className="flex w-full shrink-0 snap-start flex-col rounded-xl bg-indigo-50 p-6 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4.5rem)/4)]">
      <span className="font-medium text-ink-900">{review.author}</span>
      <div className="mt-1 mb-3 flex items-center gap-2">
        <Stars rating={review.rating} className="h-5 w-24" />
        <span className="text-xs text-gray-400">{review.date}</span>
      </div>
      <p className={cn('text-lg leading-snug text-gray-700', !expanded && 'line-clamp-3')}>{review.text}</p>
      <button
        type="button"
        className="mt-1 self-start text-gray-400 transition-colors hover:text-gray-600"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>
      <div className="mt-auto flex items-center gap-2 pt-5">
        <SourceIcon source={review.source} className="size-8" />
        <div className="flex flex-col leading-tight">
          <span className="text-xs text-gray-400">Posted on</span>
          <span className="text-blue-600">{sourceNames[review.source]}</span>
        </div>
      </div>
    </li>
  )
}

export function Reviews() {
  const [activeTab, setActiveTab] = useState<Tab>('all')
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const trackRef = useRef<HTMLUListElement>(null)
  const sectionRef = useScrollReveal<HTMLElement>()

  const visibleReviews = filterReviews(activeTab)
  const rating = averageRating(visibleReviews)

  function updateArrows() {
    const track = trackRef.current
    if (!track) return
    setCanScrollPrev(track.scrollLeft > 0)
    setCanScrollNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 1)
  }

  // Re-check the arrows whenever the list changes or the track is resized
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: 0 })
    updateArrows()
    const observer = new ResizeObserver(updateArrows)
    observer.observe(track)
    return () => observer.disconnect()
  }, [activeTab])

  function scrollByPage(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} id="reviews" className="relative overflow-hidden py-20 md:py-28 lg:py-36 bg-indigo-50/40">
      <Container className="flex flex-col">
        <span data-reveal="up" className="text-center text-xl md:text-3xl font-bold text-slate-600">{reviews.label}</span>
        <h2 data-reveal="up" className="mb-10 md:mb-16 text-center text-3xl sm:text-4xl lg:text-6xl text-indigo-900 font-bold leading-tight lg:leading-normal">{reviews.title}</h2>

        <div data-reveal="up" className="rounded-xl bg-indigo-50">
          <div role="tablist" className="flex gap-8 overflow-x-auto border-b border-gray-300 px-6">
            {tabs.map((tab) => {
              const tabRating = averageRating(filterReviews(tab.id))
              const isActive = tab.id === activeTab
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={cn(
                    'flex shrink-0 items-center gap-2 border-b-2 py-4 text-gray-700 transition-colors',
                    isActive ? 'border-ink-900 text-ink-900' : 'border-transparent hover:text-ink-900',
                  )}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.id !== 'all' && <SourceIcon source={tab.id} className="size-5" />}
                  {tab.label}
                  {tab.showScore && tabRating > 0 && <span className="font-semibold">{tabRating.toFixed(1)}</span>}
                </button>
              )
            })}
          </div>

          <div className="flex flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-2xl text-ink-900">Overall Rating</span>
              <div className="mt-1 flex items-center gap-3">
                <span className="text-2xl font-semibold text-ink-900">{rating.toFixed(1)}</span>
                <Stars rating={rating} className="h-6 w-32" />
                <span className="text-sm text-gray-400">{visibleReviews.length} reviews</span>
              </div>
            </div>
            <Button variant="primary" className="px-6 py-3 text-base font-semibold">{reviews.write_review_text}</Button>
          </div>
        </div>

        <div data-reveal="up" className="relative mt-6">
          <ul
            ref={trackRef}
            onScroll={updateArrows}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden"
          >
            {visibleReviews.map((review) => (
              <ReviewCard key={`${review.source}-${review.author}`} review={review} />
            ))}
          </ul>

          {canScrollPrev && (
            <button
              type="button"
              aria-label="Previous reviews"
              className="absolute top-1/2 -left-4 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-500/90 text-white shadow-lg transition-colors hover:bg-gray-700"
              onClick={() => scrollByPage(-1)}
            >
              <ChevronLeftIcon className="size-5" />
            </button>
          )}
          {canScrollNext && (
            <button
              type="button"
              aria-label="Next reviews"
              className="absolute top-1/2 -right-4 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-500/90 text-white shadow-lg transition-colors hover:bg-gray-700"
              onClick={() => scrollByPage(1)}
            >
              <ChevronRightIcon className="size-5" />
            </button>
          )}
        </div>
      </Container>
    </section>
  )
}
