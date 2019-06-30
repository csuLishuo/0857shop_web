<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .myReward-container{
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
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        padding: px2rem(22) px2rem(24) px2rem(22) 0;
        border-bottom: px2rem(1) solid #f0f0f0;
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
          .btn{
            width: px2rem(396);
            height: px2rem(48);
            line-height: px2rem(48);
            border-radius: px2rem(24);
            background: #ff3f31;
            text-align: center;
            font-size: px2rem(24);
            color: #fff;
            margin: px2rem(50) 0 0;
          }
          .label{
            font-size: px2rem(30);
            color: #a1a1a1;
            margin-top: px2rem(50);
            text-align: right;
            padding-right: px2rem(50);
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
  }
</style>
<template>
  <div class="myReward-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon39.png" alt=""></div>
      <div class="title">我的奖品</div>
    </div>
    <van-tabs v-model="active">
      <van-tab title="未领取"></van-tab>
      <van-tab title="已领取"></van-tab>
    </van-tabs>
    <div class="goodsList">
      <div>
        <van-swipe-cell
              :right-width="70"
            >
            <div class="wrapper" @click="goDetail">
        <div class="img-box"><img src="../images/icon3.png" alt=""></div>
        <div class="right-box">
          <div class="title ellipsis-2">【立体小脸妆出来】RIRE双头阴影高光修容棒3g+3g立体小脸妆出来】RIRE双头阴影高光修容棒3g+3g</div>
          <div class="btn">马上领取</div>
        </div>
      </div>
              <div slot="right" class="del-good">
                <span>删除</span>
                <img src="../images/icon01.png">
              </div>
            </van-swipe-cell>
      </div>
      <div>
        <van-swipe-cell
              :right-width="70"
            >
            <div class="wrapper" @click="goDetail">
        <div class="img-box"><img src="../images/icon3.png" alt=""></div>
        <div class="right-box">
          <div class="title ellipsis-2">【立体小脸妆出来】RIRE双头阴影高光修容棒3g+3g立体小脸妆出来】RIRE双头阴影高光修容棒3g+3g</div>
          <div class="label">已领取</div>
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
  name: 'myReward',
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
