import Vue from 'vue'
import Router from 'vue-router'
import Orgs from './views/Orgs.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // Organisations
    {
      path: '/orgs/create',
      name: 'createOrg',
      component: () => import(/* webpackChunkName: "orgInfo" */ './views/CreateOrg.vue')
    },
    {
      path: '/orgs',
      name: 'orgs',
      component: Orgs
    },
    {
      path: 'orgs/:id',
      name: 'orgInfo',
      component: () => import('./views/OrgInfo.vue')
    },

    // Others
    {
      path: '/team',
      name: 'team',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Team.vue')
    },
    {
      path: '/signup',
      name: 'signUp',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/SignUp.vue')
    },
    {
      path: '/login',
      name: 'signIn',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    }
  ]
})
