import React from 'react'
import { Navbar } from '../../ui/Home/Navbar/Navbar'
import { Footer } from '../../ui/Home/Footer/Footer'
import { DetailMain } from '../../ui/ProductDetail/DetailMain'
import { RelatedProducts } from '../../ui/ProductDetail/RelatedProducts'
import { Details } from '../../ui/ProductDetail/Details'
import { Review } from '../../ui/ProductDetail/Review'


export const ProductDetails = () => {
  return (
    <div className='h-auto md:w-full w-[375px]'>
        <Navbar/>
        <DetailMain/>
        <Details/>
        <Review/>
        <RelatedProducts/>
        <Footer/>

    </div>
  )
}
