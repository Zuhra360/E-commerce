import { Box } from "@mantine/core";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { IoIosArrowUp ,IoIosArrowDown } from "react-icons/io";
import favoriteicon from "../../../assets/images/Home/Favoriteicon.png";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import {  ProductData1, ProductData2, ProductData3 ,ProductData4 } from "./ProductData";

export const ProductsPage = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null); 
    const navigate = useNavigate();

    const handleButtonClick = (price) => {
        if (price === "$1600"){
            navigate('/ProductDetails');  
        }
        
    };
    const handleToggle = (index) => {
        if (index === 0) {
            setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
          }
    };

  return (
    <div className='w-full h-auto'>
        <div className='hidden md:block w-full md:h-[104px] md:py-[40px] md:px-[160px] md:flex md:flex-row md:gap-[16px]'>
            <button  className='w-[46px] h-[16px] font-medium text-[#A4A4A4] font-inter text-[16px] leading-[16px]'>Home</button>
            <MdOutlineArrowForwardIos className="text-[#A4A4A4]"/>
            <button  className='w-[60px] h-[16px] font-medium text-[#A4A4A4] font-inter text-[16px] leading-[16px]'>Catalog</button>
            <MdOutlineArrowForwardIos className="text-[#A4A4A4]"/>
            <button  className='w-[103px] h-[16px] font-medium text-black font-inter text-[16px] leading-[16px]'>Smartphones</button>
        </div>

        <div className=" w-full h-auto md:h-[1560px] md:px-[160px] md:pt-[24px] md:pb-[56px] md:flex md:gap-[32px] ">

            <div className="md:w-[1119px] w-full h-auto md:h-[1480px] md:flex md:flex-row md:gap-[32px] ">
                <div className="hidden md:block md:w-[256px] md:h-[760px] md:max-w-[256px] ">
                    <Box className="h-[400px] flex flex-col gap-[16px]">
                        {ProductData1.map((data, index) => (
                            <div key={index}>
                            <div
                                onClick={() => handleToggle(index)}
                                className="h-[48px] border-b-[0.5px] py-[12px] border-[#B5B5B5] flex flex-row items-center cursor-pointer"
                            >
                                <p className="w-[232px] h-[24px] text-[18px] font-medium font-['Inter'] leading-[24px]">
                                {data.title}
                                </p>
                                {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>

                            {/* Toggled Content */}
                            {openIndex === index && (
                                <div className="h-[336px] flex flex-col gap-[16px]">
                                <div className="md:flex md:flex-row md:gap-2.5 md:relative">
                                    <CiSearch className="md:absolute md:left-3 md:top-1/2 md:transform -translate-y-1/2 md:h-5 md:w-5 md:text-gray-400" />
                                    <input
                                    name="search"
                                    type="text"
                                    placeholder="Search"
                                    className="md:w-[256px] md:h-[40px] md:pl-10 md:rounded-[8px] py-[8px] px-[16px] md:flex md:bg-[#F5F5F5]"
                                    />
                                </div>

                                <div className="h-[280px] flex flex-col gap-[8px] overflow-auto">
                                    {ProductData2.map((item, itemIndex) => (
                                    <label key={itemIndex} className="h-[24px] flex items-center flex-row gap-[8px]">
                                        <input type="checkbox" className="text-black h-[16px] w-[16px] rounded-[3px] p-[6px]" />
                                        <p className="text-[15px] font-medium font-['Inter'] leading-[24px]">
                                        {item.text} <span className="text-[12px] font-normal text-gray-400">{item.num}</span>
                                        </p>
                                    </label>
                                    ))}
                                </div>
                                </div>
                                )}
                                </div>
                        ))}
                    </Box>
                </div>

                <div className="md:w-[831px] w-full h-auto md:h-[1480px] flex items-center flex-col md:gap-[14px]">
                    <Box className="w-full md:h-[1408px] h-auto flex items-center flex-col gap-[24px] ">

                        <div className="md:w-full w-[344px] md:h-[40px] h-[56px] flex md:justify-between flex-row gap-[16px] md:gap-0 items-center">
                            <h1 className="hidden md:block md:w-[200px] md:h-[16px] md:text-[#6C6C6C] md:text-[16px] md:font-medium md:font-['Inter'] md:leading-[16px] ">Selected Products: <span className=" text-[20px] text-black">85</span></h1>
                            <div className="w-[256px] h-[40px] max-w-[256px] min-w-[140px] px-[16px] py-[8px] border-[0.5px] border-[#D4D4D4] rounded-[8px] flex justify-between items-center ">
                                <label className="w-[65px] h-[16px] text-[15px] font-normal font-['Inter'] leading-[16px]">By rating</label>
                                <IoIosArrowDown className="text-gray-400"/>
                            </div>

                            <div  className="md:hidden w-[256px] h-[40px] max-w-[256px] min-w-[140px] px-[16px] py-[8px] border-[0.5px] border-[#D4D4D4] rounded-[8px] flex justify-between items-center ">
                                <label className="w-[65px] h-[16px] text-[15px] font-normal font-['Inter'] leading-[16px]">Filters</label>
                                <button onClick={() => setIsFilterOpen(!isFilterOpen)}><HiOutlineAdjustmentsHorizontal className="text-gray-400"/></button>
                            </div>

                        </div>
                        <h1 className="block md:hidden md:w-[200px] flex  w-full md:px-0 px-[60px] h-[16px] text-[#6C6C6C] text-[16px] font-medium font-['Inter'] leading-[16px]">Product Results: <span className="text-gray-300">85</span></h1>

                        <div className="md:w-full w-full md:h-[1344px] h-[1571px] gap-[8px] md:px-0 px-[60px] flex justify-center grid md:grid-rows-3  md:grid-cols-3 grid-rows-4 grid-cols-2">
                            
                            {ProductData3.map((data,index)=>
                            <Box key={index} className={`md:w-[268px] md:h-[436px] w-[163px] h-[352px] px-[12px] rounded-[9px] md:px-[16px] py-[24px] bg-[#F6F6F6] flex items-center justify-center flex-col gap-[16px] ${
                                index === ProductData3.length - 1 ? "hidden md:block " : ""
                              }`}>
                                <p className="md:w-[236px] h-[32px] w-[139px]  flex justify-end"><img src={favoriteicon}/></p>
                                <div  className="md:w-[160px] md:h-[160px] w-[104px] h-[104px] ">{data.image}</div>
                                <div className="md:w-[236px] md:h-[160px] w-[139px] h-[152px] flex flex-col gap-[24px] items-center ">
                                <div className="md:w-full h-[88px] w-[139px]  flex flex-col md:gap-[24px] gap-[16px]">
                                    <p className="md:w-full  h-[48px] text-center text-black text-[16px] font-medium font-['Inter'] leading-normal line-clamp-2 md:line-clamp-none ">{data.desc}</p>
                                    <p className="md:w-full h-[24px] text-center text-black text-[24px] font-semibold font-['Inter'] leading-[24px]">{data.price}</p>
                                </div>
                                <button onClick={handleButtonClick} className="md:w-[183px] w-[139px] h-[48px] rounded-[8px] py-[12px] px-[64px] bg-black text-white text-center text-xs leading-4 font-normal font-['Inter'] ">Buy Now</button>

                                </div>
                            </Box>
                            )}                            
                        </div>

                    </Box>

                    <Box className="w-full h-[32px] flex items-center justify-center">
                        <div className="w-[273px] h-[32px]  flex items-center flex-row gap-[16px] ">
                                <MdOutlineArrowForwardIos className="rotate-180 "/>
                                <div className="w-[193px] h-[32px] flex flex-row gap-[8px] ">
                                    {ProductData4.map((data,index) =>
                                    <button className="w-[32px] h-[32px] bg-[#F6F6F6] rounded-[5px] py-[4px] px-[12px] hover:bg-black hover:text-white ">{data.number}</button>
                                    )}
                                    
                                </div>
                                <MdOutlineArrowForwardIos />
                        </div>     
                    </Box>    
                </div>

                {isFilterOpen && (
                <div className="absolute top-20 bg-white left-0 block md:hidden md:w-full  h-auto md:h-[1480px] md:max-w-[256px] ">
                    <h1 className='w-[343px] h-[32px] gap-[10px] flex items-center flex-row '>
                        <MdArrowBackIos />
                        <label className='w-[288px] h-[32px] text-[24px] font-medium font-inter leading-[32px]'>Filter</label>
                    </h1>
                    <Box className="md:h-[400px] h-[1700px] md:w-[256px] w-[374px] flex flex-col gap-[16px]">
                        {ProductData1.map((data, index) => (
                            <div key={index}>
                            <div
                                onClick={() => handleToggle(index)}
                                className="h-[48px] border-b-[0.5px] py-[12px] border-[#B5B5B5] flex flex-row justify-between items-center cursor-pointer"
                            >
                                <p className="w-[232px] h-[24px] text-[18px] font-medium font-['Inter'] leading-[24px]">
                                {data.title}
                                </p>
                                {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>

                            {/* Toggled Content */}
                            {openIndex === index && (
                                <div className="md:h-[336px] h-[400px] flex flex-col gap-[16px]">
                                <div className="md:flex md:flex-row md:gap-2.5 md:relative">
                                    <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 md:text-gray-400" />
                                    <input
                                    name="search"
                                    type="text"
                                    placeholder="Search"
                                    className="md:w-[256px] md:h-[40px] md:pl-10 md:rounded-[8px] py-[8px] px-[16px] md:flex md:bg-[#F5F5F5]"
                                    />
                                </div>

                                <div className="h-[280px] flex flex-col gap-[8px] overflow-auto">
                                    {ProductData2.map((item, itemIndex) => (
                                    <label key={itemIndex} className="h-[24px] flex items-center flex-row gap-[8px]">
                                        <input type="checkbox" className="text-black h-[16px] w-[16px] rounded-[3px] p-[6px]" />
                                        <p className="text-[15px] font-medium font-['Inter'] leading-[24px]">
                                        {item.text} <span className="text-[12px] font-normal text-gray-400">{item.num}</span>
                                        </p>
                                    </label>
                                    ))}
                                </div>
                                
                                </div>
                                
                                )}
                                </div>
                                
                            ))}
                            <button onClick={handleButtonClick} className='w-full h-[56px] py-[16px] px-[56px] rounded-[6px] bg-black text-white text-center text-[16px] font-medium font-inter leading-[24px] '>Checkout</button>
                        </Box>
                        
                </div>
                )}

            </div>

        </div>
        


    </div>
  )
}
