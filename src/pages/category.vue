<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .category-container{
    .topBar{
      background: #ff3e31;
      height: px2rem(94);
      padding: px2rem(18) 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      .input-box{
        background: #fff;
        border-radius: px2rem(10);
        padding-left: px2rem(50);
        height: px2rem(58);
        width: px2rem(700);
        position: relative;
        overflow: hidden;
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
      }
    }
    .banner{
      background-color: #fff;
      .img-box{
        width: px2rem(700);
        height: px2rem(270);
        margin: px2rem(6) auto 0;
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
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      padding: 0 px2rem(10);
      .wrapper{
        width: px2rem(360);
        height: px2rem(511);
        background: #fff;
        border-radius: px2rem(15);
        margin-top: px2rem(13);
        .img-box{
          height: px2rem(334);
          border-bottom: 1px solid #eff0f4;
          padding: px2rem(20);
          display: flex;
          align-items: center;
          img{
            max-width: 100%;
            max-height: 100%;
          }
        }
        .name{
          font-size: px2rem(26);
          line-height: px2rem(34);
          margin-top: px2rem(16);
          color: #45484f;
          padding: 0 px2rem(26);
        }
        .price{
          color: #161616;
          font-size: px2rem(24);
          font-weight: bold;
          padding: 0 px2rem(26);
          margin-top: px2rem(28);
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-between;
          .label{
            line-height: px2rem(32);
            padding: 0 px2rem(5);
            background: #e20001;
            border-radius: px2rem(3);
            font-size: px2rem(22);
            color: #fff;
          }
          span{
            font-size: px2rem(36);
            vertical-align: bottom;
          }
        }
      }
    }
    .van-list{
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
<template>
  <div class="category-container">
    <div class="topBar">
      <div class="input-box">
        <img src="../images/icon6.png" alt="">
        <input type="text">
      </div>
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in bannerData" :key="index">
          <img :src="filePath + item.bannerPic" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="scroll-box">
        <div class="item" :class="{'on':sendData.categoryId == 0}" @click="changeCate(0)">
          热门
        </div>
        <div class="item" :class="{'on':sendData.categoryId == item.id}" v-for="item in categoryList" :key="item.id" @click="changeCate(item.id)">
          {{item.chname}}
        </div>
      </div>
    <div class="goodsList">
      <van-list
        v-model="loadingList"
        :finished="finished"
        :immediate-check="false"
        @load="getOneMorePage"
      >
        <div class="wrapper" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
          <div class="img-box"><img :src="filePath + item.pics.split(';')[0]" alt=""></div>
          <div class="price">
            <div>￥<span>{{item.nowPrice}}</span></div>
            <!-- <div class="label">满38减10</div> -->
          </div>
          <div class="name ellipsis-2">【{{item.title}}】{{item.subTitle}}</div>
        </div>
      </van-list>
    </div>
    <tabbar :activeIndex="1"></tabbar>
  </div>
</template>

<script>
import { Toast } from 'vant'
import tabbar from '../components/tabbar'

export default {
  name: 'category',
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
      finished: false
    }
  },
  methods: {
    goDetail (id) {
      this.$router.push({
        path: 'detailPage',
        query: {
          detailId: id
        }
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
        Toast.fail('系统内部错误')
      })
    },
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
        Toast.fail('系统内部错误')
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
        Toast.fail('系统内部错误')
      })
    }
  },
  mounted () {
    this.getBannerList()
    this.getGoodsCategory()
    this.getGoodsList()
  },
  watch: {
  }
}
</script>
