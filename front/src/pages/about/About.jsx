import { Link } from "react-router";
import { BiStoreAlt } from "react-icons/bi";
import { CiDollar } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaSackDollar } from "react-icons/fa6";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";



export default function About() {
	return (
		<div className="w-full  xl:ps-33.75">
			{/* location */}
			<div className="flex sm:ps-9 xl:ps-0 gap-3">
				<Link className="texgray" to={"/home"}>
					Home
				</Link>
				<span className="texgray">/</span>
				<Link to={"/about"}>About</Link>
			</div>
			{/* title */}
			<div className=" w-full items-center justify-center pt-10.5 pb-35  flex gap-18.75 sm:flex-col-reverse xl:flex-row">
				<div className="w-[50%] flex flex-col justify-center">
					<h1 className="font-semibold text-[54px]">Our Story</h1>
					<p className="pt-10 pb-6">
						Launced in 2015, Exclusive is South Asia’s premier online shopping
						makterplace with an active presense in Bangladesh. Supported by wide
						range of tailored marketing, data and service solutions, Exclusive
						has 10,500 sallers and 300 brands and serves 3 millioons customers
						across the region.{" "}
					</p>
					<p>
						Exclusive has more than 1 Million products to offer, growing at a
						very fast. Exclusive offers a diverse assotment in categories
						ranging from consumer.
					</p>
				</div>
				{/* img */}
				<div className=" sm:w-[70%] xl:w-[50%]">
					<img
						className="w-full"
						src="../../../public/about image.png"
						alt=""
					/>
				</div>
			</div>
			{/* list */}
			<div className="2xl:pe-33.75 gap-7.5  justify-center items-center flex">
				{/* 1 */}
				<div className=" group border hover:bg-[#DB4444] transition delay-150 duration-300 hover:text-white   rounded-sm bordcol py-7.5 px-12.75  flex flex-col items-center  ">
					<div className="rounded-full group-hover:border-[#FFFFFF4D] transition delay-150 duration-300 border-[#2f2e304d] border-13 w-fit">
						{/* <img  src="../../../public/icon_shop.png" alt="" /> */}
						<BiStoreAlt className=" bg-black text-white group-hover:bg-white group-hover:text-black transition delay-150 duration-300 text-5xl  rounded-2xl p-1 " />
					</div>
					<p className="font-bold text-[32px] pt-6 pb-3">10.5k</p>
					<p>Sallers active our site</p>
				</div>
				{/* 2 */}
				<div className=" group border hover:bg-[#DB4444] hover:text-white  transition delay-150 duration-300 rounded-sm bordcol py-7.5 px-12.5 flex flex-col items-center ">
					<div className="rounded-full group-hover:border-[#FFFFFF4D] transition delay-150 duration-300 border-[#2f2e304d] border-12 w-fit">
						{/* <img  src="../../../public/icon_shop.png" alt="" /> */}
						<CiDollar className=" bg-black text-white group-hover:bg-white group-hover:text-black transition delay-150 duration-300 text-5xl  rounded-3xl p-1 " />
					</div>
					<p className="font-bold text-[32px] pt-6 pb-3">33k</p>
					<p>Mopnthly Produduct sale</p>
				</div>
				{/* 3 */}
				<div className=" group border hover:bg-[#DB4444] hover:text-white transition delay-150 duration-300  rounded-sm bordcol py-7.5 px-12.5 flex flex-col items-center ">
					<div className="rounded-full group-hover:border-[#FFFFFF4D] transition delay-150 duration-300 border-[#2f2e304d] border-12 w-fit">
						{/* <img  src="../../../public/icon_shop.png" alt="" /> */}
						<LiaShoppingBagSolid className=" bg-black text-white group-hover:bg-white group-hover:text-black transition delay-150 duration-300 text-5xl  rounded-3xl p-1 " />
					</div>
					<p className="font-bold text-[32px] pt-6 pb-3">45.5k</p>
					<p>Customer active in our site</p>
				</div>
				{/* 4 */}
				<div className=" group border hover:bg-[#DB4444] hover:text-white transition delay-150 duration-300  rounded-sm bordcol py-7.5 px-12.5 flex flex-col items-center ">
					<div className="rounded-full group-hover:border-[#FFFFFF4D] transition delay-150 duration-300 border-[#2f2e304d] border-12 w-fit">
						{/* <img  src="../../../public/icon_shop.png" alt="" /> */}
						<FaSackDollar className=" bg-black text-white group-hover:bg-white group-hover:text-black transition delay-150 duration-300 text-5xl  rounded-3xl p-1 " />
					</div>
					<p className="font-bold text-[32px] pt-6 pb-3">25k</p>
					<p>Anual gross sale in our site</p>
				</div>
				{/*  */}
			</div>
			{/* slider */}
			<div className="pt-35 w-full pe-33.75">
				<Swiper
				className="flex justify-center"
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={50}
					breakpoints={{
						0:{
							slidesPerView:1,
						},
						768:{
							slidesPerView:2,
						},
						1536:{
							slidesPerView:3,
						},
					}}
					navigation
					pagination={{ clickable: true }}
				>
					{/* splide1 */}
					<SwiperSlide>
						<div>
							<img
								className="bgsecond  pt-9.75 px-16.75 rounded-sm"
								src="../../../public/image 46.png"
								alt=""
							/>
							<h2 className="font-medium pt-8 text-[32px]">Tom Cruise</h2>
							<p className="pt-2 pb-4">Founder & Chairman</p>
							<div className="flex gap-4">
								<TfiTwitter />
								<FaInstagram />
								<FaLinkedinIn />
							</div>
						</div>
					</SwiperSlide>
					{/* splide2 */}
					<SwiperSlide>
						<div>
							<img
								className="bgsecond  pt-9.75 px-16.75 rounded-sm"
								src="../../../public/image 51.png"
								alt=""
							/>
							<h2 className="font-medium pt-8 text-[32px]">Emma Watson</h2>
							<p className="pt-2 pb-4">Managing Director</p>
							<div className="flex gap-4">
								<TfiTwitter />
								<FaInstagram />
								<FaLinkedinIn />
							</div>
						</div>
					</SwiperSlide>
					{/* splide3 */}
					<SwiperSlide>
						<div>
							<img
								className="bgsecond  pt-9.75 px-16.75 rounded-sm"
								src="../../../public/image 47.png"
								alt=""
							/>
							<h2 className="font-medium pt-8 text-[32px]">Will Smith</h2>
							<p className="pt-2 pb-4">Product Designer</p>
							<div className="flex gap-4">
								<TfiTwitter />
								<FaInstagram />
								<FaLinkedinIn />
							</div>
						</div>
					</SwiperSlide>
					{/* splide4 */}
					<SwiperSlide>
						<div>
							<img
								className="bgsecond  pt-9.75 px-16.75 rounded-sm"
								src="../../../public/image 51.png"
								alt=""
							/>
							<h2 className="font-medium pt-8 text-[32px]">Tom Cruise</h2>
							<p className="pt-2 pb-4">Founder & Chairman</p>
							<div className="flex gap-4">
								<TfiTwitter />
								<FaInstagram />
								<FaLinkedinIn />
							</div>
						</div>
					</SwiperSlide>
					{/*  */}
				</Swiper>
			</div>
			{/* services */}
			<div className="pt-35 flex justify-around pe-33.75 items-center">
        {/* 1 */}
				<div className="flex flex-col items-center">
					<div className="rounded-full group-hover:border-[#FFFFFF4D]  border-[#2f2e304d] border-10 w-fit">
						{/* <img  src="../../../public/icon_shop.png" alt="" /> */}
						<TbTruckDelivery className=" bg-black text-white group-hover:bg-white group-hover:text-black  text-4xl  rounded-3xl p-1 " />
					</div>
					<p className="font-semibold text-xl pt-6 pb-2">FREE AND FAST DELIVERY</p>
					<p>Free delivery for all orders over $140</p>
				</div>
        {/* 2 */}
        				<div className="flex flex-col items-center">
					<div className="rounded-full group-hover:border-[#FFFFFF4D]  border-[#2f2e304d] border-10 w-fit">
						{/* <img  src="../../../public/icon_shop.png" alt="" /> */}
						<RiCustomerServiceLine className=" bg-black text-white group-hover:bg-white group-hover:text-black  text-4xl  rounded-3xl p-1 " />
          </div>
					<p className="font-semibold text-xl pt-6 pb-2">24/7 CUSTOMER SERVICE</p>
					<p>Friendly 24/7 customer support</p>
				</div>
        {/* 3 */}
        				<div className="flex flex-col items-center">
					<div className="rounded-full group-hover:border-[#FFFFFF4D]  border-[#2f2e304d] border-10 w-fit">
						{/* <img  src="../../../public/icon_shop.png" alt="" /> */}
						<GoShieldCheck className=" bg-black text-white group-hover:bg-white group-hover:text-black  text-4xl  rounded-3xl p-1 " />
					</div>
					<p className="font-semibold text-xl pt-6 pb-2">MONEY BACK GUARANTEE</p>
					<p>We reurn money within 30 days</p>
				</div>
        {/*  */}
			</div>
			{/* end */}
		</div>
	);
}
