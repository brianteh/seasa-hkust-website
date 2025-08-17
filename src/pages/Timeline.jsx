import React from 'react'
import LeftTimeline from '/src/components/LeftTimeline'
import RightTimeline from '/src/components/RightTimeline'

//images
import Interview from "/src/assets/timeline/interview.jpg"
import Notification from "/src/assets/timeline/notification.jpg"
import Selection from "/src/assets/timeline/selection.jpg"
import Training from "/src/assets/timeline/training.jpg"


const Timeline = () => {
  return (
    <>
        <div className="mx-auto w-full h-full" id="timeline">
            <div className='text-center px-4'>
                <span className="block mb-2 text-lg font-semibold text-primary pt-16 md:pt-20">
                    Tiers of our membership
                </span>
                <h2 className="mb-4 text-dark text-3xl sm:text-4xl md:text-[40px] font-semibold">
                    <span>Support Us</span>
                </h2>
                <p className="text-base text-body-color px-4">
                    If you are interested to join our organization, <br className="hidden md:block"></br>
                    please refer to the provided timeline as a guide 
                </p>
            </div>
            
            {/* Fixed timeline container - removed overflow-hidden and added extra padding for mobile */}
            <div className="relative wrap p-4 md:p-10 h-full pt-12 md:pt-4">
                {/* The vertical timeline line - unchanged */}
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
                
                {/* Timeline entries - unchanged */}
                <RightTimeline timelinedate= {"20 Sep"} timelineimage={Notification} timelinetitle={"Subcommittee - Open Recruitment"} timelinedesc={"Register to become a part of SEASA's inner team!"}/>
                <LeftTimeline timelinedate= {"02 Oct"} timelineimage={Interview} timelinetitle={"Subcommittee - Closed Recruitment"} timelinedesc={"Deadline to apply for our Subcommitte division."}/>
                <RightTimeline timelinedate= {"04 - 05 Oct"} timelineimage={Selection} timelinetitle={"Initial Screening Results"} timelinedesc={"Interview applicants are announced."}/>
                <LeftTimeline timelinedate= {"07 Oct"} timelineimage={Selection} timelinetitle={"Interview"} timelinedesc={"Show us your character through an interview with our Executive Committee members!"}/>
                <RightTimeline timelinedate= {"08 Oct"} timelineimage={Training} timelinetitle={"Interview Results"} timelinedesc={"Interview results! Did you make it?"}/>
            </div>
        </div>
    </>
  )
}

export default Timeline