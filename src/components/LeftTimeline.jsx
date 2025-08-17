import React from 'react'

const LeftTimeline = ({ timelinedate, timelineimage, timelinetitle, timelinedesc }) => {
  return (
    <div className="mb-16 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      
      {/* Circle indicator for timeline */}
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-6 h-6 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">•</h1>
      </div>
      
      {/* Card with content */}
      <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-3 py-3 md:px-6 md:py-4 relative">
        {/* Date badge - adjusted positioning for mobile */}
        {timelinedate && (
          <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 z-30">
            <div className="bg-indigo-600 text-white px-3 py-1 md:px-5 md:py-2 rounded-full font-bold text-xs md:text-base shadow-lg whitespace-nowrap">
              {timelinedate}
            </div>
          </div>
        )}
        
        <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
          <img src={timelineimage} className="w-full md:w-1/3 rounded object-cover object-center" />
          <div>
            <h3 className="mb-1 md:mb-3 font-bold text-gray-800 text-base md:text-xl">{timelinetitle}</h3>
            <p className="text-sm md:text-base leading-snug tracking-wide text-gray-600 text-opacity-100">{timelinedesc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftTimeline