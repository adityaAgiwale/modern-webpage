import React from 'react'
import { arrowUp } from '../assets'
import styles from '../style'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
            <div className={` ${styles.flexStart} flex-row`}>
                <p className='font-poppins font-medium text-[18px] mr-2 leading-[18px]'>
                    <span className={`text-gradient `}>Get</span>
                </p>
                <img src={arrowUp} alt='arrow' className='w-[23px] h-[23px]'/>
            </div>
            <div className={` ${styles.flexStart} flex-row`}>
                <p className='font-poppins font-medium text-[18px] leading-[18px]'>
                    <span className={`text-gradient `}>Started</span>
                </p>
               
            </div>
        </div>
    </div>
  )
}

export default GetStarted