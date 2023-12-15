// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { layoutMiddleware } from './middlewares';

const routes = [
  {
    path: '',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Welcome'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      layout: 'Auth',
      title: 'Login'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeResolve(async (to, from) => {
  await layoutMiddleware(to);
  document.title = to.meta.title;
});

export default router
