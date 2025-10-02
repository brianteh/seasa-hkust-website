
const Card = ({eventimage, eventname, eventdesc,event_link}) => {
  {/* NOTE: event_ig_link should show start with 'https://' as prefix */}
  return (
    <div>
        <div className="max-w-md overflow-hidden m-4 grid grid-cols-1 border-2 border-gray-200 rounded-lg shadow-lg">
          <img onClick={()=> window.open(event_link, "_blank")} className="w-full transition-transform duration-300 transform hover:scale-105 hover:rotate-3 object-cover h-60 w-full" src={eventimage} alt="Event image"/>
          <div className="px-6 py-4 text-center">
              <div className="font-semibold text-lg mb-2 ">{eventname}</div>
              <p className="text-gray-700 text-base">
                {eventdesc}
              </p>
              <div className="mt-5 flex justify-center pb-4">
                <button 
                  onClick={() => window.open(event_link,"blank")} 
                  className='relative rounded-md text-black border-black py-2 px-6 hover:bg-white border-solid border-2 hover:border-black hover:text-black duration-300 cursor-pointer transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl hover:shadow-yellow-200/30 animate-pulse hover:animate-none'
                >
                More...
                </button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Card