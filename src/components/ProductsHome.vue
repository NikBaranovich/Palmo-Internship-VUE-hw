<template>
  <div class="component">
    <router-view :products="products" />
  </div>
</template>
<script>
import axiosInstanse from "@/services/axios.js";
export default {
  data() {
    return {
      products: null,
    };
  },
  mounted() {
    axiosInstanse
      .get(`/products`)
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
