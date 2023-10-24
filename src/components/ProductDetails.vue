<template>
  <div class="component" v-if="product">
    <div class="product-details-block">
      <div class="product-image">
        <img :src="product.image" :alt="product.title" />
      </div>

      <div class="product-info">
        <h2 class="product-details-title">{{ product.title }}</h2>
        <p class="product-details-category">{{ product.category }}</p>
        <p class="product-details-description">{{ product.description }}</p>
        <p class="product-details-price">$ {{ (+product.price).toFixed(2) }}</p>

        <div class="product-details-rating">
          <span class="product-details-rating-count">
            {{ product.count }} reviews
          </span>
          <span class="product-details-rating-rate">
            Rating: {{ product.rating }}
          </span>
        </div>
      </div>
      <button @click="openEditModal">Edit product</button>
      <button @click="addToCart(id)">Add to cart</button>
    </div>
    <edit-product-modal
      :showEditModal="showEditModal"
      :editedProduct="editedProduct"
      :id="+id"
      @closeModal="closeEditModal"
    />
  </div>
  <div v-else>
    <p>Loading...Please, wait</p>
  </div>
</template>

<script>
import {useProductStore} from "@/store/products.js";
import {useCartStore} from "@/store/cart.js";
import {mapActions, mapState} from "pinia";
import EditProductModal from "@/components/EditProductModal.vue";

export default {
  data() {
    return {
      id: +this.$route.params.id,
      showEditModal: false,
      editedProduct: {},
    };
  },
  components: {
    EditProductModal,
  },
  methods: {
    ...mapActions(useProductStore, ["getPaginatedProducts"]),
    ...mapActions(useCartStore, ["addToCart"]),

    openEditModal() {
      this.showEditModal = true;
      this.editedProduct.title = this.product.title;
      this.editedProduct.price = this.product.price;
      this.editedProduct.description = this.product.description;
    },
    closeEditModal() {
      this.showEditModal = false;
    },
  },
  computed: {
    /**
     * Lesson 6 Task 3: Output data from your store in a Vue component.
     */
    ...mapState(useProductStore, ["products"]),
    ...mapState(useProductStore, ["productsLimit"]),
    ...mapState(useProductStore, ["currentPage"]),
    product() {
      const id = +this.$route.params.id;
      return this.products.find((product) => +product.id === +id);
    },
  },
  created() {
    if (!this.products.length) {
      this.getPaginatedProducts(this.currentPage, this.productsLimit);
    }
  },
};
</script>
