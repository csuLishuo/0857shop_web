<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .publishComment-container{
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
      margin: px2rem(20) auto 0;
      background: #fff;
      border-radius: px2rem(14);
      padding: 0 px2rem(26);
      .time{
        font-size: px2rem(22);
        color: #727272;
        line-height: px2rem(86);
      }
      .goodContent{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        .img-box{
          width: px2rem(168);
          height: px2rem(168);
          border-radius: px2rem(6);
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .right-box{
          width: px2rem(500);
          position: relative;
          .title{
            font-size: px2rem(26);
            width: px2rem(480);
            line-height: px2rem(38);
            margin-top: px2rem(16);
            font-weight: bold;
            color: #393939;
          }
        }
      }
      .area-1{
        .line{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          height: px2rem(80);
          .name{
            font-size: px2rem(28);
            color: #666;
            margin-right: px2rem(40);
            margin-top: px2rem(8);
          }
          .stars{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            .img-box{
              width: px2rem(41);
              height: px2rem(39);
              margin-right: px2rem(30);
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
    .area-2{
      margin-top: px2rem(20);
      background: #fff;
      .line{
        .icon-box{
          width: px2rem(145);
        }
      }
    }
  }
</style>
<template>
  <div class="publishComment-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon39.png" alt=""></div>
      <div class="title">发表评价</div>
    </div>
    <div class="wrapper">
      <div class="goodContent">
        <div class="img-box"><img src="../images/icon3.png" alt=""></div>
        <div class="right-box">
          <div class="title ellipsis-2">【立体小脸妆出来】RIRE双头阴影高光修容棒3g+3g立体小脸妆出来】RIRE双头阴影高光修容棒3g+3g</div>
        </div>
      </div>
      <div class="area-1">
        <div class="line">
          <div class="name">服务态度</div>
          <div class="stars">
            <div class="img-box"><img src="../images/icon55.png" alt=""></div>
            <div class="img-box"><img src="../images/icon55.png" alt=""></div>
            <div class="img-box"><img src="../images/icon55.png" alt=""></div>
            <div class="img-box"><img src="../images/icon55.png" alt=""></div>
            <div class="img-box"><img src="../images/icon55.png" alt=""></div>
          </div>
        </div>
        <div class="line">
          <div class="name">描述相符</div>
          <div class="stars">
            <div class="img-box"><img src="../images/icon56.png" alt=""></div>
            <div class="img-box"><img src="../images/icon56.png" alt=""></div>
            <div class="img-box"><img src="../images/icon56.png" alt=""></div>
            <div class="img-box"><img src="../images/icon56.png" alt=""></div>
            <div class="img-box"><img src="../images/icon56.png" alt=""></div>
          </div>
        </div>
        <div class="line">
          <div class="name">发货速度</div>
          <div class="stars">
            <div class="img-box"><img src="../images/icon56.png" alt=""></div>
            <div class="img-box"><img src="../images/icon56.png" alt=""></div>
            <div class="img-box"><img src="../images/icon56.png" alt=""></div>
            <div class="img-box"><img src="../images/icon56.png" alt=""></div>
            <div class="img-box"><img src="../images/icon56.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>
    <div class="area-2">
      <div class="form-box">
        <div class="line">
          <van-field
            type="textarea"
            clearable
            placeholder="亲，您对这个商品满意吗？你的评价会帮助我们选择更好的商品哦~"
          >
          </van-field>
        </div>
        <div class="line">
          <van-uploader :after-read="afterRead" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast, Uploader } from 'vant'

export default {
  name: 'publishComment',
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
    afterRead (file) {
      console.log(file)
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
