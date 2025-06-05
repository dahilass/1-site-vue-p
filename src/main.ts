import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import components from '@/components/ui'

import 'virtual:svg-icons-register'
// import router from './router'

const app = createApp(App)
components.forEach(component => app.component(component.name as string, component))

app.use(createPinia())
app.use(router)

app.mount('#app')
