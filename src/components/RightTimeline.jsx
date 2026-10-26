import PropTypes from 'prop-types'
import SpineNode from '@/components/SpineNode.jsx'
import timelineDetails from '@/assets/timeline/timelineDetails.svg'

const RightTimeline = ({ timelinestep, timelinetitle, status, isoDate }) => (
  <div className="mb-16 flex w-full flex-col items-center gap-3 md:mb-20 md:flex-row md:justify-between md:gap-0" role="listitem">
    <div className="hidden md:order-1 md:block md:w-5/12"></div>

    {/* Center spine node */}
    <div className="order-1 shrink-0 md:order-2">
      <SpineNode step={timelinestep} status={status} isoDate={isoDate} />
    </div>

    {/* Card with content */}
    <div className="order-2 w-full min-w-0 md:order-3 md:w-5/12">
      <div className="relative w-full md:max-w-xl">
        <img
          src={timelineDetails}
          alt=""
          className="absolute inset-0 w-full h-full object-fill"
          aria-hidden="true"
        />
        <h3 className="relative z-10 px-4 py-3 text-base font-bold text-red-700 text-center sm:px-8 sm:py-4 md:text-lg">
          {timelinetitle}
        </h3>
      </div>
    </div>
  </div>
)

RightTimeline.propTypes = {
  timelinestep: PropTypes.number.isRequired,
  timelinetitle: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isoDate: PropTypes.string,
}

export default RightTimeline
