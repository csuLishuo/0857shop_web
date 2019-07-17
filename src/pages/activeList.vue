<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .activeList-container{
    min-height: 100%;
    background-image: url("../images/img21.jpg");
    background-repeat: no-repeat;
    background-size: 100% px2rem(436);
    background-position: top;
    background-color: #c40215;
    .topBar{
      // background-image: linear-gradient(-90deg, #ff2736 0%, #ff2b71 100%), linear-gradient(#ff3e31, #ff3e31);
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
    .goodsList{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      /*padding: 0 px2rem(20);*/
      margin-top: px2rem(346);
      padding-left: px2rem(10);
      .wrapper{
        width: px2rem(234);
        height: px2rem(396);
        background: #fff;
        border-radius: px2rem(10);
        margin-right: px2rem(10);
        margin-top: px2rem(20);
        .img-box{
          height: px2rem(246);
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
          line-height: px2rem(46);
          margin-top: px2rem(16);
          color: #45484f;
          padding: 0 px2rem(26);
        }
        .des{
          font-size: px2rem(20);
          line-height: px2rem(36);
          color: #9c9c9c;
          padding: 0 px2rem(26);
        }
        .price{
          color: #ff6c00;
          font-size: px2rem(20);
          font-weight: bold;
          padding: 0 px2rem(26);
          margin-top: px2rem(16);
          span{
            font-size: px2rem(29);
            vertical-align: bottom;
          }
        }
      }
    }
    .van-list{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;
    }
  }
</style>
<template>
  <div class="activeList-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon38.png" alt=""></div>
      <!--<div class="title">活动商品列表</div>-->
      <!--搜索-->
      <!--<div class="right-box"><img src="../images/icon45.png" alt=""></div>-->
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
          <div class="name ellipsis-1">{{item.title}}{{item.subTitle}}</div>
          <!-- <div class="des ellipsis-1">已售1389/剩2000</div> -->
          <div class="price">￥<span>{{item.nowPrice}}</span></div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'activeList',
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
      goodsList: [],
      total: '',
      totalPage: '',
      sendData: {
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
    getOneMorePage () {
      setTimeout(() => {
        if (Number(this.sendData.pageNumber) < Number(this.totalPage)) {
          this.sendData.pageNumber++
          this.getGoodsList()
        }
      }, 500)
    },
    getGoodsList () {
      this.$post('/api/goodsParty/getGoodsPartyList', this.sendData).then(res => {
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
        path: 'detail_active',
        query: {
          detailId: id
        }
      })
    }
  },
  mounted () {
    this.getGoodsList()
  },
  watch: {
  }
}
</script>
