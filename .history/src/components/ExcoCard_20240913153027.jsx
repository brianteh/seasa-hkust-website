import React from 'react'
import {FaLinkedin, FaInstagram} from "react-icons/fa"

const ExcoCard = ({excoimage, exconame, excorole, excoinstalink, excolinkedinlink}) => {
  return (
    <div>
        <div className="space-y-4 rounded">
            <img src={excoimage} alt="" className="object-cover h-80 w-60 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500"/>
            <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">{exconame}</h4>
                <p className="text-sm dark:text-gray-400">{excorole}</p>
                <div className="flex mt-2 space-x-2">
                    <a href={excoinstalink} title="Linkedin" className="dark:text-gray-400">
                        <FaInstagram className='w-6 h-6'/>
                    </a>  
                    <a href={excolinkedinlink} title="Linkedin" className="dark:text-gray-400">
                        <FaLinkedin className='w-6 h-6'/>
                    </a>              
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExcoCard