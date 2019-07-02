<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .applyAgency-container{
    min-height: 100%;
    background: #fff;
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
    .img-box{
      margin-top: px2rem(100);
      img{
        width: 100%;
      }
    }
    .line-1{
      font-size: px2rem(68);
      font-weight: bold;
      text-align: center;
      margin-top: px2rem(46);
    }
    .line-2{
      font-size: px2rem(28);
      font-weight: bold;
      text-align: center;
      margin-top: px2rem(30);
      color: #666;
    }
    .btn-bottom {
      width: px2rem(690);
      height: px2rem(80);
      line-height: px2rem(80);
      background-color: #fbb931;
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
  <div class="applyAgency-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon39.png" alt=""></div>
      <div class="title">申请代理</div>
    </div>
    <div class="img-box"><img src="../images/img7.png" alt=""></div>
    <div class="line-1">成为代理</div>
    <div class="line-2">让你在工作之余也能赚钱，赶快加入吧</div>
    <div class="btn-bottom" @click="go">
      立即申请
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'applyAgency',
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
