import React from 'react'

const CustomButton = ({buttonClass, title}) => {
  return (
    <div>
        <a className={buttonClass} href="#0">{title}</a>
    </div>
  )
}

export default CustomButton
