import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.scss";
import App from "./App.vue";
import router from "./router/index.js";

createApp(App).use(router).use(createPinia()).mount("#app");
