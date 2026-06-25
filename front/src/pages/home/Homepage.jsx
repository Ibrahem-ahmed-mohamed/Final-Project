import TopSideHome from "../../components/homePage/topside/TopSideHome";
import FlashSale from "../../components/homePage/flashSale/FlashSale";
import { getActiveFlashSale } from "../../services/flashApi";
import React, { useState, useEffect } from "react";
import Categories from "../../components/homePage/categories/Categories";
import BestSelling from "../../components/homePage/bestSelling/BestSelling";
import MusicOffer from "../../components/homePage/musicOffer/MusicOffer";
import OurProducts from "../../components/homePage/ourProduct/OurProducts";
import NewArrival from "../../components/homePage/newArrival/NewArrival";
import Services from "../../components/homePage/services/Services";
export default function Homepage() {
	const [flashSale, setFlashSale] = useState(null);
	const [products, setProducts] = useState([]);
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchFlashSale = async () => {
			setLoading(true);
			const sale = await getActiveFlashSale();
			setFlashSale(sale);
			if (sale) {
				setProducts(sale.products || []);
			}
			setLoading(false);
		};
		fetchFlashSale();
	}, []);

	useEffect(() => {
		if (!flashSale) return;
		const endDate = flashSale.endDate;

		const interval = setInterval(() => {
			const now = Date.now();
			const end = new Date(endDate).getTime();
			const diff = end - now;

			if (diff <= 0) {
				clearInterval(interval);
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
				setFlashSale(null);
				setProducts([]);
			} else {
				const days = Math.floor(diff / (1000 * 60 * 60 * 24));
				const hours = Math.floor((diff % 86400000) / 3600000);
				const minutes = Math.floor((diff % 3600000) / 60000);
				const seconds = Math.floor((diff % 60000) / 1000);
				setTimeLeft({ days, hours, minutes, seconds });
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [flashSale]);

	if (loading) return <div className="text-center p-10">loading...</div>;

	return (
		<>
			<div className=" w-full flex flex-col overflow-hidden">
				<div className=" container mx-auto flex flex-col ">
					{/* top side */}
					<div>
						<TopSideHome className="w-full" />
					</div>
					{/* flash sale */}
					<div className="items-start mt-35">
						<FlashSale
							flashSale={flashSale}
							timeLeft={timeLeft}
							products={products}
						/>
					</div>
					<hr className=" mt-15 mb-20 hrColor" />
					{/* categories */}
					<div className="items-center">
						<Categories flashSale={flashSale} products={products} />
					</div>
					<hr className=" mt-17.5 mb-17.5 hrColor" />
					{/* best selling */}
					<div className="mb-35">
						<BestSelling />
					</div>
					{/*  */}
					<div className="mb-17.75">
						<MusicOffer/>
					</div>
					{/*  */}
					<div>
						<OurProducts/>
					</div>
					<div>
						<NewArrival/>
					</div>
					<div>
						<Services/>
					</div>
				</div>
			</div>
		</>
	);
}
