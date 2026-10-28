import PropTypes from 'prop-types'

// A pair of decorative images anchored to the left and right edges.
// `className` is applied to both wrappers so callers keep their layout-specific
// positioning (top offset, width, opacity, mobile visibility) explicit.
const SideDecorations = ({ left, right, className = '' }) => (
  <>
    <div className={`absolute left-0 bottom-0 h-auto pointer-events-none z-0 ${className}`} aria-hidden="true">
      <img src={left} alt="" className="w-full h-full object-contain object-left" />
    </div>
    <div className={`absolute right-0 bottom-0 h-auto pointer-events-none z-0 ${className}`} aria-hidden="true">
      <img src={right} alt="" className="w-full h-full object-contain object-right" />
    </div>
  </>
)

SideDecorations.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default SideDecorations
