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
                    <RightTimeline timelineimage={Notification} timelinetitle={"Subcommittee - Open Recruitment"} timelinedesc={"Register to become a part of SEASA's inner team!"}/>
                    <LeftTimeline timelineimage={Interview} timelinetitle={"Subcommittee - Closed Recruitment"} timelinedesc={"Deadline to apply for our Subcommitte division."}/>
                    <RightTimeline timelineimage={Selection} timelinetitle={"Initial Screening Results"} timelinedesc={"Interview applicants are announced."}/>
                    <Left timelineimage={Selection} timelinetitle={"Interview"} timelinedesc={"Show us your character through an interview with our Executive Committee members!"}/>
                    <RightTimeline timelineimage={Training} timelinetitle={"Interview Results"} timelinedesc={"Interview results! Did you make it?"}/>
            </div>
        </div>

        {/* <RightTimeline timelineimage={Notification} timelinetitle={"Member"} timelinedesc={"Acquire merchandise ahead of the crowd, discounted prices on all of our events and a digital membership card!"} /> */}
    </>
  )
}

export default Timeline