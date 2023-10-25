// Lesson 7 Task 9: Develop a mixin that adds validation for the form in the component
export const formValidationMixin = {
  methods: {
    isNameInvalid(name) {
      const minLength = 3;
      const maxLength = 30;
      if (!name) {
        return "Name field is required";
      }
      if (name.length <= minLength || name.length >= maxLength) {
        return "Name must be at least 3 characters and no more than 30 characters";
      }
      return null;
    },
    isPhoneInvalid(phone) {
      if (!phone) {
        return "Phone field is required";
      }
      if (phone.length > 14) {
        return "Phone number is too long";
      }
      if (phone[0] != "(" || phone[4] != ")" || phone[9] != "-") {
        return "Incorrect phone number format";
      }
      if (phone.length < 14) {
        return "Phone number is too short";
      }
      return null;
    },
    isEmailInvalid(email) {
      const atSymbol = email.indexOf("@");
      const dotSymbol = email.lastIndexOf(".");
      const spaceSymbol = email.indexOf(" ");

      if (!email) {
        return "Phone field is required";
      }

      if (atSymbol === -1 || dotSymbol === -1) {
        return "Email must contain an at symbol and a dot";
      }

      if (atSymbol === 0 || dotSymbol === 0) {
        return "Invalid email format";
      }

      if (dotSymbol <= atSymbol + 1 || email.length <= dotSymbol + 1) {
        return "Invalid email format";
      }

      if (spaceSymbol != -1) {
        return "Email must not contain spaces";
      }

      return null;
    },
    isAgeInvalid(age) {
      if (!age) {
        return "Age field is required";
      }

      if (this.form.age > 100 || this.form.age < 0) {
        return "Incorrect age";
      }

      return null;
    },
  },
};
