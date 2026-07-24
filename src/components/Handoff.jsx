import { motion } from 'framer-motion'

const HANDOFF_URL = 'https://handoff-report.netlify.app/'

function ArrowUpRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Handoff({ onStartProject }) {
  return (
    <section id="handoff" className="px-6 pb-28 scroll-mt-24">
      <div className="max-w-site mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
          className="relative overflow-hidden rounded-2xl bg-ink text-paper px-7 py-12 sm:px-12 sm:py-16"
        >
          {/* soft accent glow, top-right */}
          <div
            className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full opacity-60"
            style={{ background: 'radial-gradient(circle, rgba(224,78,16,0.35) 0%, transparent 70%)' }}
          />

          <div className="relative grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-3">
              <motion.p variants={fadeUp} className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent mb-5">
                The practice
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
                Handoff — hand off the work that shouldn&apos;t need you.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-paper/70 leading-relaxed max-w-xl">
                I help owners and small teams put the right tools in place and dial them
                in, so the repetitive work runs itself — and you get your time back for
                what actually matters, whether that&apos;s the business or yourself.
                Switchboard, which answers every call and books the job around the clock,
                is its flagship.
              </motion.p>
            </div>

            <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
              <motion.a
                variants={fadeUp}
                href={HANDOFF_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-paper text-ink font-semibold text-sm px-7 py-3.5 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-paper"
              >
                Visit Handoff <ArrowUpRight />
              </motion.a>
              <motion.button
                variants={fadeUp}
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/25 text-paper font-semibold text-sm px-7 py-3.5 transition-colors duration-200 hover:border-paper/60 hover:bg-paper/5"
              >
                Start a project
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
