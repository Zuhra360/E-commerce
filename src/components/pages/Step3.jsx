import React from 'react'
import { Navbar } from '../../ui/Home/Navbar/Navbar'
import { Footer } from '../../ui/Home/Footer/Footer'
import { Steps } from '../../ui/Step3/Steps'
import { StepThree } from '../../ui/Step3/StepThree'


export const Step3 = () => {
  return (
    <div className='h-auto md:w-full w-[375px]'>
        <Navbar/>
        <Steps/>
        <StepThree/> 
        <Footer/>

    </div>
  )
}
