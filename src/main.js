import "./main.css";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(autoAnimatePlugin);
app.use(createPinia());
app.use(router);

app.mount("#app");
