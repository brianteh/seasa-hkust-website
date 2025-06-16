import React from 'react'

const ContactCard = ({symbol, title, answer}) => {
  return (
    <div className="p-5 bg-white shadow-md rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
        <div className="flex items-center">
            <div className="rounded-full bg-indigo-100 p-3 flex items-center justify-center">
                {symbol}
            </div>
            <div className="ml-4">
                <p className="font-semibold text-gray-800">
                    {title}
                </p>
                <p className="text-gray-600 mt-1">
                    {answer}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ContactCard