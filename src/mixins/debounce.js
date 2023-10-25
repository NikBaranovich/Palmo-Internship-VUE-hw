// Lesson 7 Task 7: Create a basic mixin that adds several methods or data to a component.
export const debounseMixin = {
  methods: {
    debounce(func, delayMs) {
      let timeout = null;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func();
      }, delayMs || 1000);
    },
  },
};
