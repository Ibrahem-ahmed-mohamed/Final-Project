import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useState } from "react";
import { useWishlistStore } from "../../store/wishlistStor";
import { cartStore } from "../../store";
import { ImBin } from "react-icons/im";

export default function WishlistProduct({ product }) {
	// const toggleWishlist = useWishlistStore((state) => state.toggleItem);
	// const RemoveItem = useWishlistStore((state) => state.removeItem)
	const addcart = cartStore((state) => state.addCart);
	const handelCart = () => {
		addcart();
	};
	const removeItem = useWishlistStore((state) => state.removeItem);

const handleRemove = () => {
  if (product.id) {
    removeItem(product.id);
  } else {
    console.warn('⚠️ product.id مفقود');
  }
};
	const getImageUrl = (product) => {
		if (product.image.url) {
			return `http://localhost:1337${product.image.url}`;
		}

		return null;
	};

	const imageUrl = getImageUrl(product) || "https://via.placeholder.com/200";
	const discount = Math.round(
		((product.price - product.salePrice) / product.price) * 100,
	);
	const rating = product.rating || 0;
	const reviewsCount = product.reviewsCount || 0;

	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 >= 0.5;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
	const [ishover, setishover] = useState(false);
	return (
		<div className=" w-71 max-w-full rounded-sm mt-10">
			<div
				className=" bgsecond rounded-sm relative p-12.25 cursor-pointer"
				onMouseEnter={() => setishover(true)}
				onMouseLeave={() => setishover(false)}
			>
				{/* image product  */}
				<img
					src={imageUrl}
					alt={product.name}
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
				{/* discount */}
				<span className="bgred py-1 px-3 rounded-sm absolute top-0 left-0 mt-3 ms-3">
					<p className="text-white font-normal text-[12px]">-{discount}%</p>
				</span>
				{/* wishlist  */}
				<div className="flex flex-col gap-2 pt-3 pe-3 absolute top-0 right-0">
					<button
						className="p-1.5  bg-white cursor-pointer rounded-full"
						onClick={handleRemove}
					>
						<ImBin />
					</button>
				</div>
			</div>
			{/* product details */}
			<div className="mt-4 flex flex-col gap-2">
				<p className="font-medium">{product.name}</p>
				<div className="flex gap-3">
					<span className="texred font-medium">${product.salePrice}</span>
					<span className="line-through texgray font-medium">
						${product.price}
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
