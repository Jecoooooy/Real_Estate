import './assets/main.css'

import router from "./router";
import { createPinia } from 'pinia';

import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './vuetify.js'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
const app = createApp({
    components: {
        App
        },
    })
app.component(App)
app.use(vuetify) 
app.use(router) 
app.use(pinia) 
app.mount("#app");