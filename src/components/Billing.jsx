import React from 'react'
import styles, { layout } from '../style'
import { apple, bill, google } from '../assets'


const Billing = () => {
  return (
    <section className={`${layout.sectionReverse} ${styles.paddingX}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="bill" className={`w-[100%] h-[100%] relative z-[5]`}/>

        <div className={`absolute z-[3] left-1/2 top-0 rounded-full w-[50%] h-[50%] white__gradient `}/>
        <div className={`absolute z-[0] left-1/2 bottom-0 rounded-full w-[50%] h-[50%] pink__gradient `}/>

      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Easily Control your <br className={`sm:block hidden`}/>billing & invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>


        <div className={`flex flex-row flex-wrap sm:mt-10 mt-6`}>
          <img src={apple} alt="apple_store" className={`w-[126px] h-[42px] cursor-pointer object-contain mr-5`}/>
          <img src={google} alt="google_store" className={`w-[126px] h-[42px] cursor-pointer object-contain`}/>
        </div>

      </div>
    </section>
  )
}

export default Billing