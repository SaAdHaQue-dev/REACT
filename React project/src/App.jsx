import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  const [showLoader, setShowLoader] = useState(true)
  const [loaderExiting, setLoaderExiting] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const exitDelay = reducedMotion ? 150 : 1550
    const exitDuration = reducedMotion ? 150 : 700
    const exitTimer = window.setTimeout(() => setLoaderExiting(true), exitDelay)
    const removeTimer = window.setTimeout(
      () => setShowLoader(false),
      exitDelay + exitDuration,
    )

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  useEffect(() => {
    const updateScrollDepth = () => {
      const doc = document.documentElement
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1)
      const progress = Math.min(window.scrollY / maxScroll, 1)

      doc.style.setProperty('--scroll-progress', progress.toFixed(4))
      doc.style.setProperty('--scroll-tilt', `${(progress - 0.5) * 12}deg`)
      doc.style.setProperty('--scroll-lift', `${progress * 30}px`)
    }

    updateScrollDepth()
    window.addEventListener('scroll', updateScrollDepth, { passive: true })
    window.addEventListener('resize', updateScrollDepth)

    return () => {
      window.removeEventListener('scroll', updateScrollDepth)
      window.removeEventListener('resize', updateScrollDepth)
    }
  }, [])

  return (
    <>
      <div aria-hidden={showLoader || undefined}>
        <Navbar />
        <main id="top" className="page-shell">
          <Hero />
          <About />
          <Services />
        </main>
        <Footer />
      </div>
      {showLoader && (
        <div
          className={`entry-loader${loaderExiting ? ' entry-loader--exit' : ''}`}
          role="status"
          aria-label="Loading MORPH AI"
        >
          <span className="entry-loader__eyebrow">INTELLIGENT SYSTEMS, MADE PRACTICAL</span>
          <div className="entry-loader__center">
            <span className="entry-loader__mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="entry-loader__wordmark">MORPH <span>AI</span></span>
          </div>
          <div className="entry-loader__footer" aria-hidden="true">
            <span>BUILDING WHAT'S NEXT</span>
            <span className="entry-loader__track"><span /></span>
            <span>01 — 04</span>
          </div>
        </div>
      )}
    </>
  )
}

export default App