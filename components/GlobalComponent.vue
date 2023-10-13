<template>
  <div class="global-component">

    <p>This is global component</p>

    <!-- Using v-bind, dynamically add or remove element attributes (eg disabled, readonly) depending on the condition. -->
    <input :disabled="isDisabled" placeholder="Write some text" />
    <button @click="isDisabled = !isDisabled">{{ disableButtonText }}</button>

  </div>
</template>

<script>

export default {
  
    data() {
    return {
      isDisabled: false,
    };
  },
  
  computed: {

    disableButtonText() {
      return this.isDisabled ? "Enable input" : "Disable input";
    },
  },

};
</script>

<style></style>
