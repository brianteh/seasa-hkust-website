import React from 'react'
import ExcoCard from '/src/components/ExcoCard'
import temp from "/src/assets/default.jpg"
import leftDecoration from '/src/assets/excos/leftDecoration.svg'
import rightDecoration from '/src/assets/excos/rightDecoration.svg'
import excoTitle from '/src/assets/excos/excoTitle.svg'
import excoFullPicture from '/src/assets/excos/excoFullPicture.jpg'
import meetTheTeam from '/src/assets/excos/meetTheTeam.svg'




import Alicia from "/src/assets/excos/Alicia.jpg"
const AliciaIG = "https://www.instagram.com/aliciadstny/"
const AliciaLinkedIn = "https://www.linkedin.com/in/alicia-destiny-utama"

import Sophia from "/src/assets/excos/Sophia.jpg"
const SophiaIG = "https://www.instagram.com/fiasssophia?igsh=MTBzeWI2M2lxbDlrZA%3D%3D&utm_source=qr"
const SophiaLinkedIn = "https://www.linkedin.com/in/sophia-pannadi-581442325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"

import Abigail from "/src/assets/excos/Abigail.jpg"
const AbigailIG = "https://www.instagram.com/avrx_0405/"
const AbigailLinkedIn = "https://www.linkedin.com/in/abigail-vun-83027233a"

import Vania from "/src/assets/excos/Vania.jpg"
const VaniaIG = "https://www.instagram.com/ainavsohw"
const VaniaLinkedIn = "https://www.linkedin.com/in/aeviales"

import Fiona from "/src/assets/excos/Fiona.jpg"
const FionaIG = "https://www.instagram.com/fionakeiraa?igsh=MTR2bHZ1a2wzb285Zg%3D%3D&utm_source=qr"
const FionaLinkedIn = "https://www.linkedin.com/in/fiona-keira-prajitno-a709891ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"

import Aliya from "/src/assets/excos/Aliya.jpg"
const AliyaIG = "https://www.instagram.com/aliyacaryl/"
const AliyaLinkedIn = "https://www.linkedin.com/in/aliya-reyes-6809b2377/"

import Malvin from "/src/assets/excos/Malvin.jpg"
const MalvinIG = "https://www.instagram.com/malvinyolo/"
const MalvinLinkedIn = "https://www.linkedin.com/in/malvin-rudh-a25b44292"

import Katharine from "/src/assets/excos/Katharine.jpg" 
const KatharineIG = "https://www.instagram.com/yur.katharine/"
const KatharineLinkedIn = "https://www.linkedin.com/in/yu-katharine?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"

import Carina from "/src/assets/excos/Carina.jpg"
const CarinaIG = "https://www.instagram.com/carin_chandra/?next=%2F"
const CarinaLinkedIn = "https://www.linkedin.com/in/carina-chandra-7a98b4319/"

import Sidney from "/src/assets/excos/Sidney.jpg"
const SidneyIG = "https://www.instagram.com/riblisidney/"
const SidneyLinkedIn = "https://www.linkedin.com/in/sidney-ribli-49159128a/"



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
                        <ExcoCard excoimage={Alicia} exconame={"Alicia"} excorole={"External VP"} excoinstalink={AliciaIG} excolinkedinlink={AliciaLinkedIn}/>
                        <ExcoCard excoimage={Sophia} exconame={"Sophia"} excorole={"President"} excoinstalink={SophiaIG} excolinkedinlink={SophiaLinkedIn}/>
                        <ExcoCard excoimage={Abigail} exconame={"Abigail"} excorole={"Internal VP"} excoinstalink={AbigailIG} excolinkedinlink={AbigailLinkedIn}/>
                    </div>
                    
                    {/* Middle row - Team members */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-2'>
                        <ExcoCard excoimage={Vania} exconame={"Vania"} excorole={"Events and Logistics"} excoinstalink={VaniaIG} excolinkedinlink={VaniaLinkedIn}/>
                        <ExcoCard excoimage={Fiona} exconame={"Fiona"} excorole={"Events and Logistics"} excoinstalink={FionaIG} excolinkedinlink={FionaLinkedIn}/>
                        <ExcoCard excoimage={Aliya} exconame={"Aliya"} excorole={"Secretary"} excoinstalink={AliyaIG} excolinkedinlink={AliyaLinkedIn}/>
                        <ExcoCard excoimage={Malvin} exconame={"Malvin"} excorole={"IT"} excoinstalink={MalvinIG} excolinkedinlink={MalvinLinkedIn}/>
                    </div>
                    
                    {/* Bottom row - Design team */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-2 lg:justify-items-center'>
                        <ExcoCard excoimage={Katharine} exconame={"Katharine"} excorole={"Treasurer"} excoinstalink={KatharineIG} excolinkedinlink={KatharineLinkedIn}/>
                        <ExcoCard excoimage={Carina} exconame={"Carina"} excorole={"Design and Media"} excoinstalink={CarinaIG} excolinkedinlink={CarinaLinkedIn}/>
                        <ExcoCard excoimage={Sidney} exconame={"Sidney"} excorole={"Design and Media"} excoinstalink={SidneyIG} excolinkedinlink={SidneyLinkedIn}/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Exco