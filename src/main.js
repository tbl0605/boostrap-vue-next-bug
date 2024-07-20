import { createApp } from 'vue';

import App from './App.vue';

import { createBootstrap } from 'bootstrap-vue-next';

import 'bootstrap-styles/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

const app = createApp(App);
app.use(createBootstrap());

app.mount('#app');
