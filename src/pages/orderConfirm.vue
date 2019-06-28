<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .orderConfirm-container{
    padding-bottom: px2rem(120);
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
          width: 50%;
          height: px2rem(80);
          font-size: px2rem(32);
          &.item-left{
            display: flex;
            align-items: bottom;
            justify-content: flex-end;
          }
          &.item-right{
            display: flex;
            align-items: bottom;
            justify-content: flex-start;
          }
          .wrap{
            width: px2rem(355);
            height: px2rem(71);
            line-height: px2rem(71);
            background: #FFD7D8;
            text-align: center;
            margin-top: px2rem(9);
            border-radius: px2rem(6) px2rem(6) 0 0;
          }
          &.on{
            .wrap{
              height: px2rem(80);
              line-height: px2rem(80);
              background: #fff;
              width: 100%;
              margin-top: 0;
            }
          }
        }
      }
      .info{
        width: px2rem(730);
        margin: 0 auto;
        height: px2rem(233);
        background: #fff;
        padding: px2rem(20) px2rem(32);
        border-radius: 0 0 px2rem(8) px2rem(8);
        .title-box{
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-between;
          .name-box{
            font-size: px2rem(36);
            line-height: px2rem(50);
            width: px2rem(580);
            span{
              display: inline-block;
              padding: px2rem(5);
              line-height: px2rem(28);
              height: px2rem(28);
              font-size: px2rem(19);
              color: #375fe6;
              background: #9fb8ff;
              vertical-align: middle;
              margin-right: px2rem(20);
            }
          }
          .icon-right{
            width: px2rem(12);
            height: px2rem(22);
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        .des{
          font-size: px2rem(26);
          margin-top: px2rem(28);
          span{
            margin-right: px2rem(32);
          }
        }
      }
    }
    .area-2{
      width: px2rem(730);
      height: px2rem(102);
      background: #fff;
      border-radius: px2rem(8);
      margin: px2rem(15) auto 0;
      padding: 0 px2rem(32);
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      .name{
        font-size: px2rem(32);
        font-weight: bold;
      }
    }
    .area-3{
      font-size: px2rem(22);
      color: #ff494a;
      height: px2rem(64);
      text-align: center;
      padding: 0 px2rem(10);
      display: flex;
      align-items: center;
      flex-direction: space-around;
    }
    .area-4{
      width: px2rem(730);
      background: #fff;
      border-radius: px2rem(8);
      margin: 0 auto;
      padding: 0 px2rem(32);
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
          width: px2rem(184);
          height: px2rem(184);
          border-radius: px2rem(6);
          overflow: hidden;
          display: flex;
          justify-content: space-around;
          align-items: center;
          img{
            max-width: 100%;
            max-height: 100%;
          }
        }
        .right-box{
          width: px2rem(450);
          .title{
            font-size: px2rem(28);
            width: px2rem(390);
            line-height: px2rem(38);
            margin-top: px2rem(16);
            font-weight: bold;
            color: #393939;
          }
          .des{
            line-height: px2rem(40);
            font-size: px2rem(22);
            color: #7c7c7c;
          }
          .tag-box{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            .tag{
              height: px2rem(30);
              line-height: px2rem(30);
              padding: 0 px2rem(10);
              border: px2rem(1) solid #ff981e;
              border-radius: px2rem(10);
              color: #ff981e;
              font-size: px2rem(20);
            }
          }
          .price-box{
            margin-top: px2rem(30);
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            .price{
              color: #ff6c00;
              font-size: px2rem(24);
              font-weight: bold;
              span{
                font-size: px2rem(34);
                vertical-align: bottom;
              }
            }
            .info{
              color: #bababa;
              font-size: px2rem(18);
            }
          }
        }
      }
      .area-4-1{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: px2rem(100);
        border-bottom: px2rem(1) solid #f0f0f0;
        .name{
          font-size: px2rem(28);
        }
        .step-view{
          .van-stepper{
            display: flex;
          }
        }
      }
      .area-4-2{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: px2rem(100);
        border-bottom: px2rem(1) solid #f0f0f0;
        font-size: px2rem(28);
      }
    }
    .area-5{
      width: px2rem(730);
      background: #fff;
      border-radius: px2rem(8);
      margin: px2rem(15) auto;
      padding: 0 px2rem(32);
      .wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        height: px2rem(100);
        border-bottom: px2rem(1) solid #f0f0f0;
        .name-box{
          height: px2rem(100);
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .icon-box{
            width: px2rem(35);
            height: px2rem(35);
            margin-right: px2rem(22);
            img{
              width: 100%;
              height: 100%;
            }
          }
          .name{
            font-size: px2rem(28);
          }
        }
        .right-box{
          display: flex;
          align-items: center;
          .van-checkbox__icon, .van-checkbox__label{
            display: block;
          }
          .van-icon, .van-icon::before {
            display: block;
          }
        }
      }
    }
    .area-bottom{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: px2rem(100);
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      .right-box{
        background-image: linear-gradient(-90deg, #ff3657 0%, #ff7836 100%), linear-gradient(#ff3f31, #ff3f31);
        width: px2rem(257);
        height: px2rem(100);
        line-height: px2rem(100);
        text-align: center;
        font-size: px2rem(30);
        color: #fff;
      }
      .left-box{
        width: px2rem(493);
        background: #fff;
        height: px2rem(100);
        padding: 0 px2rem(32);
        font-size: px2rem(28);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        .price-box{
          .price{
            color: #ff5001;
          }
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
        <div class="item item-left" :class="{'on':tabStatus==0}" @click="changeTab(0)">
          <div class="wrap">上门取货</div>
        </div>
        <div class="item item-right" :class="{'on':tabStatus==1}" @click="changeTab(1)">
          <div class="wrap">快递配送</div>
        </div>
      </div>
      <div class="info">
        <div class="title-box ellipsis-2">
          <div class="name-box">
            <span>商家</span>湖南省长沙市岳麓区望城坡街道望岳南路咸嘉湖西路
          </div>
          <div class="icon-right"><img src="../images/icon21.png" alt=""></div>
        </div>
        <div class="des">
          <span>XXXXXXXX集团公司</span>
          <span>18600002222</span>
        </div>
      </div>
    </div>
    <div class="area-2">
      <div class="name">是否赠送好友商品</div>
      <div class="switch">
        <van-switch
          v-model="checked"
          active-color="#07c160"
          inactive-color="#f44"
        />
      </div>
    </div>
    <div class="area-3">
      *开关开启状态商品生成二维码赠送好友，关闭状态，商品属于自己
    </div>
    <div class="area-4">
      <div class="wrapper">
        <div class="img-box"><img src="../images/icon3.png" alt=""></div>
        <div class="right-box">
          <div class="title ellipsis-2">【立体小脸妆出来】RIRE双头阴影高光修容棒3g+3g立体小脸妆出来】RIRE双头阴影高光修容棒3g+3g</div>
          <div class="des">已售2008件/库存10000件</div>
          <div class="price-box">
            <div class="price">￥<span>599.00</span></div>
          </div>
        </div>
      </div>
      <div class="area-4-1">
        <div class="name">购买数量</div>
        <div class="step-view">
          <van-stepper v-model="value" min="1" max="99" />
        </div>
      </div>
      <div class="area-4-2">
        <div>配送方式</div>
        <div>快递 免邮</div>
      </div>
    </div>
    <!-- 选择支付方式 -->
    <div class="area-5">
      <van-checkbox-group v-model="checkboxResult" :max="1">
        <div class="wrapper">
          <div class="name-box">
            <div class="icon-box"><img src="../images/icon42.png" alt=""></div>
            <div class="name">购物卡1000元，可抵用200元</div>
          </div>
          <div class="right-box">
            <van-checkbox :key="0" :name="0" checked-color="#07c160"></van-checkbox>
          </div>
        </div>
        <div class="wrapper">
          <div class="name-box">
            <div class="icon-box"><img src="../images/icon43.png" alt=""></div>
            <div class="name">购物券1000元，可抵用200元</div>
          </div>
          <div class="right-box">
            <van-checkbox :key="1" :name="1" checked-color="#07c160"></van-checkbox>
          </div>
        </div>
      </van-checkbox-group>

    </div>
    <div class="area-bottom">
      <div class="left-box">
        <div class="total">共1件</div>
        <div class="price-box">
          合计：
          <span class="price">￥0.00</span>
        </div>
      </div>
      <div class="right-box">提交订单</div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'category',
  components: {
  },
  data () {
    return {
      tabStatus: 0,
      checked: true,
      value: 1,
      checkboxResult: [1]
    }
  },
  methods: {
    test () {
      Toast.loading({
        mask: true,
        message: '加载中...'
      })
    },
    changeTab (status) {
      this.tabStatus = status
    }
  },
  mounted () {
    // this.test()
  },
  watch: {
  }
}
</script>
