import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch("../Category.json"),
        }
    ]
},
])
export default routes