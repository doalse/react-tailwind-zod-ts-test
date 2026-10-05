import { Container } from '@/components/ui/Container'
import { footer } from '@/data/content'
import type { SocialNetwork } from '@/types'
import { FacebookGlyphIcon, TwitterIcon, YoutubeIcon } from '@/components/ui/icons'

const socialIcons: Record<SocialNetwork, { icon: typeof TwitterIcon; label: string }> = {
  facebook: { icon: FacebookGlyphIcon, label: 'Facebook' },
  twitter: { icon: TwitterIcon, label: 'Twitter' },
  youtube: { icon: YoutubeIcon, label: 'YouTube' },
}

export function Footer() {
  return (
    <footer className="bg-blue-500 text-white">
      <Container className="flex flex-col items-center gap-5 py-16 md:py-20">
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm text-white transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ul className="flex items-center gap-4">
          {footer.socials.map((network) => {
            const { icon: Icon, label } = socialIcons[network]
            return (
              <li key={network} aria-label={label}>
                <Icon className="size-4" />
              </li>
            )
          })}
        </ul>

        <p className="text-xs text-white/90">
          © Copyright {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  )
}
