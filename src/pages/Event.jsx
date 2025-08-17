
import Card from '/src/components/EventCard'
import { useNavigate } from "react-router-dom"

//Images
import Oday from "/src/assets/events/ODAY/odaythumbnail_2024.jpg"
import SuperSmash from "/src/assets/events/SUPERSMASH/supersmash_2024.jpg"
import sea_connect_2025 from "/src/assets/events/SEA_CONNECT/sea_connect_2025.jpeg"


const Event = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-gradient-to-b from-white to-gray-100' id='events'>
      <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl ">
              <h2 className="mt-6 px-6 text-4xl font-semibold">Past Events</h2>
              <br />
          </div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-5'>
          <Card eventimage={Oday} eventname={"SEASA O-Day"} eventdesc={"SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!"} event_link={"https://www.instagram.com/p/DAS8viFhrpF/?img_index=1"}/>
          <Card eventimage={SuperSmash} eventname={"SEASA Super Smash Go"} eventdesc={"Showcase your badminton skills and challenge other players!"} event_link={"https://www.instagram.com/p/DIaUcCqz9tC/?img_index=1"}/>
          <Card eventimage={sea_connect_2025} eventname={"SEASA Connect"} eventdesc={"Wisdom + Aura granted by our beloved & accomplished alumni!"} event_link={"https://www.instagram.com/p/DJtC7v8TX7P/?img_index=1"}/>
      </div>

      {/*Learn more button => links to /events*/}
      <div className="mt-5 flex items-center justify-center gap-x-6 pb-4">
        <button onClick={() => navigate("/events")} className='rounded-md text-black border-transparent py-2 px-4 md:ml-8 hover:bg-white border-solid border-2 hover:border-black hover:text-black duration-500 cursor-pointer'>
          Past Events Catalogue <span aria-hidden="true">→</span>
        </button>
      </div>

    </div>
  )
}

export default Event