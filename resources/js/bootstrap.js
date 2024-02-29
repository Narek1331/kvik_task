import axios from 'axios';

import {createApp} from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css';

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createApp(App).use(router).use(store).mount('#app')
