import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/styles/style.css';
import App from './App.vue';
import router from './router';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app')
