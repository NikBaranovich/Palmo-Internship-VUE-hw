<template>
  <input class="input-field" :value="modelValue" type="text" @input="updateInput" />
</template>
<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      let cleanedValue = event.target.value.replace(/\D/g, ""); //remove all non-numeric characters

      if (cleanedValue.length > 10) {
        cleanedValue = cleanedValue.slice(0, 10);
      }

      let formattedValue = "";
      for (let i = 0; i < cleanedValue.length; i++) {
        if (i === 0) {
          formattedValue = "(";
        } else if (i === 3) {
          formattedValue += ") ";
        } else if (i === 6) {
          formattedValue += "-";
        }
        formattedValue += cleanedValue[i];
      }

      event.target.value = formattedValue;
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
