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
		<div className="pt-35  w-full">
			<div className="flex gap-4 items-center">
				<span className="p-2 pt-9 bgred rounded-sm"></span>
				<p className="texred font-semibold">Today's</p>
			</div>
			{/* timer */}
			<div className="pt-6 flex justify-between w-full relative">
				<div className="flex gap-21.75 items-end w-full">
					<p className=" pb-1.5 font-semibold text-4xl">Flash Sales</p>
					{/* time */}
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
			<div className="relative">
			<Swiper className="absolute left-[]"
				modules={[Navigation]}
				spaceBetween={-150}
				slidesPerView={4}
				onSwiper={(Swiper) => (swiperRef.current = Swiper)}
			>
				{products.map((product) => (
					<SwiperSlide key={product.id}>
						<SaleProduct product={product} />
					</SwiperSlide>
				))}
			</Swiper>
			</div>
			<div className="flex justify-center mt-15 me-33.75">
				<Link to={"/flashsale"} className="py-4 px-12 text-white bgred rounded-sm cursor-pointer">
					View All Products
				</Link>
			</div>
		</div>
	);
}
