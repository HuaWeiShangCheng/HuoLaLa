import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../page/homePage.vue'
import detailsPage from '../page/detailsPage.vue'
import makeGroup from '../page/makeGroup.vue'
import Dataifon from '../components/Dataifon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/detailsPage/:id',
    name: 'detailsPage',
    component: detailsPage,
    props:true
  },
  {
    path: '/makeGroup',
    name: 'makeGroup',
    component: makeGroup
  },
  {
    path: '/Dataifon',
    name: 'Dataifon',
    component: Dataifon
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
