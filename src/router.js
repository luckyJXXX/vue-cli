import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import ('@/pages/index')
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index,
    },
  ]
})

export default router