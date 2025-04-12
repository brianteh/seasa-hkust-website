import React from "react"

const RightTimeline = ({timelinedate, timelineimage, timelinetitle, timelinedesc}) => {
    return (
        <div className="mb-20 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex flex-col items-center justify-center order-1 bg-cyan-900 shadow-xl w-40 h-40 rounded-full text-white">
                <h1 className="text-2xl">{timelinedate} </h1>
                <p>2023</p>
                {/* <img src={timelineimage} className="object-cover w-36 h-36 rounded-full"></img> */}
            </div>
            <div className="order-1 bg-indigo-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">{timelinetitle}</h3>
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                    {timelinedesc}
                </p>
            </div>
        </div>
    )
}

export default RightTimeline