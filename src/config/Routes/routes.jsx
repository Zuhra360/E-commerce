import { createBrowserRouter } from "react-router-dom";
import { Product } from "../../components/pages/Product";
import { ProductDetails } from "../../components/pages/ProductDetails";
import { ShoppingCart } from "../../components/pages/ShoppingCart";
import { Step1 } from "../../components/pages/Step1";
import { Step2 } from "../../components/pages/Step2";
import { Step3 } from "../../components/pages/Step3";
import { Home } from "../../components/pages/Home";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Product",
    element: <Product />,
  },
  {
    path: "ProductDetails",
    element: <ProductDetails />,
  },
  {
    path: "ShoppingCart",
    element: <ShoppingCart/>,
  },
  {
    path: "Step1",
    element: <Step1/>,
  },
  {
    path: "Step2",
    element: <Step2/>,
  },
  {
    path: "Step3",
    element: <Step3/>,
  },
  
  
  
  
]);
