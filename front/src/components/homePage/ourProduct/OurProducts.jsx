import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { getAllProducts } from "../../../services/productsApi";
import { useEffect, useRef, useState } from "react";
import "swiper/css/grid";
import ExploreProducts from "./ExploreProducts";

export default function OurProducts() {
	const swiperRef = useRef(null);
	const [allProducts, setAllProducts] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			const Ourproducts = await getAllProducts();
			setAllProducts(Ourproducts);
		};
		fetchProducts();
	}, []);

	return (
		<div className="w-full  sm:mt-25 md:mt-25 xl:mt-0">
			<div className="flex gap-4 items-center">
				<span className="p-3 pt-9 bgred rounded-sm"></span>
				<p className="texred font-semibold	">Our Products</p>
			</div>
			<div className="pt-6 flex justify-between w-full relative">
				<div className="flex gap-21.75 items-end w-full">
					<p className=" pb-1.5 font-semibold text-4xl">Explore Our Products</p>
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
						modules={[Grid, Navigation]}
						grid={{
							rows: 2,
							fill: "row",
						}}
						spaceBetween={20}
						slidesPerView={5}
						navigation={false}
						onSwiper={(swiper) => (swiperRef.current = swiper)}
						breakpoints={{
							480: { slidesPerView: 2 },
							640: { slidesPerView: 2 },
							768: { slidesPerView: 3 },
							1024: { slidesPerView: 3 },
							1280: { slidesPerView: 4 },
							1536: { slidesPerView: 5 },
						}}
					>
						{allProducts.map((product) => (
							<SwiperSlide key={product.id}>
								<ExploreProducts OurProducts={product} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			{/* View All Products */}
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
