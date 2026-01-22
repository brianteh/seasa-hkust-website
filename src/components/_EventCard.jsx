import React from "react";
import EventCardSVG from "../assets/events/event_card.svg";

const Card = ({ eventimage, eventname, eventdesc, event_link, eventDate, location, time }) => {
  return (
    <div className="relative w-full max-w-[495px] h-auto min-h-[400px] sm:h-[479px] m-2 sm:m-4 overflow-hidden rounded-2xl">
      <img 
        src={EventCardSVG} 
        className="w-full h-full object-cover"
        alt=""
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col" style={{ zIndex: 1 }}>
        <div
          onClick={() => window.open(event_link, "_blank")}
          className="cursor-pointer flex-shrink-0 flex justify-center items-center pt-4 sm:pt-6 px-2 sm:px-0"
        >
          <img
            className="w-[90%] h-40 sm:h-56 object-cover rounded-lg shadow transition-transform duration-300 transform hover:scale-105"
            src={eventimage}
            alt={`${eventname} event banner`}
            loading="lazy"
          />
        </div>
        <div className="px-4 sm:px-8 py-3 sm:py-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg sm:text-xl mb-1 sm:mb-2 text-center font-extrabold text-white [-webkit-text-stroke:1px_theme(colors.red.700)]">{eventname}</h3>
            <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 text-center text-white">{eventdesc}</p>
            {(eventDate || location || time) && (
              <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                {eventDate && (
                  <div className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{eventDate}</span>
                    {time && <span className="ml-2">• {time}</span>}
                  </div>
                )}
                {location && (
                  <div className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{location}</span>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="mt-3 sm:mt-5 flex justify-center pb-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(event_link, "_blank");
              }}
              className="relative rounded-md text-black border-black py-1.5 sm:py-2 px-4 sm:px-6 hover:bg-white border-solid border-2 hover:border-black hover:text-black duration-300 cursor-pointer transform hover:-translate-y-0.5 sm:hover:-translate-y-1 transition-all shadow hover:shadow-md sm:shadow-lg hover:shadow-yellow-200/30 animate-pulse hover:animate-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm sm:text-base text-white border-white"
              aria-label={`Learn more about ${eventname}`}
            >
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;