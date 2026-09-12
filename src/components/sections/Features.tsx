import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { features } from '@/data/content'

export function Features() {
  return (
    <section id="features" className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl">Everything your community needs</h2>
          <p className="mt-4 text-ink-600">
            Simple, powerful tools to help your community grow and thrive.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <h3 className="text-lg">{feature.title}</h3>
              <p className="mt-2 text-sm text-ink-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
