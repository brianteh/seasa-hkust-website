import PropTypes from 'prop-types'
import * as images from '@/assets/images.js'

const SpineNode = ({ step, status, isoDate }) => {
  if (status === 'open') {
    // Show the date for open items.
    const d = new Date(isoDate)
    const dayMonth = d.toLocaleDateString('en-US', { day: '2-digit', month: 'short' })
    const year = d.getFullYear()

    return (
      <div className="relative z-20 flex items-center justify-center w-24 h-24 md:w-28 md:h-28">
        <img src={images.timelineItem} alt="" className="absolute inset-0 w-full h-full" aria-hidden="true" />
        <div className="relative z-10 text-center leading-tight" aria-label={`Date ${dayMonth} ${year}`}>
          <div className="text-sm md:text-base font-bold text-white">{dayMonth}</div>
          <div className="text-xs md:text-sm font-bold text-white opacity-95">{year}</div>
        </div>
      </div>
    )
  }

  // Show the step number for closed items.
  return (
    <div className="relative z-20 flex items-center justify-center w-24 h-24 md:w-28 md:h-28">
      <img src={images.timelineItem} alt="" className="absolute inset-0 w-full h-full" aria-hidden="true" />
      <span className="relative z-10 text-xl md:text-2xl font-bold text-white" aria-label={`Step ${step}`}>
        {step}
      </span>
    </div>
  )
}

SpineNode.propTypes = {
  step: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  isoDate: PropTypes.string,
}

export default SpineNode
