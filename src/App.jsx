import '/src/App.css'
import Navbar from '/src/components/Navbar'
import Hero from '/src/pages/Hero'
import Event from '/src/pages/Event'
import Footer from '/src/components/Footer'
import About from '/src/pages/About'
import Exco from '/src/pages/Exco'
import Timeline from '/src/pages/Timeline'
import Merch from '/src/pages/Merch'
import Merch2 from'/src/pages/Merch2'
import EventPage from '/src/pages/EventPage'
import CurrentEvent from '/src/pages/CurrentEvent'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'

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
            <CurrentEvent/>
            <Event />
            <Merch />
            <Merch2 />
            <Exco />
            <Timeline />
            <Contact />
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
