import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import GymsView from "@/views/GymsView.vue";
import MentorsView from "@/views/MentorsView.vue";

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gyms',
      name: 'gym',
      component: GymsView
    },
    {
      path: '/mentors',
      name: 'coach',
      component: MentorsView
    }
  ]
})

export default router
