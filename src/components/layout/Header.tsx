import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { navLinks } from '@/data/content'
import image from "@/assets/Image.png";
import { Hero } from "@/components/sections/Hero"
import { HeaderOrbsBackground } from '@/components/three/HeaderOrbsBackground'

export function Header() {
  return (
    <header className="border-b border-ink-300 min-h-150 md:min-h-195 bg-[#F8FDFF] relative overflow-hidden">
      <HeaderOrbsBackground className="absolute inset-0 z-0 opacity-55" />
      <Container className="relative z-10 flex items-center justify-between py-4">
        <img src={image} alt="background" className='hidden absolute top-0 right-0 z-0 min-[1633px]:block' />
        <a href="/" className="text-lg font-semibold text-ink-900">
          LOGO is HERE
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-ink-900 transition-colors hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="primary">Log in</Button>
        </div>
      </Container>
      <Container className='relative z-10'>
        <Hero />
      </Container>
    </header>
  )
}
