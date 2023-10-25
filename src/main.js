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
  .mount("#app");
