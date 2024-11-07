import logo1 from "../../../../assets/images/Home/Logo1.png";
import Favorites from "../../../../assets/images/Home/Favorites.png";
import cart from "../../../../assets/images/Home/Cart.png";
import User from "../../../../assets/images/Home/User.png";
import { CiSearch } from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='w-full  h-[88px]  md:py-4 md:px-40 py-[24px] px-[16px] flex justify-between items-center flex-row '>
        <img src={logo1} className="w-[65px] h-[23px] flex md:items-start "/>
        <div className=" md:flex md:flex-row md:gap-2.5 md:relative">
            <CiSearch className="hidden md:block md:absolute md:left-3 md:top-1/2 md:transform -translate-y-1/2  md:h-5 md:w-5 md:text-gray-400"/>
            <input
            name="search"
            type="text"
            placeholder=" Search"
            className="hidden md:w-[372px] md:h-[56px] md:pl-10 md:rounded md:flex  md:bg-[#F5F5F5]"/>
            
        </div>
        
        <div className='md:hidden '>
                  <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-3xl'>
                  <RiMenu2Fill />
                  </button>
        </div>

        <div className="hidden md:w-[369px] md:h-[19px] md:flex md:flex-row md:gap-[56px]">
            <button className="w-[46px] h-[19px] font-medium text-base leading-[19px] ">Home</button>
            <button className="w-[47px] h-[19px] font-medium text-base leading-[19px] opacity-30">About</button>
            <button className="w-[86px] h-[19px] font-medium text-base leading-[19px] opacity-30">Contact Us</button>
            <button className="w-[34px] h-[19px] font-medium text-base leading-[19px] opacity-30">Blog</button>
        </div>
        <div className="hidden md:w-[144px] md:h-[32px] md:flex md:flex-row md:gap-[24px] ">
            <button><img src={Favorites}/></button>
            <button><img src={cart}/></button>
            <button><img src={User}/></button>
        </div>

        {isMenuOpen && (
              <div className="absolute top-16 left-0 w-full h-[150px] bg-white flex flex-col gap-[12px] items-center justify-center md:hidden">
                  <button className="py-2 w-[46px] h-[19px] font-medium text-base leading-[19px] hover:opacity-100 opacity-30">Home</button>
                  <button className="py-2 w-[47px] h-[19px] font-medium text-base leading-[19px] hover:opacity-100 opacity-30">About</button>
                  <button className="py-2 w-[86px] h-[19px] font-medium text-base leading-[19px] hover:opacity-100 opacity-30">Contact Us</button>
                  <button className="py-2 w-[34px] h-[19px] font-medium text-base leading-[19px] hover:opacity-100 opacity-30">Blog</button>
                  
              </div>
             
                )}


    </div>
  )
}
