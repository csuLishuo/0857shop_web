<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .signIn-container{
    .topBar{
      background: #edaf12;
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
    .calendar-box{
      width: px2rem(690);
      margin: px2rem(496) auto 0;
      border-radius: px2rem(20);
      position: relative;
      .area-1{
        width: px2rem(198);
        height: px2rem(198);
        background: rgba(255,255,255,0.2);
        border-radius: 50%;
        position: absolute;
        right: 0;
        top: px2rem(-130);
        .wrapper{
          width: px2rem(162);
          height: px2rem(162);
          background-image: linear-gradient(142deg, #ffb80d 0%, #ffd907 50%, #ffb80d 100%);
          margin: px2rem(18) auto 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #480b0b;
          font-weight: bold;
          border-radius: 50%;
          .score{
            font-size: px2rem(40);
          }
          .text{
            font-size: px2rem(26);
          }
        }
      }
      .wh_content_all{
        background: #fff;
      }
      .wh_jiantou1{
        border-top: 2px solid #000;
        border-left: 2px solid #000;
      }
      .wh_jiantou2{
        border-top: 2px solid #000;
        border-right: 2px solid #000;
      }
      .wh_content_li{
        color: #333;
      }
      .wh_content_item{
        color: #333;
      }
      .wh_content_item .wh_isToday{
        background: #fff;
      }
    }
    .area-2{
      width: px2rem(690);
      margin: px2rem(33) auto 0;
      border-radius: px2rem(20);
      overflow: hidden;
      background: #fff;
      .area-2-title{
        background: #fff;
        height: px2rem(112);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        .border{
          width: px2rem(103);
          border-bottom: 1px solid #eee;
        }
        .name{
          font-size: px2rem(28);
          font-weight: bold;
          margin: 0 px2rem(30);
        }
      }
      .title-info{
        font-size: px2rem(22);
        color: #999;
        text-align: center;
      }
      .recommend-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        .wrapper{
          width: px2rem(324);
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
  <div class="signIn-container clearfix">
    <!--<div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon39.png" alt=""></div>
      <div class="title">签到</div>
    </div>-->
    <!--<div class="imgDel-box"><img src="../images/imgDel2.png" alt=""></div>-->
    <div class=""></div>
    <div class="calendar-box">
      <div class="area-1">
        <div class="wrapper">
          <div class="score">5000</div>
          <div class="text">积分</div>
        </div>
      </div>
      <Calendar
        v-on:changeMonth="changeDate"
        :markDate=markDateArr
      ></Calendar>
    </div>
    <div class="area-2">
      <div class="area-2-title">
        <div class="border"></div>
        <div class="name">积分兑换</div>
        <div class="border"></div>
      </div>
      <div class="title-info">
        当前积分5000积分，可以兑换以下产品
      </div>
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
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import Calendar from 'vue-calendar-component'

export default {
  name: 'signIn',
  components: {
    Calendar
  },
  data () {
    return {
      markDateArr: [
        '2019/7/8',
        '2019/7/10'
      ]
    }
  },
  methods: {
    changeDate (data) {
      console.log(data) // 左右点击切换月份
    },
    clickToday (data) {
      console.log(data) // 跳到了本月
    },
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
