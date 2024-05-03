"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../images/logo.svg"
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import DownloadDropDown from "./DownloadDropDown";
import { IoMenu } from "react-icons/io5";



const Header = () => {
 
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = document.querySelector(".h-auto").offsetHeight;
      if (scrollPosition > navbarHeight) {
        setNavbarBackground("black");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    const [dropdown , Setdropdown] = useState(false);
    const dropdowntoggle = () => {
      Setdropdown(!dropdown)
    }

  return (
    <div  className={`h-auto flex items-center justify-center mx-auto  z-50 h w-full dark:text-white text-white  `}
    style={{ backgroundColor: navbarBackground }}>
        <div className="flex items-center py-5 w-full justify-between">
          <Link href="/">
             <Image src={logo} className=" object-cover min-w-[70px] max-w-[100px] w-[100px] h-auto "/>
          </Link>
          <div className="flex space-x-7 items-center ds:hidden lg:flex lg:flex-row flex-col lg:relative ds:top-0 ds:left-0 absolute ds:h-screen lg:h-auto lg:bg-transparent bg-black border lg:border-none border-green-500 ">
              <Link href="#" className=" smooth hover:text-green-500 font-medium text-white  relative" onClick={dropdowntoggle}>
                  <li className="flex text-sm relative  items-center space-x-3">
                   <a href="">
                       Mobile Download
                   </a>
                    <MdOutlineKeyboardArrowDown />
                  </li>
               {dropdown &&  <span className=" absolute smooth text-green-500 top-0 translate-y-6 z-50">
                   <DownloadDropDown />
               </span>}
              </Link>
              <Link href="#" className=" smooth hover:text-green-500 font-medium text-sm">
                  Documentation
              </Link>
              <Link href="#" className=" smooth hover:text-green-500 font-medium text-sm">
                 Usage Pros & Cons
              </Link>
              <Link href="#" className=" smooth hover:text-green-500 font-medium text-sm">
                  Privacy policy
              </Link>
              <Link href="#" className=" smooth hover:text-green-500 font-medium text-sm">
                  Terms & Conditions
              </Link>
              <Link href="#" className=" smooth ds:block lg:hidden hover:text-green-500 font-medium text-sm">
                  <IoMenu />
              </Link>
          </div>
        </div>
    </div>
  );
};

export default Header;
