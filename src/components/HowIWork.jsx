import { motion } from 'framer-motion'

// Numbered cards that stack on scroll via CSS `position: sticky` — each card
// pins a little lower than the last, so their top edges peek as they stack.
const steps = [
  {
    n: '01',
    kicker: 'Solutions Engineer & TAM',
    title: 'Make it make sense.',
    body: 'Eight years turning complex technology into something customers actually understand and adopt — onboarding, implementation, and the escalations where the answer has to land the first time.',
  },
  {
    n: '02',
    kicker: 'Engineer',
    title: 'Build the proof.',
    body: 'I ship the software too — SaaS platforms in Next.js, native Apple apps in SwiftUI, real AI integration. The demo can go as deep as the question, because I built the thing underneath it.',
  },
  {
    n: '03',
    kicker: 'Handoff',
    title: 'Hand off the busywork.',
    body: 'Through Handoff, I put the right tools in place for owners and small teams so the repetitive work runs itself — and they get their time back for what actually matters.',
  },
]

export default function HowIWork() {
  return (
    <section id="how" className="px-6 pb-28 scroll-mt-24">
      <div className="max-w-site mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="border-t border-line pt-10 mb-12"
        >
          <p className="eyebrow mb-3">How I work</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            One person, the whole arc.
          </h2>
        </motion.div>

        {/* stacking context */}
        <div className="relative">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="sticky"
              style={{ top: `calc(6rem + ${i * 1.75}rem)` }}
            >
              <div className="mb-6 rounded-2xl border border-line bg-paper-raised p-7 sm:p-10 min-h-[52vh] flex flex-col justify-center shadow-[0_10px_40px_-24px_rgba(25,23,20,0.25)]">
                <div className="grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-10 items-start max-w-4xl">
                  <span className="font-display text-6xl sm:text-8xl font-bold leading-none text-accent/20 tabular-nums">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted mb-3">
                      {s.kicker}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                      {s.title}
                    </h3>
                    <p className="text-ink-secondary leading-relaxed max-w-xl">{s.body}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
