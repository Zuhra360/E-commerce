
import { Footer } from '../../ui/Home/Footer/Footer'
import { Navbar } from '../../ui/Home/Navbar/Navbar'
import { ProductsPage } from '../../ui/ProductsPage/ProductsPage'

export const Product = () => {
  return (
    <div className='h-auto md:w-full w-[375px]  '>
    <Navbar/>
    <ProductsPage/>
    <Footer/>

    </div>
  )
}
