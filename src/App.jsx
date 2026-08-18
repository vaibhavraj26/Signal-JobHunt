import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroDashboard from './components/HeroDashboard'
import NoiseReduction from './components/NoiseReduction'
import MatchIntelligence from './components/MatchIntelligence'
import ApplicationTracker from './components/ApplicationTracker'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    let typed = ''
    const onKeyDown = (event) => {
      if (
        event.target instanceof HTMLElement &&
        ['INPUT', 'TEXTAREA'].includes(event.target.tagName)
      ) {
        return
      }
      
      typed = `${typed}${event.key.toUpperCase()}`.slice(-6)
      
      if (typed === 'SIGNAL') {
        setPulse(true)
        window.setTimeout(() => setPulse(false), 1800)
      }
    }
    
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <Navbar pulse={pulse} />
      <main>
        <HeroDashboard />
        <NoiseReduction />
        <MatchIntelligence />
        <ApplicationTracker />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
