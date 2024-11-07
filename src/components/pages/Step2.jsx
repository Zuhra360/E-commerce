import { Navbar } from '../../components/ui/Home/Navbar/Navbar'
import { Footer } from '../../components/ui/Home/Footer/Footer'
import { Steps } from '../../components/ui/Step2/Steps'
import { StepTwo } from '../../components/ui/Step2/StepTwo'


export const Step2 = () => {
  return (
    <div className='h-auto w-full'>
        <Navbar/>
        <Steps/>
        <StepTwo/>
        <Footer/>

    </div>
  )
}
