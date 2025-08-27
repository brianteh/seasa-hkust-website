import React from 'react'
import LeftTimeline from '/src/components/LeftTimeline'
import RightTimeline from '/src/components/RightTimeline'

//images

import Open from "/src/assets/timeline/open.jpg"
import Closed from "/src/assets/timeline/close.jpg"
import Screening from "/src/assets/timeline/initialscreening.jpg"
import Interview from "/src/assets/timeline/interview2.jpg"
import Result from "/src/assets/timeline/results.jpg"

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
                <RightTimeline timelinedate= {"15 Sept"} timelineimage={Open} timelinetitle={"Subcommittee - Open Recruitment"} timelinedesc={"Register to become a part of SEASA's inner team!"}/>
                <LeftTimeline timelinedate= {"22 Sept"} timelineimage={Closed} timelinetitle={"Subcommittee - Closed Recruitment"} timelinedesc={"Deadline to apply for our Subcommittee division."}/>
                <RightTimeline timelinedate= {"24 Sept"} timelineimage={Screening} timelinetitle={"Initial Screening Results"} timelinedesc={"Interview applicants are announced."}/>
                <LeftTimeline timelinedate= {"26 - 28 Sept"} timelineimage={Interview} timelinetitle={"Interview"} timelinedesc={"Show us your character through an interview with our Executive Committee members!"}/>
                <RightTimeline timelinedate= {"02 Oct"} timelineimage={Result} timelinetitle={"Interview Results"} timelinedesc={"Interview results! Did you make it?"}/>
            </div>
        </div>
    </>
  )
}

export default Timeline