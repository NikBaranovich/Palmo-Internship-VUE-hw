<template>
  <!-- Lesson 4 Task 2: Use the .prevent modifier, and process the form data with a Vue 
        instance method that also validates it for correct input before submitting. -->
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" />
        <p class="alert">{{ errorText.name }}</p>
      </div>

      <div>
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="formData.age" />
        <p class="alert">{{ errorText.age }}</p>
      </div>

      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" />
        <p class="alert">{{ errorText.email }}</p>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        age: "",
        email: "",
      },

      errorText: {
        name: "",
        age: "",
        email: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (!this.isValidName(this.formData.name)) {
        this.errorText.name = "Please enter the correct name.";
        return;
      } else {
        this.errorText.name = "";
      }

      if (!this.isValidAge(this.formData.age)) {
        this.errorText.age = "Please enter the correct age.";
        return;
      } else {
        this.errorText.age = "";
      }

      if (!this.isValidEmail(this.formData.email)) {
        this.errorText.email = "Please enter the correct email.";
        return;
      } else {
        this.errorText.email = "";
      }

      const dataToSubmit = {
        name: this.formData.name,
        age: this.formData.age,
        email: this.formData.email,
      };
      
      console.log("Data sent:", dataToSubmit);
    },
    isValidName(name) {
      return name.length >= 2;
    },
    isValidAge(age) {
      return !isNaN(age) && age >= 18 && age <= 100;
    },
    isValidEmail(email) {
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    },
  },
};
</script>
