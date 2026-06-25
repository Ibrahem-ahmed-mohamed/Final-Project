import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/mainlayout/Mainlayout";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import Homepage from "../pages/home/Homepage";
import About from "../pages/about/About";
import Error from "../pages/error/error";
import FlashSalePage from "../pages/flashSale/FlashSalePage";
import WishlistPage from "../pages/wishlist/WishlistPage";
import ContactPage from "../pages/contact/ContactPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Mainlayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/signup",
				element: <Signup />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/",
				element: <Homepage />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/ContactPage",
				element: <ContactPage />,
			},
			{
				path: "/flashsale",
				element: <FlashSalePage />,
			},
			{
				path: "/WishlistPage",
				element: <WishlistPage />,
			},
		],
	},
]);
export default router;
