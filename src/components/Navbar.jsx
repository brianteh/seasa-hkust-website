import { useState } from 'react'
import { Link } from 'react-scroll'
import * as images from '@/assets/images.js'

const NAV_LINKS = [
  { name: 'About', link: 'about' },
  { name: 'Events', link: 'events' },
  { name: 'Merch', link: 'merch' },
  { name: 'Excos', link: 'exco' },
  { name: 'Join', link: 'timeline' },
  { name: 'Contact', link: 'contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full fixed top-0 left-0 z-40">
      <div className="shadow-md flex items-center justify-between md:justify-evenly bg-white py-1 md:px-6 lg:px-10 px-4 sm:px-7 m-4 rounded-md">
        <Link to="home" spy smooth offset={-100} duration={500} className="min-w-0 flex-1 md:flex-none">
          <div className="font-semibold text-2xl cursor-pointer flex items-center text-gray-800">
            <img src={images.navLogo} alt="SEASA logo" className="w-full md:w-56 lg:w-72 xl:w-80" />
          </div>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="ml-2 flex h-10 w-10 shrink-0 items-center justify-center text-3xl cursor-pointer md:hidden"
          role="button"
          aria-label="Toggle menu"
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-6 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="md:ml-3 lg:ml-4 xl:ml-6 text-base sm:text-lg lg:text-xl md:my-0 my-7 cursor-pointer whitespace-nowrap">
              <Link to={link.link} spy smooth offset={-100} duration={500} className="text-yellow-300 hover:text-amber-700 duration-500">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
