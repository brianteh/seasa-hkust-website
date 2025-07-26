import React from 'react'
import ExcoCard from '/src/components/ExcoCard'
import temp from "/src/assets/default.jpg"




import Alicia from "/src/assets/excos/Alicia.jpg"
const AliciaIG = "https://www.instagram.com/aliciadstny/"
const AliciaLinkedIn = "https://www.linkedin.com" // example link, replace with actual

import Sophia from "/src/assets/excos/Sophia.jpg"
const SophiaIG = "https://www.instagram.com" // example ig, replace with actual
const SophiaLinkedIn = "https://www.linkedin.com" // example link, replace with actual

import Abigail from "/src/assets/excos/Abigail.jpg" // need to add image
const AbigailIG = "https://www.instagram.com" // example ig, replace with actual
const AbigailLinkedIn = "https://www.linkedin.com" // example link, replace with actual

import Vania from "/src/assets/excos/Vania.jpg"
const VaniaIG = "https://www.instagram.com" // example ig, replace with actual
const VaniaLinkedIn = "https://www.linkedin.com" // example link, replace with actual

import Fiona from "/src/assets/excos/Fiona.jpg"
const FionaIG = "https://www.instagram.com" // example ig, replace with actual
const FionaLinkedIn = "https://www.linkedin.com" // example link, replace with actual

import Aliya from "/src/assets/excos/Aliya.jpg" // need to add image
const AliyaIG = "https://www.instagram.com" // example ig, replace with actual
const AliyaLinkedIn = "https://www.linkedin.com" // example link, replace with actual

import Malvin from "/src/assets/excos/Malvin.jpg"
const MalvinIG = "https://www.instagram.com/malvinyolo/"
const MalvinLinkedIn = "https://www.linkedin.com/in/malvin-rudh-a25b44292"

import Katharine from "/src/assets/excos/Katharine.jpg" 
const KatharineIG = "https://www.instagram.com/yur.katharine/"
const KatharineLinkedIn = "https://www.linkedin.com" // example link, replace with actual

import Carina from "/src/assets/excos/Carina.jpg"
const CarinaIG = "https://www.instagram.com" // example ig, replace with actual
const CarinaLinkedIn = "https://www.linkedin.com" // example link, replace with actual

import Sidney from "/src/assets/excos/Sidney.jpg"
const SidneyIG = "https://www.instagram.com" // example ig, replace with actual
const SidneyLinkedIn = "https://www.linkedin.com" // example link, replace with actual



const Exco = () => {
  return (
    <div>
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100" id="exco">
            <div className="container p-4 mx-auto space-y-16 sm:p-10">
                <div className="space-y-4 text-center">
                    <h3 className="text-2xl font-bold sm:text-5xl">The SEASA Team</h3>
                    <p className="text-center">Meet the faces behind SEASA's organization</p>
                </div>
                
                {/* Responsive grid layout */}
                <div className="space-y-8">
                    {/* Top row - Leadership */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                        <ExcoCard excoimage={Alicia} exconame={"Alicia"} excorole={"External VP"} excoinstalink={AliciaIG} excolinkedinlink={AliciaLinkedIn}/>
                        <ExcoCard excoimage={Sophia} exconame={"Sophia"} excorole={"President"} excoinstalink={SophiaIG} excolinkedinlink={SophiaLinkedIn}/>
                        <ExcoCard excoimage={Abigail} exconame={"Abigail"} excorole={"Internal VP"} excoinstalink={AbigailIG} excolinkedinlink={AbigailLinkedIn}/>
                    </div>
                    
                    {/* Middle row - Team members */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                        <ExcoCard excoimage={Vania} exconame={"Vania"} excorole={"Events and Logistics"} excoinstalink={VaniaIG} excolinkedinlink={VaniaLinkedIn}/>
                        <ExcoCard excoimage={Fiona} exconame={"Fiona"} excorole={"Events and Logistics"} excoinstalink={FionaIG} excolinkedinlink={FionaLinkedIn}/>
                        <ExcoCard excoimage={Aliya} exconame={"Aliya"} excorole={"Secretary"} excoinstalink={AliyaIG} excolinkedinlink={AliyaLinkedIn}/>
                        <ExcoCard excoimage={Malvin} exconame={"Malvin"} excorole={"IT"} excoinstalink={MalvinIG} excolinkedinlink={MalvinLinkedIn}/>
                    </div>
                    
                    {/* Bottom row - Design team */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:justify-items-center'>
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