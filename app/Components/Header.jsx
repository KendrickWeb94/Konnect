"use client";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMenu } from "react-icons/io5";



const Header = () => {
 {/*
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

  */}

  return (
    <div  className="h-auto flex items-center justify-center mx-auto w-full ">
        <div className="flex items-center bg-transparent py-5 w-full justify-between">
          <Link href="/" className=" text-green-400 font-semibold ds:text-xl sm:text-2xl">
              Konnect.
          </Link>
          <div className="flex space-x-7 items-center   ">
              <Link href="#" className=" smooth hover:text-green-400 font-medium   relative">
                  <li className="flex text-sm relative  items-center space-x-3">
                   <a href="">
                       Mobile Download
                   </a>
                    <MdOutlineKeyboardArrowDown />
                  </li>
             
              </Link>
              <Link href="#" className=" smooth hover:text-green-400  font-medium text-sm">
                  Documentation
              </Link>
              <Link href="#" className=" smooth hover:text-green-400   font-medium text-sm">
                 Usage Pros & Cons
              </Link>
              <Link href="#" className=" smooth hover:text-green-400   font-medium text-sm">
                  Privacy policy
              </Link>
              <Link href="#" className=" smooth hover:text-green-400   font-medium text-sm">
                  Terms & Conditions
              </Link>
              <Link href="#" className=" smooth ds:block lg:hidden   hover:text-green-400 font-medium text-sm">
                  <IoMenu />
              </Link>
          </div>
        </div>
    </div>
  );
};

export default Header;
