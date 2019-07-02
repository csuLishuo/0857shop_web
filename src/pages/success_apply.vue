<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .success_apply-container{
    padding-bottom: px2rem(160);
    .topBar{
      background: #fbb931;
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
      background: #fbb931;
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
    .btn-bottom {
      width: px2rem(690);
      height: px2rem(80);
      line-height: px2rem(80);
      background-color: #ff7c00;
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
  <div class="success_apply-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon38.png" alt=""></div>
    </div>
    <div class="area-1 clearfix">
      <div class="area-1-1">
        <div class="img-box">
          <img src="../images/icon44.png" alt="">
        </div>
        <div class="text">提交成功</div>
      </div>
      <div class="area-1-2">您的资料已经提交成功，请耐心等待工作人员会在</div>
      <div class="area-1-3">3-5个工作日审核！</div>
    </div>
    <div class="btn-bottom" @click="go">
      返回个人中心
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'successApply',
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
        name: 'myCenter',
        redirect: 'myCenter'
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
