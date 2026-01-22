import React from 'react'
import { SpineNode } from '/src/pages/Timeline'
import timelineDetails from '/src/assets/timeline/timelineDetails.svg'

const RightTimeline = ({ timelinestep, timelinetitle, status, isoDate }) => {
  return (
    <div className="mb-16 md:mb-20 flex justify-between items-center w-full right-timeline" role="listitem">
      <div className="order-1 w-5/12"></div>
      
      {/* Center spine node */}
      <div className="order-1">
        <SpineNode step={timelinestep} status={status} isoDate={isoDate} />
      </div>
      
      {/* Card with content */}
      <div className="order-1 w-5/12">
        {/* Title with yellow bar background */}
        <div className="relative w-full max-w-xl">
          <img 
            src={timelineDetails} 
            alt="" 
            className="absolute inset-0 w-full h-full object-fill"
            aria-hidden="true"
          />
          <h3 className="relative z-10 px-8 py-4 text-base md:text-lg font-bold text-red-700 text-center">
            {timelinetitle}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default RightTimeline