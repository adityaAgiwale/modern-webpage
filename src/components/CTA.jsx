import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginX} ${styles.marginY  } ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
      <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading2}`}>Lets try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept cart payment and grow your business anywhere on a planet.</p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button>Get Started</Button>
      </div>
    </section>
  )
}

export default CTA