import React from "react";
import { Link } from "react-router";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function TopSideHome() {
	return (
		<div className="flex   ">
			<div className="flex border-r  flex-col relative gap-4 w-2/12 -mt-10  ">
				<Link className="flex items-center ">
                <p>
                Woman's Fashion
                </p>
                <IoIosArrowForward  className="absolute right-6 top-1.25"/>
                </Link>
				<Link className="flex items-center relative "> 
                <p>
                Men's Fashion
                </p>
                <IoIosArrowForward  className="absolute right-6 top-1.25"/>
                </Link>
				<Link className="">Electronics</Link>
				<Link>Home&Lifestyle</Link>
				<Link>Medicine</Link>
				<Link>Sports&Outdoor</Link>
				<Link>Baby's&Toys</Link>
				<Link>Groceries&Pets</Link>
				<Link>Health&Beauty</Link>
			</div>
			{/* <div className="bg-black border-r -mt-20"></div> */}
			<div className="w-10/12  ps-11.25 -mt-10 ">
				<Swiper
                className=""
					modules={[  Navigation, Pagination, Scrollbar, A11y ]}
					slidesPerView={1}
					spaceBetween={50}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
				>
					<SwiperSlide>
						<img className=" w-full h-full" src="../../../public/Frame 560.png" alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img className="w-full h-full" src="../../../public/Frame 560.png" alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img className="w-full h-full" src="../../../public/Frame 560.png" alt="" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}
