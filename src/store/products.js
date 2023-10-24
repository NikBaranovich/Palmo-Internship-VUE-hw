/**
 * Lesson 6 Task 1: Create a basic Vue project and configure Pinia as a store.
 */
import {defineStore} from "pinia";
import axiosInstanse from "@/services/axios.js";

/**
 * Lesson 6 Task 2: Create your first store with a basic state and a few actions or mutations.
 */
export const useProductStore = defineStore("products", {
  state: () => ({
    productsState: [],
    productsLimitState: 10,
    currentPageState: 1,
  }),
  getters: {
    products: (state) => state.productsState,
    /**
     * Lesson 6 Task 7: Create selectors to derive derived data based on state.
     */
    totalProductsCount() {
      return 100;
    },
    productsLimit: (state) => state.productsLimitState,
    currentPage: (state) => state.currentPageState,
    totalPages() {
      return this.totalProductsCount / this.productsLimitState;
    },
  },
  actions: {
    /**
     * Lesson 6 Task 4: Create mutations to change the state in your store.
     */
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
    /**
     * Lesson 6 Task 5: Create actions to call mutations and handle asynchronous operations.
     * Lesson 6 Task 8: Create asynchronous actions that interact with APIs or other asynchronous data sources.
     */
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
    /**
     * Lesson 6 Task 10: Implement pagination from a third-party API using the Pinia store.
     */
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
        this.getPaginatedProducts(this.currentPage, this.productsLimit);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPageState++;
        this.getPaginatedProducts(this.currentPage, this.productsLimit);
      }
    },
  },
});
