<template>
  <div class="component home">
    <slot-component>
      <!-- Lesson 7 Task 4: Implement a component that passes data back to the parent component via a scoped slot. -->
      <template v-slot:default="componentMessage">
        <h1>Welcome to My Website</h1>
        <p>This is the home page of the website.</p>
        <p>{{ componentMessage.message }}</p>
      </template>
    </slot-component>
  </div>
</template>
<script>
import SlotComponent from "@/components/SlotComponent.vue";
import {hooksLogMixin} from "@/mixins/lifecycleHooks";
export default {
  name: "Home",
  components: {
    SlotComponent,
  },
  mixins: [hooksLogMixin],
};
</script>
