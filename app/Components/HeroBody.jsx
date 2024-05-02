import { Button } from "@radix-ui/themes"
import Image from "next/image"
import heroimg from "../images/about-img.png"
import herosm from "../images/about-sm.png"

{/*
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

*/}


const HeroBody = () => {
  return (
    <section className='@container w-full mx-auto text-center relative py-8 pb-16'>
      <div className="absolute w-fit top-0 bottom-0 left-0 space-x-[15rem] right-0">
        <span className=" block w-[250px] rounded-full h-[100px] blur-[100px] bg-green-400"></span>
        <span className=" block w-[250px] rounded-full h-[100px] blur-[100px] bg-green-300"></span>
        <span className=" block w-[250px] rounded-full h-[100px] blur-[100px] bg-lime-200"></span>
      </div>
      <div className="absolute w-fit top-0  space-x-[15rem] right-0">
        <span className=" block w-[250px] rounded-full h-[100px] blur-[100px] bg-green-400"></span>
        <span className=" block w-[250px] rounded-full h-[100px] blur-[100px] bg-lime-300"></span>
      </div>
      <h1 className=" hidden">hello</h1>
        <div className="flex z-50 flex-col text-balance space-y-5">
         

            <h1 className="  text-[5vw] font-semibold text-center text-balance text-green-400">Do more together as a team with turbo fast response  </h1>

            <p className=" text-[13px] leading-5 text-gray-400">get the best app for modern super fast time with absolutely no loading or waiting time , suitable for all devices </p>

            <Button className=" p-3 w-[200px] text-center bg-gradient-to-r hover:from-green-300 hover:to-lime-400 smooth from-green-400 to-lime-300 font-medium text-sm rounded-3xl mx-auto">Get Started</Button>

            <Image src={heroimg} className=" mx-auto w-full max-w-[76%] rounded-md overflow-hidden ds:hidden h-auto sm:block shadow-2xl shadow-green-300/35"/>
            <Image src={herosm} className=" mx-auto w-full max-w-[76%] rounded-md overflow-hidden hidden shadow-2xl shadow-green-300/35"/>
        </div>
    </section>
  )
}

export default HeroBody