import React from 'react'

const CustomButton = ({buttonClass, title}) => {
  return (
    <a className={buttonClass} href="#0">{title}</a>
  )
}

export default CustomButton