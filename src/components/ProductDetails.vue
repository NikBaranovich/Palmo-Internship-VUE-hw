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
          <span class="product-details-rating-count"
            >{{ product.count }} reviews</span
          >
          <span class="product-details-rating-rate"
            >Rating: {{ product.rating }}</span
          >
        </div>
      </div>
      <button @click="openEditModal">Edit product</button>
      <button @click="addToCart(id)">Add to cart</button>
    </div>
    <modal
      v-if="showEditModal"
      :showEditModal="showEditModal"
      @closeModal="closeEditModal"
    >
      <template v-slot:header>
        <h3>Edit product</h3>
      </template>
      <template v-slot:body>
        <div>
          <input v-model="product.title" placeholder="Product name" />
          <input v-model="product.price" placeholder="Price" />
          <textarea v-model="product.description" placeholder="Description" />
        </div>
      </template>
      <template v-slot:footer>
        <button @click="editProduct">Save</button>
        <button @click="closeEditModal">Cancel</button>
      </template>
    </modal>
  </div>
  <div v-else>
    <p>Loading...Please, wait</p>
  </div>
</template>

<script>
import {useProductStore} from "@/store/products.js";
import {useCartStore} from "@/store/cart.js";
import {mapActions, mapState} from "pinia";
import Modal from "@/components/Modal.vue";

export default {
  data() {
    return {
      id: +this.$route.params.id,
      showEditModal: false,
      product: {},
    };
  },
  components: {
    Modal,
  },
  methods: {
    ...mapActions(useProductStore, ["getPaginatedProducts", "setProduct"]),
    ...mapActions(useCartStore, ["addToCart"]),
    openEditModal() {
      this.showEditModal = true;
      this.product.title = this.product.title;
      this.product.price = this.product.price;
      this.product.description = this.product.description;
    },
    closeEditModal() {
      this.showEditModal = false;
    },
    editProduct() {
      this.setProduct(+this.id, {
        title: this.product.title,
        price: +this.product.price,
        description: this.product.description,
      });

      this.showEditModal = false;
    },
  },
  computed: {
    ...mapState(useProductStore, ["products", "productsLimit", "currentPage"]),
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
