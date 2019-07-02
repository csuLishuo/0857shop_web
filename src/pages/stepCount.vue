<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .stepCount-container{
    .topBar{
      background-image: linear-gradient(-90deg, #ff2736 0%, #ff2b71 100%), linear-gradient(#ff3e31, #ff3e31);
      height: px2rem(100);
      padding: 0 px2rem(36);
      position: relative;
      line-height: px2rem(100);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
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
      position: relative;
      padding-bottom: px2rem(300);
      background-color: #fff;
      .area-1-1{
        font-size: px2rem(34);
        color: #fff;
        text-align: center;
        font-weight: bold;
        position: absolute;
        top: px2rem(132);
        left: 0;
        width: 100%
      }
      .wrapper{
        width: px2rem(430);
        height: px2rem(430);
        position: absolute;
        top: px2rem(206);
        left: 50%;
        margin-left: px2rem(-215);
        background-image: url("../images/img10.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        text-align: center;
        .wrap-1{
          font-size: px2rem(26);
          color: #757575;
          margin-top: px2rem(128);
        }
        .wrap-2{
          font-size: px2rem(50);
          color: #ff2737;
          margin-top: px2rem(40);
          font-weight: bold;
        }
        .wrap-3{
          font-size: px2rem(22);
          color: #9d9d9d;
          margin-top: px2rem(40);
        }
      }
      .bg{
        width: 100%;
        height: px2rem(336);
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .area-2{
      background: #fff;
      padding: px2rem(60) 0 px2rem(40);
      .btn{
        width: px2rem(490);
        height: px2rem(74);
        background-color: #ff2b6e;
        border-radius: px2rem(37);
        text-align: center;
        line-height: px2rem(74);
        font-size: px2rem(30);
        margin: 0 auto 0;
        color: #fff;
      }
    }
    .area-3{
      height: px2rem(225);
      margin-top: px2rem(20);
      img{
        width: 100%;
        height: 100%;
      }
    }
    .area-4{
      .title{
        width: 100%;
        height: px2rem(32);
        line-height: px2rem(32);
        background-image: url("../images/img1.png");
        background-repeat: no-repeat;
        background-size: px2rem(259) px2rem(30);
        background-position: center;
        text-align: center;
        font-size: px2rem(32);
        font-weight: bold;
        margin: px2rem(22) 0 px2rem(10);
      }
      .recommend-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 0 px2rem(20);
        .wrapper{
          width: px2rem(348);
          height: px2rem(498);
          background: #fff;
          border-radius: px2rem(15);
          margin-top: px2rem(12);
          .img-box{
            height: px2rem(334);
            border-bottom: 1px solid #eff0f4;
            padding: px2rem(20);
            display: flex;
            align-items: center;
            img{
              max-width: 100%;
              max-height: 100%;
            }
          }
          .name{
            font-size: px2rem(26);
            line-height: px2rem(46);
            margin-top: px2rem(16);
            color: #45484f;
            padding: 0 px2rem(26);
          }
          .des{
            font-size: px2rem(20);
            line-height: px2rem(36);
            color: #9c9c9c;
            padding: 0 px2rem(26);
          }
          .price{
            color: #ff6c00;
            font-size: px2rem(20);
            font-weight: bold;
            padding: 0 px2rem(26);
            margin-top: px2rem(16);
            span{
              font-size: px2rem(29);
              vertical-align: bottom;
            }
          }
        }
      }
    }
    .pop-img-box{
      width: px2rem(553);
      height: px2rem(560);
      img{
        width: 100%;
        height: 100%;
      }
      .text{
        position: absolute;
        color: #353a3f;
        text-align: center;
        top: px2rem(402);
        left: 0;
        width: 100%;
        font-size: px2rem(43);
      }
    }
    .van-popup{
      background-color: transparent !important;
    }
  }
</style>
<template>
  <div class="stepCount-container">
    <div class="area-1">
      <div class="topBar">
        <div class="left-box" @click="goBack"><img src="../images/icon38.png" alt=""></div>
        <div class="title">计步</div>
      </div>
      <div class="bg"><img src="../images/img3.png" alt=""></div>
      <div class="area-1-1">积分：200000</div>
      <div class="wrapper">
        <div class="wrap-1">可兑换步数</div>
        <div class="wrap-2">22265</div>
        <div class="wrap-3">每日零点清零</div>
      </div>
    </div>
    <div class="area-2 clearfix">
      <div class="btn" @click="openPop">点击兑换积分</div>
    </div>
    <div class="area-3">
      <img src="../images/img3.png" alt="">
    </div>
    <div class="area-4">
      <div class="title">免费兑换</div>
      <div class="recommend-list">
        <div class="wrapper">
          <div class="img-box"><img src="../images/img2.png" alt=""></div>
          <div class="name ellipsis-1">PZAAO 中空缎面款色休..PZAAO 中空缎面款色休..</div>
          <div class="des ellipsis-1">已售1389/剩2000</div>
          <div class="price">￥<span>599.00</span></div>
        </div>
        <div class="wrapper">
          <div class="img-box"><img src="../images/img2.png" alt=""></div>
          <div class="name ellipsis-1">PZAAO 中空缎面款色休..PZAAO 中空缎面款色休..</div>
          <div class="des ellipsis-1">已售1389/剩2000</div>
          <div class="price">￥<span>599.00</span></div>
        </div>
        <div class="wrapper">
          <div class="img-box"><img src="../images/img2.png" alt=""></div>
          <div class="name ellipsis-1">PZAAO 中空缎面款色休..PZAAO 中空缎面款色休..</div>
          <div class="des ellipsis-1">已售1389/剩2000</div>
          <div class="price">￥<span>599.00</span></div>
        </div>
        <div class="wrapper">
          <div class="img-box"><img src="../images/img2.png" alt=""></div>
          <div class="name ellipsis-1">PZAAO 中空缎面款色休..PZAAO 中空缎面款色休..</div>
          <div class="des ellipsis-1">已售1389/剩2000</div>
          <div class="price">￥<span>599.00</span></div>
        </div>
      </div>
    </div>
    <van-popup v-model="showPop">
      <div class="pop-img-box">
        <img src="../images/img4.png" alt="">
        <div class="text">
          获得20积分
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'stepCount',
  components: {
  },
  data () {
    return {
      images: [
        require('../images/icon1.png'),
        require('../images/icon1_on.png'),
        require('../images/icon2.png'),
        require('../images/icon3.png')
      ],
      showPop: false
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
