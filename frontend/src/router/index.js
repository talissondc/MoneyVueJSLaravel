import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    meta: { requiresAuth: true },
    component: () => import('@/pages/Dashboard')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/pages/SignUp')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach( async (to, from, next) => {
  const token = window.localStorage.getItem('money_api_token');
  
  if(!to.matched.some(route => route.meta.requiresAuth) && !token ) {
    next()
  } else if(!to.matched.some(route => route.meta.requiresAuth) && token) {
    try{
      await store.dispatch('login/actionCheckSession');

      next({ name: 'home'})
    } catch (error) {
      next()
    }
  } else if(to.matched.some(route => route.meta.requiresAuth) && token) {
    try{
      await store.dispatch('login/actionCheckSession');

      next()
    } catch (error) {
      next({name: 'login'})
    }
  } else {
    next({name: 'login'})
  }
});

export default router
