import { Link } from "react-router";
import { FaRegHeart } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { LuRefreshCcw } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";

export default function ProductsDetails() {
	const rating = product.rating || 0;
	const reviewsCount = product.reviewsCount || 0;

	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 >= 0.5;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
	const [ishover, setishover] = useState(false);
	return (
		<div className="w-full">
			<div className="flex gap-1">
				<Link className="flex gap-1 text-[#F5F5F5]">
					<p>Account</p>
					<p>/</p>
				</Link>
				<Link className="flex gap-1 text-[#F5F5F5]">
					<p>Gaming</p>
					<p>/</p>
				</Link>
				<p>Havic HV G-92 Gamepad</p>
			</div>
			<div className="w-full flex gap-17.75">
				{/* right side  */}
				<div className="w-[60%] flex gap-7.5">
					{/* left */}
					<div className="w-[10%] flex flex-col gap-4">
						<div className="w-full bg-[#F5F5F5]">
							<img src="" alt="" />
						</div>
						<div className="w-full bg-[#F5F5F5]">
							<img src="" alt="" />
						</div>
						<div className="w-full bg-[#F5F5F5]">
							<img src="" alt="" />
						</div>
						<div className="w-full bg-[#F5F5F5]">
							<img src="" alt="" />
						</div>
					</div>
					{/* right */}
					<div className="w-[50%] pt-38.5 pb-32.75 px-6.75">
						<img src="" alt="" />
					</div>
				</div>
				{/* left side */}
				<div className="w-[40%]">
					<div>
						{/* title */}
						<div>
							<p className="font-semibold text-2xl">Havic HV G-92 Gamepad</p>
						</div>
						{/* rating */}
						<div className="flex items-center py-4">
							<div className="flex items-center gap-1">
								{[...Array(fullStars)].map((_, i) => (
									<span key={i} className="text-yellow-500 ">
										<FaStar />
									</span>
								))}
								{hasHalfStar && (
									<span className="text-yellow-500  relative">
										<span className="absolute overflow-hidden w-1/2">
											<FaStar />
										</span>
										<span className="text-gray-300">
											<FaStar />
										</span>
									</span>
								)}
								{[...Array(emptyStars)].map((_, i) => (
									<span key={i} className="text-gray-300 ">
										<FaStar />
									</span>
								))}
							</div>
							{/* review */}
							<span className="text-gray-500 ps-2 text-sm">
								({reviewsCount})
							</span>
							<span className="px-4 text-gray-500">|</span>
							{/* stock */}
							<p className="text-[#00FF66] text-sm">In Stock</p>
						</div>
						{/* price */}
						<div>
							<p className="text-2xl">$192.00</p>
						</div>
						{/* description */}
						<div className="py-6">
							<p>
								PlayStation 5 Controller Skin High quality vinyl with air
								channel adhesive for easy bubble free install & mess free
								removal Pressure sensitive.
							</p>
						</div>
						<hr />
						{/* colors */}
						<div className="flex gap-6 py-6">
							<p className="text-xl">Colours:</p>
							<div className="flex gap-2">
								<div className="focus:border-2 p-0.5">
									<span className="rounded-full p-1 bg-[#A0BCE0]"></span>
								</div>
								<div className="focus:border-2 p-0.5">
									<span className="rounded-full p-1 bg-[#E07575]"></span>
								</div>
							</div>
						</div>
						{/* size */}
						<div className="flex gap-6">
							<p className="text-xl">Size:</p>
							<div className="flex gap-4">
								<div className="w-15 border border-[#00000080]">
									<p className="font-medium text-sm">XS</p>
								</div>
								<div className="w-15 border border-[#00000080]">
									<p className="font-medium text-sm">S</p>
								</div>
								<div className="w-15 border border-[#00000080]">
									<p className="font-medium text-sm">M</p>
								</div>
								<div className="w-15 border border-[#00000080]">
									<p className="font-medium text-sm">L</p>
								</div>
								<div className="w-15 border border-[#00000080]">
									<p className="font-medium text-sm">XL</p>
								</div>
							</div>
						</div>
						{/*  */}
						<div className="flex">
							{/* counter */}
							<div className="border rounded-sm">
								<div className="border py-3.5 px-3.25 rounded-sm hover:bg-[#DB4444] hover:text-white">
									<LuMinus />
								</div>
								<div className="border py-2 px-8.5">
									<span></span>
								</div>
								<div className="border py-5.5 px-3 rounded-sm hover:bg-[#DB4444] hover:text-white">
									<GoPlus />
								</div>
							</div>
							{/* buy */}
							<div className="ps-4 pr-4.75">
								<button className="py-2.5 px-12 bg-[#DB4444] text-white rounded-sm">
									buy
								</button>
							</div>
							{/* love */}
							<div className="py-2.75 px-2.5">
								<FaRegHeart />
							</div>
						</div>
						{/*  */}
						<div>
							<div className="border w-full pt-6 pb-4 ps-4 border-[#00000080] flex gap-5.25">
								<div>
									<TbTruckDelivery />
								</div>
								<div>
									<p className="font-medium pb-2">Free Delivery</p>
									<p className="font-medium text-xs">
										Enter your postal code for Delivery Availability
									</p>
								</div>
							</div>
							<div className="border w-full pt-6 pb-4 ps-4 border-[#00000080] flex gap-5.25">
								<div>
									<LuRefreshCcw />
								</div>
								<div>
									<p className="font-medium pb-2">Free Delivery</p>
									<p className="font-medium text-xs">
										Enter your postal code for Delivery Availability
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
