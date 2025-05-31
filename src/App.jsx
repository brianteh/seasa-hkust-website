import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Event from './pages/Event'
import Footer from './components/Footer'
import About from './pages/About'
import Exco from './pages/Exco'
import Timeline from './pages/Timeline'
import Merch from './pages/Merch'
import Merch2 from'./pages/Merch2'
import EventPage from './pages/EventPage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={
          //Main page
          <>
            <Navbar />
            <Hero />
            <About />
            <Event />
            <Merch />
            <Merch2 />
            <Exco />
            <Timeline />
            <Footer /> 
          </>
        }/>
        <Route path="/events" element={
          //Event Page
          <EventPage/>
        }/>
        </Routes>
      </Router>
    </>
  )
}

export default App
