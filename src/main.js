import {createApp} from "vue";
import {createPinia} from "pinia";
import App from "@/App.vue";
import router from "@/components/router/router.js";

const app = createApp(App);
const pinia = createPinia();

app
  .use(router)
  .use(pinia)
  .mixin({
    created() {
      console.log("Global mixin has been created");
    },
  })
  /**
   * Lesson 7 Task 10: Create a basic custom directive that 
   * changes the text color of the element it's used on.
   * 
   * Lesson 7 Task 14: Register your custom directive globally 
   * so that it is available throughout the application.
   */
  .directive("custom-color", {
    mounted(el, binding) {
      const color = binding.value || binding.arg || "green";
      el.style.color = color;
    },
  })
  .mount("#app");
