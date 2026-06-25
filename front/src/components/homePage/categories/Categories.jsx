import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import SaleProduct from "../flashSale/SaleProduct";
import { Link } from "react-router";
import { useRef } from "react";
import Category from "./Category";

export default function Categories({ flashSale, products }) {
	const swiperRef = useRef(null);
	if (!flashSale || !products || products.length === 0) return null;
	return (
		<div className="w-full  sm:mt-25 md:mt-25 xl:mt-0">
			<div className="flex gap-4 items-center">
				<span className="p-3 pt-9 bgred rounded-sm"></span>
				<p className="texred font-semibold">Today's</p>
			</div>
			{/* timer */}
			<div className="pt-6 flex justify-between w-full relative">
				<div className="flex gap-21.75 items-end w-full">
					<p className=" pb-1.5 font-semibold text-4xl">Browse By Category</p>
					{/* navigate images */}
					<div className="flex absolute right-[10%]">
						<button
							className="p-2 bgsecond rounded-full cursor-pointer me-2"
							onClick={() => swiperRef.current?.slidePrev()}
						>
							<GoArrowLeft className="text-3xl" />
						</button>
						<button
							className="p-2 bgsecond rounded-full cursor-pointer"
							onClick={() => swiperRef.current?.slideNext()}
						>
							<GoArrowRight className="text-3xl" />
						</button>
					</div>
				</div>
			</div>
			{/* products */}
			<div>
				<div>
					<Swiper
						modules={[Navigation]}
						// navigation
						spaceBetween={0}
						slidesPerView={5}
						breakpoints={{
							480: { slidesPerView: 2.5 },
							640: { slidesPerView: 2.75 },
							768: { slidesPerView: 2.75 },
							1024: { slidesPerView: 3.75 },
							1280: { slidesPerView: 4.25 },
							1536: { slidesPerView: 5.75 },
						}}
						onSwiper={(Swiper) => (swiperRef.current = Swiper)}
					>
						{products.map((product) => (
							<SwiperSlide key={product.id}>
								<Category />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			{/*  View All Products   */}
			<div className="container mx-auto px-4 mt-8">
				<div className="flex justify-center">
					<button className="bg-red-600 cursor-pointer text-white px-8 py-3 rounded-md hover:bg-red-700 transition">
						View All Products
					</button>
				</div>
			</div>
		</div>
	);
}
