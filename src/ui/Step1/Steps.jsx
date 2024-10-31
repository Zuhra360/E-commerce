import React from 'react'
import location from "../../assets/images/Step1/Location.png";
import shipping from "../../assets/images/Step1/Shipping.png";
import payment from "../../assets/images/Step1/Payment.png";


export const Steps = () => {
  return (
    <div className='md:w-full w-[373px] h-[104px] py-[32px] px-[16px] md:h-[184px]  md:py-[72px] md:px-[160px] flex justify-between'>
            <div className='w-[160px] h-[40px]  flex flex-row gap-[8px]'>
                <img src={location}/>
                <div className='w-[128px] h-[40px]  flex flex-col'>
                    <h1 className='w-full h-[16px] text-[14px] font-medium font-inter leading-[16px]'>Step1</h1>
                    <p className='w-full h-[24px] text-[19px] font-medium font-inter leading-[24px]'>Address</p>
                </div>
            </div>

            <div className='w-[160px] h-[40px]  flex flex-row gap-[8px]'>
                <img src={shipping}/>
                <div className='w-[128px] h-[40px]  flex flex-col'>
                    <h1 className='w-full h-[16px] text-[#B2B2B2] text-[14px] font-medium font-inter leading-[16px]'>Step2</h1>
                    <p className='w-full h-[24px] text-[19px] text-[#B2B2B2] font-medium font-inter leading-[24px]'>Address</p>
                </div>
            </div>

            <div className='hidden md:block md:w-[160px] md:h-[40px]  md:flex md:flex-row md:gap-[8px]'>
                <img src={payment}/>
                <div className='w-[128px] h-[40px]  flex flex-col'>
                    <h1 className='w-full h-[16px] text-[14px] text-[#B2B2B2] font-medium font-inter leading-[16px]'>Step3</h1>
                    <p className='w-full h-[24px] text-[19px] text-[#B2B2B2] font-medium font-inter leading-[24px]'>Address</p>
                </div>
            </div>

    </div>
  )
}
