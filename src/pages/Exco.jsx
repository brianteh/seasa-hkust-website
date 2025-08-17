import React from 'react'
import ExcoCard from '/src/components/ExcoCard'
import temp from "/src/assets/default.jpg"




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