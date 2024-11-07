import React from 'react'
import { Navbar } from '../../components/ui/Home/Navbar/Navbar'
import { Footer } from '../../components/ui/Home/Footer/Footer'
import { DetailMain } from '../../components/ui/ProductDetail/DetailMain'
import { RelatedProducts } from '../../components/ui/ProductDetail/RelatedProducts'
import { Details } from '../../components/ui/ProductDetail/Details'
import { Review } from '../../components/ui/ProductDetail/Review'


export const ProductDetails = () => {
  return (
    <div className='h-auto w-full'>
        <Navbar/>
        <DetailMain/>
        <Details/>
        <Review/>
        <RelatedProducts/>
        <Footer/>

    </div>
  )
}
