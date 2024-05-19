import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/deploy_test__frontend',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/deploy_test__frontend/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/deploy_test__frontend/posts',
      name: 'posts',
      component: () => import('@/views/PostsView.vue')
    }
  ]
})

export default router
