import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import Category from '@/pages/category'
import Cart from '@/pages/cart'
import MyCenter from '@/pages/myCenter'
import DetailPage from '@/pages/detailPage'
import OrderConfirm from '@/pages/orderConfirm'
import successBuy from '@/pages/success_buy'

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
  }, {
    path: '/detailPage',
    name: 'detailPage',
    component: DetailPage,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/orderConfirm',
    name: 'orderConfirm',
    component: OrderConfirm,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/success_buy',
    name: 'success_buy',
    component: successBuy,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }]
})
