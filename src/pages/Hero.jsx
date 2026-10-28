import { Link } from 'react-scroll'

import BackgroundBlob from '@/components/BackgroundBlob.jsx'
import { countries } from '@/data/countries.js'

import logo from '@/assets/logo.svg'
import homepic from '@/assets/events/ODAY/odayclosing_2024.jpg'

const Hero = () => (
  <>
    <div
      className="relative isolate px-6 lg:px-8 min-h-screen flex items-center"
      id="home"
      style={{
        backgroundImage: `url(${homepic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="mx-auto max-w-5xl py-36 sm:py-48 lg:py-60 relative">
        <div className="text-center">
          <h1 className="tracking-tight text-white text-5xl sm:text-6xl lg:text-7xl drop-shadow-lg">
            <img src={logo} alt="SEASA logo" className="mx-auto w-72 sm:w-80 lg:w-96" />
            <p className="mt-4 text-amber-300 text-3xl sm:text-4xl lg:text-5xl" style={{ fontWeight: 'bold' }}>
              Southeast Asian <br /> Students&apos; Association
            </p>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl leading-8 text-white max-w-4xl mx-auto drop-shadow-md">
            SEASA aspires to create a supportive community that embraces member&apos;s cultural diversity whilst celebrating Southeast Asian culture.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 sm:gap-2 lg:gap-4 flex-wrap">
            {countries.map(({ name, flag }) => (
              <img key={name} src={flag} alt={name} className="w-8 sm:w-6 lg:w-10 drop-shadow-md" />
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Link
              to="contact"
              spy
              smooth
              offset={-100}
              duration={500}
              className="rounded-md bg-yellow-300 text-black border-transparent py-3 px-6 md:ml-2 hover:bg-yellow-500 border-solid border-2 hover:border-black hover:text-black duration-500 cursor-pointer text-lg font-semibold"
            >
              Connect With Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <BackgroundBlob position="bottom" />
    </div>

    <div className="sm:h-3 md:h-4 lg:h-5"></div>
  </>
)

export default Hero
