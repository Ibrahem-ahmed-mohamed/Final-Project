import { create } from "zustand";

// google buuton
const userDataStore = create((set) => ({
	user: null,
	setUser: (userData) => set({ user: userData }),
}));
export default userDataStore;

export const useCartStore = create((set) => ({
	items: [],
	addItems: (product) => set((state) => ({ items: [...state.items, product] })),
	removeItems: (id) =>
		set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}));

export let wishListStore = create((set) => ({
	like: 0,
	addLike: () => set((state) => ({ like: state.like + 1 })),
	removeLike: () => set((state) => ({ like: state.like - 1 })),
}));

export const cartStore = create((set) => ({
    cart:0,
    addCart:()=>set((state)=>({cart:state.cart + 1})),
	removeCart: () => set((state) => ({cart:state.cart === state.addCart }))
}));