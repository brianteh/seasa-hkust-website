import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Event from './pages/Event'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import About from './pages/About'
import Exco from './pages/Exco'
import Timeline from './pages/Timeline'
import Merch from './pages/Merch'
import Merch2 from'../pages/Mech2'

function App() {
  return (
    <>
    
      <Navbar />
      <Hero />
      <About />
      <Event />
      <Merch />
      <Merch2 />
      <Exco />
      <Timeline />
      <Contact />
      <Footer />
    </>
  )
}

export default App
