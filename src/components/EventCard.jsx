import PropTypes from 'prop-types'
import EventMeta from '@/components/EventMeta.jsx'
import * as images from '@/assets/images.js'

const moreDetailsClass =
  'relative rounded-md text-black border-black py-2 px-6 hover:bg-white border-solid border-2 hover:border-black hover:text-black duration-300 cursor-pointer transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl hover:shadow-yellow-200/30 animate-pulse hover:animate-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'

const EventCard = ({ eventimage, eventname, eventdesc, event_link, eventDate, location, time, variant = 'plain' }) => {
  if (variant === 'styled') {
    return (
      <div className="relative w-full max-w-[495px] min-h-[400px] sm:min-h-[479px] m-2 sm:m-4 overflow-hidden rounded-2xl">
        <img src={images.eventCard} className="absolute inset-0 w-full h-full object-fill" alt="" aria-hidden="true" />
        <div className="relative flex h-full flex-col">
          <a
            href={event_link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex-shrink-0 flex justify-center items-center pt-4 sm:pt-6 px-2 sm:px-0"
          >
            <img
              className="w-[90%] h-40 sm:h-56 object-cover rounded-lg shadow transition-transform duration-300 transform hover:scale-105"
              src={eventimage}
              alt={`${eventname} event banner`}
              loading="lazy"
            />
          </a>
          <div className="px-4 sm:px-8 py-3 sm:py-4 flex flex-1 flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl mb-1 sm:mb-2 text-center font-extrabold text-white [-webkit-text-stroke:1px_theme(colors.red.700)]">{eventname}</h3>
              <p className="text-gray-700 text-base sm:text-lg mb-3 sm:mb-4 text-center text-white">{eventdesc}</p>
              <EventMeta date={eventDate} location={location} time={time} centered />
            </div>
            <div className="mt-3 sm:mt-5 flex justify-center pb-2">
              <a
                href={event_link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${moreDetailsClass} py-1.5 sm:py-2 px-4 sm:px-6 hover:-translate-y-0.5 sm:hover:-translate-y-1 shadow hover:shadow-md sm:shadow-lg text-base sm:text-lg text-white border-white`}
                aria-label={`Learn more about ${eventname}`}
              >
                More Details
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <article className="max-w-md overflow-hidden m-4 grid grid-cols-1 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <a href={event_link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
        <img
          className="w-full transition-transform duration-300 transform hover:scale-105 object-cover h-60"
          src={eventimage}
          alt={`${eventname} event banner`}
          loading="lazy"
        />
      </a>
      <div className="px-6 py-4">
        <h3 className="font-semibold text-xl mb-2 text-center">{eventname}</h3>
        <p className="text-gray-700 text-base mb-4">{eventdesc}</p>
        <EventMeta date={eventDate} location={location} time={time} />
        <div className="mt-5 flex justify-center pb-2">
          <a
            href={event_link}
            target="_blank"
            rel="noopener noreferrer"
            className={moreDetailsClass}
            aria-label={`Learn more about ${eventname}`}
          >
            More Details
          </a>
        </div>
      </div>
    </article>
  )
}

EventCard.propTypes = {
  eventimage: PropTypes.string.isRequired,
  eventname: PropTypes.string.isRequired,
  eventdesc: PropTypes.string.isRequired,
  event_link: PropTypes.string.isRequired,
  eventDate: PropTypes.string,
  location: PropTypes.string,
  time: PropTypes.string,
  variant: PropTypes.oneOf(['plain', 'styled']),
}

export default EventCard
