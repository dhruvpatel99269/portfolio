"use client"
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SlideShow from './components/SlideShow'
import { BackgroundBeams } from './components/ui/background-beams'

function App() {

  return (
    <>
      <main className="max-w-7xl mx-auto relative antialiased">
        <div className='relative z-10'>
          <Navbar />
          <Hero />
          <About />       
          <Projects />               
          <SlideShow />            
          <Footer />
        </div>        
        <BackgroundBeams className="fixed" />
      </main>
    </>
  )
}

export default App
