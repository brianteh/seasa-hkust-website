//import CurrentEventPicture from "/src/assets/events/ODAY/odaythumbnail_2024.jpg"
import CurrentEventPicture from "/src/assets/events/test_poster.jpg"
import CurrentEventContainerSVG from "../assets/events/current_event_container.svg";
import leftDecoration from '/src/assets/events/side_swirl_left.svg'
import rightDecoration from '/src/assets/events/side_swirl_right.svg'

export const CurrentEvent = () => {
    const event_link = "https://bit.ly/SEASAOday2025"
    
    return (
        <div className="relative isolate py-12" id='events'>
            {/* Background gradient - Top */}
            {/* <div
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
             */}
            {/* Background gradient - Bottom */}
            {/* <div
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
            </div> */}
            
            {/* Left and Right Decorations - z-0 to be behind content */}
            <div className="absolute left-0 top-16 md:top-24 bottom-0 w-32 md:w-64 lg:w-80 h-auto opacity-90 pointer-events-none z-0">
                <img 
                    src={leftDecoration} 
                    alt="" 
                    className="w-full h-full object-contain object-left"
                    aria-hidden="true"
                />
            </div>

            <div className="absolute right-0 top-16 md:top-24 bottom-0 w-32 md:w-64 lg:w-80 h-auto opacity-90 pointer-events-none z-0">
                <img 
                    src={rightDecoration} 
                    alt="" 
                    className="w-full h-full object-contain object-right"
                    aria-hidden="true"
                />
            </div>


            <div className="max-w-6xl mx-auto px-8 z-10 relative">
           
            <div className="relative w-full h-auto max-w-6xl mx-auto px-2">
              {/** in general, md: for tablet use, lg: for desktop, sm/default for mobile */}
              <div className="relative w-auto md:h-[170vh] h-[135vh] lg:h-auto overflow-visible rounded-2xl sm:rounded-3xl"> 
                <img 
                  src={CurrentEventContainerSVG} 
                  className="w-[95vw] h-full lg:h-[105vh] max-h-[300vh] h-auto object-cover rounded-2xl sm:rounded-3xl"
                  alt=""
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 pb-8 sm:pb-10 md:pb-12 h-auto">
                  {/* Title Section - Always on its own row */}
                  <div className="w-full text-center mb-4 sm:mb-6 md:mb-8">
                    {/* Upcoming event word */}
                    <h2 className="sm:text-3xl md:text-4xl lg:text-5xl Macondo text-white">————Our Upcoming Event————</h2>
                  </div>
                  
                  {/* Content + Poster Section - 2 columns on desktop, stacked on mobile */}
                  <div className="flex-1 flex flex-col lg:flex-row gap-4 md:gap-6 h-auto">
                    {/* Content Section (Left side) */}
                    <div className="lg:w-1/2 w-full flex flex-col p-2 sm:p-3 md:p-4 max-h-[70vh] lg:max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                      {/* Event Title */}
                      <div className="mb-2 sm:mb-3 md:mb-4">
                        <h2 className="text-3xl sm:text-2xl md:text-3xl text-center font-extrabold text-white [-webkit-text-stroke:1px_theme(colors.red.700)]">SEASA Freshman Orientation</h2>
                      </div>
                      
                      <div className="flex-1 overflow-y-auto pr-1 sm:pr-2">
                        <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 text-center">
                          SEASA Freshman Orientation is SEASA's annual orientation event, set to take place on September 5th, 2025. 
                          This gathering is designed to warmly welcome incoming Southeast Asian freshmen to HKUST. 
                        </p>
                        <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 text-justify">
                          Through fun games and shared meals, this event provides a casual and friendly environment for freshmen to meet fellow Southeast Asian students and connect with seniors. 
                        </p>
                        <div className="space-y-1 sm:space-y-2 text-center">
                          <br />
                          <br />
                          <p className="text-xl sm:text-base md:text-lg">
                            <i className="bi bi-calendar2-week-fill text-[#3468D0]"> <span className="text-black">Sep 5th, 2025</span></i>
                          </p>
                          <p className="text-xl sm:text-base md:text-lg">
                            <i className="bi bi-geo-alt-fill text-[#3468D0]"> <span className="text-black">Hall 7 Common Room</span></i>
                          </p>
                        
                        </div>
                      </div>
                      
                      <div className="mt-3 sm:mt-4 flex justify-center">
                        <button 
                          onClick={() => window.open(event_link,"_blank")} 
                          className='bg-[#3468D0] hover:bg-yellow-500 text-white font-medium py-1.5 sm:py-2 px-4 sm:px-6 rounded-md transition-colors duration-300 shadow hover:shadow-md sm:shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm sm:text-base'
                        >
                          Register Now <span aria-hidden="true">→</span>
                        </button>
                      </div>
                    </div>

                    {/* Poster Section (Right side) */}
                    <div className="lg:w-1/2 w-full flex items-center justify-center p-2 sm:p-3 md:p-4 mt-4 lg:mt-0">
                      <div className="w-full h-full flex items-center justify-center overflow-hidden">
                        {/* Poster Image should roughly be 1200x1778 in aspect ratio */}
                        <img 
                          src={CurrentEventPicture}
                          alt="SEASA Freshman Orientation event"
                          className="lg:max-w-[40vw] lg:max-h-[80vh] h-[45vh] lg:w-auto lg:h-auto object-contain rounded-2xl sm:rounded-3xl shadow-lg"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default CurrentEvent


