<!-- Lesson 5 Task 14: Create a toggle component that uses v-model. 
    Component must change its state and output different values depending on its state. -->
<template>
  <div class="toggle-switch" @click="toggle">
    <div class="toggle-slider" :class="{ active: isActive }">
      <div class="toggle-text">{{ isActive ? activeText : inactiveText }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    modelValue: Boolean,
    activeText: String,
    inactiveText: String,
  },
  computed: {
    isActive() {
      return this.modelValue;
    },
  },
  methods: {
    toggle() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>
