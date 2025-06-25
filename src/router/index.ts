import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import GymsView from "@/views/GymsView.vue";
import MentorsView from "@/views/MentorsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import WikiView from "@/views/WikiView.vue";
import CardPage from "@/pages/CardPage.vue";
import PrivatePolicyView from "@/views/PrivatePolicyView.vue";

const routes = createRouter({

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
    },
    {
      path: '/mentors/:id',
      name: 'mentors',
      component: CardPage
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: WikiView
    },
    {
      path: '/private-policy',
      name: 'private-policy',
      component: PrivatePolicyView
    },


    // 404
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFoundView
    }
  ]
})

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

export default routes
