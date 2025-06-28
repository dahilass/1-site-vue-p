import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createYmaps } from 'vue-yandex-maps'

import App from './App.vue'
import router from './router'
import components from '@/components/ui'

import { useThemeStore } from './stores/themeStore'

import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'

import placeholder from '@/assets/images/placeholder.jpg'
// console.log(placeholder)

import 'virtual:svg-icons-register'

const app = createApp(App)

components.forEach(component => app.component(component.name as string, component))


app.component('MySplide', Splide)
app.component('SplideSlide', SplideSlide)

app.provide('placeholder', placeholder as string)

app.use(createPinia())

const themeStore = useThemeStore()
themeStore.initTheme()

app.use(createYmaps({
  apikey: '0934bb86-94d9-43c4-b1cc-40557bb64967',
  lang: 'ru_RU',
}))

app.use(router)

app.mount('#app')
