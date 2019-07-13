<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .lottery-container{
    min-height: 100%;
    background: #FF464C;
    .topBar{
      background: #FF464C;
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
    .area-2{
      width: px2rem(692);
      height: px2rem(584);
      margin: 0 auto;
      padding: px2rem(36);
      background-color: #FFD905;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      flex-wrap: nowrap;
      .line-1{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: nowrap;
        .wrapper{
          width: 32%;
          height: px2rem(164);
          background: #ffeeee;
          border-radius: px2rem(26);
          .img-box{
            width: px2rem(120);
            height: px2rem(100);
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: px2rem(14) auto 0;
            img{
              max-width: 100%;
              max-height: 100%;
            }
          }
          .text{
            color: #7f3e3e;
            text-align: center;
            font-size: px2rem(24);
            padding: 0 px2rem(24);
          }
          &.on{
            background: #ff4f40;
          }
        }
      }
    }
    .area-4{
      width: px2rem(668);
      background: #fff;
      border-radius: px2rem(20);
      margin: px2rem(4) auto;
      padding: px2rem(20) px2rem(40) px2rem(80);
      max-height: px2rem(700);
      overflow-y: scroll;
      .title{
        font-size: px2rem(36);
        color: #f24d49;
        text-align: center;
      }
      .line{
        padding: px2rem(40) 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: px2rem(3) dashed #ffbab8;
        &.noborder{
          border-bottom: none;
        }
        .left-box{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .name{
            width: px2rem(98);
            height: px2rem(98);
            margin-right: px2rem(20);
            display: flex;
            align-items: center;
            justify-content: space-around;
            img{
              max-width: 100%;
              max-height: 100%;
            }
          }
          .des{
            font-size: px2rem(28);
            font-weight: bold;
          }
        }
        .right-box{
          width: px2rem(146);
          height: px2rem(64);
          line-height: px2rem(64);
          background: #fc431f;
          text-align: center;
          border-radius: px2rem(32);
          font-size: px2rem(30);
          color: #fff;
        }
      }
    }
  }
</style>
<template>
  <div class="lottery-container">
    <!-- <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon38.png" alt=""></div>
    </div> -->
    <!-- <div class="imgDel-box"><img src="../images/imgDel5.png" alt=""></div> -->
    <div class="area-1">
      <!-- <img src="../images/img1.png" alt=""> -->
    </div>
    <div class="area-2">
      <div class="line-1">
        <div class="wrapper" :class="index === 0 ? 'on': ''">
          <div class="img-box">
            <img :src="filePath + goodsList[0].pic" alt="">
          </div>
          <div class="text ellipsis-1">{{goodsList[0].title}}</div>
        </div>
        <div class="wrapper" :class="index === 1 ? 'on': ''">
          <div class="img-box">
            <img :src="filePath + goodsList[1].pic" alt="">
          </div>
          <div class="text ellipsis-1">{{goodsList[1].title}}</div>
        </div>
        <div class="wrapper" :class="index === 2 ? 'on': ''">
          <div class="img-box">
            <img :src="filePath + goodsList[2].pic" alt="">
          </div>
          <div class="text ellipsis-1">{{goodsList[2].title}}</div>
        </div>
      </div>
      <div class="line-1">
        <div class="wrapper" :class="index === 7 ? 'on': ''">
          <div class="img-box">
            <img :src="filePath + goodsList[7].pic" alt="">
          </div>
          <div class="text ellipsis-1">{{goodsList[7].title}}</div>
        </div>
        <div class="wrapper" @click="initLottery">开始</div>
        <div class="wrapper" :class="index === 3 ? 'on': ''">
          <div class="img-box">
            <img :src="filePath + goodsList[3].pic" alt="">
          </div>
          <div class="text ellipsis-1">{{goodsList[3].title}}</div>
        </div>
      </div>
      <div class="line-1">
        <div class="wrapper" :class="index === 6 ? 'on': ''">
          <div class="img-box">
            <img :src="filePath + goodsList[6].pic" alt="">
          </div>
          <div class="text ellipsis-1">{{goodsList[6].title}}</div>
        </div>
        <div class="wrapper" :class="index === 5 ? 'on': ''">
          <div class="img-box">
            <img :src="filePath + goodsList[5].pic" alt="">
          </div>
          <div class="text ellipsis-1">{{goodsList[5].title}}</div>
        </div>
        <div class="wrapper" :class="index === 4 ? 'on': ''">
          <div class="img-box">
            <img :src="filePath + goodsList[4].pic" alt="">
          </div>
          <div class="text ellipsis-1">{{goodsList[4].title}}</div>
        </div>
      </div>
    </div>
    <div class="area-3"></div>
    <div class="area-4">
      <div class="title">恭喜你获得</div>
      <div class="line" v-for="item in rewardsList" :key="item.id">
        <div class="left-box">
          <div class="name"><img :src="filePath + item.pic" alt=""></div>
          <div class="des">{{item.title}}</div>
        </div>
        <div class="right-box" @click="goSelectAddress(item.id)">
          去领取
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'lottery',
  components: {
  },
  data () {
    return {
      index: -1,    // 当前转动到哪个位置，起点位置
      count: 8,    // 总共有多少个位置
      timer: 0,    // 每次转动定时器
      speed: 200,   // 初始转动速度
      times: 0,    // 转动次数
      cycle: 50,   // 转动基本次数：即至少需要转动多少次再进入抽奖环节
      prize: -1,   // 中奖位置
      click: true,
      showToast: false,
      goodsList: [],
      filePath: '',
      rateArray: [], // 中间概率数组
      rewardsSendData: {
        pageNumber: 1,
        pageSize: 50,
        status: 1
      },
      rewardsList: [],
      totalScore: '', // 用户总积分
      lotteryScore: '' // 单次抽奖所需积分
    }
  },
  methods: {
    // 选择地址
    goSelectAddress (id) {
      sessionStorage.setItem('rewardId', id)
      this.$router.push({
        name: 'selectAddress'
      })
    },
    getLotteryResult (rateArray) {
      console.log('rateArray', rateArray)
      let random = Math.ceil(Math.random()*100)
      console.log(random)
      for (let i = 0; i < rateArray.length; i++) {
        if (random <= rateArray[i]) {
          console.log('index', i)
          return i
        } else {
          random -= rateArray[i]
        }
      }
    },
    // 开始抽奖
    initLottery () {
      if (this.totalScore >= this.lotteryScore) {
        this.$post('/api/goodsLotteryDraw/getUserScore', {
          score: this.lotteryScore
        }).then(res => {
          if (res.result === 0) {
            this.startLottery()
          } else {
            Toast.fail(res.message)
          }
        }).catch(res => {
          Toast.fail('系统内部错误')
        })
      } else {
        Toast.fail('积分不足')
      }
    },
    // 获取总积分
    getTotalScore () {
      this.$post('/api/goodsLotteryDraw/getUserScore').then(res => {
        if (res.result === 0) {
          this.totalScore = parseInt(res.data.score)
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        Toast.fail('系统内部错误')
      })
    },
    // 获取抽奖所需积分
    getLotteryScore () {
      this.$post('/api/systemSet/getSystemSetByStatus', {
        status: 2
      }).then(res => {
        if (res.result === 0) {
          this.lotteryScore = parseInt(res.data.value)
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        Toast.fail('系统内部错误')
      })
    },
    // 奖品记录
    getRewardsList () {
      this.$post('/api/goodsLotteryDraw/getGoodsLottetyUsersListByStatus', this.rewardsSendData).then(res => {
        if (res.result === 0) {
          this.rewardsList = res.data.list
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        Toast.fail('系统内部错误')
      })
    },
    getGoodsList () {
      this.$post('/api/goodsLotteryDraw/getGoodsLottetyList').then(res => {
        if (res.result === 0) {
          this.goodsList = res.data
          this.filePath = res.filePath
          this.goodsList.forEach(v => {
            this.rateArray.push(parseFloat(v.rate) * 100)
          })
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        Toast.fail('系统内部错误')
      })
    },
    // 开始转动
    startRoll () {
      this.times += 1  // 转动次数
      this.oneRoll()  // 转动过程调用的每一次转动方法，这里是第一次调用初始化

      // 如果当前转动次数达到要求 && 目前转到的位置是中奖位置
      if (this.times > this.cycle + 10 && this.prize === this.index) {
        clearTimeout(this.timer)   // 清除转动定时器，停止转动
        this.prize = -1
        this.times = 0
        this.click = true
        console.log('你已经中奖了')
      } else {
        if (this.times < this.cycle) {
          this.speed -= 10   // 加快转动速度
        } else if (this.times === this.cycle) {    // 随机获得一个中奖位置
          // const index = parseInt(Math.random() * 10, 0) || 0
          const index = this.getLotteryResult(this.rateArray)
          this.prize = index
          // if (this.prize > 7) {
          //   this.prize = 7
          // }
          this.postRewardId(index)
          console.log(`中奖位置${this.prize}`)
        } else if (this.times > this.cycle + 10 &&
          ((this.prize === 0 && this.index === 7) || this.prize === this.index + 1)) {
          this.speed += 110
        } else {
          this.speed += 20
        }

        if (this.speed < 40) {
          this.speed = 40
        }
        this.timer = setTimeout(this.startRoll, this.speed)
      }
    },
    // 每一次转动
    oneRoll () {
      let index = this.index  // 当前转动到哪个位置
      const count = this.count  // 总共有多少个位置
      index += 1
      if (index > count - 1) {
        index = 0
      }
      this.index = index
    },
    startLottery () {
      if (!this.click) {
        return
      }
      this.speed = 200
      this.click = false
      this.startRoll()
    },
    //用户中奖
    postRewardId (index) {
      if (this.goodsList[index].type !== 1) {
        this.$post('/api/goodsLotteryDraw/insertGoodsLotteryDrawUsers', {
          id: this.goodsList[index].id
        }).then(res => {
          if (res.result === 0) {
            Toast.success('恭喜你获得' + this.goodsList[index].title)
            this.getRewardsList()
          } else {
            Toast.fail(res.message)
          }
        }).catch(res => {
          Toast.fail('系统内部错误')
        })
      } else {
        Toast('再接再厉')
      }
    },
    goBack () {
      this.$router.back(-1)
    },
    openPop () {
      this.showPop = true
    },
    // 领取奖品
    fetchReward () {
      this.$post('/api/goodsLotteryDraw/updateGoodsLotteryUsers', {
        userAddressId: sessionStorage.getItem('addressId'),
        id: sessionStorage.getItem('rewardId')
      }).then(res => {
        if (res.result === 0) {
          Toast.success('领取成功')
          sessionStorage.removeItem('addressId')
          sessionStorage.removeItem('rewardId')
          this.getGoodsList()
          this.getRewardsList()
          this.getTotalScore()
        } else {
          Toast.fail(res.message)
          sessionStorage.removeItem('addressId')
          sessionStorage.removeItem('rewardId')
        }
      }).catch(res => {
        Toast.fail('系统内部错误')
        sessionStorage.removeItem('addressId')
        sessionStorage.removeItem('id')
      })
    },
    init () {
      if (sessionStorage.getItem('addressId')) {
        this.fetchReward()
      } else {
        this.getGoodsList()
        this.getRewardsList()
        this.getTotalScore()
        this.getLotteryScore()
      }
    }
  },
  mounted () {
    this.init()
  },
  watch: {
  }
}
</script>
