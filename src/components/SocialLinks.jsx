import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SITE } from '@/data/site.js'

const SOCIAL_ITEMS = [
  { label: 'Email', href: `mailto:${SITE.email}`, Icon: FaEnvelope },
  { label: 'LinkedIn', href: SITE.socials.linkedin, Icon: FaLinkedin },
  { label: 'Instagram', href: SITE.socials.instagram, Icon: FaInstagram },
]

const SocialLinks = () => (
  <div className="flex space-x-4">
    {SOCIAL_ITEMS.map(({ label, href, Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={label}
        aria-label={label}
        className="w-10 h-10 bg-[#E6CA5D] rounded-full flex items-center justify-center hover:bg-[#D4C090] transition-colors"
      >
        <Icon className="text-[#D61F1F]" />
      </a>
    ))}
  </div>
)

export default SocialLinks
