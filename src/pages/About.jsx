import React from "react";
import ServiceCard from "../components/AboutCard";
import {FaGlobeAmericas} from "react-icons/fa"
import {BsPeopleFill} from "react-icons/bs"
import {TbTargetArrow} from "react-icons/tb"

const Service = () => {
  return (
    <section className="w-full pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]" id="about">
      <div className="">
        <div className="flex items-center">
          <div className="w-full px-4 flex items-center">
            <div className="mx-auto mb-12 w-[1000px] text-center lg:mb-16">
              {/* <span className="block mb-2 text-lg font-semibold text-primary">
                Our Services
              </span> */}
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                About Us
              </h2>
              <p className="">
              The South East Asian Student Association(SEASA) is part of HKUST which was founded in 2016.
              SEASA is the second largest international organization on campus, with over 100 members 
              and hosting 20+ events.
              Our primary goal is to represent the interests of overseas students while promoting
              cultural exchange within the campus.
              </p>
            </div>
          </div>
        </div>
        <div className="grid place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Diverse Community"
            details="We strive to create a diverse community of HKUST students from various cultures and backgrounds."
            icon={
                <FaGlobeAmericas className="w-16 h-16 text-red-600"/>
            }
          />
          <ServiceCard
            title="Unlimited Membership"
            details="Regardless of your background, you are encouraged to become a part of our community."
            icon={
              <BsPeopleFill className="w-16 h-16 text-cyan-600"/>

            }
          />
          <ServiceCard
            title="Our Goal"
            details="SEASA is an advocate for all HKUST students and plan to support them all through their experiences."
            icon={
              <TbTargetArrow className="w-16 h-16 text-yellow-600"/>
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
