
import { Banner } from '../../components/ui/Home/Banner/Banner'
import { SmallBanner } from '../../components/ui/Home/SmallBanner/SmallBanner'
import { Category } from '../../components/ui/Home/Category/Category'
import { Products } from '../../components/ui/Home/Products/Products'
import { Banners } from '../../components/ui/Home/Banners/Banners'
import { DiscountProduct } from '../../components/ui/Home/DiscountProduct/DiscountProduct'
import { Banner2 } from '../../components/ui/Home/Banner2/Banner2'
import { Navbar } from '../../components/ui/Home/Navbar/Navbar'
import { Footer } from '../../components//ui/Home/Footer/Footer';


export const Home = () => {
  return (
    <div className='h-auto w-full   '>
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
