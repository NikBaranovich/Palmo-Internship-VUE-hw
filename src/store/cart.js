/**
 * Lesson 6 Task 8: Break your store into modules for better code organization.
 */

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
    /**
     * Lesson 6 Task 6: Create several stores and try to combine them, accessing one store from another.
     */
    addToCart(id) {
      const productStore = useProductStore();
      const product = productStore.products.find(
        (product) => +product.id === +id
      );
      this.cartProductsState.push(product);
    },
  },
});
