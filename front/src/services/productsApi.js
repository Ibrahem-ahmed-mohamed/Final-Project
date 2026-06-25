import axios from "axios";

const API_URL = "http://localhost:1337/api";
export const getAllProducts = async () => {
	try {
		const response = await axios.get(`${API_URL}/products`, {
			params: {
				populate: "*",
			},
		});
		return response.data.data;
	} catch (error) {
		console.error("Error fetching products:", error);
		return [];
	}
};

export const getProductsByIds = async (ids) => {
	if (!ids || ids.length === 0) {
		return [];
	}

	try {
		const params = new URLSearchParams();
		params.append("pagination[pageSize]", ids.length);

		params.append("populate", "*");

		ids.forEach((id, index) => {
			params.append(`filters[id][$in][${index}]`, id);
		});

		const response = await axios.get(
			`${API_URL}/products?${params.toString()}`,
		);
		return response.data?.data || [];
	} catch (error) {
		console.error("Error fetching products by IDs:", error);
		return [];
	}
};
