
<template>
  <input 
  :value="modelValue" 
  @input="updateInput" 
  class="input-field"
   type="text" 
   />
</template>
<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
