import React from "react";

const LeftTimeline = ({timelineimage, timelinetitle, timelinedesc}) => {
    return (
        <div class="mb-20 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            {/* <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full"> */}
            <div className="z-20 flex flex-col items-center justify-center order-1 border-solid border-2 border-cyan-900 bg-white shadow-xl w-40 h-40 rounded-full font-semibold text-cyan-900">
                {/* <img src={timelineimage} className="object-cover w-36 h-36 rounded-full"></img> */}
                <h1 className="text-2xl">25 Sept</h1>
                <p>2023</p>
            </div>
            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-white text-xl">{timelinetitle}</h3>
                <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">{timelinedesc}</p>
            </div>
        </div>
    )
}

export default LeftTimeline