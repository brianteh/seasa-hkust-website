import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-amber-300 text-center dark:bg-neutral-700 lg:text-center">
            <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
                <p className="text-neutral-800 ">©{new Date().getFullYear()} Copyright: SEASA HKUST</p>
            </div>
        </footer>

    </div>
  )
}

export default Footer