import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import '@/App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Navbar from '@/components/Navbar.jsx'
import Footer from '@/components/Footer.jsx'
import SEO from '@/components/SEO.jsx'
import { OrganizationSchema, WebPageSchema } from '@/components/StructuredData.jsx'
import { DEFAULT_SEO, SITE } from '@/data/site.js'

import Hero from '@/pages/Hero.jsx'
import About from '@/pages/About.jsx'
import CurrentEvent from '@/pages/CurrentEvent.jsx'
import Event from '@/pages/Event.jsx'
import Merch from '@/pages/Merch.jsx'
import Exco from '@/pages/Exco.jsx'
import Timeline from '@/pages/Timeline.jsx'
import Contact from '@/pages/Contact.jsx'
import EventPage from '@/pages/EventPage.jsx'

function App() {
  return (
    <HelmetProvider>
      <OrganizationSchema />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SEO
                  title={DEFAULT_SEO.title}
                  description={DEFAULT_SEO.description}
                />
                <WebPageSchema
                  title={DEFAULT_SEO.title}
                  description={DEFAULT_SEO.description}
                  url={SITE.baseUrl + '/'}
                />
                <Navbar />
                <Hero />
                <About />
                <CurrentEvent />
                <Event />
                <Merch />
                <Exco />
                <Timeline />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/events" element={<EventPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
