<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .groupBuyList-container{
    .topBar{
      background-image: linear-gradient(-90deg, #ff2736 0%, #ff2b71 100%), linear-gradient(#ff3e31, #ff3e31);
      height: px2rem(100);
      padding: 0 px2rem(36);
      position: relative;
      line-height: px2rem(100);
      .left-box{
        width: px2rem(19);
        height: px2rem(37);
        position: absolute;
        left: px2rem(36);
        top: px2rem(32);
        img{
          width: 100%;
          height: 100%;
        }
      }
      .title{
        font-size: px2rem(32);
        color: #fff;
        font-weight: bold;
        text-align: center;
      }
      .right-box{
        width: px2rem(39);
        height: px2rem(39);
        img{
          width: 100%;
          height: 100%;
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
    .scroll-box{
      height: px2rem(86);
      padding-left: px2rem(30);
      display: -webkit-box;
      overflow-x: scroll;
      -webkit-overflow-scrolling:touch;
      width: 100%;
      background: #fff;
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
    .goodsList{
      background: #fff;
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
          position: relative;
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
              border: px2rem(1) solid #ff3e31;
              border-radius: px2rem(10);
              color: #ff3e31;
              font-size: px2rem(20);
            }
          }
          .price-box{
            margin-top: px2rem(30);
            .price{
              color: #ff3e31;
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
          .btn{
            width: px2rem(153);
            height: px2rem(58);
            line-height: px2rem(58);
            background-image: linear-gradient(-90deg, #ff2736 0%, #ff2b71 100%), linear-gradient(#ff3f31, #ff3f31);
            background-blend-mode: normal, normal;
            border-radius: px2rem(29);
            text-align: center;
            font-size: px2rem(28);
            color: #fff;
            position: absolute;
            bottom: 0;
            right: 0;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="groupBuyList-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon38.png" alt=""></div>
      <div class="title">团购</div>
      <!--搜索-->
      <!--<div class="right-box"><img src="../images/icon45.png" alt=""></div>-->
    </div>
    <div class="scroll-box">
      <div class="item" :class="{'on':sendData.categoryId == 0}" @click="changeCate(0)">
        热门
      </div>
      <div class="item" :class="{'on':sendData.categoryId == item.id}" v-for="item in categoryList" :key="item.id" @click="changeCate(item.id)">
        {{item.chname}}
      </div>
    </div>
    <!--<div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <img :src="item" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>-->
    <div class="goodsList">
      <van-list
        v-model="loadingList"
        :finished="finished"
        :immediate-check="false"
        finished-text="没有更多了"
        @load="getOneMorePage"
      >
        <div class="wrapper" v-for="item in goodsList" :key="item.id">
          <div class="img-box"><img :src="filePath + item.pics.split(';')[0]" alt=""></div>
          <div class="right-box">
            <div class="title ellipsis-2">{{item.title}}{{item.subTitle}}</div>
            <div class="des">已售{{item.totalSales}}/库存{{JSON.parse(item.attrs)[0].stock}}</div>
            <!--<div class="tag-box">
              <div class="tag">满38减10</div>
            </div>-->
            <div class="price-box">
              <div class="price">￥<span>{{item.nowPrice}}</span></div>
              <!--<div class="info">已售1389/剩2000</div>-->
            </div>
            <div class="btn" @click="goDetail(item.id)">去开团</div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'groupBuyList',
  components: {
  },
  data () {
    return {
      images: [
        require('../images/icon1.png'),
        require('../images/icon1_on.png'),
        require('../images/icon2.png'),
        require('../images/icon3.png')
      ],
      bannerData: [],
      filePath: '',
      categoryList: [],
      goodsList: [],
      total: '',
      totalPage: '',
      sendData: {
        categoryId: 0,
        pageNumber: 1,
        pageSize: 5
      },
      loadingList: false,
      finished: false
    }
  },
  methods: {
    changeCate (id) {
      this.sendData.pageNumber = 1
      this.finished = false
      this.goodsList = []
      this.sendData.categoryId = id
      this.getGoodsList()
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
      this.$post('/api/goodsGroupRules/getGoodsGroupRulesListByCategoryId', this.sendData).then(res => {
        if (res.result === 0) {
          if (this.sendData.pageNumber === 1) {
            this.goodsList = res.data.list
          } else {
            this.goodsList = this.goodsList.concat(res.data.list)
          }
          this.filePath = res.filePath
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
    goBack () {
      this.$router.back(-1)
    },
    goDetail (id) {
      this.$router.push({
        path: 'detail_groupBuy',
        query: {
          detailId: id
        }
      })
    },
    test () {
      Toast.loading({
        mask: true,
        message: '加载中...'
      })
    }
  },
  mounted () {
    // this.test()
    this.getGoodsCategory()
    this.getGoodsList()
  },
  watch: {
  }
}
</script>
