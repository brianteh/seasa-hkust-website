import React from 'react'
import {FaLinkedin, FaInstagram} from "react-icons/fa"

const ExcoCard = ({excoimage, exconame, excorole, excoinstalink, excolinkedinlink}) => {
  return (
    <div>
        <div className="space-y-4">
            <img src={excoimage} alt="" className="object-cover h-56 w-44 mx-auto mb-4 bg-center rounded-lg dark:bg-gray-500"/>
            <div className="flex flex-col items-center">
                <h4 className="text-lg font-semibold">{exconame}</h4>
                <p className="text-xs dark:text-gray-400">{excorole}</p>
                <div className="flex mt-2 space-x-2">
                    <a href={excoinstalink} title="Instagram" className="text-[#F2CF0D] hover:opacity-80">
                        <FaInstagram className='w-5 h-5'/>
                    </a>  
                    <a href={excolinkedinlink} title="Linkedin" className="text-[#F2CF0D] hover:opacity-80">
                        <FaLinkedin className='w-5 h-5'/>
                    </a>              
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExcoCard