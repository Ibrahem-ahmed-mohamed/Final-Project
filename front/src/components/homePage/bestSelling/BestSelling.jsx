import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { getAllProducts } from "../../../services/productsApi";
import ProductsSelling from "./ProductsSelling";

export default function BestSelling() {
	const [allProducts, setAllProducts] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			const products = await getAllProducts();
			setAllProducts(products);
		};
		fetchProducts();
	}, []);
	const [visibleCount, setVisibleCount] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1536) {
				setVisibleCount(5);
			} else if (window.innerWidth >= 1280) {
				setVisibleCount(4);
			} else if (window.innerWidth >= 1024) {
				setVisibleCount(3);
			} else if (window.innerWidth >= 768) {
				setVisibleCount(2);
			} else {
				setVisibleCount(2);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="w-full  sm:mt-25 md:mt-25 xl:mt-0">
			<div className="flex gap-4 items-center">
				<span className="p-3 pt-9 bgred rounded-sm"></span>
				<p className="texred font-semibold">Thsi Month</p>
			</div>
			<div className="pt-6 flex  w-full relative">
				<div className="flex gap-21.75 justify-between items-center w-full">
					<p className="  font-semibold text-4xl">Best Selling Products</p>
					{/* View All Products */}
					<div className="flex  justify-end ">
						<div className="">
							<button className="bg-red-600 cursor-pointer text-white px-12 py-4 rounded-md hover:bg-red-700 transition">
								View All
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* products */}
			<div className=" flex gap-7">
				{allProducts.slice(0, visibleCount).map((products) => (
					<div key={products.id}>
						<ProductsSelling products={products} />
					</div>
				))}
			</div>
		</div>
	);
}
