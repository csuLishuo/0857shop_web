<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .popularizeQrCode-container{
    padding-bottom: px2rem(160);
    .area-1{
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
        font-weight: bold;
        text-align: center;
        color: #fff;
      }
    }
      background-image: url('../images/img6.png');
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: top;
      .wrapper{
        width: px2rem(708);
        background-image: linear-gradient(-30deg,#ff3939 49%, #ff8c47 100%), linear-gradient(#ffffff, #ffffff);
        background-blend-mode: normal, normal;
        border-radius: px2rem(30);
        margin: px2rem(146) auto 0;
        position: relative;
        .portrait-box{
          width: px2rem(198);
          height: px2rem(198);
          border-radius: 50%;
          overflow: hidden;
          margin-left: px2rem(-99);
          position: absolute;
          top: px2rem(-99);
          left: 50%;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .name{
          font-size: px2rem(36);
          color: #fff;
          text-align: center;
          margin-top: px2rem(120);
        }
        .qr-box{
          width: px2rem(384);
          height: px2rem(384);
          margin: px2rem(42) auto 0;
          background: #fff;
        }
        .info{
          font-size: px2rem(30);
          color: #fff;
          text-align: center;
          margin-top: px2rem(86);
          margin-bottom: px2rem(86);
        }
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
  <div class="popularizeQrCode-container">
    <div class="area-1 clearfix">
      <div class="topBar">
        <div class="left-box" @click="goBack"><img src="../images/icon38.png" alt=""></div>
        <div class="title">推广二维码</div>
      </div>
      <div class="wrapper clearfix">
        <div class="portrait-box"><img src="../images/img3.png" alt=""></div>
        <div class="name">斯嘉丽</div>
        <div class="qr-box"></div>
        <div class="info">分享自己的二维码，和朋友一起赚钱</div>
      </div>
    </div>
    <div class="btn-bottom" @click="go">
      保存我的推广码
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'popularizeQrCode',
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
