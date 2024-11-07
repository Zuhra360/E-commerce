import React from 'react'
import { Navbar } from '../../components/ui/Home/Navbar/Navbar'
import { Footer } from '../../components/ui/Home/Footer/Footer'
import { Steps } from '../../components/ui/Step3/Steps'
import { StepThree } from '../../components/ui/Step3/StepThree'


export const Step3 = () => {
  return (
    <div className='h-auto md:w-full'>
        <Navbar/>
        <Steps/>
        <StepThree/> 
        <Footer/>

    </div>
  )
}
