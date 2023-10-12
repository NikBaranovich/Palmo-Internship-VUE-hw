<template>
  <div>
    <first-component @saveUser="saveUser"></first-component>
    <person-form :people="people"></person-form>
  </div>
</template>
<script>
import FirstComponent from "./FirstComponent.vue";
import PersonForm from "./PersonForm.vue";
export default {
  components: {
    FirstComponent,
    PersonForm,
  },
  data() {
    return {
      people: [
        { id: 0, name: "Vik", age: 49 },
        { id: 1, name: "Joe", age: 26 },
        { id: 2, name: "Mike", age: 16 },
      ],
    };
  },
  methods: {
    saveUser(name, age) {
      this.people.push({ id: this.people[this.people.length - 1].id + 1, name, age });
    },
  },
};
</script>
<style></style>
