import PropTypes from 'prop-types'

const CalendarIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const MapPinIcon = () => (
  <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const EventMeta = ({ date, location, time, centered = false }) => {
  if (!date && !location && !time) return null

  const containerClass = centered
    ? 'mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600'
    : 'mt-4 space-y-2 text-sm text-gray-600'

  return (
    <div className={containerClass}>
      {date && (
        <div className={`flex items-center${centered ? ' justify-center' : ''}`}>
          <CalendarIcon />
          <span>{date}</span>
          {time && <span className="ml-2">• {time}</span>}
        </div>
      )}
      {location && (
        <div className={centered ? 'flex items-center justify-center' : 'flex items-start'}>
          <MapPinIcon />
          <span>{location}</span>
        </div>
      )}
    </div>
  )
}

EventMeta.propTypes = {
  date: PropTypes.string,
  location: PropTypes.string,
  time: PropTypes.string,
  centered: PropTypes.bool,
}

export default EventMeta
