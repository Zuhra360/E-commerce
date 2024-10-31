import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import image1 from "../../../src/assets/images/ProductDetails/Image1.png"
import { Box } from "@mantine/core";
import { DetailMainData , DetailMainData2, DetailMainData3 } from "./Data";


export const DetailMain = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/ShoppingCart');  
    };
  return (
    <div className='w-full h-auto'>
        <div className='hidden md:block md:w-full md:h-[104px] md:py-[40px] md:px-[160px] md:flex md:flex-row md:gap-[16px]'>
            <button  className='w-[46px] h-[16px] font-medium text-[#A4A4A4] font-inter text-[16px] leading-[16px]'>Home</button>
            <MdOutlineArrowForwardIos className="text-[#A4A4A4]"/>
            <button  className='w-[60px] h-[16px] font-medium text-[#A4A4A4] font-inter text-[16px] leading-[16px]'>Catalog</button>
            <MdOutlineArrowForwardIos className="text-[#A4A4A4]"/>
            <button  className='w-[103px] h-[16px] font-medium text-[#A4A4A4] font-inter text-[16px] leading-[16px]'>Smartphones</button>
            <MdOutlineArrowForwardIos className="text-[#A4A4A4]"/>
            <button  className='w-[45px] h-[16px] font-medium text-[#A4A4A4] font-inter text-[16px] leading-[16px]'>Apple</button>
            <MdOutlineArrowForwardIos className="text-[#A4A4A4]"/>
            <button  className='w-[142px] h-[16px] font-medium text-black font-inter text-[16px] leading-[16px]'>Iphone 14 Pro Max</button>
        </div>

        <div className="w-full md:h-[896px] h-auto  md:py-[112px] md:px-[160px] p-[8px] flex md:flex-row flex-col gap-[48px] ">
            <img src={image1} className="md:w-[536px] w-[343px] md:h-[516px] h-[426px] bg-white"/>

            <div className="md:w-[536px] w-[341px] md:h-[672px] h-[960px] flex flex-col gap-[32px]">
                <Box className="w-full md:h-[496px] h-[648px] flex flex-col gap-[16px]">
                    <div className="w-full md:h-[112px] h-[152px] flex flex-col gap-[24px]">
                        <h1 className="w-full md:h-[40px] h-[80px] font-inter font-bold text-[40px] leading-[40px]">Apple iPhone 14 Pro Max</h1>
                        <div className="w-full h-[48px] flex items-center flex-row gap-[16px] font-inter ">
                            <span className="w-[101px] font-medium text-[32px] leading-[48px]">$1399</span>
                            <span className="md:w-[490px] w-[224px] font-normal text-[24px] text-[#A0A0A0] leading-[32px]  line-through">$1499</span>
                        </div>
                    </div>

                    <div className="w-full md:h-[368px] h-[480px] flex flex-col gap-[24px] ">
                        <div className="w-full h-[32px] flex items-center flex-row gap-[32px] ">
                            <p className="w-[93px] h-[24px] font-normal text-[15px] text-[#A0A0A0] leading-[24px]">Select color :</p>
                            <div className="md:w-[419px] w-[224px] h-[32px] md:pr-[246px] flex flex-row items-center gap-[8px]">
                                <p className="w-[32px] h-[32px] bg-black rounded-full"></p>
                                <p className="w-[32px] h-[32px] bg-[#781DBC] rounded-full"></p>
                                <p className="w-[32px] h-[32px] bg-[#E10000] rounded-full"></p>
                                <p className="w-[32px] h-[32px] bg-[#E1B000] rounded-full"></p>
                                <p className="w-[32px] h-[32px] bg-[#E8E8E8] rounded-full"></p>
                            </div>
                        </div>

                        <div className="w-full h-[48px] flex flex-row gap-[16px]">
                            {DetailMainData.map((data,index) => 
                            <div className="md:w-[122px] w-[79px] h-[48px] py-[16px] px-[24px] border-[1px] border-[#D5D5D5] rounded-[8px] flex items-center justify-center hover:border-black hover:text-black  font-inter font-medium text-[14px] leading-[16px] ">
                                {data.text}</div>
                            )}
                            
                        </div>

                        <div className="w-full md:h-[144px] h-[208px]  grid md:grid-cols-3 md:grid-rows-2 grid-cols-2 grid-rows-3 gap-[16px]">
                            {DetailMainData2.map((data,index) =>
                             <div key={index} className="md:w-[168px] w-[166px] min-w-[160px] h-[64px] py-[16px] px-[8px] min-w-[168px] rounded-[7px] flex flex-row gap-[8px] bg-[#F4F4F4] ">
                             <div>{data.image}</div>
                             <h1 className="md:w-[120px] w-[118px] h-[32px] font-inter font-normal text-[14px] leading-[16px] text-[#A4A4A4] ">{data.title} <br/> <span className="font-medium text-black">{data.detail}</span></h1>

                             </div>
                            )}
                        </div>

                        <div className="w-full md:h-[72px] h-[120px] font-inter font-normal text-[14px] leading-[24px] text-[#A4A4A4]">
                        Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...
                        </div>

                        <div className="w-full md:h-[56px] h-[128px] flex md:flex-row flex-col gap-[16px]">
                            <button className="md:w-[260px] w-full h-[56px] py-[16px] px-[56px] border-[1px] border-black rounded-[6px] flex items-center justify-center gap-[8px] font-inter font-medium text-[16px] leading-[24px] text-black">Add to Wishlist</button>
                            <button onClick={handleButtonClick} className="md:w-[260px] w-full h-[56px] py-[16px] px-[56px] border-[1px] bg-black  border-black rounded-[6px] flex items-center justify-center gap-[8px] font-inter font-medium text-[16px] leading-[24px] text-white">Add to Cart</button>
                        </div>

                        <div className="w-full md:h-[56px] h-[120px] flex flex-row gap-[32px]">
                        {DetailMainData3.map((data,index) =>
                             <div key={index} className="md:w-[157px] w-[92px] md:h-[56px] h-[120px] rounded-[8px] flex items-center md:flex-row flex-col gap-[16px]  ">
                                <div >{data.image}</div>
                                <h1 className="md:w-[120px] h-[89px] md:h-[32px] h-[48px] font-inter font-normal text-[14px] leading-[16px] text-[#A4A4A4] ">{data.title} <br/> <span className="font-medium text-black">{data.detail}</span></h1>
                             </div>
                            )}

                        </div>



                    </div>

                </Box>

            </div>

        </div>


    </div>
  )
}
