

import React from 'react'
import Header from '../Components/Header'
import HeroBody from '../Components/HeroBody'

const HeroTheme = () => {
  return (
    <div className='@container bg-transparent mx-auto w-full min-h-auto'>
        <div className="mx-auto  w-full min-h-auto">
            <div className="w-full relative mx-auto max-w-[95%]">
                <Header />
                <br></br>
                <HeroBody />
           </div>
        </div>
    </div>
  )
}

export default HeroTheme