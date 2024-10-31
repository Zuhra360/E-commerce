import { Box } from '@mantine/core'
import React from 'react'
import { DetailsData, DetailsData2, DetailsData3 } from './Data';
import { Progress } from '@mantine/core';
import user1 from "../../assets/images/ProductDetails/User1.png";
import user2 from "../../assets/images/ProductDetails/User2.png";
import user3 from "../../assets/images/ProductDetails/User3.png";
import review1 from "../../assets/images/ProductDetails/Review1.png";
import review2 from "../../assets/images/ProductDetails/Review2.png";
import { IoIosArrowDown } from "react-icons/io";

export const Review = () => {
  return (
    <div className='md:w-full w-[375px] md:h-[1336px] h-[2099px] md:py-[88px] py-[40px] md:px-[160px] px-[16px] flex  flex-col rounded-[24px] gap-[32px]'>
      <Box className='md:w-[1120px] w-[343px] md:h-[384px] h-[596px] flex flex-col gap-[48px] '>
        <h1 className="w-full h-[32px]  text-[24px] font-medium font-['Inter'] leading-[32px]">Reviews</h1>
        <div className='w-full md:h-[192px] h-[404px] flex md:flex-row flex-col gap-[60px] '>

           <div className='md:w-[184px] w-full md:h-full h-[152px] flex items-center md:flex-col flex-row  p-[32px] rounded-[25px] gap-[16px] bg-[#FAFAFA]'>
              <div className='md:w-[120px] md:h-[72px] w-[131px] h-[88px]'>
                  <h1 className=' w-full h-[56px]  text-[56px] font-medium font-inter leading-[56px]  text-center'>4.8</h1>
                  <p className="w-full h-[16px]  text-[15px] font-medium font-['Inter'] leading-[16px] opacity-30 text-center ">of 125 reviews</p>
              </div>
              <div  className='md:w-[120px] w-[131px] h-[24px] flex justify-between flex-row'>
                {DetailsData.map((data,index) =>
                <p key={index}>{data.star}</p>
                )}    
              </div>
           </div>

           <div className='md:w-[876px] w-[343px] md:h-[176px] h-[192px] md:min-w-[390px] min-w-[302px] flex flex-col gap-[24px]'>
              <div className='w-full h-[16px]  flex justify-between flex-row gap-[16px]  items-center'>
                <label className='md:w-[150px] w-[116px] h-[16px]  text-[18px] font-medium font-inter leading-[16px]'>Excellent</label>
                <Progress color="yellow" value={98} size="sm" radius="lg" className='md:w-[664px] w-[166px] h-[5px]'/>
                <label className='md:w-[30px] w-[29px] h-[16px] text-[16px] font-medium font-inter leading-[16px] opacity-40'>100</label>
              </div>
              <div className='w-full h-[16px]  flex justify-between flex-row gap-[16px]  items-center'>
                <label className='md:w-[150px] w-[116px] h-[16px]  text-[18px] font-medium font-inter leading-[16px]'>Good</label>
                <Progress color="yellow" value={55} size="sm" radius="lg" className='md:w-[664px] w-[167px] h-[5px]'/>
                <label className='md:w-[30px] w-[28px] h-[16px] text-[16px] font-medium font-inter leading-[16px] opacity-40'>11</label>
              </div>
              <div className='w-full h-[16px]  flex justify-between flex-row gap-[16px]  items-center'>
                <label className='md:w-[150px] w-[116px] h-[16px]  text-[18px] font-medium font-inter leading-[16px]'>Average</label>
                <Progress color="yellow" value={25} size="sm" radius="lg" className='md:w-[664px] w-[171px] h-[5px]'/>
                <label className='md:w-[30px] w-[24px] h-[16px] text-[16px] font-medium font-inter leading-[16px] opacity-40'>3</label>
              </div>
              <div className='w-full h-[16px]  flex justify-between flex-row gap-[16px]  items-center'>
                <label className='md:w-[150px] w-[116px] h-[16px]  text-[18px] font-medium font-inter leading-[16px]'>Below Average</label>
                <Progress color="yellow" value={45} size="sm" radius="lg" className='md:w-[664px] w-[176px] h-[5px]'/>
                <label className='md:w-[30px] w-[19px] h-[16px] text-[16px] font-medium font-inter leading-[16px] opacity-40'>8</label>
              </div>
              <div className='w-full h-[16px]  flex justify-between flex-row gap-[16px] items-center'>
                <label className='md:w-[150px] w-[116px] h-[16px]  text-[18px] font-medium font-inter leading-[16px]'>Poor</label>
                <Progress color="yellow" value={10} size="sm" radius="lg" className='md:w-[664px] w-[178px] h-[5px]'/>
                <label className='md:w-[30px] w-[17px] h-[16px] text-[16px] font-medium font-inter leading-[16px] opacity-40'>1</label>
              </div>

           </div>

        </div>

        <div className='md:w-[1120px] w-[343px] h-[64px]  py-[24px] px-[16px] flex  flex-col rounded-[7px] border-[0.5px] border-[#CECECE] '>
          <input
          type='text'
          name='comment'
          placeholder='Leave Comment'
          className='md:w-[1088px] w-[311px] h-[16px] text-[14px] text-[#979797] font-normal font-inter leading-[16px] '/>
        </div>

      </Box>

      <Box className='md:w-[1120px] w-[343px] md:h-[744px] h-[1695px] flex flex-col gap-[24px]'>
        <div className='w-full md:h-[208px] h-[567px] py-[24px] pr-[28px] pl-[16px] flex  flex-row rounded-[10px] gap-[19px] bg-[#FAFAFA] '>
          <img src={user1} className='w-[56px] h-[56px] '/>
          <div className='md:w-[1001px] w-[224px] md:h-[160px] h-[519px] flex flex-col gap-[8px]'>
            <div className='w-full h-[56px] flex flex-col gap-[8px]'>
              <h1 className='w-full h-[24px] flex justify-between '>
                <label className='w-[103px] h-full text-[17px]  font-bold font-inter leading-[24px]'>Grace Carey</label>
                <label className='md:w-[120px] w-[114px] h-[16px] text-[14px]  font-medium font-inter leading-[16px] opacity-20'>24January,2023</label>
              </h1>
              <div  className='w-[116px] h-[24px] flex justify-between flex-row'>
                {DetailsData2.map((data,index) =>
                <p key={index}>{data.star}</p>
                )}    
              </div>
              <p className='md:w-[1001px] w-[224px] md:h-[96px] h-[455px] text-[15px]  font-medium font-inter leading-[24px] text-[#7E7E7E] '>I was a bit nervous to be buying a secondhand phone from Amazon,
                but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan,
                since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT.
                It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤
              </p>
            </div>
          </div>
        </div>

        <div className='w-full md:h-[160px] h-[328px] py-[24px] pr-[28px] pl-[16px] flex  flex-row rounded-[10px] gap-[19px] bg-[#FAFAFA] '>
          <img src={user2} className='w-[56px] h-[56px] '/>
          <div className='md:w-[1001px] w-[224px] md:h-[112px] h-[280px] flex flex-col gap-[8px]'>
            <div className='w-full h-[56px] flex flex-col gap-[8px]'>
              <h1 className='w-full h-[24px] flex justify-between '>
                <label className='w-[135px] h-full text-[17px]  font-bold font-inter leading-[24px]'>Ronald Richards</label>
                <label className='md:w-[120px] w-[114px] h-[16px] text-[14px]  font-medium font-inter leading-[16px] opacity-20'>24January,2023</label>
              </h1>
              <div  className='w-[116px] h-[24px] flex justify-between flex-row'>
                {DetailsData3.map((data,index) =>
                <p key={index}>{data.star}</p>
                )}    
              </div>
              <p className='md:w-[1001px] w-[224px] md:h-[48px] h-[216px] text-[15px]  font-medium font-inter leading-[24px] text-[#7E7E7E] '>
              This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin’s)
               So if you want a phone that’s going to last grab an iPhone 14 pro max and get several cords and plugs.
              </p>
            </div>
          </div>
        </div>

        <div className='w-full md:h-[256px] h-[352px] py-[24px] pr-[28px] pl-[16px] flex  flex-row rounded-[10px] gap-[19px] bg-[#FAFAFA] '>
          <img src={user3} className='w-[56px] h-[56px] '/>
          <div className='md:w-[1001px] w-[224px] md:h-[208px] h-[304px] flex flex-col gap-[8px]'>
            <div className='w-full h-[56px] flex flex-col gap-[8px]'>
              <h1 className='w-full h-[24px] flex justify-between '>
                <label className='w-[91px] h-full text-[17px]  font-bold font-inter leading-[24px]'>Darcy King</label>
                <label className='md:w-[120px] w-[114px] h-[16px] text-[14px]  font-medium font-inter leading-[16px] opacity-20'>24January,2023</label>
              </h1>
              <div  className='w-[116px] h-[24px] flex justify-between flex-row'>
                {DetailsData2.map((data,index) =>
                <p key={index}>{data.star}</p>
                )}    
              </div>
              <p className='md:w-[1001px] w-[224px] md:h-[48px] h-[144px] text-[15px]  font-medium font-inter leading-[24px] text-[#7E7E7E] '>
              I might be the only one to say this but the camera is a little funky.
               Hoping it will change with a software update: otherwise, love this phone! Came in great condition
              </p>
              <div className='w-[245px] h-[88px] flex flex-row gap-[8px]'>
                <img src={review1}/>
                <img src={review2}/>

              </div>

            </div>
          </div>
        </div>

      </Box>

      <div className="md:w-full w-[343px] h-[48px] flex items-center justify-center">
          <button className="w-[216px] h-[48px] py-[12px] px-[56px] border-[1px] border-[#545454] flex items-center justify-center gap-[8px] rounded-[8px]">
            <label className="w-[72px] h-[24px] text-[14px] font-medium font-['Inter'] leading-[24px] text-center">View More</label>
            <IoIosArrowDown />
          </button>
        </div>
      
    </div>
  )
}
