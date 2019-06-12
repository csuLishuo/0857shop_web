import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import Category from '@/pages/category'
import Cart from '@/pages/cart'
import MyCenter from '@/pages/myCenter'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      keepAlive: false,
      isBack: false
    }
  }, {
    path: '/category',
    name: 'category',
    component: Category,
    meta: {
      keepAlive: false,
      isBack: false
    }
  }, {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      keepAlive: false,
      isBack: false
    }
  }, {
    path: '/myCenter',
    name: 'myCenter',
    component: MyCenter,
    meta: {
      keepAlive: false,
      isBack: false
    }
  }]
})
