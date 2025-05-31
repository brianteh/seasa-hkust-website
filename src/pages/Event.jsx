import React from 'react'
import Card from '../components/EventCard'
import { useNavigate } from "react-router-dom"

//Images
import Orientation from "../assets/events/orientation.jpg"
import Oday from "../assets/events/ODAY/odaythumbnail.jpg"
import SuperSmash from "../assets/events/SUPERSMASH/thumbnail.jpg"

const Event = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-gradient-to-b from-white to-gray-100' id='events'>
      <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl ">
              <h2 className="mt-6 px-6 text-4xl font-semibold">Events</h2>
              <h3 className="mt-6">Click the images to find out more in detail of each event.</h3>
          </div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-5'>
          <Card eventimage={Oday} eventname={"SEASA O-Day"} eventdesc={"SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!"} event_ig_link={"https://youtube.com"}/>
          <Card eventimage={SuperSmash} eventname={"SEASA Super Smash Go"} eventdesc={"Showcase your badminton skills and challenge other players!"} event_ig_link={"https://youtube.com"}/>
      </div>

      {/*Learn more button => links to /events*/}
      <div className="mt-5 flex items-center justify-center gap-x-6 pb-4">
        <button onClick={() => navigate("/events")} className='rounded-md text-black border-transparent py-2 px-4 md:ml-8 hover:bg-white border-solid border-2 hover:border-black hover:text-black duration-500 cursor-pointer'>
          Learn more <span aria-hidden="true">→</span>
        </button>
      </div>

    </div>
  )
}

export default Event