import { fast_quote_data } from '@/data/content'
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"
import { ShapesBackground } from "../three/ShapesBackground"
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function FastQuote() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} id="fast_quote" className="relative overflow-hidden py-20 lg:py-36 bg-blue-500">
      <ShapesBackground className="absolute inset-0 z-0 opacity-50" />
      <Container className="relative z-10 flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <h2 data-reveal="left" className="text-2xl sm:text-3xl lg:text-4xl text-center md:text-left text-white">{ fast_quote_data.text }</h2>
        <Button data-reveal="right" variant="white" className='shrink-0 whitespace-nowrap px-8 py-4 md:px-10 md:py-6'>{ fast_quote_data.button_text }</Button>
      </Container>
    </section>
  )
}
