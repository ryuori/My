import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/Home_view.vue'
import BikeView from '@/views/BikeView.vue'
import NameMake from '@/components/Name_make.vue'
import BmiCalcurator from '@/components/bmiCalcurator.vue'
import HoroScopeRanking from '@/components/HoroScopeRanking.vue'

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
    },
    {
      path: '/name',
      component: NameMake
    },
    {
      path: '/bmi',
      component: BmiCalcurator
    },
    {
      path: '/ranking',
      component: HoroScopeRanking
    }
  ]
})

export default router
