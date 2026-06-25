import React from "react";

export default function MusicOffer() {
	return (
		<div className="w-full pl-14 pt-9.25 pr-11 pb-10.75 text-white bg-black flex justify-between items-center sm:flex-col lg:flex-row">
			<div>
				<p className="text-[#00FF66]">Categories</p>
				<p className="py-8 font-semibold text-5xl">
					Enhance Your br Music Experience
				</p>
				<div className="flex gap-6">
					<div className="rounded-full bg-white w-fit ">
						<span className="    flex flex-col items-center p-3 py-2 pb-3.25 text-black ">
							<p className="font-semibold ">23</p>
							<p>Hours</p>
						</span>
					</div>
					<div className="rounded-full bg-white w-fit ">
						<span className="    flex flex-col items-center p-3 py-2 pb-3.25 text-black ">
							<p className="font-semibold ">23</p>
							<p>Hours</p>
						</span>
					</div>
					<div className="rounded-full bg-white w-fit ">
						<span className="    flex flex-col items-center p-3 py-2 pb-3.25 text-black ">
							<p className="font-semibold ">23</p>
							<p>Hours</p>
						</span>
					</div>
					<div className="rounded-full bg-white w-fit ">
						<span className="    flex flex-col items-center p-3 py-2 pb-3.25 text-black ">
							<p className="font-semibold ">23</p>
							<p>Hours</p>
						</span>
					</div>
				</div>
				<div className="mt-10">
					<button className="bg-[#00FF66] w-fit py-4 px-12 rounded-sm">
						Buy Now!
					</button>
				</div>
			</div>
			{/*  */}
			<div className=" drop-shadow-cyan-500">
				<img src="../../../../public/Frame 694.png" alt="" />
			</div>
		</div>
	);
}
