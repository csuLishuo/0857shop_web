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
          }
          &.on{
            background: #ff4f40;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="lottery-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon38.png" alt=""></div>
    </div>
    <!-- <div class="imgDel-box"><img src="../images/imgDel5.png" alt=""></div> -->
    <div class="area-1">
      <!-- <img src="../images/img1.png" alt=""> -->
    </div>
    <div class="area-2">
      <div class="line-1">
        <div class="wrapper" :class="index === 0 ? 'on': ''">
          <div class="img-box">
            <img src="../images/icon1.png" alt="">
          </div>
          <div class="text">化妆品</div>
        </div>
        <div class="wrapper" :class="index === 1 ? 'on': ''">2</div>
        <div class="wrapper" :class="index === 2 ? 'on': ''">3</div>
      </div>
      <div class="line-1">
        <div class="wrapper" :class="index === 7 ? 'on': ''">8</div>
        <div class="wrapper" @click="startLottery">开始</div>
        <div class="wrapper" :class="index === 3 ? 'on': ''">4</div>
      </div>
      <div class="line-1">
        <div class="wrapper" :class="index === 6 ? 'on': ''">7</div>
        <div class="wrapper" :class="index === 5 ? 'on': ''">6</div>
        <div class="wrapper" :class="index === 4 ? 'on': ''">5</div>
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
      goodsList: []
    }
  },
  methods: {
    getGoodsList () {
      this.$post('/api/goodsLotteryDraw/getGoodsLottetyList').then(res => {
        if (res.result === 0) {
          this.goodsList = res.data
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
          const index = parseInt(Math.random() * 10, 0) || 0
          this.prize = index
          if (this.prize > 7) {
            this.prize = 7
          }
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
    this.getGoodsList()
  },
  watch: {
  }
}
</script>
