import { Box } from "@mantine/core"
import banner1 from "../../../../src/assets/images/Home/banner1.png";
import banner2 from "../../../../src/assets/images/Home/banner2.png";
import banner3 from "../../../../src/assets/images/Home/banner3.png";
import banner4 from "../../../../src/assets/images/Home/banner4.png";

export const Banners = () => {
  return (
    <div className="md:w-full md:h-[640px] w-[375px] h-[723px] md:py-0 md:px-0 md:gap-0 py-[56px] px-[32px] gap-[48px] flex md:flex-row  ">
      
        <Box className="hidden md:block md:w-1/4 md:h-full w-[311px] h-[555px] md:px-[32px] md:py-[20px] bg-white flex items-center justify-center flex-col md:gap-2 gap-[16px]">
           <img src={banner1} className=" md:w-[361px] md:h-[327px] w-[321px] h-[331px] "/>
           <div className="md:w-[296px] md:h-[208px] h-auto flex flex items-center justify-center md:justify-start  md:items-start flex-col gap-[16px]">
               <h1 className="md:w-full md:h-full w-[311px] h-[48px] text-center md:text-start  md:text-[33px] text-[49px] text-black  font-light font-['Inter'] leading-[48px]">Popular Products</h1>
               <p className="md:w-full md:h-full w-[311px] h-[72px] text-center md:text-start text-[#909090] text-[14px] font-medium font-['Inter'] leading-[24px]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
               <button className="w-[191px] h-[56px] rounded-[6px] py-[16px] px-[56px] flex items-center justify-center md:justify-start md:items-start  text-center  border-2 border-black text-md font-semibold">Shop Now</button>
           </div>
        </Box>

        <Box className="md:w-1/4 md:h-full w-[311px] h-[555px] md:px-[32px] md:py-[20px] bg-white  md:bg-[#F9F9F9] px-[3px] py-[20px] flex items-center flex-col md:gap-2 gap-[16px]">
           <img src={banner2} className="md:w-[361px] md:h-[327px] w-[321px] h-[331px] "/>
           <div className="md:w-[296px] md:h-[208px] h-auto flex flex items-center justify-center md:justify-start  md:items-start flex-col gap-[16px]">
               <h1 className="md:w-full md:h-full w-[311px] h-[48px] text-center md:text-start  md:text-[33px] text-[49px]  text-black  font-light font-['Inter'] leading-[48px]">Ipad Pro</h1>
               <p className="md:w-full md:h-full w-[311px] h-[72px] text-center md:text-start text-[#909090] text-[14px] font-medium font-['Inter'] leading-[24px]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
               <button className="w-[191px] h-[56px] rounded-[6px] py-[16px] px-[56px] flex  items-center justify-center md:justify-start md:items-start  text-center  border-2 border-black text-md font-semibold">Shop Now</button>
           </div>
        </Box>

        <Box className="hidden md:block md:w-1/4 md:h-full w-[311px] h-[555px] md:px-[32px] md:py-[20px]  bg-[#EAEAEA] px-[3px] py-[20px] flex items-center flex-col md:gap-2 gap-[16px] ">
           <img src={banner3} className="md:w-[361px] md:h-[327px] w-[321px] h-[331px] "/>
           <div className="md:w-[296px] md:h-[208px] h-auto flex flex items-center justify-center md:justify-start  md:items-start flex-col gap-[16px]">
               <h1 className="md:w-full md:h-full w-[311px] h-[48px] text-center md:text-start  md:text-[33px] text-[49px]  text-black  font-light font-['Inter'] leading-[48px]">Samsung Galaxy</h1>
               <p className="md:w-full md:h-full w-[311px] h-[72px] text-center md:text-start text-[#909090] text-[14px] font-medium font-['Inter'] leading-[24px]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
               <button className="w-[191px] h-[56px] rounded-[6px] py-[16px] px-[56px] flex items-center  justify-center md:justify-start md:items-start  text-center  border-2 border-black text-md font-semibold">Shop Now</button>
           </div>
        </Box>

        <Box className="hidden md:block md:w-1/4 md:h-full w-[311px] h-[555px] md:px-[32px] md:py-[20px]  bg-[#2C2C2C] px-[3px] py-[20px] flex items-center flex-col md:gap-2 gap-[16px]">
           <img src={banner4} className=" md:w-[361px] md:h-[327px] w-[321px] h-[331px] "/>
           <div className="md:w-[296px] md:h-[208px] h-auto flex flex items-center justify-center md:justify-start  md:items-start flex-col gap-[16px]">
               <h1 className="md:w-full md:h-full w-[311px] h-[48px] text-center md:text-start  md:text-[33px] text-[49px]  text-white  font-light font-['Inter'] leading-[48px]">Macbook Pro</h1>
               <p className="md:w-full md:h-full w-[311px] h-[72px] text-center md:text-start text-[#909090] text-[14px] font-medium font-['Inter'] leading-[24px]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
               <button className="w-[191px] h-[56px] rounded-[6px] py-[16px] px-[56px] flex items-center justify-center md:justify-start md:items-start  text-center text-white  border-2 border-white text-md font-semibold">Shop Now</button>
           </div>
        </Box>

    </div>
  )
}
