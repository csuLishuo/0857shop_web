<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .distributionCard-container{
    padding-bottom: px2rem(160);
    .top-bg{
      background-image: linear-gradient(-30deg, #ff3939 50%, #ff4747 100%), linear-gradient(#3965ff, #3965ff);
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
        padding: 0 px2rem(30) 0 px2rem(40);
        height: px2rem(200);
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left-box{
          .name{
            font-size: px2rem(24);
            color: #fff;
          }
          .price{
            font-size: px2rem(50);
            font-weight: bold;
            color: #fff;
            margin-top: px2rem(20);
          }
        }
        .right-box{
          width: px2rem(154);
          height: px2rem(56);
          line-height: px2rem(56);
          text-align: center;
          border: solid 1px #ffffff;
          color: #fff;
          font-size: px2rem(24);
          border-radius: px2rem(15);
        }
      }
    }
    .area-2{
      padding-left: px2rem(30);
      background: #fff;
      margin-bottom: px2rem(20);
      .line{
        height: px2rem(104);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #eff0f4;
        font-size: px2rem(28);
        padding: 0 px2rem(25) 0 px2rem(10);
        .price{
          color: #fe0000;
        }
      }
    }
    .area-3{
      color: #828282;
      padding: 0 px2rem(40);
      .name{
        font-size: px2rem(28);
        margin-top: px2rem(20);
      }
      .des{
        font-size: px2rem(24);
        margin-top: px2rem(20);
        text-align: justify;
        line-height: px2rem(36);
      }
    }
    .btn-bottom {
      width: px2rem(690);
      height: px2rem(80);
      line-height: px2rem(80);
      background-color: #ff2841;
      border-radius: px2rem(80);
      position: fixed;
      bottom: px2rem(40);
      left: px2rem(30);
      right: px2rem(30);
      font-size: px2rem(30);
      color: #fff;
      text-align: center;
    }
  }
</style>
<template>
  <div class="distributionCard-container">
    <div class="top-bg">
      <div class="topBar">
        <div class="left-box" @click="goBack"><img src="../images/icon38.png" alt=""></div>
        <div class="title">分销购物卡</div>
        <!--搜索-->
        <!--<div class="right-box"><img src="../images/icon45.png" alt=""></div>-->
      </div>
      <div class="area-1">
        <div class="left-box">
          <div class="name">购物卡(元)</div>
          <div class="price">1000.00</div>
        </div>
        <div class="right-box">提现明细</div>
      </div>
    </div>
    <div class="area-2">
      <div class="line">
        <div class="name">可提现佣金</div>
        <div class="price">10000.00元</div>
      </div>
    </div>
    <div class="area-2">
      <div class="line">
        <div class="name">已提现佣金</div>
        <div class="price">10000.00元</div>
      </div>
      <div class="line">
        <div class="name">待打款佣金</div>
        <div class="price">10000.00元</div>
      </div>
    </div>
    <div class="area-3">
      <div class="name">用户须知</div>
      <div class="des">尊敬的用户，提现需要后台审核，最低提现不得低于100元，提现后，就是发健身房哈的交话费是的是角度看是，的积分是地方，是看得见的看法。</div>
    </div>
    <div class="btn-bottom" @click="go">
      我要提现
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'distributionCard',
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
    go () {
      this.$router.push({
        path: '/applyWithdraw'
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
  },
  watch: {
  }
}
</script>
