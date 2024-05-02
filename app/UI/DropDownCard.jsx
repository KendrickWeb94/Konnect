

import React from 'react'

const DropDownCard = ({children}) => {
  return (
    <div className=' w-[100px] rounded-md  border text-green-500 bg-white py-1 shadow-md flex-center-col'>
        {children}
    </div>
  )
}

export default DropDownCard