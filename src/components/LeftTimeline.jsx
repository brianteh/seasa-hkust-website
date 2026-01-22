import React from 'react'
import { SpineNode } from '/src/pages/Timeline'
import leftTimelineDetails from '/src/assets/timeline/leftTimelineDetails.svg'

const LeftTimeline = ({ timelinestep, timelinetitle, status, isoDate }) => {
  return (
    <div className="mb-16 md:mb-20 flex justify-between items-center w-full left-timeline" role="listitem">
      {/* Card with content */}
      <div className="order-1 w-5/12 flex flex-col items-end">
        {/* Title with yellow bar background */}
        <div className="relative w-full max-w-xl">
          <img 
            src={leftTimelineDetails} 
            alt="" 
            className="absolute inset-0 w-full h-full object-fill"
            aria-hidden="true"
          />
          <h3 className="relative z-10 px-8 py-4 text-base md:text-lg font-bold text-red-700 text-center">
            {timelinetitle}
          </h3>
        </div>
      </div>
      
      {/* Center spine node */}
      <div className="order-1">
        <SpineNode step={timelinestep} status={status} isoDate={isoDate} />
      </div>
      
      <div className="order-1 w-5/12"></div>
    </div>
  )
}

export default LeftTimeline