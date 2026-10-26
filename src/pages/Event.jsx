import { useNavigate } from 'react-router-dom'

import EventCard from '@/components/EventCard.jsx'
import { featuredEvents } from '@/data/events.js'

const Event = () => {
  const navigate = useNavigate()

  return (
    <div className="relative py-16">
      <div className="flex justify-center">
        <div className="text-center md:max-w-xl lg:max-w-3xl">
          <h2 className="mt-6 px-6 lg:text-4xl font-semibold Macondo text-[#4D2A17]">——————Past Events——————</h2>
          <br />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-5 gap-8 justify-center justify-items-center">
        {featuredEvents.map((event) => (
          <EventCard
            key={event.id}
            variant="styled"
            eventimage={event.image}
            eventname={event.name}
            eventdesc={event.description}
            event_link={event.link}
          />
        ))}
      </div>

      {/* Learn more button => links to /events */}
      <div className="mt-5 flex items-center justify-center gap-x-6 pb-4">
        <button
          onClick={() => navigate('/events')}
          className="Macondo text-[#4D2A17] rounded-md text-black border-[#4D2A17] py-2 px-6 hover:bg-white border-solid border-2 hover:border-black hover:text-black duration-300 cursor-pointer transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl hover:shadow-yellow-200/30 animate-pulse hover:animate-none"
        >
          Past Events Catalogue <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}

export default Event
