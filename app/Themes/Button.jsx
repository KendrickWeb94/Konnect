

import React from 'react'

const Button = (props) => {
  return (
    <button className='sm:p-2 text-sm p-3 w-fit rounded-md hover:bg-blue-400 smooth bg-blue-500 text-white font-semibold '>{props.buttonText}</button>
  )
}

export default Button