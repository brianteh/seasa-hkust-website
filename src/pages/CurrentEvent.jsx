import CurrentEventPicture from "/src/assets/events/ODAY/odaythumbnail_2024.jpg"

export const CurrentEvent = () =>{
    const event_link = "https://bit.ly/SEASAOday2025"
    return (
        
        <div className="max-w-6xl mx-auto p-8" id='events'> 
            <div className="flex justify-center">
            <div className="text-center md:max-w-xl lg:max-w-3xl ">
                <h2 className="mt-6 px-6 text-6xl font-semibold">Our Upcoming Event</h2>
                <br />
            </div>
            </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Content Section (Left on desktop, always first) */}
            <div className="md:w-1/2 w-full">
            <div className="text-center md:max-w-xl lg:max-w-3xl ">
              <h2 className="mt-6 px-6 text-4xl font-semibold">SEASA Freshman Orientation</h2>
              <br/>
            </div>
            <p className="text-lg mb-6 text-justify">
                SEASA Freshman Orientation is SEASA’s annual orientation event, set to take place on September 5th, 2025. 
                This gathering is designed to warmly welcome incoming Southeast Asian freshmen to HKUST. 
            </p>
            <p className="text-lg mb-6 text-justify">
                Through fun games and shared meals, this event provides a casual and friendly environment for freshmen to meet fellow Southeast Asian students and connect with seniors. 
                We are excited to have all Southeast Asian HKUST students including Indonesia, Malaysia, Thailand, Philippines, and many more to join us in kicking off the new academic year together!
            </p>
            <p className="text-lg mb-6 text-justify">
                <b>Event Date:</b> Sep 5th
            </p>
            <p className="text-lg mb-6 text-justify">
                <b>Venue:</b> Hall 7 Common Room
            </p>
           {/*Learn more button => links to event_link */}
            <div className="mt-5 flex items-center justify-center gap-x-6 pb-4">
                <button 
                  onClick={() => window.open(event_link,"_blank")} 
                  className='relative rounded-md text-black border-black py-2 px-4 md:ml-8 hover:bg-white border-solid border-2 hover:border-black hover:text-black duration-300 cursor-pointer transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl hover:shadow-yellow-200/30 animate-pulse hover:animate-none'
                >
                Register Now <span aria-hidden="true">→</span>
                </button>
            </div>
            </div>

            {/* Poster Section (Right on desktop, below on mobile) */}
            <div className="md:w-3/5 w-full flex justify-center">
            <div className="w-full h-[40rem] bg-gray-100 flex items-center justify-center text-2xl font-bold rounded-xl overflow-hidden">
                <img onClick={()=> window.open(event_link, "_blank")} className="w-full transition-transform duration-300 transform hover:scale-105 hover:rotate-3 object-cover h-full w-full" src={CurrentEventPicture} alt="Sunset in the mountains"/>
            </div>
            </div>
        </div>
        
       
        

        </div>
       
    )
}


export default CurrentEvent