<template>
  <div class="product">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
    </div>
    
    <div class="product-details">
      <h3 class="product-name">{{ product.title }}</h3>
      <p class="product-description">{{ product.category }}</p>
      <p class="product-price">$ {{ product.price.toFixed(2) }}</p>
      <button class="product-button" @click="viewProductDetails(product.id)">Details</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    viewProductDetails(id) {
      
      // Lesson 5 Task 4: Implement programmatic redirection between routes using this.$router.push.
      this.$router.push({
        name: "productItem",
        params: { id },
      });
    },
  },
};
</script>
