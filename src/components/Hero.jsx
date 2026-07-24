import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Hero({ onStartProject }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="px-6 pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div className="max-w-site mx-auto">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p variants={item} className="eyebrow mb-6">
            Dwayne Brown, Jr. — Solutions Engineer &amp; Technical Account Manager ·{' '}
            <button
              onClick={() => scrollTo('handoff')}
              className="underline decoration-accent/40 underline-offset-2 hover:decoration-accent transition-colors"
            >
              Founder, Handoff
            </button>
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] mb-7"
          >
            Software that <span className="text-accent">feels</span> as good
            as it works.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-ink-secondary max-w-xl leading-relaxed mb-10"
          >
            8+ years making complex technology make sense to customers —
            backed by SaaS, iOS, and AI products I designed, built, and
            shipped myself.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <button onClick={() => scrollTo('projects')} className="btn-primary px-7 py-3.5">
              See the work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
              </svg>
            </button>
            <button onClick={onStartProject} className="btn-ghost px-7 py-3.5">
              Start a project
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
