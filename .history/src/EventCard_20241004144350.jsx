import React from 'react'
import temp from "../assets/default.jpg"
import '/src/EventCard.css'

const Card = ({eventimage, eventname, eventdesc}) => {
  return (
    <div>
        <div class="max-w-md overflow-hidden m-4 grid grid-cols-1 ">
          <img className="w-full transition-transform duration-300 transform hover:scale-105 hover:rotate-3 object-cover h-60" src={eventimage} alt="Sunset in the mountains" className='object-cover h-60 w-full'/>
          <div class="px-6 py-4 text-center">
              <div class="font-semibold text-lg mb-2 ">{eventname}</div>
              <p class="text-gray-700 text-base">
                {eventdesc}
              </p>
          </div>
        </div>
    </div>
  )
}

export default Card