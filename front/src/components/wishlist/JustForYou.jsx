import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productsApi";
import { Link } from "react-router";
import ProductsSelling from "../homePage/bestSelling/ProductsSelling";

export default function JustForYou() {
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
		<>
			{/* just for you*/}

			<div className="w-full  sm:mt-25 md:mt-25 xl:mt-0">
				<div className="flex justify-between">
					<div className="flex gap-4 items-center">
						<span className="p-3 pt-9 bgred rounded-sm"></span>
						<p className="text-xl ">Just For You</p>
					</div>
					<div>
						<button className=" cursor-pointer text-black px-12 py-4 rounded-md hover:bg-red-700 hover:text-white border font-medium     border-[#00000080] transition">
							See All
						</button>
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
		</>
	);
}
