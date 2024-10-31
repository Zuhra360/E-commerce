import { useNavigate } from 'react-router-dom';
import { Box } from '@mantine/core'
import React from 'react'
import { StepThreeData, StepThreeData2, StepThreeData3, StepThreeData4, StepThreeData5 } from '../Step3/StepData';
import card from '../../assets/images/Step3/card.png'

export const StepThree = () => {
  const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/Step2');  
    };
  return (
    <div className='md:w-full h-[800px] w-[373px]  pt-[24px] md:px-[160px] px-[16px] pb-[72px] flex gap-[48px]  md:gap-[96px]'>
      <Box className='hidden md:block md:w-[512px] md:h-[704px]  md:py-[32px] md:px-[24px] md:flex md:flex-col md:rounded-[10px] md:gap-[24px] md:border-[1px] md:border-[#EBEBEB]'>
        <h1 className="w-[464px] h-[16px] text-[20px] font-medium font-['Inter'] leading-[16px]">Summary</h1>
        <div className='w-[464px] h-[248px]  flex flex-col gap-[16px] '>
           
              {StepThreeData.map((data,index) =>
                <Box key={index} className='w-[464px] h-[72px] py-[16px] pl-[16px]  rounded-[13px] flex items-center flex-row gap-[16px] bg-[#F6F6F6]'>
                <div className='w-[40px] h-[40px]'>{data.image}</div>
                <h1 className='w-[392px] h-[24px] flex  justify-between flex-row  gap-[24px] ' >
                  <label className='w-[319px] h-[24px] text-[16px] font-medium font-inter leading-[24px]'> {data.desc}</label>
                  <label className='w-[49px] h-[24px] text-[16px] font-bold font-inter  leading-[24px]'>{data.price}</label>
                </h1>
                </Box>

              )}
        </div>

        <div className='w-[464px] h-[328px]  flex flex-col gap-[24px]'>
          {StepThreeData2.map((data,index) => 
            <Box key={index} className='w-full h-[136px]  flex flex-col gap-[16px] '>
            <div className='w-full h-[72px]  flex flex-col gap-[8px] '>
              <h1 className='w-full h-[16px] text-[14px] font-medium font-inter text-[#545454] leading-[16px]'>{data.title}</h1>
              <h1 className='w-full h-[48px] py-[12px] flex rounded-[7px] gap-[87px]'>
              <label className='w-full h-[24px] text-[16px] font-normal font-inter leading-[24px]'>{data.desc}</label>
              </h1>
            </div>

            </Box>
          )}
           

           <Box className='w-full h-[168px] flex flex-col gap-[16px]'>
                      <h1 className="w-full h-[32px] flex justify-between items-center">
                        <label className='w-[355px] h-[24px] text-[16px] font-medium font-inter leading-[24px]'>Subtotal</label>
                        <label className='w-[53px] h-[32px] text-[16px] font-medium font-inter leading-[32px]'>$2347</label>
                      </h1>
                      {StepThreeData3.map((data,index) =>
                        <div key={index} className='w-full h-[72px] flex flex-col gap-[8px]'>
                        <h1 className="w-full h-[32px] flex justify-between items-center">
                          <label className='w-[376px] h-[32px] text-[16px] font-normal font-inter leading-[32px] text-[#545454]'>{data.text}</label>
                          <label className='w-[32px] h-[32px] text-[16px] font-medium font-inter leading-[32px]'>{data.price}</label>
                        </h1>
                        </div>
                      )}
                      
                      <h1 className="w-full h-[32px] flex justify-between items-center">
                        <label className='w-[355px] h-[24px] text-[16px] font-medium font-inter leading-[24px]'>Total</label>
                        <label className='w-[53px] h-[32px] text-[16px] font-medium font-inter leading-[32px]'>$2426</label>
                      </h1>
                 </Box>

        </div>
      </Box>

      <Box className='md:w-[512px] w-[341px] h-[704px]  flex flex-col md:justify-between md:gap-0 gap-[48px]'>
         <div className='md:w-[512px] w-[341px] h-[518px] flex flex-col gap-[40px]'>
           <Box className='md:w-[512px] w-[341px] h-[72px] flex flex-col gap-[24px]'>
              <h1 className="md:w-full w-[341px] h-[16px] text-[20px] font-bold font-['Inter'] leading-[16px]">Payment</h1>
              <div className='md:w-full w-[341px] h-[32px] flex items-center flex-row gap-[56px] '>
                  <h1 className='w-[82px] h-[32px] py-[8px] border-b-[1px] border-black flex gap-[8px]'>
                    <label className='w-[82px] h-[16px] text-[14px] font-medium font-inter leading-[16px]'>Credit Card</label>
                  </h1>
                  <h1 className='w-[47px] h-[16px] text-[14px] font-medium font-inter text-[#717171] leading-[16px]'>PayPal</h1>
                  <h1 className='w-[95px] h-[16px] text-[14px] font-medium font-inter text-[#717171] leading-[16px]'>PayPal Credit</h1>
              </div>
           </Box>

           <Box className='md:w-[512px] w-[341px] h-[406px]  flex flex-col gap-[40px] '>
              <img src={card} className='w-[337px] h-[190px] '/>
              <div className='md:w-full w-[341px] h-[176px]  flex flex-col gap-[16px] '>
                {StepThreeData4.map((data,index) =>
                  <div key={index} className='md:w-full w-[341px] h-[48px] py-[12px] px-[16px] flex flex-col rounded-[7px] border-[0.5px] border-[#CECECE]'>
                  <input
                  type='text'
                  placeholder={data.text}
                  className='md:w-[480px] w-[309px] h-[16px] text-[14px] font-normal font-inter text-[#979797] leading-[16px]'/>
                 </div>
                )}
                <div className='md:w-full w-[341px] h-[48px] flex flex-row gap-[16px]'>
                  {StepThreeData5.map((data,index) =>
                   <div key={index} className='md:w-[248px] w-[162px] h-[48px] py-[12px] px-[16px] flex flex-col rounded-[7px] border-[0.5px] border-[#CECECE]'>
                   <input
                    type='text'
                    placeholder={data.text}
                    className='md:w-[216px] w-[130px] h-[16px] text-[14px] font-normal font-inter text-[#979797] leading-[16px]'/>
                   </div>
                  )}
                </div>

              </div>

           </Box>
         </div>

         <div className='md:w-full w-[341px] h-[24px] flex items-center flex-row gap-[16px] '>
           <input
           type='checkbox'
           className='w-[16px] h-[15px] rounded-[3px] p-[6px] gap-[8px] '/>
           <label className='md:w-[488px] w-[316px] h-[24px] text-[15px] font-medium font-inter leading-[24px]'>Same as billing address</label>
         </div>

         <div className='md:w-full w-[341px]  h-[64px] flex flex-row  items-center gap-[23px] '>
            <button onClick={handleButtonClick} className='md:w-[244px] w-[159px] h-full rounded-[6px] border-[1px] border-black py-[24px] md:px-[86px] flex justify-center '>
              <label className='w-[38px] h-[16px] text-[16px] text-black font-medium font-inter leading-[16px] text-center'>Back</label>
            </button>
            <button  className='md:w-[244px] w-[159px] h-full rounded-[6px] bg-black border-[1px] border-black py-[24px] md:px-[86px] flex justify-center '>
              <label className='w-[29px] h-[16px] text-[16px] text-white font-medium font-inter leading-[16px] text-center'>Pay</label>
            </button>
         </div>

      </Box>

    </div>
  )
}
