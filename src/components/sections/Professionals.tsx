import { useState } from 'react'
import { professionals } from '@/data/content'
import { cn } from '@/lib/utils'
import { Container } from '../ui/Container'

export function Professionals() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTab = professionals.tabs[activeIndex]

  return (
    <section id="professionals" className="relative overflow-hidden bg-sky-50/50">
      <div className="bg-linear-to-b from-indigo-400 to-indigo-500">
        <Container className="flex flex-col pt-16">
          <h2 className="mb-16 text-center text-4xl md:text-6xl text-white font-bold leading-normal">{professionals.title}</h2>

          <div role="tablist" className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {professionals.tabs.map((tab, i) => {
              const isActive = i === activeIndex
              return (
                <button
                  key={tab.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={cn(
                    'relative flex h-20 items-center justify-center px-6 text-xl font-bold transition-colors md:h-29 md:text-2xl',
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

      <Container className="grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
        <img key={activeTab.image_url} className="aspect-[376/344] w-full rounded-3xl object-cover animate-[fade-in_0.4s_ease-out]" src={activeTab.image_url} alt={activeTab.label} />
        <div>
          <h3 className="mb-4 text-3xl md:text-4xl text-indigo-950 font-bold leading-snug">{activeTab.title}</h3>
          <p className="text-justify text-xl md:text-2xl font-semibold leading-relaxed text-slate-600">{activeTab.text}</p>
        </div>
      </Container>
    </section>
  )
}
