import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Handoff from './components/Handoff'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import IntakeModal from './components/IntakeModal'

export default function App() {
  const [intakeOpen, setIntakeOpen] = useState(false)

  return (
    <div className="bg-paper text-ink min-h-screen font-sans antialiased overflow-x-hidden">
      <Navbar onStartProject={() => setIntakeOpen(true)} />
      <main>
        <Hero onStartProject={() => setIntakeOpen(true)} />
        <Projects />
        <Handoff onStartProject={() => setIntakeOpen(true)} />
        <About />
        <Contact />
      </main>
      <Footer />
      <IntakeModal open={intakeOpen} onClose={() => setIntakeOpen(false)} />
    </div>
  )
}
