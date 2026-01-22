import React from 'react'
import LeftTimeline from '/src/components/LeftTimeline'
import RightTimeline from '/src/components/RightTimeline'

//images
import BlueRectangle from "/src/assets/timeline/blueRectangle.svg"
import BrownTie from "/src/assets/timeline/brownTie.svg"
import timelineItem from '/src/assets/timeline/timelineItem.svg'
import timelineBar from '/src/assets/timeline/timelineBar.svg'
import leftDecoration from '/src/assets/timeline/leftDecoration.svg'
import rightDecoration from '/src/assets/timeline/rightDecoration.svg'

const STEPS = [
  { step: 1, isoDate: '2025-09-15', title: 'Subcommittee – Open Recruitment', status: 'open' },
  { step: 2, isoDate: '2025-09-22', title: 'Subcommittee – Closed Recruitment', status: 'open' },
  { step: 3, isoDate: '2025-09-24', title: 'Initial Screening Results', status: 'open' },
  { step: 4, isoDate: '2025-09-26', title: 'Interview', status: 'open' },
  { step: 5, isoDate: '2025-10-02', title: 'Interview Results', status: 'open' },
];

export function SpineNode({ step, status, isoDate }) {
  if (status === 'open') {
    // Show date for open items
    const d = new Date(isoDate);
    const dayMonth = d.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
    const year = d.getFullYear();

    return (
      <div className="relative z-20 flex items-center justify-center w-24 h-24 md:w-28 md:h-28">
        <img 
          src={timelineItem} 
          alt="" 
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        />
        <div className="relative z-10 text-center leading-tight" aria-label={`Date ${dayMonth} ${year}`}>
          <div className="text-sm md:text-base font-bold text-white">{dayMonth}</div>
          <div className="text-xs md:text-sm font-bold text-white opacity-95">{year}</div>
        </div>
      </div>
    );
  }

  // Show number for closed items
  return (
    <div className="relative z-20 flex items-center justify-center w-24 h-24 md:w-28 md:h-28">
      <img 
        src={timelineItem} 
        alt="" 
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      <span className="relative z-10 text-xl md:text-2xl font-bold text-white" aria-label={`Step ${step}`}>
        {step}
      </span>
    </div>
  );
}

const Timeline = () => {
  return (
    <>
        <div className="mx-auto w-full h-full relative overflow-hidden" id="timeline">
            {/* Left and Right Decorations - moved down */}
            <div className="absolute left-0 top-20 md:top-40 bottom-0 w-48 md:w-80 h-auto opacity-80 pointer-events-none hidden md:block">
              <img 
                src={leftDecoration} 
                alt="" 
                className="w-full h-full object-contain object-left"
                aria-hidden="true"
              />
            </div>

            <div className="absolute right-0 top-20 md:top-40 bottom-0 w-48 md:w-80 h-auto opacity-80 pointer-events-none hidden md:block">
              <img 
                src={rightDecoration} 
                alt="" 
                className="w-full h-full object-contain object-right"
                aria-hidden="true"
              />
            </div>

            <div className="py-8 md:py-12"></div>
            
            <div className='relative text-center px-4 py-4 md:py-5 max-w-3xl mx-auto'>
                {/* Background Rectangle */}
                <div className="absolute inset-0 flex items-center justify-center -my-2">
                    <img 
                        src={BlueRectangle} 
                        alt="" 
                        className="w-full h-auto"
                        aria-hidden="true"
                    />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                    <span className="block mb-0.5 text-[8px] md:text-[10px] font-medium text-white/80 uppercase tracking-widest">
                        Application Timeline
                    </span>
                    <h2 className="mb-0.5 text-lg sm:text-xl md:text-2xl font-bold text-yellow-400">
                        Join Our Team
                    </h2>
                    <p className="text-[10px] md:text-xs text-white/90 max-w-md mx-auto leading-relaxed">
                        If you are interested in becoming part of our organization,
                        <br className="hidden md:block" />
                        please refer to the steps below to understand our application process
                    </p>
                </div>
            </div>

            <div className="flex justify-center py-4 md:py-6">
                <img 
                    src={BrownTie} 
                    alt="Decorative tie" 
                    className="w-72 h-auto md:w-80"
                    aria-hidden="true"
                />
            </div>
            
            <div className="py-1 md:py-1"></div>
            
            <div className="relative wrap p-4 md:p-10 pt-10" role="list">
                {/* Single continuous timeline bar running through all items */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 -z-10 pointer-events-none flex items-center justify-center">
                  <img 
                    src={timelineBar} 
                    alt="" 
                    className="h-full w-3 md:w-4 object-fill"
                    aria-hidden="true"
                  />
                </div>

                {STEPS
                  .sort((a, b) => a.step - b.step)
                  .map((item, idx) => {
                    const side = idx % 2 === 0 ? 'right' : 'left';
                    const Component = side === 'right' ? RightTimeline : LeftTimeline;
                    return (
                      <Component
                        key={item.step}
                        timelinestep={item.step}
                        timelinetitle={item.title}
                        status={item.status}
                        isoDate={item.isoDate}
                      />
                    );
                  })}
            </div>
        </div>
    </>
  )
}

export default Timeline