import React from 'react'
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import SEASALogo from '/src/assets/SEASALogo.png'

const Contact = () => {
  return (
    <div className="bg-gray-200 mt-24" id='contact'>
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
                href="https://www.facebook.com/seasahkust" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <FaEnvelope className="text-gray-700" />
              </a>
              <a 
                href="https://twitter.com/seasahkust" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <FaLinkedin className="text-gray-700" />
              </a>
              <a 
                href="https://www.instagram.com/seasa_hkustsu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <FaInstagram className="text-gray-700" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#events" 
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Socials</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:seasa@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/seasa_hkustsu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/hkust-southeast-asian-students-association/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@seasahkustsu5388" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
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