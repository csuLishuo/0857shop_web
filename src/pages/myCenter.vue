<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .myCenter-container{
    .area-1{
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
              background: rgba(255,0,0,0.1);
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
            background: rgba(255,0,0,0.1);
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
            margin-top: px2rem(38);
          }
        }
      }
    }
  }
</style>
<template>
  <div class="myCenter-container">
    <div class="area-1 clearfix">
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
          <div class="wrap">
            <div class="img-box"><img src="../images/icon18.png" alt=""></div>
            <div class="name">我的收藏</div>
          </div>
          <div class="wrap">
            <div class="img-box"><img src="../images/icon19.png" alt=""></div>
            <div class="name">收货地址</div>
          </div>
          <div class="wrap">
            <div class="img-box"><img src="../images/icon20.png" alt=""></div>
            <div class="name">我的奖品</div>
          </div>
        </div>
      </div>
    </div>
    <div class="area-2 clearfix">
      <div class="title-box">
        <div class="name">我的订单</div>
        <div class="icon-box"><img src="../images/icon21.png" alt=""></div>
      </div>
      <div class="area-2-1">
        <div class="wrap">
          <div class="img-box"><img src="../images/icon22.png" alt=""></div>
          <div class="name">待付款</div>
        </div>
        <div class="wrap">
          <div class="img-box"><img src="../images/icon23.png" alt=""></div>
          <div class="name">待发货</div>
        </div>
        <div class="wrap">
          <div class="img-box"><img src="../images/icon24.png" alt=""></div>
          <div class="name">待收货</div>
        </div>
        <div class="wrap">
          <div class="img-box"><img src="../images/icon25.png" alt=""></div>
          <div class="name">已完成</div>
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
