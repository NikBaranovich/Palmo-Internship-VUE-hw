<template>
  <div class="component products">
    <h2 class="page-title">Products</h2>
    <p>Total products: {{ totalProductsCount }}</p>
    <div class="product-list">
      <product 
        v-for="product in products" 
        :key="product.id" 
        :id="product.id"
        >
        <template v-slot:image>
          <img 
            v-if="product.image" 
            :src="product.image" 
            :alt="product.name" 
            />
        </template>

        <template v-slot:details>
          <h3 class="product-name">{{ product.title }}</h3>
          <p class="product-description">{{ product.category }}</p>
          <p class="product-price">$ {{ (+product.price).toFixed(2) }}</p>
        </template>
      </product>
    </div>
    <button @click="previousPage()" :disabled="currentPage === 1">
      Previous page
    </button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button @click="nextPage()" :disabled="currentPage === totalPages">
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
    ...mapActions(useProductStore, [
      "getProducts",
      "getPaginatedProducts",
      "previousPage",
      "nextPage",
    ]),
  },
  computed: {
    ...mapState(useProductStore, [
      "products",
      "totalProductsCount",
      "productsLimit",
      "currentPage",
      "totalPages",
    ]),
  },
  mounted() {
    if (!this.products.length) {
      this.getPaginatedProducts(this.currentPage, this.productsLimit);
    }
  },
};
</script>
