import React from 'react'
import ExcoCard from '/src/components/ExcoCard'
import temp from "/src/assets/default.jpg"

//images
import Adel from "/src/assets/excos/adel.png"
import Akshita from "/src/assets/excos/akshita.png"
import Austin from "/src/assets/excos/austin.png"
import Felita from "/src/assets/excos/felita.png"
import Gia from "/src/assets/excos/gia.png"
import Nathan from "/src/assets/excos/nathan.png"
import Nevio from "/src/assets/excos/nevio.png"
import Nicholas from "/src/assets/excos/nicholas.png"
import Renard from "/src/assets/excos/renard.png"
import Samantha from "/src/assets/excos/samantha.png"


import ZiYang from "/src/assets/excos/Zi Yang.jpg"
const ZiYangIG = "https://www.instagram.com/_ziyang04/"
import Jessica from "/src/assets/excos/Jessica.jpg"
const JessIG = "https://www.instagram.com/jessica.visakha/"
import Alicia from "/src/assets/excos/Alicia.jpg"
const AliciaIG = "https://www.instagram.com/aliciadstny/"
import Faustina from "/src/assets/excos/faus1.jpg"
const FausIG = "https://www.instagram.com/faustinafaviola/"
import Andrew from "/src/assets/excos/Andrew.jpg"
const AndrewIG = "https://www.instagram.com/andrew67sebastian/"
import Audrey from "/src/assets/excos/Audrey.jpg"
const AudreyIG = "https://www.instagram.com/mei_dyana/"
import Katharine from "/src/assets/excos/Katharine.jpg" 
const KatharineIG = "https://www.instagram.com/yur.katharine/"
import Bryant from "/src/assets/excos/Bryant.jpg"
const BryantIG = "https://www.instagram.com/bryantchang_/"
import Angel from "/src/assets/excos/Angel.jpg"
const AngelIG = "https://www.instagram.com/angelicafisilo/"
import Tessa from "/src/assets/excos/Tessa.jpg"
const TessaIG = "https://www.instagram.com/tessa.rebca/"


const Exco = () => {
  return (
    <div>
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100" id="exco">
            <div className="container p-4 mx-auto space-y-16 sm:p-10">
                <div className="space-y-4 text-center">
                    <h3 className="text-2xl font-bold sm:text-5xl">The SEASA Team</h3>
                    <p className="text-center ">Meet the faces behind SEASA's organization</p>
                </div>
                {/* sm:grid-cols-2 lg:grid-cols-4 */}
                <div className="grid w-full grid-cols-1 gap-x-3 gap-y-12">
                    <div className='grid grid-cols-3'>
                        <ExcoCard excoimage={Bryant} exconame={"Bryant"} excorole={"External VP"} excoinstalink={BryantIG} excolinkedinlink={"adwadad"}/>
                        <ExcoCard excoimage={Andrew} exconame={"Andrew"} excorole={"President"} excoinstalink={AndrewIG} excolinkedinlink={"adwadad"}/>
                        <ExcoCard excoimage={ZiYang} exconame={"Zi Yang"} excorole={"Internal VP"} excoinstalink={ZiYangIG} excolinkedinlink={"adwadad"}/>
                    </div>
                    <div className='grid grid-cols-4'>
                        <ExcoCard excoimage={Alicia} exconame={"Alicia"} excorole={"Events and Logistics"} excoinstalink={AliciaIG} excolinkedinlink={"adwadad"}/>
                        <ExcoCard excoimage={Jessica} exconame={"Jessica"} excorole={"Events and Logistics"} excoinstalink={JessIG} excolinkedinlink={"adwadad"}/>
                        <ExcoCard excoimage={Tessa} exconame={"Tessa"} excorole={"Secretary"} excoinstalink={TessaIG} excolinkedinlink={"adwadad"}/>
                        <ExcoCard excoimage={Faustina} exconame={"Faustina"} excorole={"IT"} excoinstalink={FausIG} excolinkedinlink={"adwadad"}/>
                        
                    </div>
                    <div className='grid grid-cols-3'>
                        <ExcoCard excoimage={Katharine} exconame={"Katharine"} excorole={"Finance"} excoinstalink={KatharineIG} excolinkedinlink={"adwadad"}/>
                        <ExcoCard excoimage={Audrey} exconame={"Audrey"} excorole={"Design and Media"} excoinstalink={AudreyIG} excolinkedinlink={"adwadad"}/>
                        <ExcoCard excoimage={Angel} exconame={"Angel"} excorole={"Design and Media"} excoinstalink={AngelIG} excolinkedinlink={"adwadad"}/>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Exco