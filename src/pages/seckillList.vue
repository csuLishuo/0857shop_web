<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .seckillList-container{
    .topBar{
      background-image: linear-gradient(-90deg, #ff2736 0%, #ff2b71 100%), linear-gradient(#ff3e31, #ff3e31);
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
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-image: linear-gradient(-90deg, #ff2736 0%, #ff2b71 100%), linear-gradient(#ff3e31, #ff3e31);
      background-blend-mode: normal, normal;
      padding: px2rem(20) 0;
      .wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        .time{
          font-size: px2rem(36);
          font-weight: bold;
          color: #fff;
          opacity: 0.6;
        }
        .des{
          font-size: px2rem(22);
          color: #fffefe;
          opacity: 0.6;
        }
        &.on{
          .time{
            font-size: px2rem(46);
            opacity: 1;
          }
          .des{
            height: px2rem(32);
            line-height: px2rem(32);
            width: px2rem(139);
            border-radius: px2rem(16);
            background: rgba(255, 255, 255, 0.9);
            text-align: center;
            color: #fd1529;
            opacity: 1;
          }
        }
      }
    }
    .area-2{
      height: px2rem(66);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 px2rem(24);
      background: #fff;
      border-bottom: px2rem(1) solid #e0e0e0;
      .left-text{
        font-size: px2rem(26);
        color: #393939;
      }
      .right-box{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .text, .time-text{
          font-size: px2rem(26);
          color: #707070;
        }
        .text{
          margin-right: px2rem(20);
        }
        .time-text{
          margin: 0 px2rem(5);
        }
        .time-box{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .time{
            padding: px2rem(2);
            line-height: px2rem(32);
            font-size: px2rem(28);
            color: #fff;
            background: #464553;
            border-radius: px2rem(5);
          }
        }
      }
    }
    .goodsList{
      background: #fff;
      padding-left: px2rem(24);
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
          width: px2rem(225);
          height: px2rem(225);
          border-radius: px2rem(6);
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .right-box{
          width: px2rem(450);
          position: relative;
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
            span{
              color: #ff273d;
            }
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
              border: px2rem(1) solid #ff3e31;
              border-radius: px2rem(10);
              color: #ff3e31;
              font-size: px2rem(20);
            }
          }
          .bar{
            width: px2rem(200);
            height: px2rem(28);
            border-radius: px2rem(14);
            background-color: #ffcbcb;
            position: relative;
            span{
              position: absolute;
              height: px2rem(28);
              border-radius: px2rem(14);
              width: 50%;
              left: 0;
              top: 0;
              background-image: linear-gradient(-90deg, #ff2736 0%, #ff2b71 100%), linear-gradient(#ffcbcb, #ffcbcb);
              background-blend-mode: normal, normal;
            }
          }
          .price-box{
            margin-top: px2rem(30);
            .price{
              color: #ff3e31;
              font-size: px2rem(24);
              font-weight: bold;
              span{
                font-size: px2rem(34);
                vertical-align: bottom;
              }
            }
            .price-origin{
              color: #bababa;
              font-size: px2rem(18);
              text-decoration: line-through;
            }
          }
          .btn{
            width: px2rem(153);
            height: px2rem(58);
            line-height: px2rem(58);
            background: #ff3f31;
            background-blend-mode: normal, normal;
            border-radius: px2rem(29);
            text-align: center;
            font-size: px2rem(28);
            color: #fff;
            position: absolute;
            bottom: 0;
            right: 0;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="seckillList-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon38.png" alt=""></div>
      <div class="title">秒杀</div>
      <!--搜索-->
      <!--<div class="right-box"><img src="../images/icon45.png" alt=""></div>-->
    </div>
    <div class="area-1">
      <div class="wrapper" :class="{'on' : item.statusText == '抢购进行中'}" v-for="item in timeList" :key="item.id">
        <div class="time">{{item.title}}</div>
        <div class="des">{{item.statusText}}</div>
      </div>
    </div>
    <div class="area-2">
      <div class="left-text">抢购中 先下单先得哦</div>
      <div class="right-box">
        <div class="text">距结束</div>
        <div class="time-box">
          <div class="time">{{countDown.hour}}</div>
          <div class="time-text">:</div>
          <div class="time">{{countDown.minute}}</div>
          <div class="time-text">:</div>
          <div class="time">{{countDown.second}}</div>
        </div>
      </div>
    </div>
    <div class="goodsList">
      <van-list
        v-model="loadingList"
        :finished="finished"
        :immediate-check="false"
        finished-text="没有更多了"
        @load="getOneMorePage"
      >
        <div class="wrapper" v-for="item in goodsList" :key="item.id">
          <div class="img-box"><img src="../images/icon3.png" alt=""></div>
          <div class="right-box">
            <div class="title ellipsis-2">{{item.title}}{{item.subTitle}}</div>
            <div class="des">已购{{item.totalSales}}<span>/剩余{{JSON.parse(item.attrs)[0].stock}}件</span></div>
            <div class="bar"><span></span></div>
            <div class="price-box">
              <div class="price-origin">￥{{item.marketPrice}}</div>
              <div class="price">￥<span>{{item.nowPrice}}</span></div>
            </div>
            <div class="btn" @click="goDetail(item.id)">马上抢购</div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'seckillList',
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
      filePath: '',
      goodsList: [],
      total: '',
      totalPage: '',
      sendData: {
        flashSaleId: '',
        pageNumber: 1,
        pageSize: 5
      },
      loadingList: false,
      finished: false,
      timeList: [],
      interval: null,
      countDown: {
        day: '00',
        hour: '00',
        minute: '00',
        second: '00'
      }
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    goDetail (id) {
      this.$router.push({
        path: '/detail_seckill',
        query: {
          detailId: id
        }
      })
    },
    getTimeList () {
      this.$post('/api/goodsFlashSale/getFlashSaleListByStatus').then(res => {
        if (res.result === 0) {
          this.timeList = res.data
          this.timeList.forEach((v, i) => {
            let startTime = new Date(v.startTime).getTime()
            let currentTime = new Date(v.currentTime).getTime()
            let endTime = new Date(v.endTime).getTime()
            // let endTime = new Date('2019-07-11 22:00:00').getTime()
            let statusText
            if (currentTime < startTime) {
              statusText = '未开始'
            } else if (currentTime > endTime) {
              statusText = '已结束'
            } else {
              statusText = '抢购进行中'
            }
            v.statusText = statusText
            if (statusText === '抢购进行中') {
              this.sendData.flashSaleId = v.id
              this.getGoodsList()
              this.getCountDown(currentTime, endTime)
            }
            console.log('22222222', new Date(endTime - currentTime))
          })
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    getCountDown (currentTime, endTime) {
      var self = this
      var total = (endTime - currentTime) / 1000
      this.interval = setInterval(function () {
        total--
        var day = parseInt(total / (24 * 60 * 60)) // 计算整数天数
        var afterDay = total - day * 24 * 60 * 60 // 取得算出天数后剩余的秒数
        var hour = parseInt(afterDay / (60 * 60)) // 计算整数小时数
        var afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60 // 取得算出小时数后剩余的秒数
        var min = parseInt(afterHour / 60) // 计算整数分
        var afterMin = total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60 // 取得算出分后剩余的秒数
        self.countDown.day = day
        self.countDown.hour = hour < 10 ? '0' + hour : hour
        self.countDown.minute = min < 10 ? '0' + min : min
        self.countDown.second = afterMin < 10 ? '0' + afterMin : afterMin
        if (total < 0 || total === 0) {
          self.clearInterval()
          self.countDown = {
            day: '00',
            hour: '00',
            minute: '00',
            second: '00'
          }
        }
      }, 1000)
    },
    getOneMorePage () {
      setTimeout(() => {
        if (Number(this.sendData.pageNumber) < Number(this.totalPage)) {
          this.sendData.pageNumber++
          this.getGoodsList()
        }
      }, 500)
    },
    getGoodsList () {
      this.$post('/api/goodsFlashSale/getGoodsFlashSaleListByFlashSaleId', this.sendData).then(res => {
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
    clearInterval () {
      if (this.interval !== null) { // 判断计时器是否为空
        clearInterval(this.interval)
        this.interval = null
      }
    },
    test () {
      Toast.loading({
        mask: true,
        message: '加载中...'
      })
    },
    init () {
      let self = this
      let promise1 = new Promise(function (resolve, reject) {
        self.getTimeList()
        resolve(true)
      })
      let promise2 = new Promise(function (resolve, reject) {
        self.getGoodsList()
        resolve(true)
      })
      Promise.all([
        promise1, promise2
      ]).then(res => {
      })
    }
  },
  mounted () {
    // this.test()
    this.getTimeList()
    // this.getGoodsList()
    // this.init()
  },
  distroyed () {
    this.clearInterval()
  },
  watch: {
  }
}
</script>
