import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primarry outline-none ${styles} rounded-[10px]`}>
      Start Learning!
    </button>
  )
}

export default Button