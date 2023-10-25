<!-- Lesson 7 Task 2: Develop a component with multiple named slots and pass different content to them. -->
<template>
  <div class="product">
    <div class="product-image">
      <!-- Lesson 7 Task 3: Create a component with slots that contain fallback content that 
        is displayed without the content being transferred. -->
      <slot name="image">
        <img src="https://fakeimg.pl/100x100/363636/909090" alt="image placeholder" />
      </slot>
    </div>
    <div class="product-details">
      <slot name="details"></slot>
      <button class="product-button" @click="viewProductDetails(id)">
        Details
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    viewProductDetails(id) {
      this.$router.push({
        name: "productItem",
        params: {id},
      });
    },
  },
};
</script>
