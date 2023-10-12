<template lang="">
  <div class="person">
    <h2>Name: {{ person.name }}</h2>
    <p>Age: {{ person.age }}</p>
  </div>
</template>
<script>
export default {
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
