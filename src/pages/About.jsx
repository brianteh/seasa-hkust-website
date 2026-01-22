import React from "react";
import SEO from "../components/SEO";
import ServiceCard from "/src/components/AboutCard";
import {FaGlobeAmericas} from "react-icons/fa"
import {BsPeopleFill} from "react-icons/bs"
import {TbTargetArrow} from "react-icons/tb"

const Service = () => {
  return (
    <section className="w-full pt-24 pb-16 lg:pt-[80px] lg:pb-[120px]" id="about">
      <SEO 
          title="SEASA @ HKUST"
          description="SEASA is the second largest international organization on HKUST campus, with over 100 members and hosting 20+ events"
          keywords="SEASA, seasa, Southeast Asian students HKUST, hkust seasa"
      />
      <div className="">
        <div className="flex items-center bg-amber-200 py-10 lg:py-16">
          <div className="w-full px-4 flex items-center">
            <div className="mx-auto mb-2 w-full text-center lg:mb-4">
              {/* <span className="block mb-2 text-lg font-semibold text-primary">
                Our Services
              </span> */}
              <h2 className="mb-8 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl tracking-tight [-webkit-text-stroke:3px_theme(colors.red.600)]">
                Who We Are
              </h2>
              <div className="flex justify-center">
                <p className="max-w-4xl text-lg leading-relaxed">
                The South East Asian Student Association(SEASA) is part of HKUST which was founded in 2016.
                SEASA is the second largest international organization on campus, with over 100 members 
                and hosting 20+ events.
                Our primary goal is to represent the interests of overseas students while promoting
                cultural exchange within the campus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-red-600">
          <ServiceCard
            title="Diverse Community"
            details="We strive to create a diverse community of HKUST students from various cultures and backgrounds."
            icon={
                <FaGlobeAmericas className="w-24 h-24 text-amber-300"/>
            }
          />
          <ServiceCard
            title="Unlimited Membership"
            details="Regardless of your background, you are encouraged to become a part of our community."
            icon={
              <BsPeopleFill className="w-24 h-24 text-amber-300"/>

            }
          />
          <ServiceCard
            title="Our Goal"
            details="SEASA is an advocate for all HKUST students and plan to support them all through their experiences."
            icon={
              <TbTargetArrow className="w-24 h-24 text-amber-300"/>
            }          
            />

{/*           
          <ServiceCard
            title="Teammates"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <FaBeer className="w-6 h-6"/>

            }
          />
          <ServiceCard
            title="People"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <FaBeer className="w-6 h-6"/>

            }
          />
          <ServiceCard
            title="Regular Updates"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <FaBeer className="w-6 h-6"/>

            }
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Service;
