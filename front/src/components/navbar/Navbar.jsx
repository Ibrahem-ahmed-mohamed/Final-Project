import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCart } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";
import { RiShoppingBag3Line } from "react-icons/ri";
import { CiCircleRemove } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";
import { cartStore, wishListStore } from "../../store";


export default function Navbar() {
		const wishlist = wishListStore((state) => state.like);
		const cart =cartStore((state)=>state.cart)
	// get token
	const token = localStorage.getItem("token:");
	// isopen toggle
	const [isopen, setisopen] = useState(false);
	const toggel = () => {
		setisopen(!isopen);
	};
	// isopenListAcc
	const [isopenListAcc, setisopenListAcc] = useState(false);
	const openlist = () => {
		setisopenListAcc(!isopenListAcc);
	};
	// logout
	function logout() {
		onclick(localStorage.removeItem("token:"));
	}
	return (
		<>
			<div className="pb-20 w-full ">
				{/* offer & change languge */}
				<div className="flex relative py-3  bg-black w-full sm:ps-[5%] md:justify-center items-center">
					<div className="text-white flex sm:flex-col md:flex-row gap-2 ">
						<p>
							Summer Sale For All Swim Suits And Free Express Delivery - OFF
							50%!
						</p>
						<Link className="font-semibold underline ">ShopNew</Link>
					</div>
					<div className="absolute md:top-[25%] sm:top-[40%] sm:right-[1%] xl:right-[10%]">
						<select name="select" className="text-white ">
							<option value="english" className="bg-white text-black">
								English
							</option>
							<option value="arabic" className="bg-white text-black">
								Arabic
							</option>
						</select>
					</div>
				</div>
				{/* navbar */}
				<div className=" w-full flex lg:justify-evenly sm:justify-between sm:px-[10%] items-center mt-9.5 ">
					{/* logo */}
					<div className="w-[33.75%]">
						<Link to={"/"}>
							<img src="../../../public/logo.png" alt="" />
						</Link>
					</div>
					{/* list */}
					<nav className={isopen ? "nav w-[33.75%]" : "sm:hidden w-[33.75%] lg:block"}>
						<ul className="flex lg:gap-12 sm:gap-5 sm:flex-col lg:flex-row">
							<li>
								<NavLink to={"/"} end>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to={"/contact"} end>
									Contact
								</NavLink>
							</li>
							<li>
								<NavLink to={"/about"} end>
									About
								</NavLink>
							</li>
							<li>
								<NavLink to={"/signup"} end>
									Sign up
								</NavLink>
							</li>
						</ul>
					</nav>
					<div className="flex gap-6 items-center justify-end w-[33.75%]">
						<div className=" flex items-center gap-5 relative">
							{/* input search */}
							<input
								type="search"
								className="py-2.5 ps-5 pe-17.5 bg-[#F5F5F5] w-75 "
								placeholder="What are you looking for?"
							/>
							<FiSearch className="absolute top-[31%] right-[10%] size-5" />
							<div className="lg:hidden">
								<RxHamburgerMenu onClick={toggel} />
							</div>
						</div>
						{/* like , shop and account */}
						<div className="flex gap-6 items-center  ">
							<div className="relative">
							{/* like icon */}
							<FiHeart className="text-2xl " />
							<span className={wishlist === 0 ? "hidden" : "bg-red-600 rounded-full px-1.25 text-white text-[11px] absolute -top-0.5 -right-1.5 "}>
								{wishlist}
							</span>
							</div>
							<div className="relative">
							{/* shop icon */}
							<PiShoppingCart className="text-[27px]" />
							<span className={cart === 0 ? "hidden" : "bg-red-600 rounded-full px-1.25 text-white text-[11px] absolute -top-0.5 -right-1.5 "}>
								{cart}
							</span>
							</div>
							{/* account */}
							<div className={token ? "block" : "hidden"}>
								<button onClick={openlist}>
									<img src="../../../public/user.png" alt="user" />
								</button>
								{/* list account */}
								<div className={isopenListAcc ? "listacc" : "hidden"}>
									<ul className="pt-4.5 pe-3 pb-2.5 ps-5 flex flex-col gap-3.25">
										<li>
											<Link
												to={"/"}
												className="flex text-[#FAFAFA] items-center gap-4"
												end
											>
												<RxPerson />
												<p>Manage My Account</p>
											</Link>
										</li>
										<li>
											<Link
												to={"/contact"}
												className="flex text-[#FAFAFA] items-center gap-4"
												end
											>
												<RiShoppingBag3Line />
												<p>My Order</p>
											</Link>
										</li>
										<li>
											<Link
												to={"/about"}
												className="flex text-[#FAFAFA] items-center gap-4"
												end
											>
												<CiCircleRemove />
												<p>My Cancellations</p>
											</Link>
										</li>
										<li>
											<Link
												to={"/signup"}
												className="flex text-[#FAFAFA] items-center gap-4"
												end
											>
												<CiStar />
												<p>My Reciews</p>
											</Link>
										</li>
										<li>
											<button
												onClick={logout}
												className="flex text-[#FAFAFA] items-center gap-4"
												end
											>
												<TbLogout2 />
												<p>Logout</p>
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*  */}
				{/*  */}
				<hr className="mt-4 text-black opacity-30" />
			</div>
		</>
	);
}
