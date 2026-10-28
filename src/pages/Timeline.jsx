import LeftTimeline from '@/components/LeftTimeline.jsx'
import RightTimeline from '@/components/RightTimeline.jsx'
import SideDecorations from '@/components/SideDecorations.jsx'
import { STEPS } from '@/data/timeline.js'

import * as images from '@/assets/images.js'

const Timeline = () => (
  <div className="mx-auto w-full h-full relative overflow-hidden" id="timeline">
    <SideDecorations
      left={images.timelineLeftDecoration}
      right={images.timelineRightDecoration}
      className="top-20 md:top-40 w-48 md:w-80 opacity-80 hidden md:block"
    />

    <div className="py-8 md:py-12"></div>

    <div className="relative text-center px-4 py-4 md:py-5 max-w-3xl mx-auto">
      {/* Background Rectangle */}
      <div className="absolute inset-0 flex items-center justify-center -my-2">
        <img src={images.blueRectangle} alt="" className="w-full h-auto" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <span className="block mb-0.5 text-[8px] md:text-[10px] font-medium text-white/80 uppercase tracking-widest">
          Application Timeline
        </span>
        <h2 className="mb-0.5 text-lg sm:text-xl md:text-2xl font-bold text-yellow-400">Join Our Team</h2>
        <p className="text-[10px] md:text-xs text-white/90 max-w-md mx-auto leading-relaxed">
          If you are interested in becoming part of our organization,
          <br className="hidden md:block" />
          please refer to the steps below to understand our application process
        </p>
      </div>
    </div>

    <div className="flex justify-center py-4 md:py-6">
      <img src={images.brownTie} alt="Decorative tie" className="w-72 h-auto md:w-80" aria-hidden="true" />
    </div>

    <div className="py-1 md:py-1"></div>

    <div className="relative wrap p-4 md:p-10 pt-10" role="list">
      {/* Single continuous timeline bar running through all items */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 -z-10 pointer-events-none flex items-center justify-center">
        <img src={images.timelineBar} alt="" className="h-full w-3 md:w-4 object-fill" aria-hidden="true" />
      </div>

      {STEPS.map((item, idx) => {
        const side = idx % 2 === 0 ? 'right' : 'left'
        const Component = side === 'right' ? RightTimeline : LeftTimeline
        return (
          <Component
            key={item.step}
            timelinestep={item.step}
            timelinetitle={item.title}
            status={item.status}
            isoDate={item.isoDate}
          />
        )
      })}
    </div>
  </div>
)

export default Timeline
