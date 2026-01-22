import Lottie from "lottie-react"
import React, {useState} from 'react'
import animationData from "/src/assets/animation_hero.json"
import Modal from "/src/components/Modal"
import { Link } from "react-scroll"

// Images
import logo from "/src/assets/logo.svg"
import homepic from "/src/assets/events/ODAY/odayclosing_2024.jpg"

// Flags
import brunei from "/src/assets/countries/brunei.svg"
import myanmar from "/src/assets/countries/myanmar.svg"
import cambodia from "/src/assets/countries/cambodia.svg"
import indonesia from "/src/assets/countries/indonesia.svg"
import malaysia from "/src/assets/countries/malaysia.svg"
import thailand from "/src/assets/countries/thailand.svg"
import timorLeste from "/src/assets/countries/timor-leste.svg"
import laos from "/src/assets/countries/laos.svg"
import philippines from "/src/assets/countries/philippines.svg"
import singapore from "/src/assets/countries/singapore.svg"
import vietnam from "/src/assets/countries/vietnam.svg"

const Hero = () => {
  let [myModal, setMyModal] = useState(false)
  const handleClose = () => {
    setMyModal(false)
  }

  return (
    <>
      <div 
        className="relative isolate px-6 lg:px-8 min-h-screen flex items-center" 
        id="home"
        style={{
          backgroundImage: `url(${homepic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        
        <div className="mx-auto max-w-5xl py-36 sm:py-48 lg:py-60 relative">
          <div className="text-center">
            <h1 className="tracking-tight text-white text-5xl sm:text-6xl lg:text-7xl drop-shadow-lg">
              <img src={logo} alt="" className="mx-auto w-72 sm:w-80 lg:w-96"/>
              <p className="mt-4 text-amber-300 text-3xl sm:text-4xl lg:text-5xl" style={{fontWeight: "bold"}}>Southeast Asian <br></br> Students' Association</p>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl leading-8 text-white max-w-4xl mx-auto drop-shadow-md">
              SEASA aspires to create a supportive community that embraces member's cultural diversity whilst celebrating Southeast Asian culture.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 sm:gap-2 lg:gap-4 flex-wrap">
              <img src={brunei} alt="Brunei" className="w-8 sm:w-6 lg:w-10 drop-shadow-md" />
              <img src={myanmar} alt="Myanmar" className="w-8 sm:w-6 lg:w-10 drop-shadow-md" />
              <img src={cambodia} alt="Cambodia" className="w-8 sm:w-6 lg:w-10 drop-shadow-md" />
              <img src={indonesia} alt="Indonesia" className="w-8 sm:w-6 lg:w-10 drop-shadow-md" />
              <img src={malaysia} alt="Malaysia" className="w-8 sm:w-6 lg:w-10 drop-shadow-md" />
              <img src={thailand} alt="Thailand" className="w-8 sm:w-6 lg:w-10 drop-shadow-md" />
              <img src={timorLeste} alt="Timor-Leste" className="w-8 sm:w-6 lg:w-10 drop-shadow-md" />
              <img src={laos} alt="Laos" className="w-8 sm:w-6 lg:w-10 drop-shadow-md" />
              <img src={philippines} alt="Philippines" className="w-8 sm:w-6 lg:w-10 drop-shadow-md" />
              <img src={singapore} alt="Singapore" className="w-8 sm:w-6 lg:w-10 drop-shadow-md" />
              <img src={vietnam} alt="Vietnam" className="w-8 sm:w-6 lg:w-10 drop-shadow-md" />
            </div>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Link
                to="contact"
                spy={true} 
                smooth={true}
                offset={-100}
                duration={500}
                className='rounded-md bg-yellow-300 text-black border-transparent py-3 px-6 md:ml-2 hover:bg-yellow-500 border-solid border-2 hover:border-black hover:text-black duration-500 cursor-pointer text-lg font-semibold'
              >
                Connect With Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <Modal onClose={handleClose} visible={myModal}/>

      {/* <div className="relative w-full py-0">
        <div className="relative w-full max-w-screen-2xl mx-auto">
          <div className="absolute left-0 top-0 w-1/3 z-0">
            <img 
              src={shapeleft} 
              className="w-full h-auto object-contain opacity-50"
              alt="Decorative shape" 
            />
          </div>
          
          <div className="absolute right-0 top-0 w-1/3 z-0">
            <img 
              src={shaperight} 
              className="w-full h-auto object-contain opacity-50"
              alt="Decorative shape" 
            />
          </div>
          
          <div className="relative z-10 aspect-[16/9] w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg px-4">
            <img 
              src={homepic} 
              className="w-full h-full object-cover"
              alt="SEASA gathering" 
            />
          </div>
        </div>
      </div> */}

      <div className="sm:h-3 md:h-4 lg:h-5">
      </div>
    </>
  )
}

export default Hero