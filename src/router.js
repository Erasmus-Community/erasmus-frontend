import Vue from 'vue'
import Router from 'vue-router'
import Orgs from './views/Orgs.vue'
import Team from './views/Team.vue'
import CreateOrg from './views/CreateOrg.vue'
import OrgInfo from './views/OrgInfo.vue'
import SignUp from './views/SignUp.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // Organisations
    {
      path: '/orgs/create',
      name: 'createOrg',
      component: CreateOrg
    },
    {
      path: '/orgs',
      name: 'orgs',
      component: Orgs
    },
    {
      path: '/orgs/:id',
      name: 'orgInfo',
      component: OrgInfo
    },

    // Others
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/signup',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'signIn',
      component: Login
    }
  ]
})
