import React from 'react'
import ExcoCard from '/src/components/ExcoCard'
import temp from "/src/assets/default.jpg"
import leftDecoration from '/src/assets/excos/leftDecoration.svg'
import rightDecoration from '/src/assets/excos/rightDecoration.svg'
import excoTitle from '/src/assets/excos/excoTitle.svg'
import excoFullPicture from '/src/assets/excos/excoFullPicture.jpg'
import meetTheTeam from '/src/assets/excos/meetTheTeam.svg'



import President from "/src/assets/excos/Joshua.jpeg"
const PresidentIG = "https://www.instagram.com/joshualoopz/"
const PresidentLinkedIn = ""

import InternalVP from "/src/assets/excos/Abigail.jpeg"
const InternalVPIG = "https://www.instagram.com/avrx_0405/"
const InternalVPLinkedIn = "https://www.linkedin.com/in/abigail-vun-83027233a"

import ExternalVP from "/src/assets/excos/Ken.jpeg"
const ExternalVPIG = ""
const ExternalVPLinkedIn = ""

import Secretary from "/src/assets/excos/Gabby.jpeg"
const SecretaryIG = ""
const SecretaryLinkedIn = ""

import Finance from "/src/assets/excos/Ryan.jpeg"
const FinanceIG = ""
const FinanceLinkedIn = ""

import DNM1 from "/src/assets/excos/Shenia.jpeg"
const DNM1IG = ""
const DNM1LinkedIn = ""

import DNM2 from "/src/assets/excos/Autea.jpeg"
const DNM2IG = ""
const DNM2LinkedIn = ""

import ENL1 from "/src/assets/excos/Stella.jpeg"
const ENL1IG = ""
const ENL1LinkedIn = ""

import ENL2 from "/src/assets/excos/Daniel.jpeg"
const ENL2IG = ""
const ENL2LinkedIn = ""

import IT from "/src/assets/excos/Brian.jpeg"
const ITIG = ""
const ITLinkedIn = ""




const Exco = () => {
  return (
    <div className="relative overflow-hidden">
        <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-gray-900">
            {/* Background image */}
            <img 
                src={excoFullPicture} 
                alt="SEASA Team Photo" 
                className="w-full h-full object-contain"
            />
            
            {/* Overlay with "meet the team" text */}
            <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12 lg:pb-16">
                <img 
                    src={meetTheTeam} 
                    alt="Meet the Team" 
                    className="w-96 sm:w-108 md:w-120 lg:w-[800px] xl:w-[900px] h-auto"
                />
            </div>
        </div>
        <section className="py-6 bg-[#1A223B] dark:text-gray-100 relative" id="exco">
            {/* Left and Right Decorations - z-0 to be behind content */}
            <div className="absolute left-0 top-16 md:top-24 bottom-0 w-32 md:w-64 lg:w-80 h-auto opacity-90 pointer-events-none z-0">
                <img 
                    src={leftDecoration} 
                    alt="" 
                    className="w-full h-full object-contain object-left"
                    aria-hidden="true"
                />
            </div>

            <div className="absolute right-0 top-16 md:top-24 bottom-0 w-32 md:w-64 lg:w-80 h-auto opacity-90 pointer-events-none z-0">
                <img 
                    src={rightDecoration} 
                    alt="" 
                    className="w-full h-full object-contain object-right"
                    aria-hidden="true"
                />
            </div>

            {/* Content container with higher z-index */}
            <div className="container p-4 mx-auto space-y-16 sm:p-10 relative z-10">
                <div className="flex justify-center">
                    <img 
                        src={excoTitle} 
                        alt="The SEASA Committee - Meet the faces behind SEASA's organization" 
                        className="w-full max-w-3xl h-auto"
                    />
                </div>
                
                {/* Responsive grid layout with smaller gaps */}
                <div className="space-y-8">
                    {/* Top row - Leadership */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-2'>
                        <ExcoCard excoimage={ExternalVP} exconame={"Ken"} excorole={"External VP"} excoinstalink={ExternalVPIG} excolinkedinlink={ExternalVPLinkedIn}/>
                        <ExcoCard excoimage={President} exconame={"Joshua"} excorole={"President"} excoinstalink={PresidentIG} excolinkedinlink={PresidentLinkedIn}/>
                        <ExcoCard excoimage={InternalVP} exconame={"Abigail"} excorole={"Internal VP"} excoinstalink={InternalVPIG} excolinkedinlink={InternalVPLinkedIn}/>
                    </div>
                    
                    {/* Middle row - Team members */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-2'>
                        <ExcoCard excoimage={ENL1} exconame={"Stella"} excorole={"Events and Logistics"} excoinstalink={ENL1IG} excolinkedinlink={ENL1LinkedIn}/>
                        <ExcoCard excoimage={ENL2} exconame={"Daniel"} excorole={"Events and Logistics"} excoinstalink={ENL2IG} excolinkedinlink={ENL2LinkedIn}/>
                        <ExcoCard excoimage={Secretary} exconame={"Gabby"} excorole={"Secretary"} excoinstalink={SecretaryIG} excolinkedinlink={SecretaryLinkedIn}/>
                        <ExcoCard excoimage={IT} exconame={"Brian"} excorole={"IT"} excoinstalink={ITIG} excolinkedinlink={ITLinkedIn}/>
                    </div>
                    
                    {/* Bottom row - Design team */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-2 lg:justify-items-center'>
                        <ExcoCard excoimage={Finance} exconame={"Ryan"} excorole={"Treasurer"} excoinstalink={FinanceIG} excolinkedinlink={FinanceLinkedIn}/>
                        <ExcoCard excoimage={DNM2} exconame={"Autea"} excorole={"Design and Media"} excoinstalink={DNM2IG} excolinkedinlink={DNM2LinkedIn}/>
                        <ExcoCard excoimage={DNM1} exconame={"Shenia"} excorole={"Design and Media"} excoinstalink={DNM1IG} excolinkedinlink={DNM1LinkedIn}/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Exco