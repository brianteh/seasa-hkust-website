import SideDecorations from '@/components/SideDecorations.jsx'
import { EventSchema } from '@/components/StructuredData.jsx'
import * as images from '@/assets/images.js'

const EVENT_LINK = 'https://bit.ly/SEASAOday2025'

const UPCOMING_EVENT = {
  name: 'SEASA Freshman Orientation',
  startDate: '2026-09-11',
  description:
    "SEASA Freshman Orientation is SEASA's annual orientation event, welcoming incoming Southeast Asian freshmen to HKUST.",
  location: {
    name: 'Hall 7 Common Room',
    streetAddress: 'The Hong Kong University of Science and Technology, Clear Water Bay',
    addressLocality: 'Hong Kong',
    addressRegion: 'Sai Kung',
    postalCode: '999077',
    addressCountry: 'HK',
  },
  image: images.odayThumbnail2024,
  url: EVENT_LINK,
}

export const CurrentEvent = () => (
  <div className="relative isolate py-10 sm:py-12" id="events">
    <EventSchema {...UPCOMING_EVENT} />
    <SideDecorations
      left={images.eventLeftDecoration}
      right={images.eventRightDecoration}
      className="top-16 md:top-24 w-32 md:w-64 lg:w-80 opacity-90"
    />

    <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
      <div className="relative isolate overflow-hidden rounded-2xl sm:rounded-3xl">
        <img
          src={images.currentEventContainer}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
        />
        <div className="relative flex flex-col gap-5 p-5 sm:gap-6 sm:p-7 lg:gap-7 lg:p-9">
          {/* Section title */}
          <h2 className="Macondo text-center text-xl leading-tight text-white sm:text-3xl lg:text-4xl">
            ————Our Upcoming Event————
          </h2>

          <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            {/* Event details */}
            <div className="text-center">
              <h3 className="text-2xl font-extrabold leading-tight text-white [-webkit-text-stroke:1px_theme(colors.red.700)] sm:text-3xl lg:text-4xl">
                SEASA Freshman Orientation
              </h3>

              <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#210124] sm:mt-4 sm:text-base lg:text-[17px]">
                <p className="lg:text-center">
                  SEASA Freshman Orientation is SEASA&apos;s annual orientation event, set to take place on September
                  11th, 2026. This gathering is designed to warmly welcome incoming Southeast Asian freshmen to HKUST.
                </p>
                <p className="lg:text-justify">
                  Through fun games and shared meals, this event provides a casual and friendly environment for
                  freshmen to meet fellow Southeast Asian students and connect with seniors.
                </p>
              </div>

              <div className="mt-4 flex flex-col items-center gap-2 text-base sm:mt-5 sm:text-lg">
                <p>
                  <i className="bi bi-calendar2-week-fill text-[#3468D0]">
                    <span className="text-black"> Sep 11th, 2026</span>
                  </i>
                </p>
                <p>
                  <i className="bi bi-geo-alt-fill text-[#3468D0]">
                    <span className="text-black"> Hall 7 Common Room</span>
                  </i>
                </p>
              </div>

              <div className="mt-5 flex justify-center">
                <button
                  onClick={() => window.open(EVENT_LINK, '_blank')}
                  className="rounded-md bg-[#3468D0] px-6 py-2 font-medium text-white shadow transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-500 hover:shadow-lg"
                >
                  Register Now <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            {/* Event poster */}
            <div className="flex justify-center">
              <img
                src={images.odayThumbnail2024}
                alt="SEASA Freshman Orientation event"
                className="h-auto w-full max-w-md rounded-xl object-cover shadow-lg sm:max-w-xl lg:max-h-[52vh] lg:max-w-full lg:rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CurrentEvent
