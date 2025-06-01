export const CurrentEvent = () =>{
    const event_link = "https://youtube.com"
    return (
        
        <div className='bg-gradient-to-b from-white to-gray-100' id='events'>
        <div className="flex justify-center">
            <div className="text-center md:max-w-xl lg:max-w-3xl ">
                <h1 className="mt-6 px-6 text-4xl font-semibold">Our Current Events</h1>
                {/*Update content here*/}
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    
                </div>
            </div>
        </div>

        {/*Learn more button => links to event_link */}
        <div className="mt-5 flex items-center justify-center gap-x-6 pb-4">
            <button onClick={() => window.open(event_link,"_blank")} className='rounded-md text-black border-transparent py-2 px-4 md:ml-8 hover:bg-white border-solid border-2 hover:border-black hover:text-black duration-500 cursor-pointer'>
            Learn more <span aria-hidden="true">→</span>
            </button>
        </div>

        </div>
       
    )
}


export default CurrentEvent