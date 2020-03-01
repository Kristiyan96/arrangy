import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Guest/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: "active",
  linkActiveClass: "active",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { layout: "Guest" }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/Guest/About.vue'),
      meta: { layout: "Guest" }
    }
  ]
})
