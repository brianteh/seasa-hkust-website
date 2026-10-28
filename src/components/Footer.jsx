import { SITE } from '@/data/site.js'

const Footer = () => (
  <footer className="bg-[#E6CA5D] text-center lg:text-center">
    <div className="p-4 text-center">
      <p className="text-[#D61F1F]">©2024 Copyright: {SITE.shortName}</p>
    </div>
  </footer>
)

export default Footer
