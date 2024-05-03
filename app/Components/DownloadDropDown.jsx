

import React from 'react'
import DropDownCard from '../UI/DropDownCard'

const DownloadDropDown = () => {
  return (
        <DropDownCard  >
    <div className=' text-[13px] font-normal'>
           <li className="w-full text-gray-500 items-center justify-center list-none p-2 smooth hover:bg-gray-400/30 rounded-sm ">
                Free trial
           </li>
         
           <li className="w-full text-gray-500 items-center justify-center list-none p-2 smooth hover:bg-gray-400/15 rounded-sm ">
                Paid
           </li>
    </div>
        </DropDownCard>
  )
}

export default DownloadDropDown