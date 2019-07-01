<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .myIncome-container{
    .top-bg{
      background-image: linear-gradient(-30deg,
        #ff3939 49%,
        #ff8c47 100%),
      linear-gradient(
          #3965ff,
          #3965ff);
      .topBar{
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
      .area-1{
        padding-left: px2rem(40);
        .top-box{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          margin-top: px2rem(30);
          .left-box{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            .portrait-box{
              width: px2rem(48);
              height: px2rem(48);
              border-radius: 50%;
              overflow: hidden;
              margin-right: px2rem(18);
              img{
                width: 100%;
                height: 100%;
              }
            }
            .text-box{
              .name{
                font-size: px2rem(30);
                color: #fff;
              }
            }
          }
          .right-box{
            display: flex;
            align-items: center;
            justify-content: space-around;
            background-color: rgba(0,0,0,.2);
            width: px2rem(227);
            height: px2rem(48);
            border-radius: px2rem(24) 0px 0px px2rem(24);
            text-align: center;
            .name{
              font-size: px2rem(24);
              color: #fff;
              text-align: center;
            }
          }
        }
        .area-1-2{
          margin-top: px2rem(50);
          .name{
            font-size: px2rem(24);
            color: #fff;
            opacity: 0.6;
          }
          .price{
            font-size: px2rem(66);
            font-weight: bold;
            color: #fff;
            margin-top: px2rem(20);
          }
        }
        .area-1-3{
          height: px2rem(150);
          margin-top: px2rem(30);
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .wrap{
            width: 50%;
          }
          .name{
            font-size: px2rem(24);
            color: #fff;
            opacity: 0.6;
          }
          .price{
            font-size: px2rem(50);
            font-weight: bold;
            color: #fff;
            margin-top: px2rem(20);
          }
        }
      }
    }
    .area-2{
      margin: px2rem(20) auto 0;
      background: #fff;
      padding-bottom: px2rem(50);
      .area-2-1{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        margin-top: px2rem(44);
        .wrap{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 33.3%;
          height: px2rem(250);
          .img-box{
            background: rgba(255,0,0,0.1);
            width: px2rem(75);
            height: px2rem(75);
            position: relative;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .name{
            font-size: px2rem(26);
            color: #4c4c4c;
            margin-top: px2rem(32);
          }
        }
      }
    }
  }
</style>
<template>
  <div class="myIncome-container">
    <div class="top-bg">
      <div class="topBar">
        <div class="left-box" @click="goBack"><img src="../images/icon38.png" alt=""></div>
        <div class="title">我的收益</div>
        <!--搜索-->
        <!--<div class="right-box"><img src="../images/icon45.png" alt=""></div>-->
      </div>
      <div class="area-1 clearfix">
        <div class="top-box">
          <div class="left-box">
            <div class="portrait-box"><img src="../images/icon13.png" alt=""></div>
            <div class="text-box">
              <div class="name">斯嘉丽·约翰逊</div>
            </div>
          </div>
          <div class="right-box">
            <div class="name">推荐人：虞维文</div>
          </div>
        </div>
        <div class="area-1-2">
          <div class="name">总价值(元)</div>
          <div class="price">1000.00</div>
        </div>
        <div class="area-1-3">
          <div class="wrap">
            <div class="name">购物券(元)</div>
            <div class="price">1000.00</div>
          </div>
          <div class="wrap">
            <div class="name">购物卡(元)</div>
            <div class="price">1000.00</div>
          </div>
        </div>
      </div>
    </div>
    <div class="area-2 clearfix">
      <div class="area-2-1">
        <div class="wrap" @click="go(1)">
          <div class="img-box">
            <img src="../images/icon49.png" alt="">
          </div>
          <div class="name">分销购物卡</div>
        </div>
        <div class="wrap" @click="go(2)">
          <div class="img-box">
            <img src="../images/icon50.png" alt="">
          </div>
          <div class="name">我的分润</div>
        </div>
        <div class="wrap" @click="go(3)">
          <div class="img-box">
            <img src="../images/icon51.png" alt="">
          </div>
          <div class="name">提现明细</div>
        </div>
        <div class="wrap" @click="go(4)">
          <div class="img-box">
            <img src="../images/icon52.png" alt="">
          </div>
          <div class="name">我的团队</div>
        </div>
        <div class="wrap" @click="go(5)">
          <div class="img-box">
            <img src="../images/icon53.png" alt="">
          </div>
          <div class="name">推广二维码</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'myIncome',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    go (status) {
      if (status === 1) {
        this.$router.push({
          path: '/distributionCard'
        })
      } else if (status === 2) {
        this.$router.push({
          path: '/myProfit'
        })
      } else if (status === 3) {
        this.$router.push({
          path: '/withdrawDetail'
        })
      } else if (status === 4) {
        this.$router.push({
          path: '/myGroup'
        })
      } else if (status === 5) {
        this.$router.push({
          path: '/popularizeQrCode'
        })
      }
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
