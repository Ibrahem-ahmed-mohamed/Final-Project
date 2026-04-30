import axios from "axios";

const API_URL = "http://localhost:1337/api";
export const getActiveFlashSale = async () => {
	const now = new Date().toISOString();
	try {
		const response = await axios.get(`${API_URL}/flash-sales`, {
			params: {
				"filters[endDate][$gte]": now,
				populate: {
					products: {
						populate: ["image"],
					},
				},
			},
		});
		const data = response.data.data;
		if (data.length > 0) {
			const item = data[0];
			let productsArray = [];
			if (item.products) {
				productsArray = item.products.data || item.products;
			} else if (item.attributes?.products?.data) {
				productsArray = item.attributes.products.data;
			}
			return {
				id: item.id,
				name: item.name || item.attributes?.name,
				endDate: item.endDate || item.attributes?.endDate,
				products: productsArray,
			};
		}
		return null;
	} catch (error) {
		console.error(error);
		return null;
	}
};
