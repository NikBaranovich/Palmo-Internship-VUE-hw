<template>
  <div class="counter">

    <button @click="decrement" class="counter-button">-</button>
    <span class="counter-value">{{ modelValue }}</span>
    <button @click="increment" class="counter-button">+</button>

  </div>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
  },
  methods: {
    increment() {
      this.$emit("update:modelValue", this.modelValue + 1);
    },
    decrement() {
      this.$emit("update:modelValue", this.modelValue - 1);
    },
  },
};
</script>
