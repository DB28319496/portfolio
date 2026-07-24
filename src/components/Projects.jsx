import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Projects() {
  const [flagship, ...rest] = projects

  return (
    <section id="projects" className="px-6 pb-28 scroll-mt-24">
      <div className="max-w-site mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="flex items-end justify-between border-t border-line pt-10 mb-12"
        >
          <div>
            <motion.p variants={fadeUp} className="eyebrow mb-3">
              Selected work
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Built end-to-end. Shipped to production.
            </motion.h2>
          </div>
          <motion.span variants={fadeUp} className="hidden sm:block font-mono text-xs text-ink-muted pb-1">
            {String(projects.length).padStart(2, '0')} projects
          </motion.span>
        </motion.div>

        <div className="mb-8">
          <ProjectCard project={flagship} flagship />
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
