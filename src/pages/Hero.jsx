import Lottie from "lottie-react"
import React, {useState} from 'react'
import animationData from "/src/assets/animation_hero.json"
import Modal from "/src/components/Modal"
import { Link } from "react-scroll"

// Images
import test from "/src/assets/test.png"
import shapeleft from "/src/assets/shape-left.png"
import shaperight from "/src/assets/shape-right.png"
import homepic from "/src/assets/events/ODAY/odayclosing_2024.jpg"

const Hero = () => {
  let [myModal, setMyModal] = useState(false)
  const handleClose = () => {
    setMyModal(false)
  }

  return (
    <>
      {/* First section with text content */}
      <div className="relative isolate px-6 lg:px-8" id="home">
        {/* Background gradient */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="tracking-tight text-gray-900 text-5xl">
              <img src={test} alt="" className="mx-auto w-60"/>
              <p className="mt-2 text-amber-950" style={{fontWeight: "bold"}}>Southeast Asian <br></br> Students' Association</p>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              SEASA aspires to create a supportive community that embraces member's cultural diversity whilst celebrating Southeast Asian culture.
            </p>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <Link
                to="contact"
                spy={true} 
                smooth={true}
                offset={-100}
                duration={500}
                className='rounded-md bg-yellow-300 text-black border-transparent py-2 px-4 md:ml-8 hover:bg-yellow-500 border-solid border-2 hover:border-black hover:text-black duration-500 cursor-pointer'
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

      <div className="relative w-full py-16">
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
      </div>

      <div className="h-20 sm:h-24 md:h-32 lg:h-40">
      </div>
    </>
  )
}

export default Hero