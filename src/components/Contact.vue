<template>
  <div class="component contact">
    <slot-component>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us using the information below.</p>
    </slot-component>
  </div>
</template>
<script>
import SlotComponent from "@/components/SlotComponent.vue";
export default {
  components: {
    SlotComponent,
  },
};
</script>