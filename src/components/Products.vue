<template>
  <div class="component products">
    <h2 class="page-title">Products</h2>
    <p>Total products: {{ totalProductsCount }}</p>
    <div class="product-list">
      <product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <button @click="previousPage" :disabled="currentPage === 1">
      Previous page
    </button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      Next page
    </button>
  </div>
</template>

<script>
import Product from "@/components/ProductCard.vue";
import {useProductStore} from "@/store/products.js";
import {mapActions, mapState} from "pinia";
export default {
  components: {
    Product,
  },
  methods: {
    ...mapActions(useProductStore, ["getProducts"]),
    ...mapActions(useProductStore, ["getPaginatedProducts"]),
    ...mapActions(useProductStore, ["previousPage"]),
    ...mapActions(useProductStore, ["nextPage"]),
    
  },
  computed: {
    /**
     * Lesson 6 Task 3: Output data from your store in a Vue component.
     */
    ...mapState(useProductStore, ["products"]),
    ...mapState(useProductStore, ["totalProductsCount"]),
    ...mapState(useProductStore, ["productsLimit"]),
    ...mapState(useProductStore, ["currentPage"]),
    ...mapState(useProductStore, ["totalPages"]),
  },
  mounted() {
    if (!this.products.length) {
      this.getPaginatedProducts(this.currentPage, this.productsLimit);
    }
  },
};
</script>
