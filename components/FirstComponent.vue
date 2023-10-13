<template>

  <div class="my-component">

    <h2>{{ title }}</h2>

    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <!-- <input type="text" id="name" v-model="user.name" @input="debounce(fetchTranslation)()" /> -->
      <input type="text" id="name" v-model="user.name" />
      <p>Age: {{ user.age }}</p>
    </form>

    <button @click="incrementAge">Increase age</button>
    <button @click="decrementAge">Decrease age</button>
    <button @click="resetUserData">Reset</button>
    <button @click="saveUser">Save</button>

    <p>Your data: {{ nameWithYear }}</p>
    <p>Your translated data: {{ translatedNameWithYear }}</p>
    <p>Your full data: {{ fullTranslatedNameWithYear }}</p>

    <div class="buttons">
      <p>{{ pressedButton }}</p>
      <button @click="printButtonText">First Button</button>
      <button @click="printButtonText">Second Button</button>
    </div>

    <p class="alert">{{ alertMessage }}</p>

  </div>

</template>

<style>
</style>

<script>
/**
 * Lesson 2 Task 1: Create a reactive object and output its properties to the template.
 * Change the property of the object and observe the changes in the DOM.
 */
export default {

  name: "FirstComponent",

  data() {
    return {
      title: "This is the first component",
      user: {
        name: "Nik",
        age: 21,
      },
      buttonName: "",
      translatedName: "",
      timer: 0,
      alertMessage:"",
    };
  },

  methods: {
    /**
     * Lesson 2 Task 2: Create a method that will be called when the button is clicked
     * and change some data in the instance
     */
    incrementAge() {
      this.user.age++;
    },
    decrementAge() {
      this.user.age--;
    },
    resetUserData() {
      this.user = { name: "Nik", age: 21 };
    },

    /**
     * Lesson 2 Task 3: Create a method that receives an event and uses it to change the instance data.
     */
    printButtonText(event) {
      this.buttonName = event.target.textContent;
    },

    /**
     * Lesson 2 Task 5: Use a method to handle the click event that changes the state of other components.
     */
    saveUser() {
      this.$emit("saveUser", this.user.name, this.user.age);
      this.user.name = "";
      this.user.age = 18;
    },

    async fetchTranslation() {
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/t?client=gtx&sl=en&tl=ru&q=${this.user.name}`
      );
      const translation = await response.json();
      this.translatedName = translation[0];
    },

    debounce(func, timeout = 500) {
      return (...args) => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    },
  },

  /**
   * Lesson 2 Task 7: Create a computed property to output data calculated from other reactive data.
   */
  computed: {
    nameWithYear() {
      return `${this.user.name} ( ${this.user.age} y.o.)`;
    },

    /**
     * Lesson 2 Task 9: Create a computed property that combines the response data from the HTTP request with the reactive variable.
     */
    translatedNameWithYear() {
      return `${this.translatedName} ( ${this.user.age} y.o.)`;
    },

    /**
     * Lesson 2 Task 10: Create multiple computed properties that depend on each other.
     */
    fullTranslatedNameWithYear() {
      return `${this.nameWithYear} or ${this.translatedNameWithYear}`;
    },

    pressedButton() {
      return this.buttonName
        ? `Pressed button: ${this.buttonName}`
        : "Click one of the buttons below";
    },
  },

  watch: {

    /**
     * Lesson 2 Task 11: Use a watcher for tracking changes of a reactive object and display a message about it.
     */
    user: {
      handler(newValue, oldValue) {
        this.alertMessage = `User object has been changed`;
      },

      /**
       * Lesson 2 Task 15: Use the deep option to trace the properties of internal objects.
       */

      deep: true,
      /**
       * Lesson 2 Task 16: Use the immediate option to call the watcher when the component is initialized.
       */
      immediate: false,
    },

    /**
     * Lesson 2 Task 12: Use a watcher for tracking changes of a
     * single property in a reactive object and display a message about it.
     */

    "user.age"(newAge, previousAge) {
      this.alertMessage = `Age value changed from: ${previousAge} to: ${newAge}`;
    },

    /**
     * Lesson 2 Task 13: Use a watcher to send API requests when reactive data changes.
     */

    "user.name"(newName, previousName) {
      this.alertMessage =`Name value changed from: ${newName} to: ${previousName}`;
      this.debounce(this.fetchTranslation)();
    },
    
    /**
     * Lesson 2 Task 14: Create a watcher that responds to changes in the computed property.
     */
    pressedButton(newValue, previousValue) {
      this.alertMessage = `pressedButton value changed from: '${newValue}'' to: '${previousValue}'`;
    },
  },
};
</script>
