import React from 'react'
import { Footer } from '../../components/ui/Home/Footer/Footer'
import { Navbar } from '../../components/ui/Home/Navbar/Navbar'
import { Steps } from '../../components/ui/Step1/Steps'
import { StepOne } from '../../components/ui/Step1/StepOne'

export const Step1 = () => {
  return (
    <div className='h-auto w-full '>
        <Navbar/>
        <Steps/>
        <StepOne/>
        <Footer/>

    </div>
  )
}
