import React from 'react'
import temp from "../assets/default.jpg"

const Card = ({eventimage, eventname, eventdesc,event_ig_link}) => {
  {/* NOTE: event_ig_link should show start with 'https://' as prefix */}
  return (
    <div>
        <div class="max-w-md overflow-hidden m-4 grid grid-cols-1 ">
          <img onClick={()=> window.open(event_ig_link, "_blank")} className="w-full transition-transform duration-300 transform hover:scale-105 hover:rotate-3 object-cover h-60 object-cover h-60 w-full" src={eventimage} alt="Sunset in the mountains"/>
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