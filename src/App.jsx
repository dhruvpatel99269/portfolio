import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Try from './components/Try'
import { BackgroundBeams } from './components/ui/background-beams'

function App() {

  return (
    <>
      <main className="max-w-7xl mx-auto relative antialiased">
        <div className='relative z-10'>
          <Navbar />
          <Hero />
          <About />          
          <Try />          
        </div>
        <BackgroundBeams className="fixed" />

      </main>
    </>
  )
}

export default App
