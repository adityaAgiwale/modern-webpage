import React from 'react'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
import styles from '../style'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className={` flex-1 flex flex-col justify-start mr-10`}>	
          <img src={logo} alt="logo" className={`w-[266px] h-[76px] object-contain `}/>
          <p className={ `${styles.paragraph} mt-4 max-w-[310px]`}> A new way to make the payment easy, reliable and secure.</p>
        </div>

        <div className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10`}>
          {footerLinks.map((link, index) => (
            <div className={` flex flex-col ss:my-0 my-4 min-w-[150px] `} key={index}>  
              <h4 className={`font-poppins font-medium text-[18px] leading-[27px] text-white `}>{link.title}</h4>
              <ul className='list-none mt-4'>
                {link.links.map((subLinks, index) => (
                  <li key={index} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== link.links.length -1 ? "mb-4": "mb-0"}`}>{subLinks.name}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>  

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t'>
        <p className={`font-poppins font-normal text-[18px] leading-[27px] text-white `}>
        &#169; 2022 Website. All rights reserved.
        </p>

        <div className='flex flex-row md:mt-0 mt-6 '>
            {socialMedia.map((social, index) => (
              <img src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? "mr-6" : "mr-0"}`} key={social.id}/>          
            ))}
        </div>
      </div>
    </section>
  )
}

export default Footer