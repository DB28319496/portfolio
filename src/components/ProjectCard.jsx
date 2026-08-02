import { useState } from 'react'
import { motion } from 'framer-motion'

function ArrowUpRight({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

// Editorial cover for private builds (no public URL): tinted panel + oversized wordmark.
function Cover({ project }) {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ background: `linear-gradient(150deg, ${project.accent}0f 0%, ${project.accent}05 60%)` }}
    >
      <span className="absolute top-4 left-5 font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: project.accent }}>
        {project.category}
      </span>
      <span className="absolute top-4 right-5 font-mono text-[10px] uppercase tracking-[0.16em] px-2 py-1 rounded-full border bg-paper/70"
        style={{ color: project.accent, borderColor: `${project.accent}30` }}
      >
        Private build
      </span>
      <p
        className="absolute -bottom-3 left-4 font-display font-semibold tracking-tight leading-none select-none whitespace-nowrap"
        style={{ color: project.accent, opacity: 0.22, fontSize: 'clamp(3.5rem, 9vw, 6.5rem)' }}
      >
        {project.name}
      </p>
    </div>
  )
}

function Screenshot({ url, staticSrc, name, accent }) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)
  const src = staticSrc || `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`

  if (errored) {
    return (
      <div className="w-full h-full flex items-center justify-center" style={{ background: `${accent}0a` }}>
        <p className="font-display text-2xl font-semibold opacity-25 tracking-tight" style={{ color: accent }}>
          {name}
        </p>
      </div>
    )
  }

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: `${accent}08` }}>
          <div className="w-6 h-6 rounded-full border-2 animate-spin" style={{ borderColor: `${accent}30`, borderTopColor: accent }} />
        </div>
      )}
      <img
        src={src}
        alt={`${name} screenshot`}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        className={`w-full h-full object-cover object-top transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  )
}

export default function ProjectCard({ project, index = 0, flagship = false }) {
  const hasLive = Boolean(project.links.live)

  const imageInner = hasLive ? (
    <Screenshot url={project.links.live} staticSrc={project.screenshot} name={project.name} accent={project.accent} />
  ) : (
    <Cover project={project} />
  )

  // overflow-hidden clips pseudo-elements, so the glow lives on a wrapper and
  // the lift moves with it (see .glow-ring in index.css).
  const frameClass =
    'relative w-full overflow-hidden rounded-xl border border-line bg-paper-raised transition-colors duration-300 ' +
    'group-hover:border-line-strong'

  const body = (
    <>
      <div className="flex items-baseline justify-between gap-4 mt-5 mb-1.5">
        <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted shrink-0">
          {project.category}
        </span>
      </div>
      <p className="text-sm text-ink-secondary leading-relaxed mb-4 max-w-xl">
        {project.description}
      </p>
      <div className="flex flex-wrap items-center gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
        {hasLive && (
          <span className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-accent ml-2">
            Live site <ArrowUpRight size={11} />
          </span>
        )}
      </div>
    </>
  )

  const card = flagship ? (
    <div className="glow-ring grid lg:grid-cols-5 gap-6 lg:gap-10 items-center rounded-2xl border border-line bg-paper-raised p-5 sm:p-7 transition-colors duration-300 group-hover:border-line-strong">
      <div className="lg:col-span-3">
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl border border-line">
          {imageInner}
        </div>
      </div>
      <div className="lg:col-span-2">
        <p className="eyebrow mb-3">Flagship</p>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-2 group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <p className="text-[15px] font-medium text-ink mb-3">{project.tagline}</p>
        <p className="text-sm text-ink-secondary leading-relaxed mb-5">{project.description}</p>
        <div className="flex flex-wrap items-center gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        {hasLive && (
          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-accent mt-5">
            Open live site <ArrowUpRight />
          </span>
        )}
      </div>
    </div>
  ) : (
    <div>
      <div className="glow-ring rounded-xl transition-transform duration-300 group-hover:-translate-y-1">
        <div className={`${frameClass} aspect-[16/10]`}>{imageInner}</div>
      </div>
      {body}
    </div>
  )

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group"
      style={{ '--glow-color': project.accent }}
    >
      {hasLive ? (
        <a href={project.links.live} target="_blank" rel="noreferrer" className="block">
          {card}
        </a>
      ) : (
        card
      )}
    </motion.article>
  )
}
