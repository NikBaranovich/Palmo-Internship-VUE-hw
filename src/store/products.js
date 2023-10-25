/**
 * Lesson 6 Task 1: Create a basic Vue project and configure Pinia as a store.
 */
import {defineStore} from "pinia";
import axiosInstanse from "@/services/axios.js";
import {debounseMixin} from "@/mixins/debounce";

export const useProductStore = defineStore("products", {
  state: () => ({
    productsState: [],
    productsLimitState: 9,
    currentPageState: 1,
  }),
  getters: {
    products: (state) => state.productsState,
    totalProductsCount() {
      return 100;
    },
    productsLimit: (state) => state.productsLimitState,
    currentPage: (state) => state.currentPageState,
    totalPages() {
      return Math.ceil(this.totalProductsCount / this.productsLimitState);
    },
  },
  actions: {
    setProduct(id, parameters) {
      const product = this.productsState.find((product) => +product.id === +id);
      if (product) {
        for (const key in parameters) {
          if (product.hasOwnProperty(key)) {
            product[key] = parameters[key];
          }
        }
      }
    },
    setProducts(products) {
      this.productsState = [...products];
    },
    getProducts() {
      axiosInstanse
        .get(`/products`)
        .then((response) => {
          this.setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPaginatedProducts(page, limit) {
      axiosInstanse
        .get(`/products?page=${page}&limit=${limit}`)
        .then((response) => {
          this.setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPageState--;
        debounseMixin.methods.debounce(() => {
          this.getPaginatedProducts(this.currentPage, this.productsLimit);
        });
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPageState++;
        debounseMixin.methods.debounce(() => {
          this.getPaginatedProducts(this.currentPage, this.productsLimit);
        });
      }
    },
  },
});
