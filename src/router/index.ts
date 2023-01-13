import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue';
import ProductView from '@/views/ProductView.vue';
import CheckoutView from '@/views/CheckoutView.vue';
import { useProductStore } from '@/stores';

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
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView,
      beforeEnter: (to, from, next) => {
        const productStore = useProductStore()
        const cart = productStore.cart
        if (cart.length === 0) next({name: 'home'})
        else next()
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
