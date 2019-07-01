<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .myGroupBuy-container{
    .topBar{
      background: #fff;
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
        font-weight: bold;
        text-align: center;
      }
    }
    .goodsList{
      margin-top: px2rem(20);
      background: #fff;
      padding-left: px2rem(24);
      .wrapper{
        padding: px2rem(22) px2rem(24) px2rem(22) 0;
        border-bottom: px2rem(1) solid #f0f0f0;
        .wrap-1{
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-between;
          background: #fff;
        }
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
          .label{
            font-size: px2rem(24);
            color: #3e4244;
            margin-top: px2rem(50);
            text-align: right;
            padding-right: px2rem(50);
          }
        }
      }
      .wrap-2{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        padding: 0 px2rem(35);
        height: px2rem(80);
        .text{
          font-size: px2rem(26);
          color: #ff3f31;
        }
        .btn-box{
          .btn{
            width: px2rem(150);
            height: px2rem(52);
            line-height: px2rem(52);
            border-radius: px2rem(26);
            border: 1px solid #c0c0c0;
            font-size: px2rem(26);
            color: #6f6f6f;
            text-align: center;
          }
        }
      }
      .del-good {
        width: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #ff0000;
        color: #ffffff;
        font-size: px2rem(28);
        height: 100%;
        img{
          width: px2rem(39);
          height: px2rem(41);
          margin-top: px2rem(22);
        }
      }
    }
    .van-tab{
      width: 20% !important;
      flex-basis: 20% !important;
    }
  }
</style>
<template>
  <div class="myGroupBuy-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon39.png" alt=""></div>
      <div class="title">我的拼团</div>
    </div>
    <van-tabs v-model="active">
      <van-tab title="全部"></van-tab>
      <van-tab title="待付款"></van-tab>
      <van-tab title="拼团中"></van-tab>
      <van-tab title="拼团成功"></van-tab>
      <van-tab title="拼团失败"></van-tab>
    </van-tabs>
    <div class="goodsList">
      <div>
        <van-swipe-cell
          :right-width="70"
        >
          <div class="wrapper" @click="goDetail">
            <div class="wrap-1">
              <div class="img-box"><img src="../images/icon3.png" alt=""></div>
              <div class="right-box">
                <div class="title ellipsis-2">【立体小脸妆出来】RIRE双头阴影高光修容棒3g+3g立体小脸妆出来】RIRE双头阴影高光修容棒3g+3g</div>
                <div class="des">红色；175；女款</div>
                <div class="label">共1件商品 合计：￥1267.00</div>
              </div>
            </div>
            <div class="wrap-2">
              <div class="text">拼团成功等待发货</div>
              <div class="btn-box">
                <div class="btn">提醒发货</div>
              </div>
            </div>
          </div>
          <div slot="right" class="del-good">
            <span>删除</span>
            <img src="../images/icon01.png">
          </div>
        </van-swipe-cell>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'myGroupBuy',
  components: {
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    goDetail () {
      this.$router.push({
        name: 'detail_bargin'
      })
    },
    openPop () {
      this.showPop = true
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
  },
  watch: {
  }
}
</script>
