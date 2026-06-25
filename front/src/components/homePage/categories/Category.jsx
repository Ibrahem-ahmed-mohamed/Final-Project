import React from "react";

export default function Category() {
	return (
		<div className=" px-14.25 py-6.25 mt-15 border w-fit flex flex-col gap-3 cursor-pointer group hover:bg-[#DB4444]">
			<img
				src="../../../../public/Category-CellPhone.png"
				className="group-hover:text-white"
				alt=""
			/>
			<p className="font-normal">phones</p>
		</div>
	);
}
