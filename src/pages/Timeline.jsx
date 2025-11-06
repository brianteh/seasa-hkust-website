import React from 'react'
import LeftTimeline from '/src/components/LeftTimeline'
import RightTimeline from '/src/components/RightTimeline'

//images

import Open from "/src/assets/timeline/open.jpg"
import Closed from "/src/assets/timeline/close.jpg"
import Screening from "/src/assets/timeline/initialscreening.jpg"
import Interview from "/src/assets/timeline/interview2.jpg"
import Result from "/src/assets/timeline/results.jpg"

const STEPS = [
  { step: 1, isoDate: '2025-09-15', title: 'Subcommittee – Open Recruitment', status: 'past', image: Open },
  { step: 2, isoDate: '2025-09-22', title: 'Subcommittee – Closed Recruitment', status: 'past', image: Closed },
  { step: 3, isoDate: '2025-09-24', title: 'Initial Screening Results', status: 'past', image: Screening },
  { step: 4, isoDate: '2025-09-26', title: 'Interview', status: 'past', image: Interview },
  { step: 5, isoDate: '2025-10-02', title: 'Interview Results', status: 'past', image: Result },
];

export const computeSpineMode = ({ status, spineMode }) =>
  spineMode ?? ((status === 'upcoming' || status === 'open') ? 'date' : 'number');

const statusTagStyle = {
  open:    'bg-emerald-100 text-emerald-700',
  upcoming:'bg-amber-100 text-amber-700',
  past:    'bg-indigo-100 text-indigo-700',
};

export function SpineNode({ mode, dateStr, step }) {
  const base =
    "relative z-20 flex items-center justify-center rounded-full " +
    "bg-neutral-900 text-white " +
    "w-24 h-24 md:w-28 md:h-28 " +
    "font-bold shadow-lg ring-2 ring-neutral-700";

  if (mode === "date") {
    const d = new Date(dateStr);
    const dd = d.toLocaleDateString(undefined, { day: "2-digit" });
    const mmm = d.toLocaleDateString(undefined, { month: "short" });
    const yyyy = d.getFullYear();

    return (
      <div className={base} aria-label={`Date ${dd} ${mmm} ${yyyy}`}>
        <div className="text-center leading-tight">
          <div className="text-base md:text-xl">{dd} {mmm}</div>
          <div className="text-[10px] md:text-sm opacity-95">{yyyy}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={base} aria-label={`Step ${step}`}>
      <span className="text-xl md:text-2xl">{step}</span>
    </div>
  );
}

const Timeline = () => {
  return (
    <>
        <div className="mx-auto w-full h-full" id="timeline">
            <div className='text-center px-4'>
                <span className="block mb-2 text-lg font-semibold text-primary pt-16 md:pt-20">
                    Application Timeline
                </span>
                <h2 className="mb-4 text-dark text-3xl sm:text-4xl md:text-[40px] font-semibold">
                    <span>Join Our Team</span>
                </h2>
                <p className="text-base text-body-color px-4">
                    If you are interested in becoming part of our organization, <br className="hidden md:block"></br>
                    please refer to the steps below to understand our application process 
                </p>
            </div>
            
            <div className="relative wrap p-4 md:p-10 pt-10" role="list">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-neutral-200 -z-10 pointer-events-none"></div>
                {STEPS
                  .sort((a, b) => a.step - b.step)
                  .map((item, idx) => {
                    const side = idx % 2 === 0 ? 'right' : 'left';
                    const Component = side === 'right' ? RightTimeline : LeftTimeline;
                    return (
                      <Component
                        key={item.step}
                        timelinestep={item.step}
                        timelinetitle={item.title}
                        timelinedesc={item.desc}
                        timelinestatus={item.status}
                        isoDate={item.isoDate}
                        spineMode={item.spineMode}
                        timelineimage={item.image}
                        statusClass={statusTagStyle[item.status]}
                        icon={item.icon}
                      />
                    );
                  })}
                {/* <div className="mt-6 md:mt-10 flex justify-center">
                  <a
                    href="#apply"
                    className="inline-flex items-center px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label="Apply to SEASA"
                  >
                    Apply Now
                  </a>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Timeline