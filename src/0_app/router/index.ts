import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@pages/HomeView.vue";
// import CoachesView from "@/views/MentorsView.vue";
import NotFoundView from "@pages/NotFoundView.vue";
import WikiView from "@pages/WikiView.vue";
// import PagePersonCard from "@/pages/PagePersonCard.vue";
import PrivatePolicyView from "@pages/PrivatePolicyView.vue";
import PageGyms from '@pages/gyms/index.vue'

import PageNews from '@pages/news/index.vue'
import PageNewsItem from '@pages/news/[id].vue'
import PageCoaches from '@pages/coaches/index.vue'
import PageCoachItem from '@pages/coaches/[id].vue'


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
      name: 'gyms',
      component: PageGyms
    },
    {
      path: '/news',
      name: 'news',
      component: PageNews
    },
    {
      path: '/news/:id',
      name: 'news-item',
      component: PageNewsItem
    },
    {
      path: '/coaches',
      name: 'coaches',
      component: PageCoaches
    },
    {
      path: '/coaches/:id',
      name: 'coaches-item',
      component: PageCoachItem
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
    // {
    //   path: '/:pathMatch(.*)*',
    //   redirect: '/404'
    // }
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
