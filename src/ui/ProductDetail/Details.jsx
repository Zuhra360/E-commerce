import { Box } from "@mantine/core"
import { IoIosArrowDown } from "react-icons/io";

export const Details = () => {
  return (
    <div className='md:w-full w-[375px] md:h-[1144px] h-[1328px] md:py-[80px] py-[40px] md:px-[160px] px-[16px] flex items-center justify-center  gap-[40px] bg-[#FAFAFA] '>
      <div className="md:w-[1120px] w-[343px] md:h-[984px] h-[1248px] py-[48px] md:px-[40px] px-[24px] flex flex-col gap-[32px] rounded-[8px] bg-white">
        <h1 className="md:w-[1040px] w-[295px] h-[32px]  text-[24px] font-medium font-['Inter'] leading-[32px]">Details</h1>
        <p className="md:w-[1040px] w-[295px] md:h-[96px] h-[360px] text-[#9D9D9D] text-[14px] font-medium font-['Inter'] leading-[24px]">Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising,
           because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker,
           leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays.
           Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels,
           which had ProMotion, caused real admiration for many.</p>
        <Box className="md:w-[1040px] w-[295px] h-[616px] flex flex-col gap-[40px]">
          <div className="w-full h-[448px] flex flex-col gap-[16px]">
            <h1 className="w-full h-[24px] text-[20px] font-medium font-['Inter'] leading-[24px]">Screen</h1>
            <div className="w-full h-[408px] flex flex-col gap-[24px]">
              <p className="w-full h-[32px] border-b-[0.5px] flex justify-between pb-[8px] border-[#CDCDCD] ">
                <label className="w-[122px] h-[24px] text-[16px] font-normal font-['Inter'] leading-[24px]">Screen diagonal</label>
                <label className="w-[28px] h-[24px] text-[15px] font-normal font-['Inter'] leading-[24px]">6.7"</label>
              </p>
              <p className="w-full h-[32px] border-b-[0.5px] flex justify-between pb-[8px] border-[#CDCDCD] ">
                <label className="w-[164px] h-[24px] text-[16px] font-normal font-['Inter'] leading-[24px]">The screen resolution</label>
                <label className="w-[81px] h-[24px] text-[15px] font-normal font-['Inter'] leading-[24px]">2796x1290</label>
              </p>
              <p className="w-full h-[32px] border-b-[0.5px] flex justify-between pb-[8px] border-[#CDCDCD] ">
                <label className="w-[178px] h-[24px] text-[16px] font-normal font-['Inter'] leading-[24px]">The screen refresh rate</label>
                <label className="w-[49px] h-[24px] text-[15px] font-normal font-['Inter'] leading-[24px]">120 Hz</label>
              </p>
              <p className="w-full h-[32px] border-b-[0.5px] flex justify-between pb-[8px] border-[#CDCDCD] ">
                <label className="w-[129px] h-[24px] text-[16px] font-normal font-['Inter'] leading-[24px]">The pixel density</label>
                <label className="w-[55px] h-[24px] text-[15px] font-normal font-['Inter'] leading-[24px]">460 ppi</label>
              </p>
              <p className="w-full h-[32px] border-b-[0.5px] flex justify-between pb-[8px] border-[#CDCDCD] ">
                <label className="w-[92px] h-[24px] text-[16px] font-normal font-['Inter'] leading-[24px]">Screen type</label>
                <label className="w-[40px] h-[24px] text-[15px] font-normal font-['Inter'] leading-[24px]">OLED</label>
              </p>
              <p className="w-full h-[128px] border-b-[0.5px] flex justify-between pb-[8px] border-[#CDCDCD] ">
                <label className="w-[89px] h-[24px] text-[16px] font-normal font-['Inter'] leading-[24px]">Additionally</label>
                <label className="w-[132px] h-[120px] text-[15px] font-normal font-['Inter'] leading-[24px]">Dynamic Island Always-On display HDR display True Tone Wide color (P3)</label>
              </p>
            </div>
          </div>

          <div className="w-full h-[128px] flex flex-col gap-[16px]">
              <h1 className="w-full h-[24px] text-[20px] font-medium font-['Inter'] leading-[24px]">CPU</h1>
              <div className="w-full h-[88px] flex flex-col gap-[24px]">
                <p className="w-full h-[32px] border-b-[0.5px] flex justify-between pb-[8px] border-[#CDCDCD] ">
                  <label className="w-[34px] h-[24px] text-[16px] font-normal font-['Inter'] leading-[24px]">CPU</label>
                  <label className="w-[74px] h-[24px] text-[15px] font-normal font-['Inter'] leading-[24px]">A16 Bionic</label>
                </p>
                <p className="w-full h-[32px] border-b-[0.5px] flex justify-between pb-[8px] border-[#CDCDCD] ">
                  <label className="w-[127px] h-[24px] text-[16px] font-normal font-['Inter'] leading-[24px]">Number of cores</label>
                  <label className="w-[10px] h-[24px] text-[15px] font-normal font-['Inter'] leading-[24px]">6</label>
                </p>
              </div>
          </div>

        </Box>
          
        <div className="md:w-[1040px] w-[295px] h-[48px] flex items-center justify-center">
          <button className="w-[216px] h-[48px] py-[12px] px-[56px] border-[1px] border-[#545454] flex items-center justify-center gap-[8px] rounded-[8px]">
            <label className="w-[72px] h-[24px] text-[14px] font-medium font-['Inter'] leading-[24px] text-center">View More</label>
            <IoIosArrowDown />
          </button>
        </div>  
        
      </div>
        

    </div>
  )
}
