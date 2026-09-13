import { fast_quote_data } from '@/data/content'
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"
import { ShapesBackground } from "../three/ShapesBackground"

export function FastQuote() {
  return (
    <section id="fast_quote" className="relative overflow-hidden py-36 bg-blue-500">
      <ShapesBackground className="absolute inset-0 z-0 opacity-50" />
      <Container className="relative z-10 flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <h2 className="text-4xl text-center md:text-left text-white">{ fast_quote_data.text }</h2>
        <Button variant="white" className='px-10 py-6'>{ fast_quote_data.button_text }</Button>
      </Container>
    </section>
  )
}
