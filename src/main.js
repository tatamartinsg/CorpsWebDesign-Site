import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import './assets/reset.css'
import router from './router/router.js'

const app = createApp(App)
app.use(router)

app.mount('#app')
