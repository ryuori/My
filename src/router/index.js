import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/Home_view.vue'
import BikeView from '@/views/BikeView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/bike',
      component: BikeView
    }
  ]
})

export default router
