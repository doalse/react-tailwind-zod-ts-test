import { experience } from '@/data/content'
import type { ExperienceCard, ExperienceIcon } from '@/types'
import { cn } from '@/lib/utils'
import { Container } from '../ui/Container'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ClipboardIcon, HeadsetIcon, HomeIcon, MapPinIcon } from '../ui/icons'

const icons: Record<ExperienceIcon, typeof HeadsetIcon> = {
  headset: HeadsetIcon,
  clipboard: ClipboardIcon,
  pin: MapPinIcon,
  home: HomeIcon,
}

// Card background / icon color for each card
const cardColors: Record<ExperienceCard['color'], { card: string; icon: string }> = {
  sky: { card: 'bg-sky-400', icon: 'text-sky-500' },
  purple: { card: 'bg-purple-600', icon: 'text-purple-600' },
  orange: { card: 'bg-orange-500', icon: 'text-orange-500' },
  green: { card: 'bg-green-500', icon: 'text-green-600' },
}

export function Experience() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} id="experience" className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-36 bg-sky-50/50">
      <Container className="flex flex-col">
        <h2 data-reveal="up" className="mb-10 md:mb-16 text-center text-3xl sm:text-4xl lg:text-6xl text-indigo-900 font-bold leading-tight lg:leading-normal">{experience.title}</h2>

        <ul className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experience.cards.map((card) => {
            const Icon = icons[card.icon]
            const colors = cardColors[card.color]
            return (
              <li
                key={card.title}
                data-reveal="scale"
                className={cn('flex flex-col items-center rounded-2xl px-5 pt-6 pb-8 text-center text-white transition-[translate] duration-300 hover:-translate-y-1', colors.card)}
              >
                <span className="mb-3 flex size-14 items-center justify-center rounded-full border-4 border-white/60 bg-white">
                  <Icon className={cn('size-7', colors.icon)} />
                </span>
                <h3 className="mb-2 text-lg font-bold uppercase text-white">{card.title}</h3>
                <p className="text-sm font-medium leading-relaxed">{card.text}</p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
