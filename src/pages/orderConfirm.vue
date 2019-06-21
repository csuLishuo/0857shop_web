<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .orderConfirm-container{
    .area-1{
      height: px2rem(390);
      background-image: linear-gradient(0deg,
        #f3f3f3 0%,
        #ff191a 69%),
      linear-gradient(
          #000000,
          #000000);
      .title-box{
        position: relative;
        .icon-box{
          width: px2rem(19);
          height: px2rem(37);
          position: absolute;
          left: px2rem(38);
          top: px2rem(25);
          img{
            width: 100%;
            height: 100%;
          }
        }
        .text{
          line-height: px2rem(88);
          font-size: px2rem(32);
          text-align: center;
          color: #050505;
        }
      }
      .tabs{
        width: px2rem(730);
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: flex-start;
        .item{
          width: px2rem(375);
        }
      }
    }
  }
</style>
<template>
  <div class="orderConfirm-container">
    <div class="area-1">
      <div class="title-box">
        <div class="icon-box"><img src="../images/icon39.png" alt=""></div>
        <div class="text">确认订单</div>
      </div>
      <div class="tabs">
        <div class="item">上门取货</div>
        <div class="item">快递配送</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import tabbar from '../components/tabbar'

export default {
  name: 'category',
  components: {
    tabbar
  },
  data () {
    return {
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
