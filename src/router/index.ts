import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue';
import ProductView from '@/views/ProductView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categories/:category',
      name: 'category',
      component: CategoryView,
      props: true
    },
    {
      path: '/product/:slug',
      name: 'product',
      component: ProductView,
      props: true
    }
  ]
})

export default router
