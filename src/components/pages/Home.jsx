
import { Banner } from '../../ui/Home/Banner/Banner'
import { SmallBanner } from '../../ui/Home/SmallBanner/SmallBanner'
import { Category } from '../../ui/Home/Category/Category'
import { Products } from '../../ui/Home/Products/Products'
import { Banners } from '../../ui/Home/Banners/Banners'
import { DiscountProduct } from '../../ui/Home/DiscountProduct/DiscountProduct'
import { Banner2 } from '../../ui/Home/Banner2/Banner2'
import { Navbar } from '../../ui/Home/Navbar/Navbar'
import { Footer } from '../../ui/Home/Footer/Footer';


export const Home = () => {
  return (
    <div className='h-auto md:w-full w-[375px]  '>
        <Navbar/>
        <Banner/>
        <SmallBanner/>
        <Category/>
        <Products/>
        <Banners/>
        <DiscountProduct/>
        <Banner2/>
        <Footer/>
        

    </div>
  )
}
