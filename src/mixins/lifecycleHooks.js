// Lesson 7 Task 7: Create a mixin that includes lifecycle hooks to log messages when the component is created and destroyed.
export const hooksLogMixin = {
  created() {
    console.log(`Component "${this.$options.name}" created`);
  },
  unmounted() {
    console.log(`Component "${this.$options.name}" unmounted`);
  },
};

