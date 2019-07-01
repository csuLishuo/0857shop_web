<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .withdrawDetail-container{
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
    .tableList{
      background: #fff;
      margin-top: px2rem(20);
      .wrapper{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding-top: px2rem(26);
        .img-box{
          padding-left: px2rem(30);
          width: px2rem(95);
          height: px2rem(65);
          img{
            width: 100%;
            height: 100%;
          }
        }
        .text-box{
          width: px2rem(624);
          border-bottom: 1px solid #ebebeb;
          padding-right: px2rem(34);
          padding-bottom: px2rem(30);
          .line-1{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left{
              font-size: px2rem(32);
            }
            .right{
              font-size: px2rem(40);
              color: #000;
              font-weight: bold;
            }
          }
          .line-2{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: px2rem(22);
            .left{
              font-size: px2rem(24);
              color: #999;
            }
            .right{
              font-size: px2rem(26);
              &.right-1{
                color: #a6a6a6;
              }
              &.right-2{
                color: #558ef7;
              }
              &.right-3{
                color: #ff1100;
              }
            }
          }
          .line-3{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: px2rem(22);
            color: #999;
            font-size: px2rem(24);
          }
        }
      }
    }
  }
</style>
<template>
  <div class="withdrawDetail-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon39.png" alt=""></div>
      <div class="title">提现明细</div>
    </div>
    <van-tabs v-model="active">
      <van-tab title="全部"></van-tab>
      <van-tab title="待审核"></van-tab>
      <van-tab title="待打款"></van-tab>
      <van-tab title="已打款"></van-tab>
    </van-tabs>
    <div class="tableList">
      <div class="wrapper">
        <div class="img-box"><img src="../images/icon54.png" alt=""></div>
        <div class="text-box">
          <div class="line-1">
            <div class="left">申请提现</div>
            <div class="right">1300.00</div>
          </div>
          <div class="line-2">
            <div class="left">中国建设银行</div>
            <div class="right right-1">已打款</div>
          </div>
          <div class="line-3">
            申请时间：2019.05.12 11:00:03
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="img-box"><img src="../images/icon54.png" alt=""></div>
        <div class="text-box">
          <div class="line-1">
            <div class="left">申请提现</div>
            <div class="right">1300.00</div>
          </div>
          <div class="line-2">
            <div class="left">中国建设银行</div>
            <div class="right right-2">待审核</div>
          </div>
          <div class="line-3">
            申请时间：2019.05.12 11:00:03
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="img-box"><img src="../images/icon54.png" alt=""></div>
        <div class="text-box">
          <div class="line-1">
            <div class="left">申请提现</div>
            <div class="right">1300.00</div>
          </div>
          <div class="line-2">
            <div class="left">中国建设银行</div>
            <div class="right right-3">待打款</div>
          </div>
          <div class="line-3">
            申请时间：2019.05.12 11:00:03
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'withdrawDetail',
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
