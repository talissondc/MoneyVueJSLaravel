import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/',
    name: 'Dashboard',
    meta: { requiresAuth: true },
    component: () => import('@/pages/Dashboard')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('@/pages/SignUp')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
