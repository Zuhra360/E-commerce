import { MdArrowBackIos } from "react-icons/md";
import { IoIosArrowUp ,IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { Box } from '@mantine/core';
import {  ProductData1, ProductData2 } from "./ProductData";
export const Filter = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const handleToggle = (index) => {
        if (index === 0 ) {
            setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
          }
        
    };
  return (
    <div className=' w-full h-auto abssolute top-20 left-0 '>
        <h1 className='w-[343px] h-[32px] gap-[16px] '>
            <MdArrowBackIos className="w-[24px] h-[24px]"/>
            <label className='w-[288px] h-[32px] text-[24px] font-medium font-inter leading-[32px]'>Filter</label>
        </h1>
        <div className="block md:hidden md:w-[831px] w-[341px] h-[1254px] md:h-[1480px] flex flex-col md:gap-[24px]">
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
                                <button onClick={handleButtonClick} className='w-full h-[56px] py-[16px] px-[56px] rounded-[6px] bg-black text-white text-center text-[16px] font-medium font-inter leading-[24px] '>Checkout</button>
                                </div>
                                )}
                                </div>
                            ))}
                        </Box>
                </div>

    </div>
  )
}
