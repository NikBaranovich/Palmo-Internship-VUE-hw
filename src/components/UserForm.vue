<!-- Lesson 5 Task 11: Implement advanced form validation by using v-model 
    to manage form state and output error messages -->
<template>
  <div>
    <h2>Validation form</h2>
    <div class="form-group">
      <label for="name">Name:</label>
      <custom-text-input
        id="name"
        v-model="form.name"
        @input="validateName"
        :class="{ 'is-invalid': errors.name }"
      />

      <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
    </div>

    <div class="form-group">
      <label for="phone">Phone:</label>
      <custom-phone-input
        id="phone"
        v-model="form.phone"
        @input="validatePhone"
        :class="{ 'is-invalid': errors.phone }"
      />

      <div v-if="errors.phone" class="invalid-feedback">{{ errors.phone }}</div>
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <!-- Lesson 5 Task 10: Implement a component that uses v-model to configure its own data entry. -->
      <input
        id="email"
        class="input-field"
        v-model="form.email"
        @input="validateEmail"
        :class="{ 'is-invalid': errors.email }"
      />

      <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
    </div>

    <!-- Lesson 5 Task 12: Create a form with different types of input fields 
        (text, number, checkbox) and use v-model for two-way data binding. 
        Change the model value in the code and check if the value in the 
        input field has changed and vice versa. -->
    <div class="form-group">
      <label for="age">Age:</label>
      <input
        id="age"
        type="number"
        class="input-field"
        v-model="form.age"
        @input="validateAge"
        :class="{ 'is-invalid': errors.age }"
      />

      <div v-if="errors.age" class="invalid-feedback">{{ errors.age }}</div>
    </div>

    <div class="form-group">
      <input type="checkbox" id="user-agreement" v-model="form.userAgreement" />
      <label for="user-agreement">I have read and agree to the terms of the user agreement.</label>
    </div>
    <button @click="submitForm">Send Data</button>

    <!-- Lesson 5 Task 13: Implement a counter component that uses v-model to manage its value. 
        The component should have buttons to increment and decrement the counter value. -->
    <h2>Counter</h2>
    <counter v-model="counterValue" />
    <p>Current counter value: {{ counterValue }}</p>

    <div>
      <h2>Toggle Switch</h2>
      <ToggleSwitch v-model="isToggleActive" activeText="On" inactiveText="Off" />
      <p>Toggle Switch: {{ isToggleActive ? "On" : "Off" }}</p>
    </div>

    <!-- Lesson 5 Task 15: Use v-model to dynamically change element classes based on user input. -->
    <div>
      <input v-model="userClassesInput" @input="updateClasses" placeholder="Введіть класи" />
      <div :class="userClasses">This is a block with dynamic classes</div>
    </div>

    <custom-select v-model="selectedOption" :options="options" />
    <p>Selected Option: {{ selectedOption }}</p>
  </div>
</template>
<script>
import CustomTextInput from "@/components/UI/CustomTextInput.vue";
import CustomPhoneInput from "@/components/UI/CustomPhoneInput.vue";
import Counter from "@/components/UI/Counter.vue";
import ToggleSwitch from "@/components/UI/ToggleSwitch.vue";
import CustomSelect from "@/components/UI/CustomSelect.vue";

export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        age: "",
        userAgreement: false,
      },
      errors: {
        name: "",
        phone: "",
        email: "",
        age: "",
      },
      counterValue: 0,
      isToggleActive: false,
      userClassesInput: "",
      userClasses: {},
      selectedOption: "value2",
      options: ["value1", "value2", "value3"],
    };
  },
  components: {
    CustomTextInput,
    CustomPhoneInput,
    Counter,
    ToggleSwitch,
    CustomSelect,
  },
  methods: {
    validateName() {
      if (!this.form.name) {
        this.errors.name = "Name field is required";
        return false;
      }
      if (this.form.name.length < 3 || this.form.name.length > 30) {
        this.errors.name = "Name must be at least 3 characters and no more than 30 characters";
        return false;
      }
      this.errors.name = "";
      return true;
    },
    validatePhone() {
      if (!this.form.phone) {
        this.errors.phone = "Phone field is required";
        return false;
      }
      if (this.form.phone.length > 14) {
        this.errors.phone = "Phone number is too long";
        return false;
      }
      if (this.form.phone[0] != "(" || this.form.phone[4] != ")" || this.form.phone[9] != "-") {
        this.errors.phone = "Incorrect phone number format";
        return false;
      }
      if (this.form.phone.length < 14) {
        this.errors.phone = "Phone number is too short";
        return false;
      }
      this.errors.phone = "";
      return true;
    },
    validateEmail() {
      const atSymbol = this.form.email.indexOf("@");
      const dotSymbol = this.form.email.lastIndexOf(".");
      const spaceSymbol = this.form.email.indexOf(" ");

      if (!this.form.email) {
        this.errors.email = "Phone field is required";
        return false;
      }

      if (atSymbol === -1 || dotSymbol === -1) {
        this.errors.email = "Email must contain an at symbol and a dot";
        return false;
      }

      if (atSymbol === 0 || dotSymbol === 0) {
        this.errors.email = "Invalid email format";
        return false;
      }

      if (dotSymbol <= atSymbol + 1 || email.length <= dotSymbol + 1) {
        this.errors.email = "Invalid email format";
        return false;
      }

      if (spaceSymbol != -1) {
        this.errors.email = "Email must not contain spaces";
        return false;
      }

      this.errors.email = "";
      return true;
    },
    validateAge() {
      if (!this.form.age) {
        this.errors.age = "Age field is required";
        return false;
      }

      if (this.form.age > 100 || this.form.age < 0) {
        this.errors.age = "Incorrect age";
        return false;
      }

      this.errors.age = "";
      return true;
    },
    clearForm() {
      this.form.name = "";
      this.form.phone = "";
      this.form.email = "";
      this.form.age = "";
      this.form.userAgreement = false;
    },
    submitForm() {
      if (
        !this.validateName() ||
        !this.validatePhone() ||
        !this.validateEmail() ||
        !this.validateAge()
      ) {
        return;
      }
      if (!this.form.userAgreement) {
        return;
      }

      console.log(this.form);
      this.clearForm();
    },
    updateClasses() {
      const classes = this.userClassesInput.split(" ").reduce((classes, cls) => {
        classes[cls] = true;
        return classes;
      }, {});

      this.userClasses = classes;
    },
  },
};
</script>
