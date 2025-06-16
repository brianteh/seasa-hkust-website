import React from 'react'
import ContactCard from '/src/components/ContactCard'
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
        <div className="container mt-24 mb-10 mx-auto px-6" id='contact'>
            <section className="mb-10">
                <div className="flex justify-center">
                    <div className="text-center md:max-w-xl lg:max-w-3xl mb-12">
                        <h1 className='mb-3 px-6 font-semibold text-3xl'>
                            Contact Us
                        </h1>
                        <p className='px-6 text-gray-600'>
                            Use the following information to reach us.
                        </p>
                    </div>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ContactCard 
                            symbol={<FaPhone className="text-indigo-600 text-xl" />} 
                            title={"Phone Number"} 
                            answer={"+1 234 567 890"}
                        />
                        <ContactCard 
                            symbol={<FaEnvelope className="text-indigo-600 text-xl" />} 
                            title={"Email"} 
                            answer={"seasa@gmail.com"}
                        />
                        <ContactCard 
                            symbol={<FaInstagram className="text-indigo-600 text-xl" />} 
                            title={"Instagram"} 
                            answer={"@seasa_hkust"}
                        />
                        <ContactCard 
                            symbol={<FaLinkedin className="text-indigo-600 text-xl" />} 
                            title={"LinkedIn"} 
                            answer={"SEASA HKUST"}
                        />
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Contact