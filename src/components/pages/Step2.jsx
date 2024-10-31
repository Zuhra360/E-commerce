import { Navbar } from '../../ui/Home/Navbar/Navbar'
import { Footer } from '../../ui/Home/Footer/Footer'
import { Steps } from '../../ui/Step2/Steps'
import { StepTwo } from '../../ui/Step2/StepTwo'


export const Step2 = () => {
  return (
    <div className='h-auto md:w-full w-[375px]'>
        <Navbar/>
        <Steps/>
        <StepTwo/>
        <Footer/>

    </div>
  )
}
