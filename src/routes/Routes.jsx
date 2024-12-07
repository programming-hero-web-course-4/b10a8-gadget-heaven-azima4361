import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductContainer from "../components/ProductContainer";

const routes = createBrowserRouter([
    {
    path:'/',
    element:<MainLayout></MainLayout>,
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
    ]
},
])
export default routes