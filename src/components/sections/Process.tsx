import { restoration_process } from '@/data/content'
import type { ProcessStepColor } from '@/types'
import { cn } from '@/lib/utils'
import { Container } from '../ui/Container'
import { ShapesBackground } from '../three/ShapesBackground'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// Number badge / header / body / border colors for each step card
const stepColors: Record<ProcessStepColor, { badge: string; header: string; body: string }> = {
  sky: { badge: 'bg-sky-600', header: 'bg-sky-400', body: 'bg-sky-50 border-sky-300' },
  orange: { badge: 'bg-orange-700', header: 'bg-orange-500', body: 'bg-orange-50 border-orange-400' },
  purple: { badge: 'bg-purple-800', header: 'bg-purple-600', body: 'bg-purple-100 border-purple-400' },
}

export function Process() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} id="process" className="relative overflow-hidden py-20 md:py-28 lg:py-36 bg-blue-500">
      <ShapesBackground className="absolute inset-0 z-0 opacity-50" />
      <Container className="relative z-10 flex flex-col">
        <span data-reveal="up" className="text-center text-xl md:text-3xl font-bold text-white/80">{restoration_process.label}</span>
        <h2 data-reveal="up" className="mb-10 md:mb-16 text-center text-3xl sm:text-4xl lg:text-6xl text-white font-bold leading-tight lg:leading-normal">{restoration_process.title}</h2>

        <ol className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-6 lg:max-w-6xl lg:grid-cols-3 lg:gap-8">
          {restoration_process.steps.map((step, i) => {
            const colors = stepColors[step.color]
            return (
              <li key={step.title} data-reveal="up" className="flex flex-col shadow-xl">
                <div className={cn('flex items-stretch text-white', colors.header)}>
                  <span className={cn('flex items-center px-3 text-lg font-bold lg:text-xl', colors.badge)}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="flex-1 px-4 py-3 text-lg font-bold text-white lg:text-2xl">{step.title}</h3>
                </div>
                <p className={cn('flex-1 border border-t-0 px-6 py-6 text-center text-sm font-semibold leading-relaxed text-slate-600 lg:px-8 lg:py-8 lg:text-base', colors.body)}>
                  {step.text}
                </p>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
