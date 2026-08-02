import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
}

const inputClass =
  'w-full rounded-lg px-4 py-3 text-sm bg-paper border border-line text-ink placeholder-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-line-strong transition-all'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xpqywqky', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-6 py-24 border-t border-line">
      <div className="max-w-site mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="eyebrow mb-4">
              Contact
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-5"
            >
              Let&apos;s work together.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-ink-secondary leading-relaxed max-w-md mb-8">
              Have a project in mind or want to talk through an idea? Send a message and
              I&apos;ll get back to you within a day.
            </motion.p>
            <motion.div variants={fadeUp} className="space-y-3">
              <a
                href="mailto:dwaynebrown2012@gmail.com"
                className="flex items-center gap-3 text-sm text-ink-secondary hover:text-accent transition-colors w-fit"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                dwaynebrown2012@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/dwaynebrown8/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-ink-secondary hover:text-accent transition-colors w-fit"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/dwayne-brown-jr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-ink-secondary hover:text-accent transition-colors w-fit"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 8.84 21.5c.5.08.66-.23.66-.5v-1.69C6.73 19.91 6.14 18 6.14 18a2.69 2.69 0 0 0-1.13-1.49c-.92-.63.07-.62.07-.62a2.13 2.13 0 0 1 1.56 1.05 2.16 2.16 0 0 0 2.95.85 2.16 2.16 0 0 1 .64-1.35c-2.2-.25-4.52-1.1-4.52-4.9a3.83 3.83 0 0 1 1.02-2.66 3.56 3.56 0 0 1 .1-2.62s.84-.27 2.75 1.02a9.42 9.42 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02a3.56 3.56 0 0 1 .1 2.62 3.83 3.83 0 0 1 1.02 2.66c0 3.81-2.32 4.65-4.53 4.89a2.42 2.42 0 0 1 .69 1.88v2.79c0 .27.16.59.67.5A10 10 0 0 0 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href="/Dwayne-Brown-Jr-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-ink-secondary hover:text-accent transition-colors w-fit"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="18" x2="12" y2="12" />
                  <polyline points="9 15 12 18 15 15" />
                </svg>
                Résumé (PDF)
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl border border-line bg-paper-raised p-7"
          >
            {status === 'success' ? (
              <div className="py-10 flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 rounded-full bg-accent-wash flex items-center justify-center text-accent">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="font-semibold">Message sent!</p>
                <p className="text-sm text-ink-secondary">I&apos;ll get back to you soon.</p>
                <button onClick={() => setStatus('idle')} className="text-xs text-accent hover:text-accent-dark mt-1">
                  Send another
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-ink-secondary mb-1.5">Name</label>
                    <input type="text" name="name" value={form.name} onChange={onChange} placeholder="Your name" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-ink-secondary mb-1.5">Email</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" required className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-secondary mb-1.5">Message</label>
                  <textarea name="message" value={form.message} onChange={onChange} rows={5} placeholder="Tell me about your project..." required className={inputClass + ' resize-none'} />
                </div>
                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center py-3 disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
                {status === 'error' && <p className="text-xs text-red-500 text-center">Something went wrong. Please try again.</p>}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
