<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .success_buy-container{
    .area-1{
      background-image: linear-gradient(-90deg, #ff2736 0%, #ff2b71 100%), linear-gradient(#000000, #000000);
      height: px2rem(366);
      .area-1-1{
        padding-left: px2rem(38);
        height: px2rem(100);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .icon-box{
          width: px2rem(19);
          height: px2rem(37);
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .area-1-2{
        display: flex;
        align-items: center;
        justify-content: center;
        .icon-box{
          width: px2rem(45);
          height: px2rem(45);
          margin-right: px2rem(10);
          img{
            width: 100%;
            height: 100%;
          }
        }
        .text{
          font-size: px2rem(40);
          color: #fff;
          font-weight: bold;
        }
      }
      .area-1-3{
        padding: 0 px2rem(165);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: px2rem(80);
        .btn{
          width: px2rem(181);
          height: px2rem(62);
          line-height: px2rem(62);
          font-size: px2rem(26);
          text-align: center;
          border-radius: px2rem(31);
          &.btn-left{
            background: #fffe6b;
            color: #ff273b;
          }
          &.btn-right{
            border: px2rem(1) solid #fff;
            color: #fff;
          }
        }
      }
    }
    .area-2{
      margin-top: px2rem(27);
      .title{
        width: 100%;
        height: px2rem(32);
        line-height: px2rem(32);
        background-image: url("../images/img1.png");
        background-repeat: no-repeat;
        background-size: px2rem(259) px2rem(30);
        background-position: center;
        text-align: center;
        font-size: px2rem(32);
        font-weight: bold;
        margin: px2rem(22) 0 px2rem(10);
      }
      .recommend-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 0 px2rem(20);
        .wrapper{
          width: px2rem(348);
          height: px2rem(498);
          background: #fff;
          border-radius: px2rem(15);
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
    }
  }
</style>
<template>
  <div class="success_buy-container">
    <div class="area-1">
      <div class="area-1-1">
        <div class="icon-box"><img src="../images/icon38.png" alt=""></div>
      </div>
      <div class="area-1-2">
        <div class="icon-box"><img src="../images/icon44.png" alt=""></div>
        <div class="text">购买成功</div>
      </div>
      <div class="area-1-3">
        <div class="btn btn-left" @click="goMyOrder">查看订单</div>
        <div class="btn btn-right" @click="goHome">返回首页</div>
      </div>
    </div>
    <div class="area-2 clearfix">
      <div class="recommend-list">
        <div class="wrapper" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
          <div class="img-box"><img :src="filePath + item.pics.split(';')[0]" alt=""></div>
          <div class="name ellipsis-1">{{item.title}}{{item.subTitle}}</div>
          <!-- <div class="des ellipsis-1">已售1389/剩2000</div> -->
          <div class="price">￥<span>{{item.nowPrice}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant'
import tabbar from '../components/tabbar'

export default {
  name: 'success_buy',
  components: {
    tabbar
  },
  data () {
    return {
      filePath: '',
      goodsList: [],
      sendData: {
        categoryId: 0,
        pageNumber: 1,
        pageSize: 4
      },
    }
  },
  methods: {
    goMyOrder () {
      this.$router.push({
        name: 'myOrder',
        params: {
          status: 2
        }
      })
    },
    goDetail (id) {
      this.$router.push({
        path: 'detail_hotSale',
        query: {
          detailId: id
        }
      })
    },
    getGoodsList () {
      this.$post('/api/goodsHotSale/getGoodsHotSaleListByCategoryId', this.sendData).then(res => {
        if (res.result === 0) {
          this.goodsList = res.data.list
          this.filePath = res.filePath
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    goHome () {
      this.$router.push({
        name: 'home'
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
    this.getGoodsList()
  },
  watch: {
  }
}
</script>
