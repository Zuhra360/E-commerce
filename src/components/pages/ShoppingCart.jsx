import { Cart } from "../../ui/Cart/Cart"
import { Footer } from "../../ui/Home/Footer/Footer"
import { Navbar } from "../../ui/Home/Navbar/Navbar";



export const ShoppingCart = () => {
   
  return (
    <div className='h-auto md:w-full w-[375px]'>
        <Navbar/>
        <Cart/>
        <Footer/>

    </div>
  )
}
