import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')