import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { cartStore } from "../../../store";
import { useState } from "react";
import { useWishlistStore } from "../../../store/wishlistStor";
import { FaHeart } from "react-icons/fa";
export default function ExploreProducts({ OurProducts }) {
	const wishlistIds = useWishlistStore((state) => state.items);
	const toggleWishlist = useWishlistStore((state) => state.toggleItem);
	const isLiked = wishlistIds.includes(OurProducts.id);
	const addcart = cartStore((state) => state.addCart);
	const handelCart = () => {
		addcart();
	};
	const getImageUrl = (OurProducts) => {
		if (!OurProducts.image) return null;
		if (OurProducts.image.data?.attributes?.url)
			return `http://localhost:1337${OurProducts.image.data.attributes.url}`;
		if (OurProducts.image.url)
			return `http://localhost:1337${OurProducts.image.url}`;
		return null;
	};

	const imageUrl =
		getImageUrl(OurProducts) || "https://via.placeholder.com/200";
	const rating = OurProducts.rating || 0;
	const reviewsCount = OurProducts.reviewsCount || 0;

	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 >= 0.5;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
	const [ishover, setishover] = useState(false);

	return (
		<div className=" max-w-full w-71 rounded-sm mt-10">
			<div
				className=" bgsecond rounded-sm relative p-12.25 cursor-pointer"
				onMouseEnter={() => setishover(true)}
				onMouseLeave={() => setishover(false)}
			>
				{/* image products  */}
				<img
					src={imageUrl}
					alt={OurProducts.name}
					className="w-full h-48  object-cover"
				/>
				{/* add to cart */}
				<div className={ishover ? "block transition duration-300 " : "hidden"}>
					<button
						className="bg-black absolute rounded-b-sm cursor-pointer left-0 bottom-0 py-3 px-12.25 text-white w-full"
						onClick={handelCart}
					>
						Add To Cart
					</button>
				</div>
				{/* wishlist  */}
				<div className="flex flex-col gap-2 pt-3 pe-3 absolute top-0 right-0">
					<button
						className="p-1.5  bg-white cursor-pointer rounded-full"
						// onClick={handelWishlist}
						onClick={() => toggleWishlist(OurProducts.id)}
					>
						{isLiked ?
							<FaHeart className="text-red-500" />
						:	<FaRegHeart />}
					</button>
					<span className="p-1.5 bg-white rounded-full">
						<IoEyeOutline />
					</span>
				</div>
			</div>
			{/* products details */}
			<div className="mt-4 flex flex-col gap-2">
				<p className="font-medium">{OurProducts.name}</p>
				<div className="flex gap-3">
					<span className="texred font-medium">${OurProducts.salePrice}</span>
					<span className="line-through texgray font-medium">
						${OurProducts.price}
					</span>
				</div>
				<div className="flex items-center gap-2">
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
					<span className="text-gray-500 text-sm">({reviewsCount})</span>
				</div>
			</div>
		</div>
	);
}
