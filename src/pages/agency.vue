<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .agency-container{
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
      height: px2rem(494);
      background-image: url("../images/img5.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      .area-1-1{
        .img-bg{
          width: px2rem(168);
          height: px2rem(168);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          margin: px2rem(72) auto 0;
          .img-box{
            width: px2rem(154);
            height: px2rem(154);
            border-radius: 50%;
            background: rgba(255, 255, 255, 1);
            margin: px2rem(7) auto 0;
            overflow: hidden;
            img{
              width: px2rem(100);
              height: px2rem(100);
            }
          }
        }
      }
      .name{
        font-size: px2rem(30);
        color: #fefefe;
        margin-top: px2rem(50);
        text-align: center;
      }
    }
    .area-2{
      margin: px2rem(20) auto 0;
      background: #fff;
      padding-bottom: px2rem(50);
      .area-2-1{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-around;
        margin-top: px2rem(44);
        .wrap{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          .img-box{
            background: rgba(255,0,0,0.1);
            width: px2rem(75);
            height: px2rem(75);
            position: relative;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .name{
            font-size: px2rem(26);
            color: #4c4c4c;
            margin-top: px2rem(32);
          }
        }
      }
    }
  }
</style>
<template>
  <div class="agency-container">
    <div class="area-1">
      <div class="topBar">
        <div class="left-box" @click="goBack"><img src="../images/icon38.png" alt=""></div>
        <div class="title">代理权限</div>
      </div>
      <div class="area-1-1">
        <div class="img-bg clearfix">
          <div class="img-box">
            <img src="../images/img3.png" alt="">
          </div>
        </div>
        <div class="name">斯嘉丽约翰</div>
      </div>
    </div>
    <div class="area-2 clearfix">
      <div class="area-2-1">
        <div class="wrap" @click="go(1)">
          <div class="img-box">
            <img src="../images/icon46.png" alt="">
          </div>
          <div class="name">快递发货</div>
        </div>
        <div class="wrap" @click="go(2)">
          <div class="img-box">
            <img src="../images/icon47.png" alt="">
          </div>
          <div class="name">快递收货</div>
        </div>
        <div class="wrap" @click="go(3)">
          <div class="img-box">
            <img src="../images/icon48.png" alt="">
          </div>
          <div class="name">收货码</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'agency',
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
    go (status) {
      if (status === 1) {
        this.$router.push({
          path: '/delivery'
        })
      } else if (status === 2) {
        this.$router.push({
          path: '/receive'
        })
      } else if (status === 3) {
        this.$router.push({
          path: '/receiveCode'
        })
      }
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
