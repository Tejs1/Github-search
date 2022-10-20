import { createApp } from "vue";
import "./style.css";
import "./colors.css";
import App from "./App.vue";
import router from "./router";
import Previewer from "virtual:vue-component-preview";

const app = createApp(App);

app.use(router);
app.mount("#app");
app.use(Previewer);
