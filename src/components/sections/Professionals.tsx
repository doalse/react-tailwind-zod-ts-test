import { useState } from 'react'
import { professionals } from '@/data/content'
import { cn } from '@/lib/utils'
import { Container } from '../ui/Container'
import { ShapesBackground } from '../three/ShapesBackground'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function Professionals() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTab = professionals.tabs[activeIndex]
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} id="professionals" className="relative overflow-hidden bg-sky-50/50">
      <div className="relative bg-blue-500">
        <ShapesBackground className="absolute inset-0 z-0 opacity-50" />
        <Container className="relative z-10 flex flex-col pt-12 pb-10 md:pt-16 md:pb-0">
          <h2 data-reveal="up" className="mb-10 md:mb-16 text-center text-3xl sm:text-4xl lg:text-6xl text-white font-bold leading-tight lg:leading-normal">{professionals.title}</h2>

          <div data-reveal="up" role="tablist" className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {professionals.tabs.map((tab, i) => {
              const isActive = i === activeIndex
              return (
                <button
                  key={tab.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={cn(
                    'relative flex h-16 items-center justify-center px-4 text-lg font-bold transition-colors md:h-24 lg:h-29 lg:px-6 lg:text-2xl',
                    isActive ? 'bg-indigo-950 text-white' : 'bg-indigo-50 text-indigo-950 hover:bg-white',
                  )}
                  onClick={() => setActiveIndex(i)}
                >
                  {tab.label}
                  {/* Pointer under the active tab */}
                  {isActive && (
                    <span className="absolute top-full left-1/2 hidden -translate-x-1/2 border-x-[30px] border-t-[12px] border-x-transparent border-t-indigo-950 md:block" />
                  )}
                </button>
              )
            })}
          </div>
        </Container>
      </div>

      <Container className="grid grid-cols-1 items-center gap-8 py-12 md:gap-10 md:py-20 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
        <div data-reveal="left" className="mx-auto w-full max-w-xl lg:max-w-none">
          <img key={activeTab.image_url} className="aspect-[376/344] w-full rounded-3xl object-cover animate-[fade-in_0.4s_ease-out]" src={activeTab.image_url} alt={activeTab.label} />
        </div>
        <div data-reveal="right">
          <h3 className="mb-4 text-2xl md:text-3xl lg:text-4xl text-indigo-950 font-bold leading-snug">{activeTab.title}</h3>
          <p className="text-left text-base md:text-xl lg:text-2xl font-semibold leading-relaxed text-slate-600">{activeTab.text}</p>
        </div>
      </Container>
    </section>
  )
}
