import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWishlistStore = create(
	persist(
		(set, get) => ({
			items: [],
			count: 0,

			addItem: (productId) =>
				set((state) => {
					if (state.items.includes(productId)) {
						return state;
					}
					return {
						items: [...state.items, productId],
						count: state.count + 1,
					};
				}),

			removeItem: (productId) =>
				set((state) => {
					const newItems = state.items.filter((id) => id !== productId);
					return {
						items: newItems,
						count: newItems.length,
					};
				}),

			toggleItem: (productId) => {
				const exists = get().items.includes(productId);
				if (exists) {
					get().removeItem(productId);
				} else {
					get().addItem(productId);
				}
			},

			clearWishlist: () => set({ items: [], count: 0 }),
		}),
		{
			name: "wishlist-storage",
		},
	),
);
