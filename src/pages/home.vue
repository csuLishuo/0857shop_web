<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  img,input{
    vertical-align: middle;
    display: block;
  }
  .home-container{
    .topBar{
      background: #ff3e31;
      height: px2rem(94);
      padding: px2rem(18) 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      .scan{
        width: px2rem(37);
        height: px2rem(36);
        img{
          width: 100%;
          height: 100%;
        }
      }
      .input-box{
        background: #fff;
        border-radius: px2rem(10);
        padding-left: px2rem(50);
        height: px2rem(58);
        width: px2rem(564);
        position: relative;
        overflow: hidden;
        img{
          width: px2rem(25);
          height: px2rem(25);
          position: absolute;
          left: px2rem(16);
          top: px2rem(17);
        }
        input{
          width: 100%;
          line-height: px2rem(58);
          font-size: px2rem(25);
        }
      }
      .info{
        position: relative;
        width: px2rem(37);
        height: px2rem(35);
        img{
          width: 100%;
          height: 100%;
        }
        span{
          position: absolute;
          height: px2rem(26);
          line-height: px2rem(26);
          font-size: px2rem(20);
          color: #ff0d00;
          background: #fff;
          padding: 0 px2rem(10);
          top: 0;
          right: 0;
          margin-top: px2rem(-13);
          margin-right: px2rem(-13);
          border-radius: px2rem(26);
        }
      }
    }
  }
</style>

<template>
  <div class="home-container">
    <div class="topBar">
      <div class="scan"><img src="../images/icon5.png" alt=""></div>
      <div class="input-box">
        <img src="../images/icon6.png" alt="">
        <input type="text"></div>
      <div class="info">
        <img src="../images/icon7.png" alt="">
        <span>1</span>
      </div>
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <tabbar :activeIndex="0"></tabbar>
  </div>
</template>

<script>
import { Toast } from 'vant'
import tabbar from '../components/tabbar'

export default {
  name: 'home',
  components: {
    tabbar
  },
  data () {
    return {
      images: [
        require('../images/icon1.png'),
        require('../images/icon1_on.png'),
        require('../images/icon2.png'),
        require('../images/icon3.png')
      ]
    }
  },
  methods: {
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
