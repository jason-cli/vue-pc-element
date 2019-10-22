import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: () => import( /* webpackChunkName: "index" */ '../views/index'),
    meta: {
      title: '首页',
      auth: false
    }
  }]
})