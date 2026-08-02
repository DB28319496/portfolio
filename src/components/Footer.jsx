import { handoff } from '../data/projects'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="max-w-site mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-sans text-sm font-bold">Dwayne Brown, Jr.</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink-muted text-sm">Founder, {handoff.name}</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink-muted text-sm">&copy; {year}</span>
        </div>

        <div className="flex items-center gap-6">
          {[
            // Handoff joins the link row automatically once its URL is set.
            ...(handoff.url ? [{ label: handoff.name, href: handoff.url }] : []),
            { label: 'GitHub', href: 'https://github.com/dwayne-brown-jr' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dwaynebrown8/' },
            { label: 'Résumé', href: '/Dwayne-Brown-Jr-Resume.pdf' },
            { label: 'Email', href: 'mailto:dwaynebrown2012@gmail.com' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              className="text-sm text-ink-muted hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
