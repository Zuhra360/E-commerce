import { useNavigate } from 'react-router-dom';
import { Box } from '@mantine/core';
import { FiMinus,FiPlus } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { CartData1, CartData2 } from './CartData';

export const Cart = () => {
  const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/Step1');  
    };
    
  return (
    <div className='w-full h-auto md:h-[880px]  md:py-[112px] md:px-[160px] md:flex  md:gap-[48px]'>
      <div className='md:w-[1120] md:h-[656px] w-full h-auto  flex md:flex-row flex-col p-[10px] md:p-0 md:gap-[48px] gap-[16px]'>
        <Box className='md:w-[536px] md:h-[556px] h-[656px] flex  flex-col gap-[40px]'>
            <h1 className="w-full h-[24px] text-[24px] font-semibold font-['Inter'] leading-[24px]">Shopping Cart</h1>
            <div className='w-full md:h-[492px] h-[592px] rounded-[15px] flex  flex-col gap-[40px] '>
              {CartData1.map((data,index) =>
                <div key={index} className='w-full md:h-[138px] h-[152px]  md:pt-[16px] md:pb-[32px] py-[16px]  flex justify-center flex-row  gap-[15px] border-b-[0.5px] border-[#A3A3A3] '>
                    <div className='w-[90px] h-[90px] '>{data.image}</div>
                    <div className='md:w-[431px] w-[236px] md:h-[80px] h-[120px] flex md:flex-row flex-col'>
                        <div className='md:w-[193px] w-[236px] h-[80px] min-w-[106px] flex flex-col gap-[8px] '>
                          <h1 className='w-full h-[48px] text-[16px] font-medium font-inter leading-[24px]'>{data.desc}</h1>
                          <p className='w-full h-[24px] text-[14px] font-normal font-inter leading-[24px]'>{data.Number}</p>
                        </div>
                        <div className='w-[240px] h-[32px] flex flex-row gap-[24px]'>
                            <div className='w-[104px] h-[32px] flex items-center flex-row gap-[8px] '>
                              <button className='w-[24px] h-[24px] flex justify-center items-center' ><FiMinus /></button>
                              <p className='w-[40px] h-[32px] py-[8px] px-[16px] border-[0.5px] flex text-center items-center border-[#D9D9D9]'>1</p>
                              <button className='w-[24px] h-[24px]'><FiPlus /></button>
                            </div>
                            <p className='w-[64px] h-[32px] text-[20px] font-medium font-inter leading-[32px]'>{data.price}</p>
                            <button className='w-[24px] h-[24px]'><RxCross1 /></button>
  
                        </div>
  
                    </div>
                </div>
              )}
            </div>

        </Box>

        <Box className='md:w-[536px]  h-[656px]  py-[56px] md:px-[64px] px-[16px] flex items-center flex-col rounded-[10px] gap-[40px] border-[1px] border-[#A3A3A3]'>
          <h1 className="md:w-[408px] w-[309px] h-[16px] text-[20px] font-bold font-['Inter'] leading-[16px]">Order Summary</h1>
          <div className='md:w-[408px] w-[309px] h-[488px] flex flex-col gap-[48px]'>
              <div className='w-full h-[384px]   flex flex-col  gap-[24px] '>

                  <div className='w-full h-[192px] flex flex-col gap-[24px]'>
                    <div className='w-full h-[80px] flex flex-col gap-[8px]'>
                      <p className='w-full h-[16px] text-[14px] text-[#545454] font-medium font-inter leading-[16px]'>Discount code / Promo code</p>
                      <div className='w-full h-[56px]  py-[16px] pl-[16px] flex justify-between rounded-[7px] gap-[40px] border-[0.5px] border-[#9F9F9F]'>
                        <input
                        type='text'
                        name='code'
                        placeholder='Code'
                        className='md:w-[392px] w-[293px] h-[24px] text-[14px] text-[#979797] font-normal font-inter leading-[24px]'/>
                      </div>
                    </div>

                    <div className='w-full md:h-[80px] h-[88px] flex flex-col gap-[8px]'>
                      <p className='w-full h-[16px] text-[14px] text-[#545454] font-medium font-inter leading-[16px]'>Your bonus card number</p>
                      <div className='w-full md:h-[56px] h-[64px]  p-[16px] flex justify-between items-center rounded-[7px] gap-[40px] border-[0.5px] border-[#9F9F9F]'>
                        <input
                        type='text'
                        name='cardnum'
                        placeholder='Enter Card Number'
                        className='md:w-[299px] w-[170px] h-[24px] text-[14px] text-[#979797] font-normal font-inter leading-[24px]'/>
                        <button className='w-[76px] h-[32px] rounded-[6px] p-[8px]  border-[1px] border-black flex items-center'>
                          <label className='w-[60px] md:h-full h-[16px] text-[12px] font-medium font-inter leading-[16px]'>Apply</label>
                        </button>
                      </div>
                    </div>
                 </div>


                 <div className='w-full h-[168px] flex flex-col gap-[16px]'>
                      <h1 className="w-full h-[32px] flex justify-between items-center">
                        <label className='md:w-[355px] w-[309px] md:h-[24px] h-[32px] text-[16px] font-medium font-inter leading-[24px]'>Subtotal</label>
                        <label className='w-[53px] h-[32px] text-[16px] font-medium font-inter leading-[32px]'>$2347</label>
                      </h1>
                      <div className='md:w-full w-[309px] h-[72px] flex flex-col gap-[8px]'>
                      {CartData2.map((data,index) =>
                        <div key={index} className='w-full h-[72px] flex flex-col gap-[8px]'>
                        <h1 className="w-full h-[32px] flex justify-between items-center">
                          <label className='md:w-[376px] w-[277px] h-[32px] text-[16px] font-normal font-inter leading-[32px] text-[#545454]'>{data.text}</label>
                          <label className='w-[32px] h-[32px] text-[16px] font-medium font-inter leading-[32px]'>{data.price}</label>
                        </h1>
                        </div>
                      )}
                      </div>
                      <h1 className="w-full h-[32px] flex justify-between items-center">
                        <label className='md:w-[355px] w-[256px] h-[24px] text-[16px] font-medium font-inter leading-[24px]'>Total</label>
                        <label className='w-[53px] h-[32px] text-[16px] font-medium font-inter leading-[32px]'>$2426</label>
                      </h1>
                 </div>

              </div>

              
              <button onClick={handleButtonClick} className='w-full h-[56px] py-[16px] px-[56px] rounded-[6px] bg-black text-white text-center text-[16px] font-medium font-inter leading-[24px] '>Checkout</button>
              

          </div>

        </Box>

      </div>
    </div>
  )
}
