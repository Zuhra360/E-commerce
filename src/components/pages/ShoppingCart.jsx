import { Cart } from "../../components/ui/Cart/Cart"
import { Footer } from "../../components/ui/Home/Footer/Footer"
import { Navbar } from "../../components/ui/Home/Navbar/Navbar";



export const ShoppingCart = () => {
   
  return (
    <div className='h-auto w-full'>
        <Navbar/>
        <Cart/>
        <Footer/>

    </div>
  )
}
