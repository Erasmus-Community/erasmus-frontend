import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/orgs/create',
      name: 'createOrg',
      component: () => import(/* webpackChunkName: "orgInfo" */ './views/CreateOrg.vue')
    },
    { path: '/orgs/:id',
      name: 'orgInfo',
      component: () => import(/* webpackChunkName: "orgInfo" */ './components/OrgInfo.vue')
    },
    {
      path: '/orgs',
      name: 'orgs',
      component: () => import(/* webpackChunkName: "orgs" */ './views/Orgs.vue')
    },
    //  {
    //    path: '/projects/create',
    //    name: 'createProj',
    //    component: () => import(/* webpackChunkName: "orgInfo" */ './views/CreateProj.vue')
    //  },
    //  {
    //    path: '/projects/:id',
    //    name: 'projectInfo',
    //    component: () => import(/* webpackChunkName: "projectInfo" */ './components/ProjectInfo.vue')
    //  },
    //  {
    //    path: '/projects',
    //    name: 'projects',
    //    component: () => import(/* webpackChunkName: "projects" */ './views/Projects.vue')
    //  },
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
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
