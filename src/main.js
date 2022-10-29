import {createApp} from "vue";
import {createPinia} from "pinia";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';
import VueAxios from 'vue-axios';
import globalComponents from "./global-components";
import utils from "./utils";
import "./assets/css/app.css";

const app = createApp(App).use(router).use(createPinia());
app.use(router);
app.use(VueAxios, axios);
globalComponents(app);
utils(app);

app.mount("#app");
