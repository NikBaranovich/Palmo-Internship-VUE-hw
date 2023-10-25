import {defineStore} from "pinia";
import {useProductStore} from "@/store/products.js";

export const useCartStore = defineStore("cartProducts", {
  state: () => ({
    cartProductsState: [],
  }),
  getters: {
    cartProducts: (state) => state.cartProductsState,
    
  },
  actions: {
    addToCart(id) {
      const productStore = useProductStore();
      const product = productStore.products.find(
        (product) => +product.id === +id
      );
      this.cartProductsState.push(product);
    },
  },
});
