import { Box } from "@mantine/core";
import playstation from "../../../../src/assets/images/Home/PlayStation.png";
import headphone from "../../../../src/assets/images/Home/airpodimg.png";
import Applevision from "../../../../src/assets/images/Home/Applevision.png";
import macbookpro14 from "../../../../src/assets/images/Home/MacBookPro14.png"

export const SmallBanner = () => {
  return (
    <div className="w-full h-auto  flex md:flex-row flex-col">
        <div className="md:w-1/2 md:h-[600px]  flex md:flex-col flex-col-reverse">
           <div className="md:w-full md:h-[328px] w-[375px] h-[424px] md:px-0 md:py-0 py-[40px] px-[16px] bg-white flex md:flex-row flex-col gap-[24px] md:gap-0 items-center overflow-hidden">
             <img src={playstation} className="w-[200px] h-[200px] md:w-[328px] md:h-[343px]"/>
             <div className="md:w-[338px] md:h-[128px] h-[120px] w-[343px] flex flex-col gap-[8px] md:gap-4">
                <h1 className="text-black text-center md:text-start text-[34px] md:text-[49px] font-light font-['Inter'] md:leading-10 leading-[40px]">Playstation 5</h1>
                <p className="text-[#909090] text-center md:text-start md:text-sm text-[16px] font-medium font-['Inter'] md:leading-normal leading-[24px]">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
             </div>

           </div> 

            <div className="md:w-full md:h-[272px] h-auto flex md:flex-row flex-col">
                <div className="md:w-1/2 md:h-full w-[375px] h-[376px] md:pr-[48px] md:py-0 py-[40px] md:pl-0 px-[16px] md:gap-0 gap-[24px] flex md:flex-row flex-col items-center bg-[#ececec] overflow-hidden">
                  <img src={headphone} className="w-[192px] h-[200px] md:pr-[40px] "/>
                  <Box className="md:w-[160px] md:h-[143px] w-[343px] h-[72px] flex flex-col md:gap-4 gap-[8px]">
                        <p className="md:w-[150px] md:h-[120px] text-black text-center md:text-start md:text-[29px] text-[34px] font-light font-['Inter'] leading-[40px]">Apple AirPods <strong className="font-medium">Max</strong> </p>
                        <p className=" md:h-[48px] text-center md:text-start text-[#909090] text-sm font-medium font-['Inter'] leading-normal">Computational audio. Listen, it's powerful</p>
                       
                  </Box>

                </div>

                <div className="md:w-1/2 md:h-full w-[375px] h-[376px] md:pr-[48px] md:py-0 py-[40px] md:pl-0 px-[16px] md:gap-0 gap-[24px] flex md:flex-row flex-col items-center bg-[#353535]">
                  <img src={Applevision} className="pr-[40px]"/>
                  <Box className="md:w-[160px] md:h-[144px] w-[343px] h-[72px] flex flex-col md:gap-4 gap-[8px]">
                        <p className="text-center md:text-start md:w-[150px] md:h-[144px] text-white md:text-[29px] text-[34px] font-light font-['Inter'] leading-[40px]">Apple Vision <strong className="font-medium"> Pro</strong> </p>
                        <p className="md:h-[48px] text-center md:text-start text-[#909090] text-sm font-medium font-['Inter'] leading-normal">An immersive way to experience entertainment</p>
                       
                  </Box>
                </div>
            </div>   

        </div>

        <div className="md:w-1/2 md:h-[600px] w-[375px] h-[504px] bg-[#EDEDED] md:py-[44px] md:pr-0 py-[40px] px-[16px] md:pl-[56px] md:gap-[1px] gap-[24px] flex items-center md:flex-row flex-col flex-col-reverse">
              <div className="md:w-[360px] md:h-[272px] w-[343px] h-[200px] flex flex-col gap-[16px]">
                 <h1 className="md:w-[330px] md:h-[112px]  w-[203px] h-[40px] text-center md:text-start text-black md:text-[64px] text-[34x] md:font-thin font-medium font-['Inter'] md:leading-[56px] leading-[40px] ">Macbook <span className="font-medium">Air</span></h1>
                 <p className="md:w-[360px] h-[72px] w-[343px]  text-center md:text-start text-[#909090] md:text-[14px] text-[16px] font-medium font-['Inter'] leading-[24px] ">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                 <button className=" md:w-[191px] md:h-[56px] w-[343px] h-[56px]  rounded-[6px] py-[16px] px-[56px] flex justify-center items-center text-center  border-2 border-black text-md font-semibold ">Shop Now</button>

              </div>
              <img src={macbookpro14} className="md:w-[292px] md:h-[502px] md:absolute md:right-0 w-[330px] h-[200px] items-center "/>

        </div>

    </div>
  )
}
