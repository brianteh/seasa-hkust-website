import React from 'react'

const ContactCard = ({symbol, title, answer}) => {
  return (
    <>
        <div class="mb-6 md:mr-12 lg:mr-12 w-80 md:px-3 lg:px-6 bg-gray-50 py-12 rounded-xl">
            <div class="flex">
                <div class="">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary text-3xl">
                        {symbol}
                    </div>
                </div>
                <div class="ml-6">
                    <p class="mb-3 font-semibold dark:text-white">
                        {title}
                    </p>
                    <p class="text-neutral-500 dark:text-neutral-200">
                        {answer}
                    </p>
                </div>
            </div>
        </div>

    </>
  )
}

export default ContactCard