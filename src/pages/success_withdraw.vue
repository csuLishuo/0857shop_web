<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .success_withdraw-container{
    padding-bottom: px2rem(160);
    .topBar{
      background: #ff2737;
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
    .area-1{
      background: #ff2737;
      padding-bottom: px2rem(50);
      .area-1-1{
        margin-top: px2rem(25);
        display: flex;
        align-items: center;
        justify-content: center;
        .img-box{
          width: px2rem(56);
          height: px2rem(56);
          margin-right: px2rem(25);
          img{
            width: 100%;
            height: 100%;
          }
        }
        .text{
          font-size: px2rem(50);
          font-weight: bold;
          color: #fff;
        }
      }
      .area-1-2{
        font-size: px2rem(26);
        text-align: center;
        color: #fff;
        margin-top: px2rem(30);
      }
      .area-1-3{
        font-size: px2rem(22);
        text-align: center;
        color: #fff;
        margin-top: px2rem(20);
      }
    }
    .area-2{
      padding-left: px2rem(30);
      background: #fff;
      margin-bottom: px2rem(20);
      margin-top: px2rem(20);
      .line{
        height: px2rem(104);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #eff0f4;
        font-size: px2rem(28);
        padding: 0 px2rem(25) 0 px2rem(10);
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
  <div class="success_withdraw-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon38.png" alt=""></div>
    </div>
    <div class="area-1 clearfix">
      <div class="area-1-1">
        <div class="img-box">
          <img src="../images/icon44.png" alt="">
        </div>
        <div class="text">提现成功</div>
      </div>
      <div class="area-1-2">提现申请已提交成功</div>
      <div class="area-1-3">预计到账时间：3-5个工作日</div>
    </div>
    <div class="area-2">
      <div class="line">
        <div class="name">银行卡</div>
        <div class="price">中国工商银行</div>
      </div>
      <div class="line">
        <div class="name">提现金额</div>
        <div class="price">10000.00元</div>
      </div>
      <div class="line">
        <div class="name">剩余余额</div>
        <div class="price">10000.00元</div>
      </div>
    </div>
    <div class="btn-bottom" @click="go">
      确定
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'SuccessWithdraw',
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
