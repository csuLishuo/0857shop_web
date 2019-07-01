<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .delivery-container{
    padding-bottom: px2rem(160);
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
    .area-1{
      width: px2rem(692);
      background-color: #ffffff;
      border-radius: px2rem(20);
      margin: px2rem(20) auto 0;
      padding: 0 px2rem(37);
      .line{
        height: px2rem(150);
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: 1px solid #eff0f4;
        .name{
          font-size: px2rem(32);
          font-weight: bold;
          line-height: px2rem(42);
        }
        .des{
          font-size: px2rem(28);
          color: #bebebe;
          line-height: px2rem(38);
        }
      }
    }
    .area-2{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: px2rem(100);
      border-bottom: 1px solid #ebebeb;
      justify-content: space-between;
      padding: 0 px2rem(37);
      width: px2rem(692);
      background: #fff;
      margin: px2rem(20) auto;
      border-radius: px2rem(20);
      .label{
        font-size: px2rem(28);
        width: px2rem(140);
      }
      .right-box{
        display: flex;
        align-items: center;
        span{
          font-size: px2rem(28);
          color: #bebebe;
          margin-right: px2rem(20);
        }
        img{
          width: px2rem(12);
          height: px2rem(21);
        }
      }
    }
    .btn-bottom {
      width: px2rem(690);
      height: px2rem(80);
      line-height: px2rem(80);
      background-color: #1c83e4;
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
  <div class="delivery-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon39.png" alt=""></div>
      <div class="title">快递发货</div>
    </div>
    <div class="area-1">
      <div class="line">
        <div class="name">寄件人地址</div>
        <div class=des>点击填写寄件人信息</div>
      </div>
      <div class="line">
        <div class="name">收件人地址</div>
        <div class=des>点击填写收件人信息</div>
      </div>
    </div>
    <div class="area-2" @click="goEdit">
      <div class="label">快递服务</div>
      <div class="right-box">
        <span>请选择快递公司</span>
        <img src="../images/icon21.png" alt="">
      </div>
    </div>
    <div class="btn-bottom">
      立即下单
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'delivery',
  components: {
  },
  data () {
    return {
      checked: false
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    goEdit () {
      this.$router.push({
        name: 'editAddress'
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
