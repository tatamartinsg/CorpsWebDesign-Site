import { createRouter, createWebHistory } from 'vue-router'
import Home from '../utils/Home.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    }
  ]
})

export default router