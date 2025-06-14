import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import GymView from "@/views/GymView.vue";
import CoachView from "@/views/CoachView.vue";

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gym',
      name: 'gym',
      component: GymView
    },
    {
      path: '/coach',
      name: 'coach',
      component: CoachView
    }
  ]
})

export default router
