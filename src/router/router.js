import Vue from 'vue';
import Router from 'vue-router';



Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'catalog',
             component: () => import('../views/Catalog.vue') 
        },
        {
          path: '/user/:id',
          name: 'profile',
           component: () => import('../views/UserProfile.vue')
      },
    ]
})

export default router