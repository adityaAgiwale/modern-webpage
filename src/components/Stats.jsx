import React from 'react'
import { stats } from '../constants'
import styles from '../style'


const Stats = () =>  (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat, index) =>(
        <div key={index} className={`flex-1 flex justify-start sm:flex justify-center items-center flex-row m-3`}>
          <h4 className="font-poppins text-white font-semibold xs:text-[40px] text-[28px] xs:leading-[53px] leading-[43px]">{stat.value}</h4>
          <p className="font-poppins text-gradient font-normal xs:text-[20px] text-[13px] xs:leading-[26px] leading-[20px] uppercase ml-3">{stat.title}</p>
        </div>
      ))}
    </section>
  )

export default Stats