<template>

  <div>

    <p>Display people older than {{ filterAge }}:</p>
    <input v-model.trim="filterAge" @input="validateAge" />
    <button @click="filterPeople">Filter</button>
    
    <person-item
      v-for="person in filteredPeopleComputed"
      :person="person"
      :key="person.id"
      class="person-card"
    ></person-item>

  </div>

</template>

<script>
import PersonItem from "./PersonItem.vue";

export default {
  components: {
    PersonItem,
  },
  props: {
    people: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filterAge: null,
      filteredPeople: this.people,
    };
  },
  methods: {
    /**
     * Lesson 2 Task 4: Create a method to filter an array of objects by some criterion.
     */
    filterPeople() {
      this.filteredPeople = this.people.filter((person) => person.age > this.filterAge);
    },
    /**
     * Lesson 2 Task 6: Create a method that will check the data entered in the form against some rules.
     */
    validateAge() {
      this.filterAge = this.filterAge.replace(/\D/g, ""); //remove all non-numeric characters
    },
  },
  /**
   * Lesson 2 Task 8: Create a computed property to filter the list of objects.
   */
  computed: {
    filteredPeopleComputed() {
      return this.people.filter((person) => person.age > this.filterAge);
    },
  },
};
</script>
<style>
</style>
