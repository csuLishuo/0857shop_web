import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import Category from '@/pages/category'
import Cart from '@/pages/cart'
import MyCenter from '@/pages/myCenter'
import DetailPage from '@/pages/detailPage'
import OrderConfirm from '@/pages/orderConfirm'
import successBuy from '@/pages/success_buy'
import GroupBuyList from '@/pages/groupBuyList'
import SeckillList from '@/pages/seckillList'
import BarginList from '@/pages/barginList'
import Detail_seckill from '@/pages/detail_seckill'
import Detail_groupBuy from '@/pages/detail_groupBuy'
import Detail_bargin from '@/pages/detail_bargin'
import StepCount from '@/pages/stepCount'
import MyCollection from '@/pages/myCollection'
import MyAddress from '@/pages/myAddress'
import EditAddress from '@/pages/editAddress'
import MyReward from '@/pages/myReward'

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
  }, {
    path: '/groupBuyList',
    name: 'groupBuyList',
    component: GroupBuyList,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/seckillList',
    name: 'seckillList',
    component: SeckillList,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/barginList',
    name: 'barginList',
    component: BarginList,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/detail_seckill',
    name: 'detail_seckill',
    component: Detail_seckill,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/detail_groupBuy',
    name: 'detail_groupBuy',
    component: Detail_groupBuy,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/detail_bargin',
    name: 'detail_bargin',
    component: Detail_bargin,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/stepCount',
    name: 'stepCount',
    component: StepCount,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/myCollection',
    name: 'myCollection',
    component: MyCollection,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/myAddress',
    name: 'myAddress',
    component: MyAddress,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/editAddress',
    name: 'editAddress',
    component: EditAddress,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/myReward',
    name: 'myReward',
    component: MyReward,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }]
})
