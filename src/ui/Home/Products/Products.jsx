import { Box } from "@mantine/core";
import { useNavigate } from 'react-router-dom';
import favoriteicon from "../../../../src/assets/images/Home/Favoriteicon.png";
import iphone14pro from "../../../../src/assets/images/Home/Iphone14pro.png";
import camera2 from "../../../../src/assets/images/Home/camera2.png";
import watchimg from "../../../../src/assets/images/Home/watchimg.png";
import airpodimg from "../../../../src/assets/images/Home/airpodimg.png";
import gwatchimg from "../../../../src/assets/images/Home/gwatchimg.png";
import zfoldimg from "../../../../src/assets/images/Home/zfoldimg.png";
import budsimg from "../../../../src/assets/images/Home/budsimg.png";
import ipadimg from "../../../../src/assets/images/Home/ipadimg.png";


export const Products = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/ProductDetails');  
  };
  return (
    <div className="md:w-full md:h-[1056px] w-[375px] h-[1632px] px-[16px] md:px-[160px] py-[56px] flex items-center flex-col gap-[35px] ">
      <div className="md:w-[1120px] w-[343px] h-[32px]  flex flex-row  gap-[32px]">
         <button className="md:w-[100px] w-[89px] h-full text-center md:text-[18px] text-[16px] font-medium font-['Inter'] leading-[32px] border-black border-b-2">New Arrival</button>
         <button className="md:w-[86px] w-[76px] h-full text-center md:text-[18px] text-[16px] text-[#8B8B8B] font-medium font-['Inter'] leading-[32px] ">Bestseller</button>
         <button className="md:w-[159px] w-[141px] h-full text-center text-[#8B8B8B] md:text-[18px] text-[16px] font-medium font-['Inter'] leading-[32px] ">Featured Products</button>
      </div>

      <div className="md:w-[1120px] md:h-[880px] w-[343px] h-[1456px]  gap-[16px] grid md:flex  md:flex-col items-center">

        <div className="w-full md:h-[432px] h-auto bg-white  md:flex  md:flex-row grid grid-rows-2 grid-cols-2 gap-[16px]">

          <Box className="md:w-[268px] md:h-[436px] w-[163px] h-[352px] px-[12px] rounded-[9px] md:px-[16px] py-[24px] bg-[#F6F6F6] flex items-center flex-col gap-[16px]">
            <p className="md:w-[236px] h-[32px] w-[139px]  flex justify-end"><img src={favoriteicon}/></p>
            <img src={iphone14pro} className="md:w-[160px] md:h-[160px] w-[104px] h-[104px] "/>
            <div className="md:w-[236px] md:h-[160px] w-[139px] h-[152px] flex flex-col gap-[24px] items-center ">
               <div className="md:w-full h-[88px] w-[139px]  flex flex-col md:gap-[24px] gap-[16px]">
                 <p className="md:w-full  h-[48px] text-center text-black text-[16px] font-medium font-['Inter'] leading-normal line-clamp-2 md:line-clamp-none ">Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                 <p className="md:w-full h-[24px] text-center text-black text-[24px] font-semibold font-['Inter'] leading-[24px]">$900</p>
               </div>
               <button onClick={handleButtonClick} className="md:w-[183px] w-[139px] h-[48px] rounded-[8px] py-[12px] px-[64px] bg-black text-white text-center text-xs leading-4 font-normal font-['Inter'] ">Buy Now</button>

            </div>
          </Box>

          <Box className="md:w-[268px] md:h-[436px] w-[163px] h-[352px] px-[12px] rounded-[9px] px-[16px] py-[24px] bg-[#F6F6F6] flex items-center flex-col gap-[16px]">
            <p className="md:w-[236px] h-[32px] w-[139px] flex justify-end"><img src={favoriteicon}/></p>
            <img src={camera2} className="md:w-[160px] md:h-[160px] w-[104px] h-[104px] "/>
            <div className="md:w-[236px] md:h-[160px] w-[139px] h-[152px]  flex flex-col gap-[24px] items-center ">
               <div className="md:w-full h-[88px] w-[139px]  flex flex-col md:gap-[24px] gap-[16px]">
                 <p className="md:w-full h-[48px] text-center text-black text-[16px] font-medium font-['Inter'] leading-[24px] line-clamp-2 md:line-clamp-none">Blackmagic Pocket Cinema Camera 6k </p>
                 <p className="md:w-full h-[24px] text-center text-black text-[24px] font-semibold font-['Inter'] leading-[24px]">$2535</p>
               </div>
               <button className="md:w-[183px] w-[139px]  h-[48px] rounded-[8px] py-[12px] px-[64px] bg-black text-white text-center text-xs leading-4 font-normal font-['Inter'] ">Buy Now</button>

            </div>
          </Box>

          <Box className="md:w-[268px] md:h-[436px] w-[163px] h-[352px] px-[12px] rounded-[9px] px-[16px] py-[24px] bg-[#F6F6F6] flex items-center flex-col gap-[16px]">
            <p className="md:w-[236px] h-[32px] w-[139px] flex justify-end"><img src={favoriteicon}/></p>
            <img src={watchimg} className="md:w-[160px] md:h-[160px] w-[104px] h-[104px]"/>
            <div className="md:w-[236px] md:h-[160px] w-[139px] h-[152px]  flex flex-col gap-[24px] items-center ">
               <div className="md:w-full h-[88px] w-[139px]  flex flex-col md:gap-[24px] gap-[16px]">
                 <p className="w-full h-[48px] text-center text-black text-[16px] font-medium font-['Inter'] leading-[24px] line-clamp-2 md:line-clamp-none">Apple Watch Series 9 GPS 41mm Starlight Aluminium </p>
                 <p className="w-full h-[24px] text-center text-black text-[24px] font-semibold font-['Inter'] leading-[24px]">$399</p>
               </div>
               <button className="md:w-[183px] w-[139px]  h-[48px] rounded-[8px] py-[12px] px-[64px] bg-black text-white text-center text-xs leading-4 font-normal font-['Inter'] ">Buy Now</button>

            </div>
          </Box>

          <Box className="md:w-[268px] md:h-[436px] w-[163px] h-[352px] px-[12px] rounded-[9px] px-[16px] py-[24px] bg-[#F6F6F6] flex items-center flex-col gap-[16px]">
            <p className="md:w-[236px] h-[32px] w-[139px] flex justify-end"><img src={favoriteicon}/></p>
            <img src={airpodimg} className="md:w-[160px] md:h-[160px] w-[104px] h-[104px]"/>
            <div className="md:w-[236px] md:h-[160px] w-[139px] h-[152px]  flex flex-col gap-[24px] items-center ">
               <div className="md:w-full h-[88px] w-[139px]  flex flex-col md:gap-[24px] gap-[16px]">
                 <p className="w-full h-[48px] text-center text-black text-[16px] font-medium font-['Inter'] leading-[24px] line-clamp-2 md:line-clamp-none">AirPods Max Silver Starlight Aluminium </p>
                 <p className="w-full h-[24px] text-center text-black text-[24px] font-semibold font-['Inter'] leading-[24px]">$549</p>
               </div>
               <button className="md:w-[183px] w-[139px]  rounded-[8px] py-[12px] px-[64px] bg-black text-white text-center text-xs leading-4 font-normal font-['Inter'] ">Buy Now</button>

            </div>
          </Box>

        </div>

        <div className="w-full md:h-[432px] h-auto bg-white  md:flex  md:flex-row grid grid-rows-2 grid-cols-2 gap-[16px]">

          <Box className="md:w-[268px] md:h-[436px] w-[163px] h-[352px] px-[12px] rounded-[9px] md:px-[16px] py-[32px] bg-[#F6F6F6] flex items-center flex-col gap-[16px]">
            <p className="md:w-[236px] h-[32px] w-[139px] flex justify-end"><img src={favoriteicon}/></p>
            <img src={gwatchimg} className="md:w-[160px] md:h-[160px] w-[104px] h-[104px] "/>
            <div className="md:w-[236px] md:h-[160px] w-[139px] h-[152px]  flex flex-col gap-[24px] items-center ">
               <div className="md:w-full h-[88px] w-[139px]  flex flex-col md:gap-[24px] gap-[16px]">
                 <p className="w-full h-[48px] text-center text-black text-[16px] font-medium font-['Inter'] leading-[24px] line-clamp-2 md:line-clamp-none">Samsung Galaxy Watch6 Classic 47mm Black </p>
                 <p className="w-full h-[24px] text-center text-black text-[24px] font-semibold font-['Inter'] leading-[24px]">$369</p>
               </div>
               <button className="md:w-[183px] w-[139px]  h-[48px] rounded-[8px] py-[12px] px-[64px] bg-black text-white text-center text-xs leading-4 font-normal font-['Inter'] ">Buy Now</button>

            </div>
          </Box>

          <Box className="md:w-[268px] md:h-[436px] w-[163px] h-[352px] px-[12px] rounded-[9px] px-[16px] py-[24px] bg-[#F6F6F6] flex items-center flex-col gap-[16px]">
            <p className="md:w-[236px] h-[32px] w-[139px] flex justify-end"><img src={favoriteicon}/></p>
            <img src={zfoldimg} className="md:w-[160px] md:h-[160px] w-[104px] h-[104px] "/>
            <div className="md:w-[236px] md:h-[160px] w-[139px] h-[152px]  flex flex-col gap-[24px] items-center ">
               <div className="md:w-full h-[88px] w-[139px]  flex flex-col md:gap-[24px] gap-[16px]">
                 <p className="w-full h-[48px] text-center text-black text-[16px] font-medium font-['Inter'] leading-[24px] line-clamp-2 md:line-clamp-none">Galaxy Z Fold5 Unlocked | 256GB | Phantom Black </p>
                 <p className="w-full h-[24px] text-center text-black text-[24px] font-semibold font-['Inter'] leading-[24px]">$1799</p>
               </div>
               <button className="md:w-[183px] w-[139px]  h-[48px] rounded-[8px] py-[12px] px-[64px] bg-black text-white text-center text-xs leading-4 font-normal font-['Inter'] ">Buy Now</button>

            </div>
          </Box>

          <Box className="md:w-[268px] md:h-[436px] w-[163px] h-[352px] px-[12px] rounded-[9px] px-[16px] py-[24px] bg-[#F6F6F6] flex items-center flex-col gap-[16px]">
            <p className="md:w-[236px] h-[32px] w-[139px] flex justify-end"><img src={favoriteicon}/></p>
            <img src={budsimg} className="md:w-[160px] md:h-[160px] w-[104px] h-[104px]"/>
            <div className="md:w-[236px] md:h-[160px] w-[139px] h-[152px]  flex flex-col gap-[24px] items-center ">
               <div className="md:w-full h-[88px] w-[139px]  flex flex-col md:gap-[24px] gap-[16px]">
                 <p className="w-full h-[48px] text-center text-black text-[16px] font-medium font-['Inter'] leading-[24px] ">Galaxy Buds FE Graphite </p>
                 <p className="w-full h-[24px] text-center text-black text-[24px] font-semibold font-['Inter'] leading-[24px]">$99.99</p>
               </div>
               <button className="md:w-[183px] w-[139px]  h-[48px] rounded-[8px] py-[12px] px-[64px] bg-black text-white text-center text-xs leading-4 font-normal font-['Inter'] ">Buy Now</button>

            </div>
          </Box>

          <Box className="md:w-[268px] md:h-[436px] w-[163px] h-[352px] px-[12px] rounded-[9px] px-[16px] py-[24px] bg-[#F6F6F6] flex items-center flex-col gap-[16px]">
            <p className="md:w-[236px] h-[32px] w-[139px] flex justify-end"><img src={favoriteicon}/></p>
            <img src={ipadimg} className="md:w-[160px] md:h-[160px] w-[104px] h-[104px] "/>
            <div className="md:w-[236px] md:h-[160px] w-[139px] h-[152px]  flex flex-col gap-[24px] items-center ">
               <div className="md:w-full h-[88px] w-[139px]  flex flex-col md:gap-[24px] gap-[16px]">
                 <p className="w-full h-[48px] text-center text-black text-[16px] font-medium font-['Inter'] leading-[24px] line-clamp-2 md:line-clamp-none">Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021 </p>
                 <p className="w-full h-[24px] text-center text-black text-[24px] font-semibold font-['Inter'] leading-[24px]">$398</p>
               </div>
               <button className="md:w-[183px] w-[139px]  h-[48px] rounded-[8px] py-[12px] px-[64px] bg-black text-white text-center text-xs leading-4 font-normal font-['Inter'] ">Buy Now</button>

            </div>
          </Box>

        </div>


      </div>

    </div>
  )
}
