import React from "react";
import { LuSendHorizontal } from "react-icons/lu";
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="w-full bg-black mt-35 pt-35 ">
			<div className="flex sm:flex-col xl:flex-row sm:gap-11 xl:gap-0  items-center sm:pe-9 xl:px-33.75 w-full xl:justify-around  pb-15 ">
				<div className="w-[80%] xl:w-fit"> 
					<div className=" flex bg-black ">
						<div className="text-white">
							<p className="font-bold text-2xl ">Exclusive</p>
							<p className="font-medium text-xl py-6">subscribe</p>
							<p className="font-normal">Get 10% off your first order</p>
							<div className="relative">
								<input
									type="email"
									placeholder="Enter your email"
									className=" text-white rounded-sm py-3 mt-4 px-4 sm:pe-40 xl:pe-7.75  border-white border-[1.5px]"
								/>
								<LuSendHorizontal className="absolute text-white text-xl top-[49%] right-[10%]  " />
							</div>
						</div>
					</div>
				</div>
				{/* 1 */}
				<div className="flex items-center  sm:ms-15 xl:ms-0 sm:w-full justify-between xl:w-[25%]">
					<div className=" flex   sm:ms-9 xl:ms-0   bg-black">
						<div className="text-white  flex flex-col gap-4">
							<p className="font-medium text-[20px] pb-2 text-white ">
								Support
							</p>
							<p className="font-normal">
								111 Bijoy sarani, Dhaka,
								<br /> DH 1515, Bangladesh.
							</p>
							<p className="font-normal">exclusive@gmail.com</p>
							<p className="font-normal">+88015-88888-9999</p>
						</div>
					</div>
					{/*  */}
					<div className=" flex  sm:pe-25 xl:pe-0 bg-black">
						<div className="text-white  flex flex-col gap-4">
							<p className="font-medium text-[20px] pb-2 text-white ">
								Account
							</p>
							<Link className="font-normal" to={"/account"}>
								My Account
							</Link>
							<p className="font-normal">
								<Link to={"/login"}>Login</Link>/<Link to={"/"}>Register</Link>
							</p>
							<Link className="font-normal" to={"/cart"}>
								Cart
							</Link>
							<Link className="font-normal" to={"/wishlist"}>
								Wishlist
							</Link>
							<Link className="font-normal" to={"/home"}>
								Shop
							</Link>
						</div>
					</div>
				</div>
				{/* 2 */}
				<div className="flex items-center sm:ms-15 xl:ms-0 sm:w-full  justify-between xl:w-[30%]">
					<div className=" flex  sm:ms-9 xl:ms-0  bg-black">
						<div className="text-white  flex flex-col gap-4">
							<p className="font-medium text-[20px] pb-2 text-white ">
								Quick Link
							</p>
							<Link className="font-normal">Privacy Policy</Link>
							<Link className="font-normal">Terms Of Use</Link>
							<Link className="font-normal">FAQ</Link>
							<Link className="font-normal">Contact</Link>
						</div>
					</div>
					{/*  */}
					<div className=" flex  bg-black">
						<div className="text-white  flex flex-col gap-4">
							<p className="font-medium text-[20px] pb-2 text-white ">
								Download App
							</p>
							<div>
								<p className="font-medium text-[12px]">
									Save $3 with App New User Only
								</p>
								<div className="flex mt-2 gap-2">
									<div>
										<img src="../../../public/Qr Code.png" alt="qr" />
									</div>
									<div className="flex flex-col gap-2.25">
										<button className="cursor-pointer">
											<div className="flex gap-2 border p-[2px] rounded-sm items-center justify-center  text-whit">
												<svg viewBox="30 336.7 120.9 129.2" className="w-4.5 ">
													<path
														d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
														fill="#FFD400"
													></path>
													<path
														d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
														fill="#FF3333"
													></path>
													<path
														d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
														fill="#48FF48"
													></path>
													<path
														d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
														fill="#3BCCFF"
													></path>
												</svg>
												<div>
													<p className="text-[10px] text-left">GET IT ON</p>
													<div className="font-semibold text-[15px] font-sans -mt-1.5">
														Google Play
													</div>
												</div>
											</div>
										</button>

										<button className="cursor-pointer">
											<div className="flex gap-2 border p-0.5 rounded-sm items-center justify-center  text-whit">
												<svg viewBox="0 0 384 512" className="w-4.5">
													<path
														d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
														fill="currentColor"
													></path>
												</svg>
												<div>
													<p className="text-[10px] text-left">Download on the</p>
													<div className="font-semibold text-[15px] font-sans -mt-1.5">
														App Store
													</div>
												</div>
											</div>
										</button>
									</div>
								</div>
								<div className="mt-6 flex gap-6">
									<FaFacebookF />
									<TfiTwitter />
									<FaInstagram />
									<FaLinkedinIn />
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*  */}
			</div>
			<div className="flex gap-1.5 justify-center pb-6 text-white opacity-60">
				<img src="../../../public/icon-copyright.png" alt="" />
				<p>Copyright Rimel 2022. All right reserved</p>
			</div>
		</div>
	);
}
