import ExcoCard from '@/components/ExcoCard.jsx'
import SideDecorations from '@/components/SideDecorations.jsx'
import { exco } from '@/data/exco.js'

import leftDecoration from '@/assets/excos/leftDecoration.svg'
import rightDecoration from '@/assets/excos/rightDecoration.svg'
import excoTitle from '@/assets/excos/excoTitle.svg'
import excoFullPicture from '@/assets/excos/excoFullPicture.jpg'
import meetTheTeam from '@/assets/excos/meetTheTeam.svg'

const ROW_SIZES = [3, 4, 3]
// On desktop the top row is Ken / Joshua / Abigail so the President sits in
// the centre. On smaller screens the source order keeps Joshua first.
const TOP_ROW_DESKTOP_ORDER = ['lg:order-2', 'lg:order-1', 'lg:order-3']
// Keep the flat data, but lay it out as 3 / 4 / 3 cards per row on desktop.
const excoRows = ROW_SIZES.reduce(
  (acc, size) => {
    acc.rows.push(exco.slice(acc.offset, acc.offset + size))
    acc.offset += size
    return acc
  },
  { offset: 0, rows: [] },
).rows

const Exco = () => (
  <div className="relative overflow-hidden">
    <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-gray-900">
      <img src={excoFullPicture} alt="SEASA Team Photo" className="w-full h-full object-contain" />

      {/* Overlay with "meet the team" text */}
      <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12 lg:pb-16">
        <img src={meetTheTeam} alt="Meet the Team" className="w-96 sm:w-108 md:w-120 lg:w-[800px] xl:w-[900px] h-auto" />
      </div>
    </div>

    <section className="py-6 bg-[#1A223B] dark:text-gray-100 relative" id="exco">
      <SideDecorations
        left={leftDecoration}
        right={rightDecoration}
        className="top-16 md:top-24 w-32 md:w-64 lg:w-80 opacity-90"
      />

      {/* Content container with higher z-index */}
      <div className="container p-4 mx-auto space-y-16 sm:p-10 relative z-10">
        <div className="flex justify-center">
          <img
            src={excoTitle}
            alt="The SEASA Committee - Meet the faces behind SEASA's organization"
            className="w-full max-w-3xl h-auto"
          />
        </div>

        <div className="space-y-8">
          {excoRows.map((members, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 ${
                members.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
              }`}
            >
              {members.map((m, memberIndex) => (
                <ExcoCard
                  key={m.name}
                  className={rowIndex === 0 ? TOP_ROW_DESKTOP_ORDER[memberIndex] : ''}
                  excoimage={m.image}
                  exconame={m.name}
                  excorole={m.role}
                  excoinstalink={m.instagram}
                  excolinkedinlink={m.linkedin}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
)

export default Exco
