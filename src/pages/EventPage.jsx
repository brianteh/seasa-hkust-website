import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import EventCard from '@/components/EventCard.jsx'
import SEO from '@/components/SEO.jsx'
import BackgroundBlob from '@/components/BackgroundBlob.jsx'
import { EventListSchema, WebPageSchema } from '@/components/StructuredData.jsx'
import { events2025, events2024 } from '@/data/events.js'
import { SITE } from '@/data/site.js'

const EVENTS_TITLE = 'Events | SEASA HKUST'
const EVENTS_DESCRIPTION =
  'Discover upcoming events organized by SEASA at HKUST. Join us for cultural celebrations, networking opportunities, and community building activities.'
const EVENTS_URL = `${SITE.baseUrl}/events`

const EventYearSection = ({ year, tagline, events, sectionRef }) => (
  <section className="max-w-6xl mx-auto px-8 relative" id={year} ref={sectionRef}>
    <header className="flex justify-center">
      <div className="text-center md:max-w-xl lg:max-w-3xl">
        <h2 className="text-6xl font-semibold">{year} Events</h2>
        <p className="mt-6 text-2xl">{tagline}</p>
      </div>
    </header>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-8 gap-8">
      {events.map((event) => (
        <EventCard
          key={event.id}
          eventimage={event.image}
          eventname={event.name}
          eventdesc={event.description}
          event_link={event.link}
          eventDate={event.date}
          location={event.location}
          time={event.time}
        />
      ))}
    </div>
  </section>
)

EventYearSection.propTypes = {
  year: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  sectionRef: PropTypes.object,
}

export const EventPage = () => {
  const section2025Ref = useRef(null)

  useEffect(() => {
    // If there's no hash in the URL, scroll to the 2025 section.
    if (!window.location.hash) {
      section2025Ref.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <main className="relative isolate min-h-screen">
      <SEO
        title={EVENTS_TITLE}
        description={EVENTS_DESCRIPTION}
        keywords="SEASA events, HKUST events, Southeast Asian events, cultural events, student activities, HKUST"
        type="website"
      />
      <WebPageSchema title={EVENTS_TITLE} description={EVENTS_DESCRIPTION} url={EVENTS_URL} />
      <EventListSchema name="SEASA Events" events={[...events2025, ...events2024]} />

      <BackgroundBlob position="top" />
      <BackgroundBlob position="bottom" />

      <article className="py-12">
        <EventYearSection year="2025" tagline="Happiness prevails this year." events={events2025} sectionRef={section2025Ref} />
        <EventYearSection year="2024" tagline="Best year ever!" events={events2024} />
      </article>
    </main>
  )
}

export default EventPage
