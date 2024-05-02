import Image from "next/image"
import { discord, figma, notion, framer, photoshop, protopie, raindrop, slack } from "../images"



const Collaboration = () => {
  return (
    <div className="grid-container items-center justify-center mx-auto ">
        <Image src={figma} className=" w-[20px] object-cover"/>
        <Image src={discord} className=" w-[20px] object-cover"/>
        <Image src={framer} className=" w-[20px] object-cover"/>
        <Image src={slack} className=" w-[20px] object-cover"/>
        <Image src={notion} className=" w-[20px] object-cover"/>
        <Image src={raindrop} className=" w-[20px] object-cover"/>
        <Image src={photoshop} className=" w-[20px] object-cover"/>
        <Image src={protopie} className=" w-[20px] object-cover"/>
    </div>
  )
}

export default Collaboration