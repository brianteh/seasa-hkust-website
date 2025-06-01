import React from 'react'
import temp from "/src/assets/default.jpg"

const Modal = ({visible, onClose}) => {
    if (!visible){
        return null
    }
    return (
        <div className='fixed z-50 inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center'>
            <div className='bg-white p-2 rounded-md grid justify-items-center'>
                <img src={temp} className='max-w-sm m-3'/>
          
                <button onClick={onClose} className='rounded-full bg-indigo-600 text-white py-2 px-6  hover:bg-white border-solid border-2 hover:border-indigo-600 hover:text-indigo-600 duration-500'>
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal