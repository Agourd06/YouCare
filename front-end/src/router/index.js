import {
  createRouter,
  createWebHistory
} from 'vue-router';
import LoginView from '../views/login.vue';

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'login',
      meta: {
        requiresAuth: false,
      },
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        requiresAuth: false,
      },
      component: () => import('../views/Register.vue')
    },
    {
      path: '/test',
      name: 'test',
      meta: {
        requiresAuth: false,
      },
      component: () => import('../views/test.vue')
    },
    {
      path: '/test2',
      name: 'test2',
      meta: {
        requiresAuth: false,
      },
      component: () => import('../views/test2.vue')
    },
    {
      path: '/test1',
      name: 'test1',
      meta: {
        requiresAuth: false,
      },
      component: () => import('../views/test1.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      meta: { requiresAuth: false }, 
      beforeEnter: (to, from, next) => {
        localStorage.removeItem('token'); 
        localStorage.removeItem('role'); 
        next({ name: 'login' });
      }
    },
    {
      path: '/organisateur',
      name: 'organisateur',
      meta: {
        requiresAuth: true,
        role: 'organisateur'
      },
      component: () => import('../views/organisateur/organisateur.vue')
    },
    {
      path: '/newEvent',
      name: 'newEvent',
      meta: {
        requiresAuth: true,
        role: 'organisateur'
      },
      component: () => import('../views/organisateur/addEvent.vue')
    },
    {
      path: '/editEvent/:id',
      name: 'editEvent',
      meta: {
        requiresAuth: true,
        role: 'organisateur'
      },
      component: () => import('../views/organisateur/editEvent.vue')
    },
    {
      path: '/reservationBoard',
      name: 'reservationBoard',
      meta: {
        requiresAuth: true,
        role: 'organisateur'
      },
      component: () => import('../views/organisateur/reservationBoard.vue')
    },
    {
      path: '/benevole',
      name: 'benevole',
      meta: {
        requiresAuth: true,
        role: 'benevole'
      },
      component: () => import('../views/benevole/benevole.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); 
  const requiredAuth = to.matched.some(record => record.meta.requiresAuth); 
  const role = localStorage.getItem('role');

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