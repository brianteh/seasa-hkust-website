import { HelmetProvider } from 'react-helmet-async';
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
import _Merch from'/src/pages/_Merch'
import EventPage from '/src/pages/EventPage'
import CurrentEvent from '/src/pages/CurrentEvent'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import SEO from './components/SEO'
import { OrganizationSchema } from './components/StructuredData'

function App() {
  return (
    <HelmetProvider>
      <OrganizationSchema />
      <Router>
        <Routes>
        <Route path="/" element={
          //Main page
          <>
            <SEO 
              title="SEASA - Southeast Asian Student Association"
              description="Join the Southeast Asian Student Association to celebrate and share the rich cultures of Southeast Asia through various events and activities."
            />
            <Navbar />
            <Hero />
            <About />
            <CurrentEvent/>
            <Event />
            <Merch />
            <Merch2 />
            <_Merch />
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
    </HelmetProvider>
  )
}

export default App
