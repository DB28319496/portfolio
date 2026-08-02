import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const navLinks = [
  { label: 'Work', href: 'projects' },
  { label: 'About', href: 'about' },
  { label: 'Contact', href: 'contact' },
]

export default function Navbar({ onStartProject }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      let current = ''
      for (const { href } of navLinks) {
        const el = document.getElementById(href)
        if (el && window.scrollY >= el.offsetTop - 130) current = href
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-paper/90 backdrop-blur-xl border-b border-line'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-site mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2.5 font-display font-bold text-base tracking-tight hover:text-accent transition-colors"
          >
            <Logo size={26} className="rounded-[6px] transition-transform duration-200 group-hover:-rotate-3" />
            Dwayne Brown, Jr.
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => go(href)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-150 ${
                  active === href
                    ? 'text-ink font-medium bg-line/60'
                    : 'text-ink-secondary hover:text-ink'
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href="/Dwayne-Brown-Jr-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full text-sm text-ink-secondary hover:text-ink transition-all duration-150"
            >
              Résumé
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onStartProject}
              className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
            >
              Start a project
            </button>

            <button
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-ink-secondary hover:bg-line/50 transition-all"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 inset-x-0 z-40 bg-paper/95 backdrop-blur-xl border-b border-line"
          >
            <div className="px-6 py-3 flex flex-col gap-1">
              {navLinks.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => go(href)}
                  className="text-left px-4 py-3 rounded-lg text-ink-secondary hover:bg-line/50 hover:text-ink text-sm font-medium transition-all"
                >
                  {label}
                </motion.button>
              ))}
              <a
                href="/Dwayne-Brown-Jr-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="text-left px-4 py-3 rounded-lg text-ink-secondary hover:bg-line/50 hover:text-ink text-sm font-medium transition-all"
              >
                Résumé
              </a>
              <div className="pt-2 pb-2 border-t border-line mt-1">
                <button
                  onClick={() => { setMobileOpen(false); onStartProject() }}
                  className="w-full btn-primary justify-center text-sm py-3 mt-2"
                >
                  Start a project
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
