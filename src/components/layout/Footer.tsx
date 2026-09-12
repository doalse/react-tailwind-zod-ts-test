import { Container } from '@/components/ui/Container'
import { navLinks } from '@/data/content'

export function Footer() {
  return (
    <footer className="border-t border-ink-300">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-ink-600">
          © {new Date().getFullYear()} Community. All rights reserved.
        </p>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-600 transition-colors hover:text-ink-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  )
}
