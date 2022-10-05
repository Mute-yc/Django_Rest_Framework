import { createApp, VueElement } from 'vue'
import App from './App.vue'
import axios from 'axios'

VueElement.prototype.$http = axios;
createApp(App).mount('#app')
