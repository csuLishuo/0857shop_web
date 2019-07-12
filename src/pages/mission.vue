<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .mission-container{
    min-height: 100%;
    background: #e32921;
    .topBar{
      background: #e32921;
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
    .imgDel-box{
      width: 100%;
      img{
        width: 100%;
      }
    }
    .area-1{
      img{
        width: 100%;
        height: auto;
      }
    }
    .area-2{
      width: px2rem(668);
      background: #fff;
      border-radius: px2rem(20);
      margin: px2rem(4) auto;
      padding: px2rem(20) px2rem(40) px2rem(80);
      .title{
        font-size: px2rem(36);
        color: #f24d49;
        text-align: center;
      }
      .line{
        padding: px2rem(40) 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: px2rem(3) dashed #ffbab8;
        &.noborder{
          border-bottom: none;
        }
        .left-box{
          .name{
            font-weight: bold;
            font-size: px2rem(28);
            span{
              color: #ff7524;
            }
          }
          .des{
            color: #838383;
            font-size: px2rem(24);
            margin-top: px2rem(10);
          }
        }
        .right-box{
          width: px2rem(146);
          height: px2rem(64);
          line-height: px2rem(64);
          background: #fc431f;
          text-align: center;
          border-radius: px2rem(32);
          font-size: px2rem(30);
          color: #fff;
        }
      }
    }
  }
</style>
<template>
  <div class="mission-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon38.png" alt=""></div>
    </div>
    <!-- <div class="imgDel-box"><img src="../images/imgDel3.png" alt=""></div> -->
    <div class="area-1">
      <img src="../images/img13.png" alt="">
    </div>
    <div class="area-2">
      <div class="title">做任务赚积分</div>
      <div class="line">
        <div class="left-box">
          <div class="name">邀请好友下载 <span>奖励500积分</span></div>
          <div class="des">奖励500积分</div>
        </div>
        <div class="right-box">
          去参加
        </div>
      </div>
      <div class="line noborder">
        <div class="left-box">
          <div class="name">邀请好友下载 <span>奖励500积分</span></div>
          <div class="des">奖励500积分</div>
        </div>
        <div class="right-box">
          去参加
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'mission',
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
