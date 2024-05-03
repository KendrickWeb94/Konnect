

import Image from 'next/image'
import React from 'react'
import user1 from "../images/balazs-orban.png"
import user2 from "../images/evil-rabbit.png"
import user3 from "../images/jared-palmer.png"
import user4 from "../images/lee-robinson.png"
import user5 from "../images/hector-simpson.png"
import user6 from "../images/guillermo-rauch.png"
import Comment from './Comment'
import Button from '../Themes/Button'
import Collaboration from '../Themes/Collaboration'


const HeroBody = () => {
  return (
    <section className='@container py-4 pb-16'>
      <div className=' w-full flex justify-between  items-center '>
       <div className="  space-y-7">
       <div className=' font-bold text-white text-balance text-[min(7vw,70px)]'>Do more together<br></br> as a <span className=' text-blue-500 italic font-extrabold'>"Team"</span></div>
            <p className="text-gray-200 text-[13px] leading-6">
                konnect is a social media app .not only an app it is for teams and those who wants to do work together 
            </p>
            <p className=' text-white text-sm'>  over +50K | Active Users</p>
            
            <Button buttonText="Download App"><p></p></Button>
            <Collaboration />
         
       </div>  
          <div className=" lg:flex ds:hidden cursor-pointer  flex-col space-y-6">
            
                <main className='  flex hover-parent items-center flex-row-reverse gap-4 smooth'>
                  <Image src={user1} className=' w-9 h-9 object-cover rounded-full'/>
                  <span className=' hover-class smooth'><Comment comment="ive used this and it is great nice work Konnect"/></span>
                </main>
                <main className=' flex hover-parent items-center flex-row-reverse gap-4 smooth'>
                  <Image src={user2} className=' w-9 h-9 object-cover rounded-full'/>
                  <span className=' hover-class smooth'><Comment comment="
Welcome to the enterprise
this isnt televised
"/></span>
                </main>
                <main className=' flex hover-parent items-center flex-row-reverse gap-4 smooth'>
                  <Image src={user3} className=' w-9 h-9 object-cover rounded-full'/>
                  <span className=' hover-class smooth'><Comment comment="looking bright , its a sunny day
i got a feeling that's its gon be good today"/></span>
                </main>
                <main className=' flex hover-parent items-center flex-row-reverse gap-4 smooth'>
                  <Image src={user4} className=' w-9 h-9 object-cover rounded-full'/>
                  <span className=' hover-class smooth'><Comment comment="
if anything happens i was born to run
nikes on , headphones blasting
"/></span>
                </main>
                <main className=' flex hover-parent items-center flex-row-reverse gap-4 smooth'>
                  <Image src={user5} className=' w-9 h-9 object-cover rounded-full'/>
                  <span className=' hover-class smooth'><Comment comment="let me mind my business
just be cool and not take this serious
"/></span>
                </main>
                <main className=' flex hover-parent items-center flex-row-reverse gap-4 smooth'>
                  <Image src={user6} className=' w-9 h-9 object-cover rounded-full'/>
                  <span className=' hover-class smooth'><Comment comment="
hands are shaking , legs are wobbling
cause i know how it ends
"/></span>
                </main>
          </div>
    </div>

    </section>
  )
}

export default HeroBody