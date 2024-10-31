import { useNavigate } from 'react-router-dom';
import { Box } from '@mantine/core';
import { FaPen } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import plus from "../../assets/images/Step1/Plus.png"

export const StepOne = () => {
  const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/Step2');  
    };
    const handleButtonClickback = () => {
      navigate('/ShoppingCart');  
    };
  return (
    <div className='md:w-full w-[373px] md:h-[688px] h-[760px] py-[48px] md:px-[160px] px-[16px] flex  gap-[64px]'>
      <div className='md:w-[1120px] md:h-[592px] w-full h-full flex justify-between flex-col md:gap-0 gap-[64px]'>
         <Box className='md:w-full w-[341px] md:h-[464px] h-[536px] flex flex-col gap-[32px]'>
             <h1 className="w-full h-[24px] text-[20px] font-semibold font-['Inter'] leading-[24px]">Select Address</h1>
             <div className='w-full md:h-[408px] h-[480px] flex flex-col gap-[48px]'>
                 <div className='w-full md:h-[312px] h-[384px] flex flex-col gap-[24px]'>
                    <Box className='w-full md:h-[144px] h-[192px] p-[24px] rounded-[7px] flex flex-row items-center  justify-between bg-[#F6F6F6] '>
                       <div className='md:w-[1000px] md:h-[96px] w-[221px] h-[144px] flex flex-col gap-[16px]'>
                          <div className='w-full h-[24px] flex flex-row gap-[16px]'>
                            <h1 className='w-[180px]  h-[24px] flex flex-row gap-[16px]'>
                                <input
                                  type="radio"
                                  className=" h-[24px] w-[24px] text-blue-600 border-black focus:ring-blue-500"
                                />
                                <label className='w-[140px] h-[24px] text-[18px] text-[#17183B] font-normal font-inter leading-[24px]'>2118 Thornridge</label>
                            </h1>
                            <h1 className='w-[53px] h-[23px] py-[4px] px-[8px] bg-black flex items-center rounded-[4px]'>
                              <span className='w-[37px] h-[15px] text-white text-[12px] font-medium font-inter leading-[14px]'>HOME</span>
                            </h1>
                          </div>

                          <div className='w-full md:h-[56px] h-[104px] pl-[40px] flex flex-col gap-[8px]'>
                            <p className='md:w-[960px] w-[181px] h-[72px] md:h-[24px] text-[16px] text-[#17183B] font-normal font-inter leading-[24px]'>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                            <p className='md:w-[960px] w-[181px] h-[24px] text-[16px] text-[#17183B] font-normal font-inter leading-[24px]'><label className='w-[121px] h-full '>(209) 555-0104</label></p>
                          </div>

                       </div>

                       <div className='w-[72px] h-[24px] flex gap-[24px] ' >
                          <FaPen className='w-[24] h-[24px]'/>
                          <RxCross1 className='w-[24] h-[24px]'/>
                       </div>

                    </Box>

                    <Box className='w-full md:h-[144px] h-[168px] p-[24px] rounded-[7px] flex items-center flex-row justify-between bg-[#F6F6F6] '>
                       <div className='md:w-[1000px] md:h-[96px] w-[221px] h-[120px] flex flex-col gap-[16px]'>
                          <div className='w-full h-[24px] flex flex-row gap-[16px]'>
                            <h1 className='md:w-[135px] w-[135px] h-[24px] flex flex-row gap-[16px]'>
                                <input
                                  type="radio"
                                  className=" h-[24px] w-[24px] text-blue-600 border-black focus:ring-blue-500"
                                />
                                <label className='w-[95px] h-[24px] text-[18px] text-[#17183B] font-normal font-inter leading-[24px]'>Headoffice</label>
                            </h1>
                            <h1 className='w-[59px] h-[23px] py-[4px] px-[8px] bg-black flex items-center rounded-[4px]'>
                              <span className='w-[43px] h-[15px] text-white text-[12px] font-medium font-inter leading-[14px]'>HOME</span>
                            </h1>
                          </div>

                          <div className='w-full md:h-[56px] h-[80px] pl-[40px] flex flex-col gap-[8px]'>
                            <p className='md:w-[960px] w-[185px] md:h-[24px] h-[48px] text-[16px] text-[#17183B] font-normal font-inter leading-[24px]'>2715 Ash Dr. San Jose, South Dakota 83475</p>
                            <p className='md:w-[960px] w-[181px] h-[24px] text-[16px] text-[#17183B] font-normal font-inter leading-[24px]'><label className='w-[119px] h-full '>(704) 555-0127</label></p>
                          </div>

                       </div>
                       
                       <div className='w-[72px] h-[24px] flex gap-[24px] ' >
                          <FaPen className='w-[24] h-[24px]'/>
                          <RxCross1 className='w-[24] h-[24px]'/>
                       </div>

                    </Box>

                    <Box className='md:w-[1120px] w-[341px] h-[48px] flex justify-center items-center flex-col gap-[8px] '>
                       <div className='w-full h-[24px] flex flex-row items-center'>
                          <div class="md:w-[548px] w-[158px] border-t border-dashed border-black"></div>
                          <img src={plus}/>
                          <div class="md:w-[548px] w-[158px] border-t border-dashed border-black"></div>
                       </div>
                       <p className='w-[188px] h-[16px] text-[14px] text-black font-normal font-inter leading-[16px] text-center'>Add New Address</p>
                    </Box>
                 </div>

              </div>
            
        </Box>

         <div className='md:w-full w-[343px]  h-[64px] flex flex-row justify-end items-center gap-[24px] '>
            <button onClick={handleButtonClickback} className='md:w-[210px] w-[159px] h-full rounded-[6px] border-[1px] border-black py-[24px] md:px-[86px] flex justify-center gap-[8px] '>
              <label className='w-[38px] h-[16px] text-[16px] text-black font-medium font-inter leading-[16px] text-center'>Back</label>
            </button>
            <button onClick={handleButtonClick} className='md:w-[210px] w-[159px] h-full rounded-[6px] bg-black border-[1px] border-black py-[24px] md:px-[86px] flex justify-center gap-[8px] '>
              <label className='w-[36px] h-[16px] text-[16px] text-white font-medium font-inter leading-[16px] text-center'>Next</label>
            </button>

         </div>

      </div>
      
    </div>
  )
}
