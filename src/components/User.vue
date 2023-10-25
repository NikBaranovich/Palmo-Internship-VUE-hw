<template>
  <div>
    <h2>Validation form</h2>
    <div class="form-group">
      <label for="name">Name:</label>
      <custom-text-input
        id="name"
        v-model="form.name"
        :class="{'is-invalid': errors.name}"
      />

      <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
    </div>

    <div class="form-group">
      <label for="phone">Phone:</label>
      <input
        id="phone"
        v-model="form.phone"
        :class="{'is-invalid': errors.phone}"
      />

      <div v-if="errors.phone" class="invalid-feedback">{{ errors.phone }}</div>
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input
        id="email"
        class="input-field"
        v-model="form.email"
        :class="{'is-invalid': errors.email}"
      />

      <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
    </div>

    <div class="form-group">
      <label for="age">Age:</label>
      <input
        id="age"
        type="number"
        class="input-field"
        v-model="form.age"
        :class="{'is-invalid': errors.age}"
      />

      <div v-if="errors.age" class="invalid-feedback">{{ errors.age }}</div>
    </div>

    <div class="form-group">
      <input type="checkbox" id="user-agreement" v-model="form.userAgreement" />
      <label for="user-agreement"
        >I have read and agree to the terms of the user agreement.</label
      >
    </div>
    <button @click="submitForm">Send Data</button>
  </div>
</template>
<script>
import CustomTextInput from "@/components/UI/CustomTextInput.vue";
import {formValidationMixin} from "@/mixins/formValidation";
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
    };
  },
  components: {
    CustomTextInput,
  },
  mixins: [formValidationMixin],
  methods: {
    clearForm() {
      this.form.name = "";
      this.form.phone = "";
      this.form.email = "";
      this.form.age = "";
      this.form.userAgreement = false;
    },
    submitForm() {
      this.errors.name = this.isNameInvalid(this.form.name);
      this.errors.phone = this.isPhoneInvalid(this.form.phone);
      this.errors.email = this.isEmailInvalid(this.form.email);
      this.errors.age = this.isAgeInvalid(this.form.age );

      if (
        this.errors.name ||
        this.errors.phone ||
        this.errors.email ||
        this.errors.age
      ) {
        return;
      }
      if (!this.form.userAgreement) {
        return;
      }

      console.log(this.form);
      this.clearForm();
    },
  },
};
</script>
