import Iphone from "../../../../src/assets/images/Home/Iphone Image.png";
import { useNavigate } from 'react-router-dom';
export const Banner = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/ProductDetails');  
  };
  return (
    <div className="w-[100%] md:h-[632px] h-[769px] md:px-[160px] md:py-0 px-[16px] pt-[88px] bg-gradient-to-r from-[#211c24] to-[#211c24] flex md:justify-between gap-[40px] items-center flex-col md:flex-row md:inline-flex ">
        <div className="md:w-[740px]  md:h-[256px] w-[343px] h-[344px] gap-[24px] ">
            <div className="md:h-[256px] h-auto w-full  text-center flex flex-col md:justify-start md:items-start gap-[16px]  md:gap-[24px] md:inline-flex ">
               <h1 className="text-white  text-[25px] md:text-start text-center font-semibold font-['Inter'] leading-loose opacity-40">Pro.Beyond</h1>
               <h1 className="h-[144px] md:h-full text-white md:text-8xl  text-[72px] font-thin font-['Inter'] leading-[72px]">IPhone 14 <strong>Pro</strong></h1>
               <p className="text-[#909090]  text-[19px] md:text-lg font-medium font-['Inter'] leading-[24px] md:leading-normal">Created to change everything for the better. For everyone</p>
               <button onClick={handleButtonClick} className="h-14 py-4 px-14 rounded-md border border-white justify-center items-center gap-2  text-white text-base font-medium font-['Inter'] leading-normal">Shop Now</button>
            </div>
        </div>
        <div className="md:w-[406px] md:h-[632px] w-[343px] h-[289px] justify-center items-center md:inline-flex overflow-hidden">
                <img src={Iphone}/>
         </div>

    </div>
  )
}
