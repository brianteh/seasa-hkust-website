import SocialLinks from '@/components/SocialLinks.jsx'
import { SITE } from '@/data/site.js'
import * as images from '@/assets/images.js'

const Contact = () => (
  <div className="bg-[#5C4033] mt-24" id="contact">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <div className="mb-16">
            <img src={images.contactLogo} alt="SEASA Logo" className="h-20 w-auto" />
          </div>
          <SocialLinks />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#F2CF0D] mb-4">About</h3>
          <ul className="space-y-3">
            <li>
              <a href="#about" className="text-white hover:text-[#E8D4A0] transition-colors">About Us</a>
            </li>
            <li>
              <a href="#events" className="text-white hover:text-[#E8D4A0] transition-colors">Events</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#F2CF0D] mb-4">Socials</h3>
          <ul className="space-y-3">
            <li>
              <a href={`mailto:${SITE.email}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E8D4A0] transition-colors">Email</a>
            </li>
            <li>
              <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E8D4A0] transition-colors">Instagram</a>
            </li>
            <li>
              <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E8D4A0] transition-colors">LinkedIn</a>
            </li>
            <li>
              <a href={SITE.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E8D4A0] transition-colors">Youtube</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
