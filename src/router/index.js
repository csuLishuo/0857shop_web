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
import detailSeckill from '@/pages/detail_seckill'
import detailGroupBuy from '@/pages/detail_groupBuy'
import detailBargin from '@/pages/detail_bargin'
import StepCount from '@/pages/stepCount'
import MyCollection from '@/pages/myCollection'
import MyAddress from '@/pages/myAddress'
import EditAddress from '@/pages/editAddress'
import MyReward from '@/pages/myReward'
import MyOrder from '@/pages/myOrder'
import MyBargin from '@/pages/myBargin'
import MyGroupBuy from '@/pages/myGroupBuy'
import Agency from '@/pages/agency'
import Delivery from '@/pages/delivery'
import Receive from '@/pages/receive'
import ReceiveCode from '@/pages/receiveCode'
import DistributionCard from '@/pages/distributionCard'
import MyIncome from '@/pages/myIncome'
import ApplyWithdraw from '@/pages/applyWithdraw'
import SuccessWithdraw from '@/pages/success_withdraw'
import MyProfit from '@/pages/myProfit'
import WithdrawDetail from '@/pages/withdrawDetail'
import MyGroup from '@/pages/myGroup'
import PopularizeQrCode from '@/pages/popularizeQrCode'
import MyComment from '@/pages/myComment'
import SignIn from '@/pages/signIn'
import Mission from '@/pages/mission'
import ApplyAgency from '@/pages/applyAgency'
import ApplyAgencyForm from '@/pages/applyAgencyForm'
import successApply from '@/pages/success_apply'
import SettingUp from '@/pages/settingUp'
import AboutUs from '@/pages/aboutUs'
import CommentFeedback from '@/pages/commentFeedback'
import PublishComment from '@/pages/publishComment'
import Lottery from '@/pages/lottery'
import Login from '@/pages/login'
import Register from '@/pages/register'
import HotSaleList from '@/pages/hotSaleList'
import detailHotSale from '@/pages/detail_hotSale'
import ActiveList from '@/pages/activeList'
import DetailActive from '@/pages/detail_active'
import DetailScore from '@/pages/detail_score'
import SelectAddress from '@/pages/selectAddress'

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
    component: detailSeckill,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/detail_groupBuy',
    name: 'detail_groupBuy',
    component: detailGroupBuy,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/detail_bargin',
    name: 'detail_bargin',
    component: detailBargin,
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
  }, {
    path: '/myOrder',
    name: 'myOrder',
    component: MyOrder,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/myBargin',
    name: 'myBargin',
    component: MyBargin,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/myGroupBuy',
    name: 'myGroupBuy',
    component: MyGroupBuy,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 代理权限
    path: '/agency',
    name: 'agency',
    component: Agency,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 快递发货
    path: '/delivery',
    name: 'delivery',
    component: Delivery,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 快递收货
    path: '/receive',
    name: 'receive',
    component: Receive,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 收货码
    path: '/receiveCode',
    name: 'receiveCode',
    component: ReceiveCode,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 分销购物卡
    path: '/distributionCard',
    name: 'distributionCard',
    component: DistributionCard,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 我的收益
    path: '/myIncome',
    name: 'myIncome',
    component: MyIncome,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 申请提现
    path: '/applyWithdraw',
    name: 'applyWithdraw',
    component: ApplyWithdraw,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 提现成功
    path: '/success_withdraw',
    name: 'success_withdraw',
    component: SuccessWithdraw,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 我的分润
    path: '/myProfit',
    name: 'myProfit',
    component: MyProfit,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 提现明细
    path: '/withdrawDetail',
    name: 'withdrawDetail',
    component: WithdrawDetail,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 我的团队
    path: '/myGroup',
    name: 'myGroup',
    component: MyGroup,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 推广二维码
    path: '/popularizeQrCode',
    name: 'popularizeQrCode',
    component: PopularizeQrCode,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 我的评价
    path: '/myComment',
    name: 'myComment',
    component: MyComment,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 我的评价
    path: '/signIn',
    name: 'signIn',
    component: SignIn,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 我的评价
    path: '/mission',
    name: 'mission',
    component: Mission,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 申请代理
    path: '/applyAgency',
    name: 'applyAgency',
    component: ApplyAgency,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 申请成为代理
    path: '/applyAgencyForm',
    name: 'applyAgencyForm',
    component: ApplyAgencyForm,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 申请成为代理成功
    path: '/success_apply',
    name: 'success_apply',
    component: successApply,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 设置
    path: '/settingUp',
    name: 'settingUp',
    component: SettingUp,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 关于我们
    path: '/aboutUs',
    name: 'aboutUs',
    component: AboutUs,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 意见反馈
    path: '/commentFeedback',
    name: 'commentFeedback',
    component: CommentFeedback,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 发表评价
    path: '/publishComment',
    name: 'publishComment',
    component: PublishComment,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 抽奖
    path: '/lottery',
    name: 'lottery',
    component: Lottery,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 热卖列表
    path: '/hotSaleList',
    name: 'hotSaleList',
    component: HotSaleList,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 热卖商品详情
    path: '/detail_hotSale',
    name: 'detail_hotSale',
    component: detailHotSale,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 活动商品列表
    path: '/activeList',
    name: 'activeList',
    component: ActiveList,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 活动商品详情
    path: '/detail_active',
    name: 'detail_active',
    component: DetailActive,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 积分商品详情
    path: '/detail_score',
    name: 'detail_score',
    component: DetailScore,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 选择地址
    path: '/selectAddress',
    name: 'selectAddress',
    component: SelectAddress,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 注册
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, { // 登录
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }]
})
