import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { testimonials } from '@/data/content'

export function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <h2 className="text-center text-3xl">Loved by communities everywhere</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author}>
              <p className="text-ink-900">“{testimonial.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-ink-300" aria-hidden />
                <div className="text-left">
                  <p className="text-sm font-medium text-ink-900">{testimonial.author}</p>
                  <p className="text-sm text-ink-600">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
