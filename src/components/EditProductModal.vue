<template>
  <div v-if="showEditModal" class="modal">
    <div class="modal-content">
      <h3>Edit product</h3>
      <form @submit.prevent="editProduct">
        <input 
        v-model="product.title" 
        placeholder="Product name" 
        />
        <input 
        v-model="product.price" 
        placeholder="Price" 
        />
        <textarea
          v-model="product.description"
          placeholder="Description"
        />

        <button type="submit">Save</button>
        <button @click="closeEditModal">Cancel</button>
      </form>
    </div>
  </div>
</template>
<script>
import {useProductStore} from "@/store/products.js";
import {mapActions} from "pinia";

export default {
  data() {
    return {
      product: this.editedProduct,
    };
  },
  props: {
    showEditModal: {
      type: Boolean,
      required: true,
    },
    editedProduct: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions(useProductStore, ["setProduct"]),
    closeEditModal() {
      this.$emit("closeModal", false);
    },
    editProduct() {
      this.setProduct(+this.id, {
        title: this.product.title,
        price: +this.product.price,
        description: this.product.description,
      });

      this.closeEditModal();
    },
  },
};
</script>
