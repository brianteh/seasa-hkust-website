
const Card = ({ eventimage, eventname, eventdesc, event_link, eventDate, location, time }) => {
  return (
    <article className="max-w-md overflow-hidden m-4 grid grid-cols-1 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <div onClick={() => window.open(event_link, "_blank")} className="cursor-pointer">
        <img 
          className="w-full transition-transform duration-300 transform hover:scale-105 object-cover h-60" 
          src={eventimage} 
          alt={`${eventname} event banner`}
          loading="lazy"
        />
      </div>
      <div className="px-6 py-4">
        <h3 className="font-semibold text-xl mb-2 text-center">{eventname}</h3>
        <p className="text-gray-700 text-base mb-4">
          {eventdesc}
        </p>
        
        {(eventDate || location || time) && (
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            {eventDate && (
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{eventDate}</span>
                {time && <span className="ml-2">• {time}</span>}
              </div>
            )}
            {location && (
              <div className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{location}</span>
              </div>
            )}
          </div>
        )}
        
        <div className="mt-5 flex justify-center pb-2">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              window.open(event_link, "_blank");
            }} 
            className="relative rounded-md text-black border-black py-2 px-6 hover:bg-white border-solid border-2 hover:border-black hover:text-black duration-300 cursor-pointer transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl hover:shadow-yellow-200/30 animate-pulse hover:animate-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label={`Learn more about ${eventname}`}
          >
            More Details
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card