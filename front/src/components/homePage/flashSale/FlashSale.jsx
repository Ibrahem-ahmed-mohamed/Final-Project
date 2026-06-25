import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import SaleProduct from "./SaleProduct";
import { useRef } from "react";
import { Link } from "react-router";

export default function FlashSale({ flashSale, timeLeft, products }) {
	const swiperRef = useRef(null);
	if (!flashSale || !products || products.length === 0) return null;

	return (
		<div className="w-full   xl:mt-0">
			<div className="flex gap-4 items-center">
				<span className="p-3 pt-9 bgred rounded-sm"></span>
				<p className="texred font-semibold">Today's</p>
			</div>
			{/* timer */}
			<div className="pt-6 flex justify-between w-full relative">
				<div className="flex gap-21.75 items-end w-full">
					{/* time */}
					<div className="flex items-center sm:gap-10 lg:gap-21.75 sm:flex-col md:flex-row">
					<p className=" pt-2 font-semibold text-4xl sm:pr-28 md:pr-0">Flash Sales</p>
					<div className=" flex items-center gap-4.25">
						<div>
							<p className="font-medium text-[12px]">Days</p>
							<span className="font-bold text-[32px] ">
								{String(timeLeft.days).padStart(2, "0")}
							</span>
						</div>
						<span className="text-3xl texred">:</span>
						<div>
							<p className="font-medium text-[12px]">Hours</p>
							<span className="font-bold text-[32px] ">
								{String(timeLeft.hours).padStart(2, "0")}
							</span>
						</div>
						<span className="text-3xl texred">:</span>
						<div>
							<p className="font-medium text-[12px]">Minutes</p>
							<span className="font-bold text-[32px] ">
								{String(timeLeft.minutes).padStart(2, "0")}
							</span>
						</div>
						<span className="text-3xl texred">:</span>
						<div>
							<p className="font-medium text-[12px]">Seconds</p>
							<span className="font-bold text-[32px] ">
								{String(timeLeft.seconds).padStart(2, "0")}
							</span>
						</div>
					</div>
					</div>
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
				<div className=" w-screen">
					<Swiper
						modules={[Navigation]}
						// navigation
						spaceBetween={0}
						slidesPerView={5.75}
						breakpoints={{
							480: { slidesPerView: 2 },
							640: { slidesPerView: 2.5 },
							768: { slidesPerView: 2.75 },
							1024: { slidesPerView: 3.75 },
							1280: { slidesPerView: 4.25 },
							1536: { slidesPerView: 4.75 },
							1570:{slidesPerView:6}
						}}
						onSwiper={(Swiper) => (swiperRef.current = Swiper)}
					>
						{products.slice(0, 10).map((product) => (
							<SwiperSlide key={product.id}>
								<SaleProduct product={product} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			{/*  View All Products  */}
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
