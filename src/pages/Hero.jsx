import Lottie from "lottie-react"
import React, {useState} from 'react'
import animationData from "/src/assets/animation_hero.json"
import Modal from "/src/components/Modal";

//images
// import Hero
import test from "/src/assets/test.png"
import temp from "/src/assets/default.jpg"
import group from "/src/assets/group.jpg"
import shapeleft from "/src/assets/shape-left.png"
import shaperight from "/src/assets/shape-right.png"
import homepic from "/src/assets/events/ODAY/odayclosing.jpg"

const Hero = () => {
  let [myModal, setMyModal] = useState(false)
    const handleClose = () => {
      setMyModal(false)
    }

  return (
    <>
        <div className="relative isolate px-6 lg:px-8" id="home">
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
              {/* <p className="italic text-5xl">Welcome to</p>  */}
              <img src={test} alt="" className="mx-auto w-60"/>
              <p className="mt-2 text-amber-950">Southeast Asian <br></br> Students' Association</p>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            SEASA aspires to create a supportive community that embraces member’s cultural diversity whilst celebrating Southeast Asian culture.
            </p>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              
              <button onClick={() => setMyModal(true)} className='rounded-md text-black border-transparent py-2 px-4 md:ml-8 hover:bg-white border-solid border-2 hover:border-black hover:text-black duration-500 cursor-pointer'>
                  Learn more <span aria-hidden="true">→</span>

              </button>
              {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900 ">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
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



      

      <div className="relative pb-12">
        <img src={shapeleft} className="absolute -top-60 left-0  w-1/2 opacity-50 z-[-1]"/>
        {/* <Lottie animationData={animationData} />  */}
        {/* <img src={group} className="absolute object-cover w-3/4 h-96 -top-60 left-1/2 -translate-x-1/2 translate-y-1/4 rounded-lg"/> */}
        <img src={homepic} className="absolute object-cover w-3/4 -top-60 left-1/2 -translate-x-1/2 translate-y-1/4 rounded-lg"/>
        <img src={shaperight} className="absolute -top-60 right-0 w-1/2 opacity-50 z-[-1]"/>
      </div>
      <div className="h-10 md:h-80 lg:h-screen">
      </div>
    </>
  )
}

export default Hero