import React from 'react'
import Card from '../components/EventCard'


//Images
import Orientation from "../assets/events/orientation.jpg"
import Oday from "../assets/events/ODAY/odaythumbnail.jpg"

const Event = () => {
  return (
    <div className='bg-gradient-to-b from-white to-gray-100' id='events'>
      <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl ">
              <h2 className="mt-6 px-6 text-4xl font-semibold">Events</h2>
              <h3 className="mt-6">Click the images to find out more in detail of each event.</h3>
          </div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-5 '>
          <Card eventimage={Oday} eventname={"SEASA O-Day"} eventdesc={"SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!"}/>
          <Card eventimage={Orientation} eventname={"SEASA Super Smash Go"} eventdesc={"Showcast your badminton skills and challenge other players!"}/>
         

      </div>
    </div>
  )
}

export default Event