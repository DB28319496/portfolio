import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Scroll-driven text highlight: each word fills from muted → ink as the
// section passes through the viewport; emphasis words land in the accent.
const STATEMENT =
  'I make complex technology make sense to the people who use it — and build the tools that give teams their time back.'

const MUTED = '#d6d0c8'
const INK = '#191714'
const ACCENT = '#e04e10'

const words = STATEMENT.split(' ')
// indices to land in accent instead of ink ("make sense" / "time back.")
const EMPHASIS = new Set([4, 5, 21, 22])

function Word({ word, index, total, progress, accent }) {
  const start = index / total
  const end = start + 1 / total
  const color = useTransform(progress, [start, end], [MUTED, accent ? ACCENT : INK])
  return (
    <motion.span style={{ color }} className="transition-colors">
      {word}
      {index < total - 1 ? ' ' : ''}
    </motion.span>
  )
}

export default function Statement() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.82', 'end 0.5'],
  })

  return (
    <section ref={ref} className="px-6 py-32 sm:py-40 border-t border-line">
      <div className="max-w-4xl mx-auto">
        <p className="eyebrow mb-8">What I do</p>
        <p className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.15]">
          {words.map((w, i) => (
            <Word
              key={i}
              word={w}
              index={i}
              total={words.length}
              progress={scrollYProgress}
              accent={EMPHASIS.has(i)}
            />
          ))}
        </p>
      </div>
    </section>
  )
}
