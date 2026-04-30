import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/mainlayout/Mainlayout";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import Homepage from "../pages/home/Homepage";
import About from "../pages/about/About";
import Contact from "../pages/contact/contact";
import Error from "../pages/error/error";
import FlashSalePage from "../pages/flashSale/FlashSalePage";


const router=createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/signup",
                element:<Signup/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/",
                element:<Homepage/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/flashsale",
                element:<FlashSalePage/>
            },
        ]
    }
])
export default router