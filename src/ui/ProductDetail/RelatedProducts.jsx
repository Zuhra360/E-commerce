import { Box } from "@mantine/core";
import { RelatedProductsData } from "./Data";
import favoriteicon from "../../assets/images/Home/Favoriteicon.png";

export const RelatedProducts = () => {
  return (
    
    <div className="md:w-full md:h-[656px] w-[375px] h-[896px]  md:py-[80px] md:px-[160px] py-[56px] px-[16px] flex flex-col gap-[32px] items-center">
       <div className="md:w-[1120px] w-[248px] h-[32px]">
          <h1 className=" w-[248px] h-[32px] text-black text-center text-[24px] font-medium font-['Inter'] leading-[32px]">Related Products</h1>
       </div>

       <div className="md:w-[1120px] md:h-[432px] w-[343px] h-[720px] md:flex md:flex-row grid grid-cols-2 grid-rows-2 gap-[16px]">
            {RelatedProductsData.map((data,index) =>
            <Box key={index} className="md:w-[268px] md:h-[436px] w-[163px] h-[352px] px-[12px] rounded-[9px] md:px-[16px] py-[24px] bg-[#F6F6F6] flex items-center flex-col gap-[16px]">
                <p className="md:w-[236px] h-[32px] w-[139px]  flex justify-end"><img src={favoriteicon}/></p>
                <div className="md:w-[160px] md:h-[160px] w-[104px] h-[104px] ">{data.image}</div>
                <div className="md:w-[236px] md:h-[160px] w-[139px] h-[152px] flex flex-col gap-[24px] items-center ">
                <div className="md:w-full h-[88px] w-[139px]  flex flex-col md:gap-[24px] gap-[16px]">
                    <p className="md:w-full  h-[48px] text-center text-black text-[16px] font-medium font-['Inter'] leading-normal line-clamp-2 md:line-clamp-none ">{data.desc} </p>
                    <p className="md:w-full h-[24px] text-center text-black text-[24px] font-semibold font-['Inter'] leading-[24px]">{data.price}</p>
                </div>
                <button  className="md:w-[183px] w-[139px] h-[48px] rounded-[8px] py-[12px] px-[64px] bg-black text-white text-center text-xs leading-4 font-normal font-['Inter'] ">Buy Now</button>

                </div>
            </Box>
            )}
            
           
            
           
  
       </div>

    </div>
  )
}
