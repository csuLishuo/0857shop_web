<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  img,input{
    vertical-align: middle;
    display: block;
  }
  .home-container{
    padding-bottom: px2rem(50);
    .topBar{
      background: #ff3e31;
      height: px2rem(94);
      padding: px2rem(18) 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      .scan{
        width: px2rem(37);
        height: px2rem(36);
        img{
          width: 100%;
          height: 100%;
        }
      }
      .input-box{
        background: #fff;
        border-radius: px2rem(10);
        padding-left: px2rem(50);
        padding-right: px2rem(20);
        height: px2rem(58);
        width: px2rem(564);
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
          width: px2rem(25);
          height: px2rem(25);
          position: absolute;
          left: px2rem(16);
          top: px2rem(17);
        }
        input{
          width: 100%;
          line-height: px2rem(58);
          font-size: px2rem(25);
        }
        .btn{
          font-size: px2rem(26);
          color: #666;
        }
      }
      .info{
        position: relative;
        width: px2rem(37);
        height: px2rem(35);
        img{
          width: 100%;
          height: 100%;
        }
        span{
          position: absolute;
          height: px2rem(26);
          line-height: px2rem(26);
          font-size: px2rem(20);
          color: #ff0d00;
          background: #fff;
          padding: 0 px2rem(10);
          top: 0;
          right: 0;
          margin-top: px2rem(-13);
          margin-right: px2rem(-13);
          border-radius: px2rem(26);
        }
      }
    }
    .banner{
      .van-swipe-item{
        height: px2rem(278) !important;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .links{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      background: #fff;
      .wrapper{
        margin: px2rem(10) px2rem(40);
        .img-box{
          width: px2rem(79);
          height: px2rem(79);
          img{
            width: 100%;
            height: 100%;
          }
        }
        .text{
          font-size: px2rem(23);
          text-align: center;
        }
      }
    }
    .ad-box{
      width: 100%;
      height: px2rem(234);
      background: #fff;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .area-experience{
      background: #fff;
      width: px2rem(710);
      margin: px2rem(20) auto;
      border-radius: px2rem(10);
      overflow: hidden;
      padding-bottom: px2rem(20);
      .img-box-1{
        height: px2rem(260);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          max-width: 100%;
          max-height: 100%;
        }
      }
      .wrapper{
        display: flex;
        flex-wrap: nowrap;
        flex-direction: flex-start;
        justify-content: space-around;
        .img-box-2{
          width: px2rem(182);
          height: px2rem(182);
          border-radius: px2rem(6);
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            max-width: 100%;
            max-height: 100%;
          }
        }
        .btn-box{
          width: px2rem(68);
          height: px2rem(182);
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .area-1{
      background: #fff;
      .title{
        background-image: url("../images/img1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: px2rem(259);
        height: px2rem(30);
        line-height: px2rem(30);
        font-size: px2rem(32);
        text-align: center;
        margin: px2rem(24) auto;
      }
      .area-1-del{
        img{
          width: 100%;
        }
      }
      .area-1-container{
        padding: 0 px2rem(24) px2rem(17);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: space-between;
        .mask{
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(rgba(255,255,255,1),rgba(255,255,255,0.4));
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .text{
            font-size: px2rem(25);
            line-height: px2rem(50);
            color: #5b5d66;
          }
          .icon-box{
            width: px2rem(30);
            height: px2rem(30);
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        .left-box{
          width: px2rem(281);
          height: px2rem(383);
          display: flex;
          align-items: center;
          position: relative;
          img{
            width: 100%;
          }
        }
        .right-box{
          width: px2rem(416);
          height: px2rem(383);
          border-radius: px2rem(5);
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
          .right-box-1{
            position: relative;
            width: 100%;
            height: px2rem(200);
            display: flex;
            align-items: center;
            margin-bottom: px2rem(16);
            border-radius: px2rem(5);
            overflow: hidden;
          }
          .right-box-2{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: flex-start;
            justify-content: space-between;
            .inner{
              position: relative;
              width: px2rem(203);
              height: px2rem(168);
              border-radius: px2rem(5);
              overflow: hidden;
            }
          }
        }
      }
    }
    .area-2{
      background: #fff;
      margin: px2rem(17) px2rem(22);
      border-radius: px2rem(5);
      overflow: hidden;
      .area-2-del{
        width: 100%;
        img{
          width: 100%;
        }
      }
      .area-2-container{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: space-between;
        .left-box{
          width: px2rem(260);
          height: px2rem(394);
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          align-items: flex-start;
          justify-content: space-around;
          border-right: 1px solid #f0f0f0;
          .img-box{
            width: 100%;
            height: px2rem(152);
            img{
              width: 100%;
              height: 100%;
            }
          }
          .title-box{
            .title{
              font-size: px2rem(28);
              line-height: px2rem(40);
              font-weight: bold;
              padding-left: px2rem(30);
            }
            .des{
              padding-left: px2rem(30);
              font-size: px2rem(26);
              line-height: px2rem(40);
              color: #8e9198;
            }
            .time-box{
              padding-left: px2rem(30);
              margin: px2rem(10) 0;
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              align-items: center;
              justify-content: flex-start;
              span{
                height: px2rem(30);
                background: #ff3e31;
                padding: 0 px2rem(5);
                font-size: px2rem(26);
                color: #fff;
              }
              i{
                font-style:normal;
                color: #ff3e31;
                font-size: px2rem(26);
                font-weight: bold;
                margin: 0 px2rem(5);
              }
            }
          }
        }
        .right-box{
          width: px2rem(446);
          height: px2rem(394);
          .right-box-1{
            border-bottom: 1px solid #f0f0f0;
          }
          .right-box-1,.right-box-2{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: flex-start;
            justify-content: space-between;
            .inner{
              position: relative;
              width: px2rem(223);
              height: px2rem(197);
              .title{
                font-size: px2rem(28);
                font-weight: bold;
                padding-left: px2rem(28);
                line-height: px2rem(84);
                color: #f84f77;
              }
              .img-box{
                width: 100%;
                height: px2rem(113);
                img{
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
    .area-3{
      background: #fff;
      .scroll-box{
        height: px2rem(86);
        padding-left: px2rem(30);
        display: -webkit-box;
        overflow-x: scroll;
        -webkit-overflow-scrolling:touch;
        width: 100%;
        .item{
          font-size: px2rem(26);
          line-height: px2rem(86);
          color: #7c7c7c;
          margin-right: px2rem(30);
          position: relative;
          &.on{
            color: #000000;
            font-weight: bold;
            span{
              position: absolute;
              bottom: 0;
              left: 50%;
              margin-left: px2rem(-16);
              width: px2rem(32);
              height: px2rem(7);
              border-radius: px2rem(3);
              background-color: #ff3e31;
            }
          }
        }
      }
      .listbox{
        padding-left: px2rem(24);
        .wrapper{
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-between;
          background: #fff;
          padding: px2rem(22) px2rem(24) px2rem(22) 0;
          border-bottom: px2rem(1) solid #f0f0f0;
          .img-box{
            width: px2rem(225);
            height: px2rem(225);
            border-radius: px2rem(6);
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .right-box{
            width: px2rem(450);
            .title{
              font-size: px2rem(28);
              width: px2rem(390);
              line-height: px2rem(38);
              margin-top: px2rem(16);
              font-weight: bold;
              color: #393939;
            }
            .des{
              line-height: px2rem(40);
              font-size: px2rem(22);
              color: #7c7c7c;
            }
            .tag-box{
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: center;
              justify-content: flex-start;
              .tag{
                height: px2rem(30);
                line-height: px2rem(30);
                padding: 0 px2rem(10);
                border: px2rem(1) solid #ff981e;
                border-radius: px2rem(10);
                color: #ff981e;
                font-size: px2rem(20);
              }
            }
            .price-box{
              margin-top: px2rem(30);
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: center;
              justify-content: space-between;
              .price{
                color: #ff6c00;
                font-size: px2rem(24);
                font-weight: bold;
                span{
                  font-size: px2rem(34);
                  vertical-align: bottom;
                }
              }
              .info{
                color: #bababa;
                font-size: px2rem(18);
              }
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="home-container">
    <div class="topBar">
      <div class="scan"><img src="../images/icon5.png" alt=""></div>
      <div class="input-box">
        <img src="../images/icon6.png" alt="">
        <input type="text" @click="search">
        <!--<input type="text" @click="search" v-model="sendData.title">-->
        <!--<div class="btn" @click="search">搜索</div>-->
      </div>
      <div class="info" @click="goMyInfo">
        <img src="../images/icon7.png" alt="">
        <!--<span>1</span>-->
      </div>
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in bannerData" :key="index">
          <img :src="filePath + item.bannerPic" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-notice-bar
      :text="infoData.summary"
      left-icon="volume-o"
    />
    <div class="links">
      <div class="wrapper" @click="go(1)">
        <div class="img-box"><img src="../images/icon8.png" alt=""></div>
        <div class="text">签到</div>
      </div>
      <div class="wrapper" @click="go(2)">
        <div class="img-box"><img src="../images/icon9.png" alt=""></div>
        <div class="text">团购</div>
      </div>
      <div class="wrapper" @click="go(3)">
        <div class="img-box"><img src="../images/icon10.png" alt=""></div>
        <div class="text">秒杀</div>
      </div>
      <div class="wrapper" @click="go(4)">
        <div class="img-box"><img src="../images/icon11.png" alt=""></div>
        <div class="text">抽奖</div>
      </div>
      <div class="wrapper" @click="go(5)">
        <div class="img-box"><img src="../images/icon12.png" alt=""></div>
        <div class="text">砍价</div>
      </div>
      <div class="wrapper" @click="go(6)">
        <div class="img-box"><img src="../images/icon13.png" alt=""></div>
        <div class="text">任务</div>
      </div>
      <div class="wrapper" @click="goExperienceList">
        <div class="img-box"><img src="../images/icon14.png" alt=""></div>
        <div class="text">体验区</div>
      </div>
      <div class="wrapper" @click="more">
        <div class="img-box"><img src="../images/icon15.png" alt=""></div>
        <div class="text">更多</div>
      </div>
    </div>
    <div class="ad-box" v-if="adData" @click="goActiveList">
      <img :src="filePath + adData.bannerPic" alt="">
    </div>
    <div class="area-experience clearfix">
      <div class="img-box-1" @click="goExperienceDetail(experienceGoodsList[0].id)"><img v-if="experienceGoodsList[0]" :src="filePath + experienceGoodsList[0].pics.split(';')[0]" alt=""></div>
      <div class="wrapper">
        <div class="img-box-2" @click="goExperienceDetail(experienceGoodsList[1].id)"><img v-if="experienceGoodsList[1]" :src="filePath + experienceGoodsList[1].pics.split(';')[0]" alt=""></div>
        <div class="img-box-2" @click="goExperienceDetail(experienceGoodsList[2].id)"><img v-if="experienceGoodsList[2]" :src="filePath + experienceGoodsList[2].pics.split(';')[0]" alt=""></div>
        <div class="img-box-2" @click="goExperienceDetail(experienceGoodsList[3].id)"><img v-if="experienceGoodsList[3]" :src="filePath + experienceGoodsList[3].pics.split(';')[0]" alt=""></div>
        <div class="btn-box" @click="goExperienceList"><img src="../images/btn1.png" alt=""></div>
      </div>
    </div>
    <div class="area-1 clearfix">
      <div class="title">热卖商品</div>
      <!--<div class="area-1-del" @click="goHotSaleList">
        <img src="../images/imgDel6.jpg" alt="">
      </div>-->
      <div class="area-1-container">
        <div class="left-box" @click="goHotSaleDetail(hotSaleGoodsList[0].id)">
          <img v-if="hotSaleGoodsList[0]" :src="filePath + hotSaleGoodsList[0].pics.split(';')[0]" alt="">
        </div>
        <div class="right-box">
          <div class="right-box-1" @click="goHotSaleDetail(hotSaleGoodsList[1].id)">
            <img v-if="hotSaleGoodsList[1]" :src="filePath + hotSaleGoodsList[1].pics.split(';')[0]" alt="">
          </div>
          <div class="right-box-2">
            <div class="inner" @click="goHotSaleDetail(hotSaleGoodsList[2].id)">
              <img v-if="hotSaleGoodsList[2]" :src="filePath + hotSaleGoodsList[2].pics.split(';')[0]" alt="">
            </div>
            <div class="inner">
              <img v-if="hotSaleGoodsList[3]" :src="filePath + hotSaleGoodsList[3].pics.split(';')[0]" alt="">
              <div class="mask" @click="goHotSaleList">
                <div class="text">查看更多</div>
                <div class="icon-box"><img src="../images/icon16.png" alt=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="area-2 clearfix">
      <div class="area-2-del" @click="go(3)">
        <img src="../images/imgDel7.jpg" alt="">
      </div>
      <!--<div class="area-2-container">
        <div class="left-box">
          <div class="title-box">
            <div class="title">限量秒杀</div>
            <div class="des">3个整点9.9元秒杀</div>
            <div class="time-box">
              <span>05</span>
              <i>:</i>
              <span>05</span>
              <i>:</i>
              <span>05</span>
            </div>
          </div>
          <div class="img-box">
            <img src="../images/icon1.png" alt="">
          </div>
        </div>
        <div class="right-box">
          <div class="right-box-1">
            <div class="inner">
              <div class="title">新品速递</div>
              <div class="img-box">
                <img src="../images/icon1.png" alt="">
              </div>
            </div>
            <div class="inner">
              <div class="title">新品速递</div>
              <div class="img-box">
                <img src="../images/icon1.png" alt="">
              </div>
            </div>
          </div>
          <div class="right-box-2">
            <div class="inner">
              <div class="title">新品速递</div>
              <div class="img-box">
                <img src="../images/icon1.png" alt="">
              </div>
            </div>
            <div class="inner">
              <div class="title">新品速递</div>
              <div class="img-box">
                <img src="../images/icon1.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>-->
    </div>
    <div class="area-3">
      <div class="scroll-box">
        <div class="item" :class="{'on':sendData.categoryId == 0}" @click="changeCate(0)">
          热门
        </div>
        <div class="item" :class="{'on':sendData.categoryId == item.id}" v-for="item in categoryList" :key="item.id" @click="changeCate(item.id)">
          {{item.chname}}
        </div>
      </div>
      <div class="listbox">
        <van-list
          v-model="loadingList"
          :finished="finished"
          :immediate-check="false"
          finished-text="没有更多了"
          @load="getOneMorePage"
        >
          <div class="wrapper" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
            <div class="img-box"><img :src="filePath + item.pics.split(';')[0]" alt=""></div>
            <div class="right-box">
              <div class="title ellipsis-2">{{item.title}}{{item.subTitle}}</div>
              <!--<div class="des">已售{{item.totalSales}}/库存{{JSON.parse(item.attrs)[0].stock}}</div>-->
              <!--<div class="tag-box">
                <div class="tag">满38减10</div>
              </div>-->
              <div class="price-box">
                <div class="price">￥<span>{{item.nowPrice}}</span></div>
                <div class="info">包邮 · 七天退换货</div>
              </div>
            </div>
          </div>
        </van-list>
      </div>
    </div>
    <tabbar :activeIndex="0"></tabbar>
  </div>
</template>

<script>
import { Toast } from 'vant'
import tabbar from '../components/tabbar'

export default {
  name: 'home',
  components: {
    tabbar
  },
  data () {
    return {
      bannerData: [],
      adData: [],
      filePath: '',
      categoryList: [],
      goodsList: [],
      total: '',
      totalPage: '',
      sendData: {
        categoryId: 0,
        title: '',
        pageNumber: 1,
        pageSize: 5
      },
      loadingList: false,
      finished: false,
      signInData: {},
      signScore: '',
      sendDataHotSale: {
        categoryId: 0,
        pageNumber: 1,
        pageSize: 4
      },
      hotSaleGoodsList: [],
      experienceGoodsList: [],
      sendDataExperience: {
        pageNumber: 1,
        pageSize: 4
      },
      infoData: {}
    }
  },
  methods: {
    // 获取公告信息
    getInfoList () {
      this.$post('/api/systemMessage/getSystemMessageListByUserId', {
        pageNumber: 1,
        pageSize: 1
      }).then(res => {
        if (res.result === 0) {
          this.infoData = res.data.list[0]
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    goHotSaleDetail (id) {
      this.$router.push({
        path: 'detail_hotSale',
        query: {
          detailId: id
        }
      })
    },
    getHotSaleGoodsList () {
      this.$post('/api/goodsHotSale/getGoodsHotSaleListByCategoryId', this.sendDataHotSale).then(res => {
        if (res.result === 0) {
          this.hotSaleGoodsList = res.data.list
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    // 体验区商品列表
    getExperienceGoodsList () {
      this.$post('api/goodsCoupon/getGoodsCouponsList', this.sendDataExperience).then(res => {
        if (res.result === 0) {
          this.experienceGoodsList = res.data.list
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    goExperienceList () {
      this.$router.push({
        path: '/experienceList'
      })
    },
    more () {
      Toast('敬请期待')
    },
    goHotSaleList () {
      this.$router.push({
        path: '/hotSaleList'
      })
    },
    goActiveList () {
      this.$router.push({
        path: '/activeList'
      })
    },
    handleSignIn () {
      this.$post('/api/goodsScore/userSignIn', {
        score: this.signScore
      }).then(res => {
        if (res.result === 0) {
          Toast.success('签到成功')
          this.$router.push({
            path: '/signIn'
          })
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    go (status) {
      if (status === 1) {
        if (this.signInData.status === 1) {
          this.handleSignIn()
        } else {
          this.$router.push({
            path: '/signIn'
          })
        }
      } else if (status === 2) {
        this.$router.push({
          path: '/groupBuyList'
        })
      } else if (status === 3) {
        this.$router.push({
          path: '/seckillList'
        })
      } else if (status === 4) {
        this.$router.push({
          path: '/lottery'
        })
      } else if (status === 5) {
        this.$router.push({
          path: '/barginList'
        })
      } else if (status === 6) {
        this.$router.push({
          path: '/mission'
        })
      } else if (status === 7) {
        this.$router.push({
          path: '/stepCount'
        })
      }
    },
    goDetail (id) {
      this.$router.push({
        path: 'detailPage',
        query: {
          detailId: id
        }
      })
    },
    goMyInfo () {
      this.$router.push({
        path: 'myInfo'
      })
    },
    changeCate (id) {
      this.sendData.pageNumber = 1
      this.finished = false
      this.goodsList = []
      this.sendData.categoryId = id
      this.getGoodsList()
    },
    search () {
      this.$router.push({
        path: 'searchPage'
      })
    },
    getBannerList () {
      this.$post('/api/banner/getBannerListByBannerType', {
        bannerType: 1
      }).then(res => {
        if (res.result === 0) {
          this.bannerData = res.data
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    getAdImg () {
      this.$post('/api/banner/getBannerListByBannerType', {
        bannerType: 2
      }).then(res => {
        if (res.result === 0) {
          this.adData = res.data[0]
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    getGoodsCategory () {
      this.$post('/api/goodsIssue/getGoodsCategoryByLevel', {
        level: 1
      }).then(res => {
        if (res.result === 0) {
          this.categoryList = res.data
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    getOneMorePage () {
      setTimeout(() => {
        if (Number(this.sendData.pageNumber) < Number(this.totalPage)) {
          this.sendData.pageNumber++
          this.getGoodsList()
        }
      }, 500)
    },
    getGoodsList () {
      this.$post('/api/goodsIssue/getGoodsIssueListByCategoryId', this.sendData).then(res => {
        if (res.result === 0) {
          if (this.sendData.pageNumber === 1) {
            this.goodsList = res.data.list
          } else {
            this.goodsList = this.goodsList.concat(res.data.list)
          }
          this.filePath = res.filePath
          sessionStorage.setItem('filePath', this.filePath)
          this.total = res.data.totalCount
          this.totalPage = res.data.totalPage
          // 加载状态结束
          this.loadingList = false
          // 数据全部加载完成
          if (this.goodsList.length >= Number(this.total)) {
            this.finished = true
          }
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    // 获取签到信息
    getSignInData () {
      this.$post('/api/goodsScore/getUserSignTotal', {
      }).then(res => {
        if (res.result === 0) {
          this.signInData = res.data
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    // 获取签到积分
    getSignScore () {
      this.$post('/api/systemSet/getSystemSetByStatus', {
        status: 1
      }).then(res => {
        if (res.result === 0) {
          this.signScore = res.data.value
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    }
  },
  mounted () {
    if (this.$route.query.userName) {
      sessionStorage.setItem('userName', this.$route.query.userName)
    }
    if (!sessionStorage.getItem('authStatus')) {
      location.href = 'http://zhusc.wurenyulecang.com/api/user/authorize?returnUrl=1'
    } else {
      this.getBannerList()
      this.getAdImg()
      this.getGoodsCategory()
      this.getGoodsList()
      this.getSignInData()
      this.getSignScore()
      this.getHotSaleGoodsList()
      this.getExperienceGoodsList()
      this.getInfoList()
    }
  },
  watch: {
  }
}
</script>
