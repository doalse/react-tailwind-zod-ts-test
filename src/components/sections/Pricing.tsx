import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'
import { pricingPlans } from '@/data/content'

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <Container>
        <h2 className="text-center text-3xl">Simple, transparent pricing</h2>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(plan.highlighted && 'border-brand-400 ring-1 ring-brand-400')}
            >
              <h3 className="text-lg">{plan.name}</h3>
              <p className="mt-2">
                <span className="text-3xl font-semibold text-ink-900">{plan.price}</span>
                <span className="text-sm text-ink-600">{plan.period}</span>
              </p>
              <p className="mt-2 text-sm text-ink-600">{plan.description}</p>

              <ul className="mt-6 space-y-2 text-left text-sm text-ink-600">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? 'primary' : 'secondary'}
                className="mt-6 w-full"
              >
                Choose {plan.name}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
