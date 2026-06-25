import React from "react";
import { Link } from "react-router";

export default function NewArrival() {
	return (
		<div className="w-full  sm:mt-25  xl:mt-0">
			<div className="flex gap-4 items-center">
				<span className="p-3 pt-9 bgred rounded-sm"></span>
				<p className="texred font-semibold">Featured</p>
			</div>
			<div className="pt-6 flex  w-full relative">
				<div className="flex gap-21.75 justify-between items-center w-full">
					<p className="  font-semibold text-4xl">New Arrival</p>
				</div>
			</div>
			{/*  */}
			<div className="flex w-full sm:flex-col lg:flex-row sm:justify-center gap-7.5 mt-15">
				{/* right side  */}
				<div className="bg-black  sm:w-full lg:w-[60%] relative px-7.5   ">
					<div className="flex justify-center">
						<img src="../../../../public/playStation.png" alt="" />
					</div>
					<div className="absolute top-[74%] flex flex-col gap-4 left-[5%] text-white">
						<p className="font-semibold text-2xl">PlayStation 5</p>
						<p className="">
							Black and White version of the PS5 <br /> coming out on sale.
						</p>
						<Link className="font-medium">Shop Now</Link>
					</div>
				</div>
				{/* left side  */}
				<div className="flex flex-col lg:w-[40%] sm:w-full gap-8">
					{/* top */}
					<div className="relative bg-black">
						<div className="pl-34.5 flex sm:justify-end lg:justify-start">
							<img src="../../../../public/woman-wearing1.png" alt="" />
						</div>
						<div className="absolute top-[42%] flex flex-col gap-4 left-[5%] text-white">
							<p className="font-semibold text-2xl">Women’s Collections</p>
							<p className="">
								Featured woman collections that <br /> give you another vibe.
							</p>
							<Link className="font-medium">Shop Now</Link>
						</div>
					</div>
					{/* bottom */}
					<div className="flex gap-7.5   w-full  ">
						<div className="relative px-10 py-8 w-[50%]  bg-black ">
							<div className="flex sm:justify-center lg:justify-start">
								<img src="../../../../public/sss.png" alt="" />
							</div>
							<div className="absolute top-[60%] flex flex-col gap-2 left-[10%] text-white">
								<p className="font-semibold text-2xl">Speakers</p>
								<p className="">Amazon wireless speakers</p>
								<Link className="font-medium">Shop Now</Link>
							</div>
						</div>
						{/*  */}
						<div className="relative w-[50%] pt-9.5 pb-10.75 px-8.75 bg-black">
							<img src="../../../../public/gg.png" alt="" />
							<div className="absolute top-[42%] flex flex-col gap-2 left-[5%] text-white">
								<p className="font-semibold text-2xl">Perfume</p>
								<p className="">GUCCI INTENSE OUD EDP</p>
								<Link className="font-medium">Shop Now</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
