import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Experience from '../components/Sections/Experience'
import Projects from '../components/Sections/Projects'
import Skills from '../components/Sections/Skills'
import Testimonials from '../components/Sections/Testimonials'
import Contact from '../components/Sections/Contact'

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  )
}

export default Home

