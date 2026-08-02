import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const INTAKE_URL = 'https://cadence-hq.netlify.app/api/intake/db-smart-apps'

const inputClass =
  'w-full rounded-lg px-4 py-3 text-sm bg-paper border border-line text-ink placeholder-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-line-strong transition-all'

const selectClass =
  'w-full rounded-lg px-4 py-3 text-sm bg-paper border border-line text-ink focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-line-strong transition-all appearance-none'

const PROJECT_TYPES = [
  'Web App / SaaS',
  'iOS / macOS App',
  'AI Integration',
  'Marketing / Landing Site',
  'Portfolio / CMS',
  'Other',
]

const BUDGETS = [
  'Under $5K',
  '$5K – $15K',
  '$15K – $30K',
  '$30K+',
  'Not sure yet',
]

export default function IntakeModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    projectType: '',
    budget: '',
    notes: '',
  })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const notesWithBudget = [
      form.budget ? `Budget: ${form.budget}` : '',
      form.notes,
    ].filter(Boolean).join('\n\n')

    try {
      const res = await fetch(INTAKE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          companyName: form.companyName || undefined,
          projectType: form.projectType || undefined,
          notes: notesWithBudget || undefined,
        }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setStatus('idle')
      setForm({ name: '', email: '', phone: '', companyName: '', projectType: '', budget: '', notes: '' })
    }, 300)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl pointer-events-auto bg-paper-raised border border-line shadow-[0_24px_80px_-20px_rgba(25,23,20,0.35)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 pb-0">
                <div>
                  <div className="h-[3px] w-8 rounded-full bg-accent mb-3" />
                  <h2 className="font-display text-xl font-semibold text-ink">Start a project</h2>
                  <p className="text-sm text-ink-secondary mt-1">Website, web app, iOS, or AI build — tell me what you have in mind and I'll be in touch.</p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-ink-muted hover:text-ink hover:bg-line/50 transition-all mt-1 flex-shrink-0"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                {status === 'success' ? (
                  <div className="py-10 flex flex-col items-center gap-3 text-center">
                    <div className="w-14 h-14 rounded-full bg-accent-wash flex items-center justify-center text-accent">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-lg font-bold text-ink">You're in the pipeline.</p>
                    <p className="text-sm text-ink-secondary max-w-xs">Your project details have been received. I'll review everything and reach out within 24 hours.</p>
                    <button onClick={handleClose} className="mt-4 btn-primary px-6 py-2.5 text-sm">
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block text-xs font-medium text-ink-secondary mb-1.5">Name <span className="text-accent">*</span></label>
                        <input type="text" name="name" value={form.name} onChange={onChange} placeholder="Your name" required className={inputClass} />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block text-xs font-medium text-ink-secondary mb-1.5">Email <span className="text-accent">*</span></label>
                        <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@company.com" required className={inputClass} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block text-xs font-medium text-ink-secondary mb-1.5">Phone</label>
                        <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+1 (555) 000-0000" className={inputClass} />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block text-xs font-medium text-ink-secondary mb-1.5">Company / Business</label>
                        <input type="text" name="companyName" value={form.companyName} onChange={onChange} placeholder="Acme Inc." className={inputClass} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block text-xs font-medium text-ink-secondary mb-1.5">Project type</label>
                        <div className="relative">
                          <select name="projectType" value={form.projectType} onChange={onChange} className={selectClass}>
                            <option value="" disabled >Select one</option>
                            {PROJECT_TYPES.map(t => <option key={t} value={t} >{t}</option>)}
                          </select>
                          <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="6 9 12 15 18 9" /></svg>
                        </div>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block text-xs font-medium text-ink-secondary mb-1.5">Budget range</label>
                        <div className="relative">
                          <select name="budget" value={form.budget} onChange={onChange} className={selectClass}>
                            <option value="" disabled >Select one</option>
                            {BUDGETS.map(b => <option key={b} value={b} >{b}</option>)}
                          </select>
                          <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="6 9 12 15 18 9" /></svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-ink-secondary mb-1.5">Tell me about your project</label>
                      <textarea name="notes" value={form.notes} onChange={onChange} rows={4} placeholder="What are you building? What problem does it solve? Any specific requirements or timeline?" className={inputClass + ' resize-none'} />
                    </div>

                    <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center py-3 disabled:opacity-60">
                      {status === 'sending' ? 'Submitting…' : 'Submit project brief'}
                      {status !== 'sending' && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      )}
                    </button>
                    {status === 'error' && <p className="text-xs text-red-500 text-center">Something went wrong. Please try again.</p>}
                    <p className="text-xs text-ink-muted text-center">Submissions go directly into my project pipeline.</p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
