import PropTypes from 'prop-types'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

const ExcoCard = ({ excoimage, exconame, excorole, excoinstalink, excolinkedinlink, className = '' }) => (
  <div className={`space-y-4 ${className}`}>
    <img
      src={excoimage}
      alt={`${exconame} - ${excorole}`}
      className="object-cover h-56 w-44 mx-auto mb-4 bg-center rounded-lg dark:bg-gray-500"
    />
    <div className="flex flex-col items-center">
      <h4 className="text-lg font-semibold text-white">{exconame}</h4>
      <p className="text-xs text-white">{excorole}</p>
      <div className="flex mt-2 space-x-2">
        {excoinstalink && (
          <a href={excoinstalink} title="Instagram" className="text-[#F2CF0D] hover:opacity-80">
            <FaInstagram className="w-5 h-5" />
          </a>
        )}
        {excolinkedinlink && (
          <a href={excolinkedinlink} title="LinkedIn" className="text-[#F2CF0D] hover:opacity-80">
            <FaLinkedin className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  </div>
)

ExcoCard.propTypes = {
  excoimage: PropTypes.string.isRequired,
  exconame: PropTypes.string.isRequired,
  excorole: PropTypes.string.isRequired,
  excoinstalink: PropTypes.string,
  excolinkedinlink: PropTypes.string,
  className: PropTypes.string,
}

export default ExcoCard
