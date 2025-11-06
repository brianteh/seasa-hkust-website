import React from 'react'
import { SpineNode, computeSpineMode } from '/src/pages/Timeline'

const RightTimeline = ({ timelinestep, timelineimage, timelinetitle, timelinedesc, timelinestatus, statusClass, icon, isoDate, spineMode }) => {
  const computedMode = computeSpineMode({ status: timelinestatus, spineMode });
  
  return (
    <div className="mb-16 md:mb-20 flex justify-between items-center w-full right-timeline" role="listitem">
      <div className="order-1 w-5/12"></div>
      
      {/* Center spine node */}
      <div className="order-1">
        <SpineNode
          mode={computedMode}
          dateStr={isoDate}
          step={timelinestep}
        />
      </div>
      
      {/* Card with content */}
      <div className="order-1 bg-white rounded-xl shadow-lg w-5/12 px-3 py-3 md:px-6 md:py-5 relative">
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-start md:items-center">
          {/* image or icon */}
          {icon ? (
            <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-lg bg-neutral-50 ring-1 ring-neutral-200">
              {icon}
            </div>
          ) : (
            <img
              src={timelineimage}
              alt={timelinetitle}
              className="hidden md:block md:w-1/3 rounded-lg object-cover object-center"
              loading="lazy"
            />
          )}

          <div className="w-full">
            <h3 className="mb-1 md:mb-2 text-base md:text-lg font-semibold text-neutral-900">
              {timelinetitle}
            </h3>

            {/* status tag */}
            {timelinestatus && statusClass && (
              <span className={`inline-block mb-2 text-[10px] md:text-xs px-2 py-0.5 rounded ${statusClass}`}>
                {timelinestatus === 'open' ? 'Open'
                 : timelinestatus === 'upcoming' ? 'Opening Soon'
                 : timelinestatus === 'past' ? 'Closed'
                 : timelinestatus}
              </span>
            )}

            <p className="text-sm md:text-base leading-snug text-neutral-600">
              {timelinedesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightTimeline