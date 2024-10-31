import { useNavigate } from 'react-router-dom';
import arrowleft from "../../../../src/assets/images/Home/Arrowleft.png";
import arrowright from "../../../../src/assets/images/Home/Arrowright.png";
import phones from "../../../../src/assets/images/Home/Phones.png";
import smartwatches from "../../../../src/assets/images/Home/Smart Watches.png";
import cameras from "../../../../src/assets/images/Home/Cameras.png";
import headphones from "../../../../src/assets/images/Home/Headphones.png";
import computers from "../../../../src/assets/images/Home/Computers.png";
import gaming from "../../../../src/assets/images/Home/Gaming.png";

export const Category = () => {
   const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Product');  
  };
  return (
    <div className="md:w-full md:h-[352px] w-[375px] h-[624px] md:py-[80px] md:px-[160px] py-[64px] px-[16px] flex flex-col md:gap-[32px] gap-[48px] ">
      <div className="md:w-[1120px]  w-[343px] h-[32px] flex items-center justify-between ">
        <h1 className="h-[32px] md:w-[239px] text-black text-[24px] font-medium font-['Inter'] leading-[32px]">Browse By Category</h1>
        <div className="flex flex-row gap-2">
           <button><img src={arrowleft}/></button>
           <button><img src={arrowright}/></button> 
        </div>
      </div>

      <div className="md:w-[1120px] md:h-[128px] md:flex md:flex-row grid grid-cols-2 grid-rows-3 gap-[32px] ">
        <button onClick={handleButtonClick} className="md:w-[160px] md:h-full w-[168px] h-[128px] rounded-[15px] py-[24px] px-[52px] bg-[#EDEDED] flex items-center flex-col gap-2">
            <img src={phones}/>
            <p className="w-[58px] h-[24px]  text-black text-[16px] font-medium font-['Inter'] leading-[24px]">Phones</p>

        </button>
        <button className="md:w-[160px] md:h-full w-[168px] h-[128px] rounded-[15px] py-[24px] px-[52px] bg-[#EDEDED] flex items-center flex-col gap-2">
           <img src={smartwatches}/>
           <p className="w-[117px] h-[24px]  text-black text-[16px] font-medium font-['Inter'] leading-[24px]">Smart Watches</p>

        </button>
        <button className="md:w-[160px] md:h-full w-[168px] h-[128px] rounded-[15px] py-[24px] px-[52px] bg-[#EDEDED] flex items-center flex-col gap-2">
           <img src={cameras}/>
           <p className="w-[69px] h-[24px]  text-black text-[16px] font-medium font-['Inter'] leading-[24px]">Cameras</p>

        </button>
        <button className="md:w-[160px] md:h-full w-[168px] h-[128px] rounded-[15px] py-[24px] px-[52px] bg-[#EDEDED] flex items-center flex-col gap-2">
           <img src={headphones}/>
           <p className="w-[98px] h-[24px]  text-black text-[16px] font-medium font-['Inter'] leading-[24px]">Headphones</p>

        </button>
        <button className="md:w-[160px] md:h-full w-[168px] h-[128px] rounded-[15px] py-[24px] px-[52px] bg-[#EDEDED] flex items-center flex-col gap-2">
           <img src={computers}/>
           <p className="w-[85px] h-[24px]  text-black text-[16px] font-medium font-['Inter'] leading-[24px]">Computers</p>

        </button>
        <button className="md:w-[160px] md:h-full w-[168px] h-[128px] rounded-[15px] py-[24px] px-[52px] bg-[#EDEDED] flex items-center flex-col gap-2">
           <img src={gaming}/>
           <p className="w-[59px] h-[24px]  text-black text-[16px] font-medium font-['Inter'] leading-[24px]">Gaming</p>

        </button>

      </div>

    </div>
  )
}
