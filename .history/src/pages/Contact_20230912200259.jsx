import React from 'react'
import ContactCard from '../components/ContactCard'
import { FaBeer } from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
        <div className="container mt-24 mb-10 mx-auto px-6" id='contact'>
            <section className="mb-10">
                <div className="flex justify-center">
                    <div className="text-center md:max-w-xl lg:max-w-3xl mb-12">
                        <h1 className=' mb-3 px-6 font-semibold text-3xl'>
                                Contact Us
                        </h1>
                        <p className='px-6 text-gray-600'>
                            Use the following infromation to send us your inquiry.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="col-span-5 mb-10 w-full md:px-3 lg:mb-0 lg:px-6">
                        <form>
                            <div className="relative mb-6">
                                <input type="text" className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput90" placeholder="Name" />
                        <label
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        for="exampleInput90">Name
                        </label>
                    </div>
                    <div class="relative mb-6" >
                        <input type="email"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput91" placeholder="Email address" />
                        <label
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        for="exampleInput91">Email address
                        </label>
                    </div>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <textarea
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                        <label for="exampleFormControlTextarea1"
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Message</label>
                    </div>
                    
                    <button type="button" 
                        className="mb-6 inline-block w-full rounded bg-indigo-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Send
                    </button>
                    </form>
                    </div>  
                    <div class="w-full col-span-7">
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <ContactCard symbol={<FaBeer />} title={"PhoneNumber"} answer={"+1 234 567 890"}/>
                            <ContactCard symbol={<FaBeer />} title={"Outlook Email"} answer={"+1 234 567 890"}/>
                            <ContactCard symbol={<FaBeer />} title={"Gmail"} answer={"+1 234 567 890"}/>
                            <ContactCard symbol={<FaBeer />} title={"Address"} answer={"+1 234 567 890"}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Contact