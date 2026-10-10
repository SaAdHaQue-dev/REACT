import { useEffect } from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
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
      <Navbar />
      <main id="top" className="page-shell">
        <Hero />
        <About />
        <Services />
      </main>
      <Footer />
    </>
  )
}

export default App