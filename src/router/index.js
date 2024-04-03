import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/organisateur',
      name: 'organisateur',
      meta: { requiresAuth: true, role: 'organisateur' }, 
      component: () => import('../views/organisateur/organisateur.vue')
    },
    {
      path: '/benevole',
      name: 'benevole',
      meta: { requiresAuth: true, role: 'benevole' }, 
      component: () => import('../views/benevole/benevole.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); 
  const requiredAuth = to.matched.some(record => record.meta.requiresAuth); 
  const role = token ? decodeToken(token).role : null; 

  if (requiredAuth && !isAuthenticated) {
    next({ name: 'login' });
  } else if (requiredAuth && isAuthenticated) {

    if (to.meta.role !== role) {

      next({ name: role === 'benevole' ? 'benevole' : 'organisateur' });
    } else {
      next(); 
    }
  } else {
    next(); 
  }
});

export default router;
