import React from 'react'
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section className={` bg-primary flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:pd-16 px-6`}>
        <div className={`flex flex-row items-center py-[6px] px-4 mb-2 bg-discount-gradient rounded-[10px]`}>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph}`}>
            <span className='text-white'>20%</span> Discount for {" "}
            <span className='text-white'>1 Month</span> Account
          </p>
        </div>

      <div className="flex justify-between items-center flex-row w-full">
        <h1 className='flex-1 font-poppins text-white ss-text-[72px] text-[52px] font-semibold ss:leading-[80px] leading-[75px]'>
      The Next <br className='sm:block hidden'/> 
      <span className='text-gradient'>Generation</span> 
       {" "}
        </h1>

        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted/>
        </div>
      </div>

          <div>
            <h1 className='flex-1 font-poppins text-white ss-text-[68px] text-[52px] font-semibold ss:leading-[80px] leading-[75px]'>
            Payment Method.
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins text-[16px]`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
          </div>
        </div>

{/*  */}
        <div className={`flex-1 flex-row relative ${styles.flexStart} md:my-0 my-10`}>
          <img src={robot} alt='robot' 
            className='w-[100%] h-[100%] relative z-[5] '
            />

          <div className={`absoulte w-[40%] h-[35%] top-0 z-[0] pink__gradient`}/>
          <div className={`absoulte w-[80%] h-[80%] rounded-full bottom-40 z-[1] white__gradient`}/>
          <div className={`absoulte w-[50%] h-[50%] right-20 bottom-20 z-[0] blue__gradient`}/>
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted/>
        </div>
  
    </section>
  )
}

export default Hero