// Project order = display order. First project renders as the full-width flagship card.
// Projects without a live link get the "Private build" cover treatment.
export const projects = [
  {
    id: 1,
    name: 'Switchboard',
    tagline: 'AI front desk for local service businesses',
    description:
      'The flagship product from Handoff, my AI implementation practice — a done-for-you 24/7 AI receptionist for appointment-based businesses. This marketing and lead-capture site pairs an animated live dispatch board and missed-revenue ROI calculator with one job: convert visitors into free missed-call audit requests.',
    tech: ['Astro 5', 'TypeScript', 'Tailwind CSS 4', 'Resend', 'Netlify'],
    links: { live: 'https://getswitchboardhq.com', github: '' },
    accent: '#b45309',
    category: 'Marketing Site',
  },
  {
    id: 2,
    name: 'Cadence',
    tagline: 'Client onboarding pipelines that close deals',
    description:
      'A full-stack SaaS platform for service businesses to manage client onboarding from lead capture to project kickoff — drag-and-drop Kanban pipeline, automated email sequences, branded client portals, and conversion analytics.',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'Turso', 'Tailwind CSS'],
    links: { live: 'https://cadence-hq.netlify.app/demo', github: '' },
    screenshot: '/screenshots/onboardflow.png',
    accent: '#ea580c',
    category: 'SaaS Platform',
  },
  {
    id: 3,
    name: 'Flourish Finance',
    tagline: 'AI-powered personal finance for iOS & macOS',
    description:
      'A premium personal finance app for Apple platforms — automatic bank syncing via Plaid, an AI financial coach powered by Claude, net worth tracking, debt payoff planning, and a household mode for couples.',
    tech: ['Swift', 'SwiftUI', 'Firebase', 'Plaid API', 'Claude API'],
    links: { live: 'https://flourishfinance.netlify.app', github: '' },
    screenshot: '/screenshots/flourish.png',
    accent: '#16a34a',
    category: 'iOS / macOS App',
  },
  {
    id: 4,
    name: 'Cadence Landing',
    tagline: 'High-converting SaaS marketing site',
    description:
      'The marketing site for Cadence — scroll-driven animations, an interactive product demo, competitor comparison, tiered pricing, and social proof. Built to convert visitors into beta signups.',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: { live: 'https://getcadence.netlify.app', github: '' },
    accent: '#d97706',
    category: 'Marketing Site',
  },
  {
    id: 5,
    name: 'Samantha — Consultant Portfolio',
    tagline: 'Portfolio site with a built-in visual CMS',
    description:
      'A portfolio for a business systems consultant with a fully custom in-browser CMS — admins edit text, images, colors, and layouts directly on the live site, with live/draft publishing and undo/redo.',
    tech: ['React 19', 'Vite', 'Supabase'],
    links: { live: 'https://bysamanthabrown.netlify.app', github: '' },
    accent: '#0891b2',
    category: 'Portfolio / CMS',
  },
  {
    id: 6,
    name: 'Photo Portfolio',
    tagline: 'Photography showcase with inline admin editing',
    description:
      'A responsive photography portfolio with masonry grid, category filtering, lightbox viewing, and a full admin system — drag-and-drop reordering, inline metadata editing, and uploads, all backed by Supabase.',
    tech: ['React 19', 'Vite', 'Supabase', 'Framer Motion'],
    links: { live: 'https://oneframeandgrain.netlify.app', github: '' },
    screenshot: '/screenshots/photo-portfolio.png',
    accent: '#be185d',
    category: 'Photography',
  },
]

// The parent brand for the consulting/building practice. The portfolio serves
// recruiters; Handoff serves business owners — two doors, one person.
// Set `url` once the Handoff domain is bought; links render only when it's set.
export const handoff = {
  name: 'Handoff',
  tagline: 'The work that shouldn’t need you.',
  url: '', // e.g. 'https://handoff.example' — leave empty until the domain exists
}

export const skills = [
  { category: 'Frontend', items: 'React, Next.js, TypeScript, Swift / SwiftUI, Tailwind CSS, Astro, Framer Motion' },
  { category: 'Backend', items: 'Node.js, Python, Prisma, Express, Firebase, Supabase' },
  { category: 'AI & APIs', items: 'Claude API, OpenAI, Plaid API, Resend' },
  { category: 'Data', items: 'PostgreSQL, SQLite, Turso, Firestore' },
  { category: 'Infra', items: 'Netlify, Vercel, Docker, Vite, Vitest, Xcode' },
]
