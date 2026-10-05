import { useId, useState } from 'react'
import { faq } from '@/data/content'
import type { FaqItem } from '@/types'
import { cn } from '@/lib/utils'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { MinusIcon, PlusIcon } from '../ui/icons'

function FaqCard({ item, defaultOpen = false }: { item: FaqItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const answerId = useId()

  return (
    <li className="rounded-xl bg-white shadow-[0_4px_20px_rgba(30,27,75,0.06)]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={answerId}
        className="flex w-full items-center justify-between gap-4 px-6 pt-7 pb-7 text-left"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-lg text-indigo-950">{item.question}</span>
        <span
          className={cn(
            'flex size-8 shrink-0 items-center justify-center rounded-md transition-colors',
            open ? 'bg-blue-500 text-white' : 'bg-indigo-50 text-slate-500',
          )}
        >
          {open ? <MinusIcon className="size-4" /> : <PlusIcon className="size-4" />}
        </span>
      </button>
      {/* grid-rows trick animates height without measuring the content */}
      <div
        id={answerId}
        className={cn('grid transition-[grid-template-rows] duration-300 ease-out', open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
      >
        <p className="overflow-hidden px-6 pr-16 text-sm leading-relaxed text-slate-500">
          <span className="block pb-8">{item.answer}</span>
        </p>
      </div>
    </li>
  )
}

export function Faq() {
  const sectionRef = useScrollReveal<HTMLElement>()

  // Two independent columns so opening a card doesn't shift the other column
  const half = Math.ceil(faq.items.length / 2)
  const columns = [faq.items.slice(0, half), faq.items.slice(half)]

  return (
    <section ref={sectionRef} id="faq" className="relative overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16 lg:pt-36 lg:pb-20 bg-indigo-50/40">
      <Container className="flex flex-col items-center">
        <h2 data-reveal="up" className="mb-10 md:mb-16 text-center text-3xl sm:text-4xl lg:text-6xl text-indigo-900 font-bold leading-tight lg:leading-normal">{faq.title}</h2>

        <div className="grid w-full max-w-5xl grid-cols-1 items-start gap-5 md:grid-cols-2">
          {columns.map((column, c) => (
            <ul key={c} data-reveal={c === 0 ? 'left' : 'right'} className="flex flex-col gap-5">
              {column.map((item, i) => (
                <FaqCard key={item.question} item={item} defaultOpen={c === 0 && i === 0} />
              ))}
            </ul>
          ))}
        </div>

        <Button data-reveal="up" variant="primary" className="mt-12 rounded-full px-12 md:px-16 py-6 text-2xl font-semibold md:mt-16 md:text-3xl">
          {faq.button_text}
        </Button>
      </Container>
    </section>
  )
}
