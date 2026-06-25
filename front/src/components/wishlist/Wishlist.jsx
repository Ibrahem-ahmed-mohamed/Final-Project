import React, { useEffect, useState } from "react";
import { useWishlistStore } from "../../store/wishlistStor";
import WishlistProduct from "./WishlistProduct";
import { getProductsByIds } from "../../services/productsApi";
import { Link } from "react-router";
import ProductsSelling from "../homePage/bestSelling/ProductsSelling";

export default function Wishlist() {
	const wishlistCount = useWishlistStore((state) => state.count);
	const wishlistIds = useWishlistStore((state) => state.items);
	const clearWishlist = useWishlistStore((state) => state.clearWishlist);
	const [products, setProducts] = useState([]);
	const [Loading, setLoading] = useState(false);
	console.log("wishlistIds:", wishlistIds);

	useEffect(() => {
		const fetchWishlistProducts = async () => {
			if (wishlistIds.length === 0) {
				setProducts([]);
				return;
			}
			try {
				const fetched = await getProductsByIds(wishlistIds);
				console.log(" product coming to API:", fetched);
				console.log("products length :", fetched?.length);

				setProducts(Array.isArray(fetched) ? fetched : []);
			} catch (error) {
				console.error("error:", error);
				setProducts([]);
			} finally {
				setLoading(false);
			}
		};
		fetchWishlistProducts();
	}, [wishlistIds]);

	useEffect(() => {
		const fetchWishlistProducts = async () => {
			setLoading(true);
			if (wishlistIds.length === 0) {
				setProducts([]);
				setLoading(false);
				return;
			}
			const fetched = await getProductsByIds(wishlistIds);
			setProducts(fetched || []);
			setLoading(false);
		};
		fetchWishlistProducts();
	}, [wishlistIds]);

	return (
		<div>
			<div>
				<div className="flex justify-between items-center">
					<div className="flex text-xl gap-1.5">
						<p>Wishlist</p>
						<span>({wishlistCount})</span>
					</div>
					<div>
						<button
							onClick={clearWishlist}
							className=" py-4 px-12 rounded-sm border border-[#00000080] cursor-pointer"
						>
							<p className="font-medium">Move All To Bag</p>
						</button>
					</div>
				</div>
				<div>
					{wishlistCount === 0 ?
						<div className=" flex flex-col   gap-4  mt-30">
							<p className="text-gray-600 font-medium flex justify-center text-2xl">
								there are no products in wishlist
							</p>
							<div className="flex justify-center">
								<Link
									to={"/"}
									className="text-white   flex justify-center  bgred rounded-sm px-8 py-3 w-fit "
								>
									Shop Now
								</Link>
							</div>
						</div>
					:	<div className="flex gap-7 flex-wrap">
							{products.map((product) => (
								<WishlistProduct key={product.id} product={product} />
							))}
						</div>
					}
				</div>
			</div>
		</div>
	);
}
