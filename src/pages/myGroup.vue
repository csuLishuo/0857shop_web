<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .myGroup-container{
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
      display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          padding: px2rem(30);
          padding-right: px2rem(40);
          .left-box{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            .portrait-box{
              width: px2rem(92);
              height: px2rem(92);
              border-radius: 50%;
              overflow: hidden;
              margin-right: px2rem(22);
              img{
                width: 100%;
                height: 100%;
              }
            }
            .text-box{
              .name{
                font-size: px2rem(26);
              }
              .des{
                font-size: px2rem(22);
                margin-top: px2rem(18);
                color: #656565;
              }
            }
          }
          .right-box{
            color: #000;
            font-size: px2rem(26);
            font-weight: bold;
          }
    }
  }
</style>
<template>
  <div class="myGroup-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon39.png" alt=""></div>
      <div class="title">我的团队</div>
    </div>
    <van-tabs v-model="active">
      <van-tab title="全部成员"></van-tab>
      <van-tab title="A级成员"></van-tab>
      <van-tab title="B级成员"></van-tab>
    </van-tabs>
    <div class="wrapper">
      <div class="left-box">
        <div class="portrait-box"><img src="../images/icon13.png" alt=""></div>
        <div class="text-box">
          <div class="name">罗杰斯  15355556666</div>
          <div class="des">2018-12-05 16:29:45</div>
        </div>
      </div>
      <div class="right-box">
        普通用户
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'myGroup',
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
