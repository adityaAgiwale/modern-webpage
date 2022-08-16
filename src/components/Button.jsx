import React from 'react'

const Button = ({styles}) => {
  return (
    <button className={`py-4 px-6 bg-blue-gradient font-poppins text-[18px] font-medium text-primary outline-none ${styles} rounded-[4px]`}>Get Started</button>
  )
}

export default Button