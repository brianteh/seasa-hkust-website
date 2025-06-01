import React, { useState } from 'react'
import { Link } from "react-scroll"
import { TbSquareLetterS } from "react-icons/tb"
import NavLogo from "/src/assets/SEASALogo.png"


const Navbar = () => {
    let Links =[
      // {name:"Home",link:"home"},
      {name:"About",link:"about"},
      {name:"Events",link:"events"},
      {name:"Merch", link:"merch"},
      {name:"Excos", link:"exco"},
      {name:"Join", link:"timeline"},
      {name:"Contact",link:"contact"},

    ];
    let [open,setOpen]=useState(false);


    //Modal 
    // let [myModal, setMyModal] = useState(false)
    // const handleClose = () => {
    //   setMyModal(false)
    // }

  return (
    <div className='w-full fixed top-0 left-0 z-40'>
      <div className='shadow-md md:flex items-center justify-evenly bg-white py-1 md:px-10 px-7 m-4 rounded-md'>
      <Link to={"home"} spy={true} smooth={true} offset={-100} duration={500}>
        <div className='font-semibold text-2xl cursor-pointer flex items-center text-gray-800'>  
          <img src={NavLogo} alt="" className='w-28'/>
        </div>
      </Link>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden m-4'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-6 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 cursor-pointer'>
              <Link to={link.link} spy={true} smooth={true} offset={-100} duration={500} className='text-gray-800 hover:text-indigo-500 duration-500'>{link.name}</Link>
            </li>
          ))
        }

        {/* <button onClick={() => setMyModal(true)} className='rounded-full bg-indigo-600 text-white py-2 px-6 md:ml-8 hover:bg-white border-solid border-2 hover:border-indigo-600 hover:text-indigo-600 duration-500 cursor-pointer'>
            Next Event
        </button>


        <Modal onClose={handleClose} visible={myModal}/> */}
    
      </ul>

        
      </div>
    </div>
  )
}

export default Navbar