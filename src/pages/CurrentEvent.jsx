import CurrentEventPicture from "/src/assets/events/ODAY/odaythumbnail_2024.jpg"
import SEO from '../components/SEO'

export const CurrentEvent = () => {
    const event_link = "https://bit.ly/SEASAOday2025"
    
    return (
        <div className="relative isolate py-12" id='events'>
            {/* Background gradient - Top */}
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            
            {/* Background gradient - Bottom */}
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            
            <div className="max-w-6xl mx-auto px-8">
                <SEO 
                    title="Upcoming Event - SEASA Freshman Orientation"
                    description="Join us for SEASA's Freshman Orientation on September 5th, 2025. A fun-filled event to welcome Southeast Asian freshmen to HKUST with games, food, and new friendships!"
                    keywords="SEASA Freshman Orientation, HKUST orientation, Southeast Asian students, welcome event, September 5 event, student activities"
                />
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
                    <div onClick={()=> window.open(event_link, "_blank")} className="w-full h-full cursor-pointer">
                      <img 
                        src={CurrentEventPicture}
                        alt="SEASA Freshman Orientation event"
                        className="w-full h-full object-cover"
                      />
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default CurrentEvent