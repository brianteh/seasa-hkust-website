import React from 'react'
import LeftTimeline from '../components/LeftTimeline'
import RightTimeline from '../components/RightTimeline'

//images
import Interview from "../assets/timeline/interview.jpg"
import Notification from "../assets/timeline/notification.jpg"
import Selection from "../assets/timeline/selection.jpg"
import Training from "../assets/timeline/training.jpg"


const Timeline = () => {
  return (
    <>
        <div className=" mx-auto w-full h-full" id="timeline">
            <div className='text-center'>
                <span className="block mb-2 text-lg font-semibold text-primary">
                    Tiers of our membership
                </span>
                <h2 className="mb-4 text-dark sm:text-4xl md:text-[40px] font-semibold">
                    <span>Support Us</span>
                </h2>
                <p className="text-base text-body-color">
                    If you are interested to join our organization, <br></br>
                    please refer to the provided timeline as a guide 
                </p>
            </div>
            <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2" ></div>     
                    <RightTimeline timelineimage={Notification} timelinetitle={"Member"} timelinedesc={"Acquire merchandise ahead of the crowd, discounted prices on all of our events and a digital membership card!"} />
                    <RightTimeline timelineimage={Notification} timelinetitle={"Member"} timelinedesc={"Acquire merchandise ahead of the crowd, discounted prices on all of our events and a digital membership card!"} />
                    <LeftTimeline timelineimage={Interview} timelinetitle={"Subco - Open Re"} timelinedesc={"Join our interview and be selected to be one of us. Work together with our Exco's and bring our events to life."}/>
                    <RightTimeline timelineimage={Selection} timelinetitle={"Exco"} timelinedesc={"Make event changing decisions and also receive several perks that subco's and member's don't receive."}/>
                    <LeftTimeline timelineimage={Training} timelinetitle={"President"} timelinedesc={"Become the leader of SEASA"}/>
            </div>
        </div>
    </>
  )
}

export default Timeline