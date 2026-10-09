import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'
import Footer from './Components/Footer.jsx'

const App = () => (
  <>
    <Navbar />
    <main id="top">
      <Hero />
      <About />
      <Services />
    </main>
    <Footer />
  </>
)

export default App