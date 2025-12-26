import React from 'react'
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import SEASALogo from '/src/assets/seasaLogo.svg'

const Contact = () => {
  return (
    <div className="bg-[#5C4033] mt-24" id='contact'>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <img 
                src={SEASALogo} 
                alt="SEASA Logo" 
                className="h-36 w-auto"
              />
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="mailto:su_seasa@connect.ust.hk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#E6CA5D] rounded-full flex items-center justify-center hover:bg-[#D4C090] transition-colors"
              >
                <FaEnvelope className="text-[#D61F1F]" />
              </a>
              <a 
                href="https://www.linkedin.com/company/hkust-southeast-asian-students-association/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#E6CA5D] rounded-full flex items-center justify-center hover:bg-[#D4C090] transition-colors"
              >
                <FaLinkedin className="text-[#D61F1F]" />
              </a>
              <a 
                href="https://www.instagram.com/seasa_hkustsu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#E6CA5D] rounded-full flex items-center justify-center hover:bg-[#D4C090] transition-colors"
              >
                <FaInstagram className="text-[#D61F1F]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#F2CF0D] mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  className="text-white hover:text-[#E8D4A0] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#events" 
                  className="text-white hover:text-[#E8D4A0] transition-colors"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#F2CF0D] mb-4">Socials</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:su_seasa@connect.ust.hk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#E8D4A0] transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/seasa_hkustsu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#E8D4A0] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/hkust-southeast-asian-students-association/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#E8D4A0] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@seasahkustsu5388" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#E8D4A0] transition-colors"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact