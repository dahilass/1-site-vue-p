import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createYmaps } from 'vue-yandex-maps'

import App from './App.vue'
import router from './router'
import components from '@/components/ui'

import 'virtual:svg-icons-register'
// import router from './router'

const app = createApp(App)
components.forEach(component => app.component(component.name as string, component))

app.use(createPinia())

app.use(createYmaps({
  apikey: '0934bb86-94d9-43c4-b1cc-40557bb64967',
  lang: 'ru_RU',
}))

app.use(router)

app.mount('#app')
