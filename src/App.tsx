import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Heritage from './components/Heritage'
import Tailoring from './components/Tailoring'
import Process from './components/Process'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Heritage />
        <Tailoring />
        <Process />
        <Gallery />
        <Statistics />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
