

import React from 'react'

const Comment = (props) => {
  return (
    <div className=' w-fit p-2 smooth rounded-md h-auto bg-white text-xs shadow-2xl text-break '>{props.comment}</div>
  )
}

export default Comment