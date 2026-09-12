import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function Cta() {
  return (
    <section className="py-24">
      <Container className="rounded-3xl bg-brand-500 px-8 py-16 text-center text-white">
        <h2 className="text-3xl text-white">Ready to grow your community?</h2>
        <p className="mx-auto mt-4 max-w-md text-brand-50">
          Join thousands of communities already using our platform.
        </p>
        <Button variant="secondary" className="mt-8 bg-white text-brand-600 hover:bg-brand-50">
          Get started for free
        </Button>
      </Container>
    </section>
  )
}
