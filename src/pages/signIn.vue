<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .signIn-container{
    background-image: url("../images/img12.png");
    background-position: top;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-color: #D1302D;
    padding-bottom: px2rem(20);
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
        // display: flex;
        // flex-direction: row;
        // flex-wrap: wrap;
        // align-items: center;
        // justify-content: space-around;
        padding: 0 px2rem(10);
        .van-list{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
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
    .wh_content_item>.wh_isMark {
      background: #d1302d;
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
        :markDate="markDateArr"
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
        <van-list
          v-model="loadingList"
          :finished="finished"
          :immediate-check="false"
          @load="getOneMorePage"
        >
          <div class="wrapper" v-for="item in goodsList" :key="item.id">
            <div class="img-box"><img :src="filePath + item.pics.split(';')[0]" alt=""></div>
            <div class="name ellipsis-1">{{item.title}}{{item.subTitle}}</div>
            <!-- <div class="des ellipsis-1">已售1389/剩2000</div> -->
            <div class="price">￥<span>{{item.nowPrice}}</span></div>
          </div>
        </van-list>
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
      markDateArr: [], // bug显示当天的显示不出来
      signInData: {},
      goodsList: [],
      total: '',
      totalPage: '',
      sendData: {
        pageNumber: 1,
        pageSize: 5
      },
      loadingList: false,
      finished: false,
      sendYearMonth: '',
      signRecord: {},
      filePath: ''
    }
  },
  methods: {
    getOneMorePage () {
      setTimeout(() => {
        if (Number(this.sendData.pageNumber) < Number(this.totalPage)) {
          this.sendData.pageNumber++
          this.getGoodsList()
        }
      }, 500)
    },
    getGoodsList () {
      this.$post('/api/goodsScore/getGoodsScoreList', this.sendData).then(res => {
        if (res.result === 0) {
          if (this.sendData.pageNumber === 1) {
            this.goodsList = res.data.list
          } else {
            this.goodsList = this.goodsList.concat(res.data.list)
          }
          this.filePath = res.filePath
          this.total = res.data.totalCount
          this.totalPage = res.data.totalPage
          // 加载状态结束
          this.loadingList = false
          // 数据全部加载完成
          if (this.goodsList.length >= Number(this.total)) {
            this.finished = true
          }
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    changeDate (data) {
      console.log(data) // 左右点击切换月份
      this.markDateArr = []
      this.sendYearMonth = data.split('/')[0] + '-' + (data.split('/')[1].length == 1 ? '0' + data.split('/')[1] : data.split('/')[1])
      this.getSignInRecord()
    },
    clickToday (data) {
      console.log(data) // 跳到了本月
    },
    goBack () {
      this.$router.back(-1)
    },
    getSignInData () {
      this.$post('/api/goodsScore/getUserSignTotal', {
      }).then(res => {
        if (res.result === 0) {
          this.signInData = res.data
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    // 构造日历用时间数组
    getMarkDateArr () {
      this.markDateArr = []
      // console.log('11111111111111')
      this.signRecord.forEach(v => {
        // console.log('vvvv', v)
        let arr = v.signInTime.split('-')
        let arr1 = []
        // console.log('vvvv', arr)
        // console.log(arr[1].slice(1))
        arr.forEach (m => {
          if (m[0] === '0') {
            arr1.push(m.slice(1))
          } else {
            arr1.push(m)
          }
        })
        // console.log('1111111111111111111', arr1)
        this.markDateArr.push(arr1.join('/'))
      })
    },
    // 根据年月获取用户签到记录
    getSignInRecord () {
      this.$post('/api/goodsScore/getUserSignListByDate', {
        date: this.sendYearMonth
      }).then(res => {
        if (res.result === 0) {
          this.signRecord = res.data
          this.getMarkDateArr()
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    getNowTime () {
      let now = new Date()
      var month = now.getMonth() + 1
      var strDate = now.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      return now.getFullYear() + '-' + month
    },
    goDetail () {
      this.$router.push({
        name: 'detail_bargin'
      })
    },
    openPop () {
      this.showPop = true
    }
  },
  mounted () {
    this.getSignInData()
    this.getGoodsList()
    this.getSignInRecord()
  },
  created () {
    this.sendYearMonth = this.getNowTime()
  },
  watch: {
  }
}
</script>
