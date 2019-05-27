import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { path: '/orgs/:id',
      name: 'orgInfo',
      component: () => import(/* webpackChunkName: "orgInfo" */ './components/OrgInfo.vue')
    },
    {
      path: '/orgs/create',
      name: 'createOrg'
      // component
    },
    {
      path: '/orgs',
      name: 'orgs',
      component: () => import(/* webpackChunkName: "orgs" */ './views/Orgs.vue')
    },
    {
      path: '/projects/:id',
      name: 'projectInfo',
      component: () => import(/* webpackChunkName: "projectInfo" */ './components/ProjectInfo.vue')
    },
    {
      path: '/projects/create',
      name: 'createProj'
      // component
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "projects" */ './views/Projects.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
