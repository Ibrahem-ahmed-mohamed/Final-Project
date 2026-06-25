import React from "react";
import { Link } from "react-router";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { GoArrowRight } from "react-icons/go";

export default function TopSideHome() {
	return (
		<div className="flex  sm:flex-col sm:gap-20 xl:flex-row xl:gap-3 ">
			{/* left side */}
			<div className="flex    sm:flex-row xl:flex-col relative gap-4 sm:w-2/12 xl:w-full   ">
				<Link className="flex items-center ">
					<p>Woman's Fashion</p>
					<IoIosArrowForward className="absolute right-6 top-1.25" />
				</Link>
				<Link className="flex items-center relative ">
					<p>Men's Fashion</p>
					<IoIosArrowForward className="absolute right-6 top-1.25" />
				</Link>
				<Link className="">Electronics</Link>
				<Link>Home&Lifestyle</Link>
				<Link>Medicine</Link>
				<Link>Sports&Outdoor</Link>
				<Link>Baby's&Toys</Link>
				<Link>Groceries&Pets</Link>
				<Link>Health&Beauty</Link>
			</div>
			<div className="border-r -mt-20 hrColor "></div>
			{/* right side  */}
			<div className="xl:w-10/12 sm:w-full  xl:ps-11.25  ">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					slidesPerView={1}
					spaceBetween={50}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
				>
					<SwiperSlide className=" w-full">
						<div className="flex w-full xl:gap-9.5 bg-black pt-4">
							<div className="xl:pl-22 md:pl-15 justify-center flex flex-col">
								<div className="flex items-center text-white gap-6 ">
									<img
										src="../../../public/1200px-Apple_gray_logo 1.png"
										alt=""
									/>
									<p>iPhone 14 Series</p>
								</div>
								<div className="pt-5 pb-5.5 text-white tracking-widest font-semibold text-6xl  sm:w-full xl:w-[70%]">
									<p>Up to 10% off Voucher</p>
								</div>
								<div className="flex items-center gap-2 text-white">
									<p className="underline">Shop Now</p>
									<GoArrowRight />
								</div>
							</div>
							<img
								className="pr-10 "
								src="../../../public/hero_endframe__cvklg0xk3w6e_large 2.png"
								alt=""
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="flex w-full xl:gap-9.5 bg-black pt-4">
							<div className="xl:pl-22 md:pl-15 justify-center flex flex-col">
								<div className="flex items-center text-white gap-6 ">
									<img
										src="../../../public/1200px-Apple_gray_logo 1.png"
										alt=""
									/>
									<p>iPhone 14 Series</p>
								</div>
								<div className="pt-5 pb-5.5 text-white tracking-widest font-semibold text-6xl  sm:w-full xl:w-[70%]">
									<p>Up to 10% off Voucher</p>
								</div>
								<div className="flex items-center gap-2 text-white">
									<p className="underline">Shop Now</p>
									<GoArrowRight />
								</div>
							</div>
							<img
								className="pr-10 "
								src="../../../public/hero_endframe__cvklg0xk3w6e_large 2.png"
								alt=""
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="flex w-full xl:gap-9.5 bg-black pt-4">
							<div className="xl:pl-22 md:pl-15 justify-center flex flex-col">
								<div className="flex items-center text-white gap-6 ">
									<img
										src="../../../public/1200px-Apple_gray_logo 1.png"
										alt=""
									/>
									<p>iPhone 14 Series</p>
								</div>
								<div className="pt-5 pb-5.5 text-white tracking-widest font-semibold text-6xl  sm:w-full xl:w-[70%]">
									<p>Up to 10% off Voucher</p>
								</div>
								<div className="flex items-center gap-2 text-white">
									<p className="underline">Shop Now</p>
									<GoArrowRight />
								</div>
							</div>
							<img
								className="pr-10 "
								src="../../../public/hero_endframe__cvklg0xk3w6e_large 2.png"
								alt=""
							/>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}
