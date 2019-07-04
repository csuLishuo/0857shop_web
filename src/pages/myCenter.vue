<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .myCenter-container{
    padding-bottom: px2rem(120);
    .area-1{
      background-image: url("../images/img2.png");
      background-repeat: no-repeat;
      background-size: 100% auto;
      position: relative;
      .setting-box{
        position: absolute;
        top: px2rem(30);
        right: px2rem(26);
        width: px2rem(37);
        height: px2rem(37);
        img{
          width: 100%;
          height: 100%;
        }
      }
      .wrapper{
        width: px2rem(698);
        margin: px2rem(100) auto 0;
        background: #fff;
        border-radius: px2rem(18);
        padding-top: px2rem(30);
        padding-bottom: px2rem(20);
        .top-box{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          padding-left: px2rem(30);
          .left-box{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            .portrait-box{
              width: px2rem(122);
              height: px2rem(122);
              border-radius: 50%;
              overflow: hidden;
              margin-right: px2rem(18);
              img{
                width: 100%;
                height: 100%;
              }
            }
            .text-box{
              .name{
                font-size: px2rem(28);
                color: #000;
              }
              .des{
                font-size: px2rem(23);
                margin-top: px2rem(25);
                color: #e83c16;
              }
            }
          }
          .right-box{
            display: flex;
            align-items: center;
            background-image: linear-gradient(83deg,
              #ff4027 0%,
              #802014 0%,
              #000000 0%,
              #802014 0%,
              #ff4027 0%,
              #ff296f 100%),
            linear-gradient(
                #ffe324,
                #ffe324);
            width: px2rem(136);
            height: px2rem(62);
            border-radius: px2rem(31) 0px 0px px2rem(31);
            padding-left: px2rem(29);
            .img-box{
              width: px2rem(36);
              height: px2rem(36);
              margin-right: px2rem(9);
              img{
                width: 100%;
                height: 100%;
              }
            }
            .name{
              font-size: px2rem(26);
              color: #fffefe;
            }
          }
        }
        .area-1-1{
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-around;
          margin-top: px2rem(70);
          .wrap{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            .img-box{
              /*background: rgba(255,0,0,0.1);*/
              width: px2rem(56);
              height: px2rem(56);
              img{
                width: 100%;
                height: 100%;
              }
            }
            .name{
              font-size: px2rem(23);
              color: #4c4c4c;
              margin-top: px2rem(20);
            }
          }
        }
      }
    }
    .area-2{
      width: px2rem(698);
      margin: px2rem(20) auto 0;
      background: #fff;
      border-radius: px2rem(18);
      padding-bottom: px2rem(24);
      .title-box{
        height: px2rem(100);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 0 px2rem(30);
        border-bottom: 1px solid #f5f5f5;
        .name{
          font-size: px2rem(26);
          color: #363636;
          font-weight: bold;
        }
        .icon-box{
          width: px2rem(12);
          height: px2rem(21);
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
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
            /*background: rgba(255,0,0,0.1);*/
            width: px2rem(56);
            height: px2rem(56);
            position: relative;
            span{
              position: absolute;
              top: px2rem(-10);
              right: px2rem(-10);
              height: px2rem(30);
              line-height: px2rem(30);
              border-radius: px2rem(15);
              min-width: px2rem(30);
              padding: 0 px2rem(2);
              color: #fff;
              text-align: center;
              background: #ff0000;
              font-size: px2rem(24)
            }
            img{
              width: 100%;
              height: 100%;
            }
          }
          .name{
            font-size: px2rem(23);
            color: #4c4c4c;
            margin-top: px2rem(38);
          }
        }
      }
    }
    .area-3{
      width: px2rem(698);
      margin: px2rem(20) auto 0;
      background: #fff;
      border-radius: px2rem(18);
      // padding-bottom: px2rem(24);
      .area-3-1{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        .wrap{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 25%;
          margin: px2rem(25) 0;
          .img-box{
            /*background: rgba(255,0,0,0.1);*/
            width: px2rem(56);
            height: px2rem(56);
            img{
              width: 100%;
              height: 100%;
            }
          }
          .name{
            font-size: px2rem(23);
            color: #4c4c4c;
            margin-top: px2rem(22);
          }
        }
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
  }
</style>
<template>
  <div class="myCenter-container">
    <div class="area-1 clearfix">
      <div class="setting-box" @click="go(12)"><img src="../images/icon26.png" alt=""></div>
      <div class="wrapper">
        <div class="top-box">
          <div class="left-box">
            <div class="portrait-box"><img src="../images/icon13.png" alt=""></div>
            <div class="text-box">
              <div class="name">斯嘉丽·约翰逊</div>
              <div class="des">代理用户</div>
            </div>
          </div>
          <div class="right-box">
            <div class="img-box"><img src="../images/icon17.png" alt=""></div>
            <div class="name">签到</div>
          </div>
        </div>
        <div class="area-1-1">
          <div class="wrap" @click="go(1)">
            <div class="img-box"><img src="../images/icon18.png" alt=""></div>
            <div class="name">我的收藏</div>
          </div>
          <div class="wrap" @click="go(2)">
            <div class="img-box"><img src="../images/icon19.png" alt=""></div>
            <div class="name">收货地址</div>
          </div>
          <div class="wrap" @click="go(3)">
            <div class="img-box"><img src="../images/icon20.png" alt=""></div>
            <div class="name">我的奖品</div>
          </div>
        </div>
      </div>
    </div>
    <div class="area-2 clearfix" @click="go(4)">
      <div class="title-box">
        <div class="name">我的订单</div>
        <div class="icon-box"><img src="../images/icon21.png" alt=""></div>
      </div>
      <div class="area-2-1">
        <div class="wrap">
          <div class="img-box">
            <img src="../images/icon22.png" alt="">
            <span>99</span>
          </div>
          <div class="name">待付款</div>
        </div>
        <div class="wrap">
          <div class="img-box">
            <img src="../images/icon23.png" alt="">
            <span>1</span>
          </div>
          <div class="name">待发货</div>
        </div>
        <div class="wrap">
          <div class="img-box">
            <img src="../images/icon24.png" alt="">
            <span>1</span>
          </div>
          <div class="name">待收货</div>
        </div>
        <div class="wrap">
          <div class="img-box"><img src="../images/icon25.png" alt=""></div>
          <div class="name">已完成</div>
        </div>
      </div>
    </div>
    <div class="area-3 clearfix">
      <div class="area-3-1">
        <div class="wrap" @click="go(5)">
          <div class="img-box"><img src="../images/icon27.png" alt=""></div>
          <div class="name">我的砍价</div>
        </div>
        <div class="wrap" @click="go(6)">
          <div class="img-box"><img src="../images/icon28.png" alt=""></div>
          <div class="name">我的拼团</div>
        </div>
        <div class="wrap" @click="go(7)">
          <div class="img-box"><img src="../images/icon29.png" alt=""></div>
          <div class="name">代理权限</div>
        </div>
        <div class="wrap" @click="go(8)">
          <div class="img-box"><img src="../images/icon30.png" alt=""></div>
          <div class="name">我的收益</div>
        </div>
        <div class="wrap" @click="go(9)">
          <div class="img-box"><img src="../images/icon31.png" alt=""></div>
          <div class="name">我的评价</div>
        </div>
        <div class="wrap">
          <div class="img-box"><img src="../images/icon32.png" alt=""></div>
          <div class="name">客服</div>
        </div>
        <div class="wrap" @click="go(11)">
          <div class="img-box"><img src="../images/icon33.png" alt=""></div>
          <div class="name">申请成为代理</div>
        </div>
      </div>
    </div>
    <div class="area-4 clearfix">
      <div class="title">热卖推荐</div>
      <div class="recommend-list">
        <div class="wrapper">
          <div class="img-box"><img src="../images/img2.png" alt=""></div>
          <div class="name ellipsis-1">PZAAO 中空缎面款色休..PZAAO 中空缎面款色休..</div>
          <div class="des ellipsis-1">已售1389/剩2000</div>
          <div class="price">￥<span>599.00</span></div>
        </div>
      </div>
    </div>
    <tabbar :activeIndex="3"></tabbar>
  </div>
</template>
<script>
import { Toast } from 'vant'
import tabbar from '../components/tabbar'

export default {
  name: 'myCenter',
  components: {
    tabbar
  },
  data () {
    return {
    }
  },
  methods: {
    go (status) {
      if (status === 1) {
        this.$router.push({
          path: '/myCollection'
        })
      } else if (status === 2) {
        this.$router.push({
          path: '/myAddress'
        })
      } else if (status === 3) {
        this.$router.push({
          path: '/myReward'
        })
      } else if (status === 4) {
        this.$router.push({
          path: '/myOrder'
        })
      } else if (status === 5) {
        this.$router.push({
          path: '/myBargin'
        })
      } else if (status === 6) {
        this.$router.push({
          path: '/myGroupBuy'
        })
      } else if (status === 7) {
        this.$router.push({
          path: '/agency'
        })
      } else if (status === 8) {
        this.$router.push({
          path: '/myIncome'
        })
      } else if (status === 9) {
        this.$router.push({
          path: '/myComment'
        })
      } else if (status === 11) {
        this.$router.push({
          path: '/applyAgency'
        })
      } else if (status === 12) {
        this.$router.push({
          path: '/settingUp'
        })
      }
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
