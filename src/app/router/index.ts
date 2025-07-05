import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import GymsView from "@/pages/GymsView.vue";
// import CoachesView from "@/views/MentorsView.vue";
import NotFoundView from "@/pages/NotFoundView.vue";
import WikiView from "@/pages/WikiView.vue";
// import PagePersonCard from "@/pages/PagePersonCard.vue";
import PrivatePolicyView from "@/pages/PrivatePolicyView.vue";
import GeneratedView from "@/pages/GeneratedView.vue";


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
    // {
    //   path: '/coaches',
    //   name: 'coach',
    //   component: CoachesView
    // },
    {
      path: '/coaches/:id',
      name: 'coaches',
      component: GeneratedView
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
      path: '/404',
      name: 'NotFound',
      component: NotFoundView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

export default routes
