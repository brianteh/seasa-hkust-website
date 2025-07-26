
const Card = ({eventimage, eventname, eventdesc,event_link}) => {
  {/* NOTE: event_ig_link should show start with 'https://' as prefix */}
  return (
    <div>
        <div className="max-w-md overflow-hidden m-4 grid grid-cols-1 ">
          <img onClick={()=> window.open(event_link, "_blank")} className="w-full transition-transform duration-300 transform hover:scale-105 hover:rotate-3 object-cover h-60 object-cover h-60 w-full" src={eventimage} alt="Sunset in the mountains"/>
          <div className="px-6 py-4 text-center">
              <div className="font-semibold text-lg mb-2 ">{eventname}</div>
              <p className="text-gray-700 text-base">
                {eventdesc}
              </p>
              <div className="mt-5 flex items-center justify-center gap-x-6 pb-4">
                <button onClick={() => window.open(event_link,"_blank")} className='rounded-md text-black border-transparent py-2 px-4 md:ml-8 hover:bg-white border-solid border-2 hover:border-black hover:text-black duration-500 cursor-pointer'>
                More...
                </button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Card