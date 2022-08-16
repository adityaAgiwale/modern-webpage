import React, { useState } from 'react'
import {logo, close, menu} from '../assets';
import {navLinks} from '../constants';
import styles from '../style';

const Navbar = () => {
  const [toggelMenu, setToggeleMenu] = useState(false);

  return (
    <nav className={`w-full flex flex-row py-6 justify-center items-center`}>
      <img src={logo} alt='logo' className='w-[124px] h-[35px]'/>
      <ul className={`list-none sm:flex hidden justify-end items-center flex-1`}>
        {navLinks.map((link, index) => (
          <li key={index} className={`text-white font-poppins font-normal text-[16px] ${index === navLinks.length -1 ? 'mr-0': 'mr-10'} `}> 
            <a href={link.id}>{link.title}</a>
          </li> 
        ))}
      </ul>

      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        <img src={toggelMenu ? close : menu} alt='menu' className='w-[24px] h-[24px]' onClick={() => setToggeleMenu((prev) => !prev)}/>
      </div>

      <div className={` ${toggelMenu ? 'flex': 'hidden' } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className={`list-none flex flex-col justify-end items-center flex-1`}>
            {navLinks.map((link, index) => (
              <li key={index} className={`text-white font-poppins font-normal text-[16px] ${index === navLinks.length -1 ? 'mr-0': 'mb-4'} `}> 
                <a href={link.id}>{link.title}</a>
              </li> 
            ))}
          </ul>
      </div>
    </nav>
  )
}

export default Navbar