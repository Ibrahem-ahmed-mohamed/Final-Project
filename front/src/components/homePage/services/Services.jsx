import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
export default function Services() {
	return (
		<div className="pt-35 flex justify-center sm:gap-3 lg:gap-22  items-center">
			{/* 1 */}
			<div className="flex flex-col items-center">
				<div className="rounded-full group-hover:border-[#FFFFFF4D]  border-[#2f2e304d] border-12 w-fit">
					<TbTruckDelivery className=" bg-black text-white group-hover:bg-white group-hover:text-black  text-6xl  rounded-4xl  p-2 " />
				</div>
				<p className="font-semibold text-xl pt-6 pb-2">
					FREE AND FAST DELIVERY
				</p>
				<p>Free delivery for all orders over $140</p>
			</div>
			{/* 2 */}
			<div className="flex flex-col items-center">
				<div className="rounded-full group-hover:border-[#FFFFFF4D]  border-[#2f2e304d] border-12 w-fit">
					<RiCustomerServiceLine className=" bg-black text-white group-hover:bg-white group-hover:text-black  text-6xl  rounded-4xl p-2 " />
				</div>
				<p className="font-semibold text-xl pt-6 pb-2">24/7 CUSTOMER SERVICE</p>
				<p>Friendly 24/7 customer support</p>
			</div>
			{/* 3 */}
			<div className="flex flex-col items-center">
				<div className="rounded-full group-hover:border-[#FFFFFF4D]  border-[#2f2e304d] border-12 w-fit">
					<GoShieldCheck className=" bg-black text-white group-hover:bg-white group-hover:text-black  text-6xl  rounded-4xl p-2 " />
				</div>
				<p className="font-semibold text-xl pt-6 pb-2">MONEY BACK GUARANTEE</p>
				<p>We reurn money within 30 days</p>
			</div>
			{/*  */}
		</div>
	);
}
