<template>
  <div class="component products">
    <h2 class="page-title">Products</h2>
    <div class="product-list" v-if="isFetched">
      <product v-for="product in products" :key="product.id" :product="product" />
    </div>
    <div v-else>
      <p>Loading...Please, wait</p>
    </div>
  </div>
</template>

<script>
import Product from "@/components/ProductCard.vue";

export default {
  props: ["products"],
  components: {
    Product,
  },
  computed: {
    isFetched() {
      return Array.isArray(this.products) && this.products.length > 0;;
    },
  },
};
</script>
