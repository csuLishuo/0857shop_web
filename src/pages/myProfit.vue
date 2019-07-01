<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .myProfit-container{
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
    .wrapper{
      width: px2rem(702);
      margin: px2rem(20) auto 0;
      background: #fff;
      border-radius: px2rem(10);
    }
    .area-1{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #eff0f4;
      padding: 0 px2rem(36) 0 px2rem(30);
      height: px2rem(84);
      .area-1-1{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .img-box{
          width: px2rem(46);
          height: px2rem(46);
          margin-right: px2rem(25);
          img{
            width: 100%;
            height: 100%;
          }
        }
        .text{
          font-size: px2rem(28);
        }
      }
      .tel{
        font-size: px2rem(28)
      }
    }
    .area-2{
      padding: 0 px2rem(36) px2rem(36) px2rem(30);
      .line-1{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: px2rem(36);
        .line-1-left{
          font-size: px2rem(24);
          span{
            color: #ff3f31;
            font-size: px2rem(28);
            margin-right: px2rem(14);
          }
        }
        .line-1-right{
          font-size: px2rem(40);
          color: #ff3f31;
          font-weight: bold;
          span{
            font-size: px2rem(26);
          }
        }
      }
      .line-2{
        font-size: px2rem(24);
        margin-top: px2rem(28);
        color: #727272;
      }
      .line-3{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: px2rem(22);
        .line-3-left{
          font-size: px2rem(24);
        }
        .line-3-right{
          font-size: px2rem(22);
          color: #727272;
        }
      }
    }
  }
</style>
<template>
  <div class="myProfit-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon39.png" alt=""></div>
      <div class="title">我的分润</div>
    </div>
    <div class="wrapper">
      <div class="area-1">
        <div class="area-1-1">
          <div class="img-box">
            <img src="../images/icon44.png" alt="">
          </div>
          <div class="text">斯嘉丽约翰逊</div>
        </div>
        <div class="tel">15000001111</div>
      </div>
      <div class="area-2">
        <div class="line-1">
          <div class="line-1-left"><span>10%</span>分润比例</div>
          <div class="line-1-right"><span>￥</span>100.00</div>
        </div>
        <div class="line-2">
          订单号：566685442514453
        </div>
        <div class="line-3">
          <div class="line-3-left">订单金额：120.00元</div>
          <div class="line-3-right">2019.03.13 12:03:23</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'myProfit',
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
