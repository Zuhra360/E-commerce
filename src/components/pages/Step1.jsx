import React from 'react'
import { Footer } from '../../ui/Home/Footer/Footer'
import { Navbar } from '../../ui/Home/Navbar/Navbar'
import { Steps } from '../../ui/Step1/Steps'
import { StepOne } from '../../ui/Step1/StepOne'

export const Step1 = () => {
  return (
    <div className='h-auto md:w-full w-[375px]'>
        <Navbar/>
        <Steps/>
        <StepOne/>
        <Footer/>

    </div>
  )
}
