import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductContainer from "../components/ProductContainer";
import Details from "../pages/Details";
import Dashboard from "../pages/Dashboard";
import Wishlist from "../components/Wishlist";
import Cart from "../components/Cart";
import Statistics from "../pages/Statistics";
import Error from "../components/Error";

const routes = createBrowserRouter([
    {
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    loader:()=>fetch("../Category.json"),
    children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch("../Category.json"),
            children: [
                {
                    path:"/",
                    element:<ProductContainer></ProductContainer>,
                    loader:()=>fetch("../Products.json"),
                },
                {
                    path:"/category/:category_name",
                    element:<ProductContainer></ProductContainer>,
                    loader:()=>fetch("../Products.json"),
                },
            ],
        },
        {
            path:"/details/:product_id",
            element:<Details></Details>,
            loader:()=> fetch("../Products.json"),
        },
        {
            path:"/dashboard",
            element:<Dashboard></Dashboard>,
            children:[
                {
                    path:"/dashboard/cart",
                    element:<Cart></Cart>,
                },
                {
                    path:"/dashboard/wishlist",
                    element:<Wishlist></Wishlist>,
                },
            ],
        },
        {
            path:"/stat",
            element:<Statistics></Statistics>,
        },
    ],
},
])
export default routes