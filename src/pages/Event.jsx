
import Card from '/src/components/_EventCard'
import { useNavigate } from "react-router-dom"

//Images
import Oday from "/src/assets/events/ODAY/odaythumbnail_2024.jpg"
import SuperSmash from "/src/assets/events/SUPERSMASH/supersmash_2024.jpg"
import sea_connect_2025 from "/src/assets/events/SEA_CONNECT/sea_connect_2025.jpeg"


const Event = () => {
  const navigate = useNavigate();
  return (
      <>
      {/* Past Events Section with Gradient */}
      <div className="relative py-16">
        {/* Background gradient - Top */}
        {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d1d5db] to-[#e5e7eb] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
        
        {/* Background gradient - Bottom */}
        {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#d1d5db] to-[#e5e7eb] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>  */}
        
        <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mt-6 px-6 lg:text-4xl font-semibold Macondo text-[#4D2A17]">——————Past Events——————</h2>
            <br />
          </div>
        </div>
        
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-5 gap-8'>
          <Card 
            eventimage={Oday} 
            eventname={"SEASA O-Day"} 
            eventdesc={"SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!"} 
            event_link={"https://www.instagram.com/p/DAS8viFhrpF/?img_index=1"}
          />
          <Card 
            eventimage={SuperSmash} 
            eventname={"SEASA Super Smash Go"} 
            eventdesc={"Showcase your badminton skills and challenge other players!"} 
            event_link={"https://www.instagram.com/p/DIaUcCqz9tC/?img_index=1"}
          />
          <Card 
            eventimage={sea_connect_2025} 
            eventname={"SEASA Connect"} 
            eventdesc={"Wisdom + Aura granted by our beloved & accomplished alumni!"} 
            event_link={"https://www.instagram.com/p/DJtC7v8TX7P/?img_index=1"}
          />
        </div>

        {/* Learn more button => links to /events */}
        <div className="mt-5 flex items-center justify-center gap-x-6 pb-4">
          <button 
            onClick={()=> navigate("/events")} 
            className='absoluteleft-[33.33vw] Macondo text-[#4D2A17] rounded-md text-black border-[#4D2A17] py-2 px-6 hover:bg-white border-solid border-2 hover:border-black hover:text-black duration-300 cursor-pointer transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl hover:shadow-yellow-200/30 animate-pulse hover:animate-none'
          >
            Past Events Catalogue <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Event