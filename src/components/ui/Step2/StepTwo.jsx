import { useNavigate } from 'react-router-dom';
import { Box } from '@mantine/core'
import { IoIosArrowDown } from "react-icons/io";

export const StepTwo = () => {
  const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/Step3');  
    };
    const handleButtonClick2 = () => {
      navigate('/Step1');  
    };
  return (
    <div className='md:w-full md:h-[688px]  h-[816px]  py-[48px] md:px-[160px] px-[16px] flex flex-col  md:gap-[64px] gap-[40px]'>
      <div className='md:w-[1120px] md:h-[592px] md:flex md:justify-between md:flex-col md:gap-0 gap-[40px] '>
        <Box className='md:w-full  md:h-[304px] h-[616px] flex flex-col gap-[32px] '>
            <h1 className="w-full h-[24px] text-[20px] font-semibold font-['Inter'] leading-[24px]">Shipment Method</h1>
            <div className='w-full md:h-[248px] h-[560px] flex flex-col gap-[16px]'>

              <Box className='w-full md:h-[72px] h-[136px] rounded-[11px] p-[24px] border-[1px] flex items-center flex-row justify-between border-[#D1D1D8]'>
                <div className='md:w-[973px] w-[147px] h-[88px] md:h-[24px]  md:flex md:flex-row md:gap-[16px] gap-[8px] '>
                  <p className='md:w-[75px] md:h-[24px]  w-[147px] h-[56px] flex md:flex-row flex-col md:gap-[16px] gap-[8px] '>
                    <input
                      type="radio"
                      className=" h-[24px] w-[24px] text-blue-600 border-black focus:ring-blue-500"
                      />
                    <label className='md:w-[35px] w-[68px] h-[24px] text-[16px] font-medium font-inter leading-[24px] '>Free</label>
                  </p>
                  <p className='md:w-[882px] w-[147px] h-[24px] text-[16px] font-normal text-black font-inter leading-[24px] '>Regulary shipment</p>
                </div>
                <p className='md:w-[99px] w-[147px] h-[24px] text-[16px] font-medium font-inter leading-[24px] '>17 Oct, 2023</p>
              </Box>

              <Box className='w-full  md:h-[72px] h-[184px] rounded-[11px] p-[24px] border-[1px] flex items-center flex-row justify-between border-[#D1D1D8]'>
                <div className='md:w-[973px] w-[147px] md:h-[24px] h-[136px] flex md:flex-row flex-col md:gap-[16px] gap-[8px] '>
                  <p className='md:w-[86px] w-full md:h-[24px] h-[48px] flex md:flex-row flex-col md:gap-[16px] gap-[8px]'>
                    <input
                      type="radio"
                      className=" h-[24px] w-[24px] text-blue-600 border-black focus:ring-blue-500"
                      />
                    <label className='md:w-[46px] w-[68px] h-[24px] text-[16px] text-[#A2A3B1] font-medium font-inter leading-[24px] '>$8.50</label>
                  </p>
                  <p className='md:w-[882px] w-full md:h-[24px] h-[72px] text-[16px] font-normal text-[#A2A3B1]  font-inter leading-[24px] '>Get your delivery as soon as possible</p>
                </div>
                <p className='md:w-[90px] w-[147px] h-[24px] text-[16px] text-[#A2A3B1]  font-medium font-inter leading-[24px] '>1 Oct, 2023</p>
              </Box>

              <Box className='w-full md:h-[72px] h-[200px] rounded-[11px] p-[24px] border-[1px] flex flex-row items-center justify-between border-[#D1D1D8]'>
                <div className='md:w-[973px] w-[147px] md:h-[24px] h-[160px] flex md:flex-row flex-col md:gap-[16px] gap-[8px]'>
                  <p className='md:w-[112px] w-full md:h-[24px] h-[72px] flex md:flex-row flex-col md:gap-[16px] gap-[8px]'>
                    <input
                      type="radio"
                      className=" h-[24px] w-[24px] text-blue-600 border-black focus:ring-blue-500"
                      />
                    <label className='md:w-[72px] w-[68px] md:h-[24px] h-[48px] text-[16px] text-[#A2A3B1] font-medium font-inter leading-[24px] '>Schedule</label>
                  </p>
                  <p className='md:w-[882px] w-full md:h-[24px] h-[72px] text-[16px] font-normal text-[#A2A3B1]  font-inter leading-[24px] '>Pick a date when you want to get your delivery</p>
                </div>
                <p className='md:w-[110px] w-[147px] h-[24px] text-[16px] text-[#A2A3B1]  font-medium font-inter leading-[24px] flex items-center flex-row'>
                  <label className='w-[90px]'>Select Date</label>
                  <button><IoIosArrowDown /></button>
                </p>
              </Box>

            </div>
        </Box>

        <div className='md:w-full  h-[64px] flex flex-row justify-end items-center gap-[24px] '>
            <button onClick={handleButtonClick2} className='md:w-[210px] w-[159px] h-full rounded-[6px] border-[1px] border-black py-[24px] md:px-[86px] flex justify-center gap-[8px] '>
              <label className='w-[38px] h-[16px] text-[16px] text-black font-medium font-inter leading-[16px] text-center'>Back</label>
            </button>
            <button onClick={handleButtonClick} className='md:w-[208px] w-[159px] h-full rounded-[6px] bg-black border-[1px] border-black py-[24px] md:px-[86px] flex  justify-center  gap-[8px] '>
              <label className='w-[36px] h-[16px] text-[16px] text-white font-medium font-inter leading-[16px] text-center'>Next</label>
            </button>
         </div>


      </div>
       

    </div>
  )
}
