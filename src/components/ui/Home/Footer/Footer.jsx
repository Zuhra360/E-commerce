import footerlogo from "../../../../assets/images/Home/footerlogo.png";
import twitter from "../../../../assets/images/Home/Twitter.png";
import facebook from "../../../../assets/images/Home/Facebook.png";
import tiktok from "../../../../assets/images/Home/Tiktok.png";
import instagram from "../../../../assets/images/Home/Instagram.png";

export const Footer = () => {
  return (
    <div className="w-full md:h-[504px] h-[815px] md:py-0 md:px-0 py-[48px] px-[32px] md:gap-0 gap-[32px] bg-black flex items-center justify-center flex-col ">
       <div className="md:w-[1120px] md:h-[256px] w-[311px] h-[663px] md:gap-0 gap-[32px] flex md:flex-row flex-col justify-between">
          <div className="md:w-[384px] md:h-[95px] w-[311px] h-[87px] flex md:items-start justify-center items-center flex-col md:gap-[24px] gap-[16px]">
            <img src={footerlogo} className="w-[65px] h-[23px]"/>
            <p className="h-[48px] md:h-full md:w-full w-[311px] text-[#CFCFCF] md:text-[14px] text-[13px] font-normal font-['Inter'] leading-[24px]">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
          </div>

          <div className="md:w-[623px] md:h-[256px] w-[311px] h-[544px] md:gap-0 gap-[32px] flex md:flex-row flex-col">
              <div className="md:w-1/2 w-full md:h-full h-[256px] text-white flex md:items-start justify-center items-center flex-col gap-[8px]">
                <h1 className="w-[68px] h-[16px] text-white text-[16px] text-center md:text-start font-semibold font-['Inter'] leading-[16px]">Services</h1>
                <p className="w-full h-[32px] text-[#CFCFCF] text-[14px] font-normal text-center md:text-start font-['Inter'] leading-[32px]">Bonus program</p>
                <p className="w-full h-[32px] text-[#CFCFCF] text-[14px] font-normal text-center md:text-start font-['Inter'] leading-[32px]">Gift cards</p>
                <p className="w-full h-[32px] text-[#CFCFCF] text-[14px] font-normal text-center md:text-start font-['Inter'] leading-[32px]">Credit and payment</p>
                <p className="w-full h-[32px] text-[#CFCFCF] text-[14px] font-normal text-center md:text-start font-['Inter'] leading-[32px]">Service contracts</p>
                <p className="w-full h-[32px] text-[#CFCFCF] text-[14px] font-normal text-center md:text-start font-['Inter'] leading-[32px]">Non-cash account</p>
                <p className="w-full h-[32px] text-[#CFCFCF] text-[14px] font-normal text-center md:text-start font-['Inter'] leading-[32px]">Payment</p>
              </div>

              <div className="md:w-1/2 w-[311px] md:h-full h-[256px] text-white flex md:items-start justify-center items-center flex-col gap-[8px]">
                <h1 className="w-[184px] h-[16px] text-white text-[16px] font-semibold font-['Inter'] leading-[16px]">Assistance to the buyer</h1>
                <p className="w-full h-[32px] text-[#CFCFCF] text-[14px] font-normal text-center md:text-start font-['Inter'] leading-[32px]">Find an order</p>
                <p className="w-full h-[32px] text-[#CFCFCF] text-[14px] font-normal text-center md:text-start font-['Inter'] leading-[32px]">Terms of delivery</p>
                <p className="w-full h-[32px] text-[#CFCFCF] text-[14px] font-normal text-center md:text-start font-['Inter'] leading-[32px]">Exchange and return of goods</p>
                <p className="w-full h-[32px] text-[#CFCFCF] text-[14px] font-normal text-center md:text-start font-['Inter'] leading-[32px]">Guarantee</p>
                <p className="w-full h-[32px] text-[#CFCFCF] text-[14px] font-normal text-center md:text-start font-['Inter'] leading-[32px]">Frequently asked questions</p>
                <p className="w-full h-[32px] text-[#CFCFCF] text-[14px] font-normal text-center md:text-start font-['Inter'] leading-[32px]">Terms of use of the site</p>
              </div>
          </div>
       </div>





       <div className="md:w-[1120px] md:h-[16px] w-[311px] h-[24px] flex justify-center md:justify-start items-center">
          <div className="w-[173px] h-full flex md:items-start justify-center items-center flex-row justify-between ">
              <img src={twitter} />
              <img src={facebook}/>
              <img src={tiktok}/>
              <img src={instagram}/>

          </div>
       </div>
      
    </div>
  )
}
