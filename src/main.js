import './assets/main.css'



import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './vuetify.js'
const app = createApp({
    components: {
        App
        },
    })
app.component(App)
app.use(vuetify) 
app.mount("#app");