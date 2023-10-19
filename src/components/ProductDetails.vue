<template>
  <div class="component" v-if="isFetched">

    <div class="product-details-block">
      <div class="product-image">
        <img :src="product.image" :alt="product.title" />
      </div>

      <div class="product-info">
        <h2 class="product-details-title">{{ product.title }}</h2>
        <p class="product-details-category">{{ product.category }}</p>
        <p class="product-details-description">{{ product.description }}</p>
        <p class="product-details-price">$ {{ product.price.toFixed(2) }}</p>

        <div class="product-details-rating">
          <span class="product-details-rating-count">{{ product.rating.count }} reviews</span>
          <span class="product-details-rating-rate">Rating: {{ product.rating.rate }}</span>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <p>Loading...Please, wait</p>
  </div>
</template>

<script>

export default {
  props: ["products", "id"],
  data() {
    return {
      product: null,
    };
  },
  computed: {
    isFetched() {
      return Array.isArray(this.products) && this.products.length > 0;
    },
  },
  watch: {
    isFetched: "fetchProduct",
  },
  methods: {
    fetchProduct() {
      if (this.isFetched) {
        this.product = this.products[this.id-1];
      }
    },
  },
  beforeMount() {
    // Lesson 5 Task 6: Use route meta fields to transfer data between routes.
    console.log(this.$route.meta);

    this.fetchProduct();
  },
};
</script>
