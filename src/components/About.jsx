import { motion } from 'framer-motion'
import { skills } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-line bg-paper-raised">
      <div className="max-w-site mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="eyebrow mb-4">
              About
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-7"
            >
              Build it. Then explain it.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-ink-secondary leading-relaxed mb-4">
              I&apos;ve spent 8+ years as the person customers reach when the technology
              gets complicated — SaaS onboarding and implementation at Ezoic, technical
              escalations and service leadership at Tesla. Solving the problem is half
              the job; making the answer land is the other half.
            </motion.p>
            <motion.p variants={fadeUp} className="text-ink-secondary leading-relaxed mb-4">
              I also build the software — and take that work on for clients. Marketing
              sites and portfolios, production-grade SaaS platforms in Next.js, native
              Apple apps in SwiftUI, and real AI integration with the Claude and OpenAI
              APIs — designed, built, and shipped end-to-end. It&apos;s also why a demo
              doesn&apos;t have to stay at the surface: I can go as deep as the question does.
            </motion.p>
            <motion.p variants={fadeUp} className="text-ink-secondary leading-relaxed">
              That builder&apos;s side has a name: <strong className="text-ink font-semibold">Handoff</strong> —
              I help owners and small teams put the right tools in place and dial them in,
              so the repetitive work runs itself and they get their time back. Switchboard,
              which answers every call and books the job 24/7, is its flagship product.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted mb-5">
              Toolkit
            </motion.p>
            <div className="divide-y divide-line border-y border-line">
              {skills.map((group) => (
                <motion.div key={group.category} variants={fadeUp} className="py-4 grid grid-cols-[110px_1fr] gap-4 items-baseline">
                  <span className="font-mono text-xs font-medium text-ink">{group.category}</span>
                  <span className="text-sm text-ink-secondary leading-relaxed">{group.items}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
