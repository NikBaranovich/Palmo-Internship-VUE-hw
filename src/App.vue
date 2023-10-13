<template>
  <div>
    <translate-form />

    <global-component />

    <label for="components">Choose a component to display:</label>

    <!-- Create multiple components and dynamically switch between them using v-if, depending on the
    user's selection (for example, using radio buttons or a drop-down list). -->
    <select name="components" id="components" v-model="selectedComponent">
      <option value="ComponentA">ComponentA</option>
      <option value="ComponentB">ComponentB</option>
      <option value="ComponentC">ComponentC</option>
    </select>

    <div v-if="selectedComponent === 'ComponentA'">
      <my-component-a />
    </div>
    <div v-if="selectedComponent === 'ComponentB'">
      <my-component-b />
    </div>
    <div v-if="selectedComponent === 'ComponentC'">
      <my-component-c />
    </div>
  </div>
</template>

<script>
import TranslateForm from "../components/TranslateForm.vue";
import MyComponentA from "../components/MyComponentA.vue";
import MyComponentB from "../components/MyComponentB.vue";
import MyComponentC from "../components/MyComponentC.vue";

export default {
  data() {
    return {
      selectedComponent: "ComponentA",
    };
  },
  /**
   * Local component
   */
  components: {
    TranslateForm,
    MyComponentA,
    MyComponentB,
    MyComponentC,
  },
};
</script>
