import banner2bg from "../../../../assets/images/Home/banner2bg.png";


export const Banner2 = () => {
  return (
    <div className="w-full md:h-[448px]  h-[512px] md:px-0 md:py-0 py-[104px] px-[16px] bg-no-repeat overflow-hidden flex items-center justify-center"
    style={{ backgroundImage: `url(${banner2bg})` ,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
     }}>
       
        
         <div className="md:w-[553px] md:h-[200px] w-[343px] h-[304px] md:gap-0 gap-[40px] ">
            <div className="md:w-[553px] md:h-[200px] w-[343px] h-[304px] md:gap-6 gap-[40px] flex items-center justify-center flex-col  ">
              <div className="md:w-[553px] md:h-[104px] w-[343px] h-[208px] ">
              <h1 className="h-[144px] md:h-[72px] text-center text-white md:text-[72px] text-[48px]  font-thin font-['Inter'] leading-[72px]">Big Summer <span className="font-normal">Sale</span></h1>
              <p className="md:h-[32px] h-[64px] text-center text-[#787878] text-[16px] font-normal font-['Inter'] leading-[32px]">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
              </div>
              <button className="w-[191px] h-[56px] rounded-[6px] py-[16px] px-[56px] flex items-center text-center text-white  border-2 border-white text-md font-semibold">Shop Now</button>
            </div>
         </div>

    </div>

  )
}
