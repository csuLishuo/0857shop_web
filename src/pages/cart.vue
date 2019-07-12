<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .cart-container{
    .goodsList{
      .wrapper{
        border-bottom: 1px solid #f0f0f0;
        .item {
          background: #ffffff;
          padding: px2rem(30) px2rem(20);
          display: flex;
          position: relative;
          &::after {
            content: ' ';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 1px;
            transform: translateY(0.5);
            background: #eeeeee;
          }
          .c {
            display: flex;
            align-items: center;
          }
        }
        .good-image {
          width: px2rem(184);
          height: px2rem(184);
          margin: 0 px2rem(20);
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: px2rem(10);
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .content {
          flex: 1;
          display: flex;
          flex-direction: column;
          .name {
            color: #333333;
            font-size: px2rem(24);
            line-height: px2rem(34);
            height: px2rem(68);
          }
          .desc {
            color: #757575;
            font-size: px2rem(20);
            line-height: px2rem(34);
          }
          .b {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-top: px2rem(42);
          }
          .price {
            color: #f95822;
            font-size: px2rem(30);
            margin-bottom: px2rem(10);
          }
          .good-step-view {
            display: flex;
            /*width: 100%;*/
            flex-direction: row-reverse;
            height: px2rem(40);
          }
        }
        .del-good {
          width: 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #ff0000;
          color: #ffffff;
          font-size: px2rem(28);
          height: 100%;
          img{
            width: px2rem(39);
            height: px2rem(41);
            margin-top: px2rem(22);
          }
        }
      }
    }
    .van-stepper{
      display: flex;
    }
    .van-stepper__input{
      width: px2rem(72);
      height: px2rem(40);
      font-size: px2rem(24);
      box-sizing: border-box;
    }
    .van-stepper__plus, .van-stepper__minus{
      width: px2rem(44);
      height: px2rem(40);
      font-size: px2rem(24);
    }
    .van-icon{
      display: block;
    }
    .van-submit-bar{
      bottom: px2rem(100);
    }
    .all{
      padding-left: px2rem(20);
    }
  }
</style>
<template>
  <div class="cart-container">
    <div class="goodsList">
      <van-checkbox-group v-model="checkboxResult" @change="selectGood">
        <van-list
          v-model="loadingList"
          :finished="finished"
          :immediate-check="false"
          finished-text="没有更多了"
          @load="getOneMorePage"
        >
          <div class="wrapper" v-for="(item, index) in goodsList" :key="index">
            <van-swipe-cell
              :right-width="70"
            >
              <div class="item">
                <div class="c" catchtap="loop">
                  <van-checkbox
                    checked-color="#ff0000"
                    :name="item.id"
                  >
                  </van-checkbox>
                </div>
                <div class="good-image">
                  <img :src="filePath + item.pics.split(';')[0]">
                </div>
                <div class="content">
                  <div class="a">
                    <div class="name ellipsis-2">{{item.title}}</div>
                    <div class="desc ellipsis-1">{{item.subTitle}}</div>
                  </div>
                  <div class="b">
                    <div class="price">￥{{item.nowPrice}}</div>
                    <div class="good-step-view">
                      <van-stepper v-model="item.number" @change="handleNumChange" min="1" max="99" />
                    </div>
                  </div>
                </div>
              </div>
              <div slot="right" class="del-good" @click="delGood(item.id, index)">
                <span>删除</span>
                <img src="../images/icon01.png">
              </div>
            </van-swipe-cell>
          </div>
        </van-list>
      </van-checkbox-group>
    </div>
    <van-submit-bar
      custom-class="submitBar"
      checked-color="#ff0000"
      :price="totlePrice"
      button-text="结算"
    >
      <!--<div class="all">-->
        <!--<van-checkbox-->
          <!--checked-color="#ff0000"-->
          <!--v-model="allChecked"-->
          <!--@change="selectAll"-->
        <!--&gt;-->
          <!--全选-->
        <!--</van-checkbox>-->
      <!--</div>-->
    </van-submit-bar>
    <tabbar :activeIndex="2"></tabbar>
  </div>
</template>

<script>
import { Toast } from 'vant'
import tabbar from '../components/tabbar'

export default {
  name: 'cart',
  components: {
    tabbar
  },
  data () {
    return {
      checkboxResult: [],
      value: 10,
      allChecked: false,
      goodsList: [],
      totlePrice: 0,
      total: '',
      totalPage: '',
      sendData: {
        pageNumber: 1,
        pageSize: 20
      },
      loadingList: false,
      finished: false
    }
  },
  methods: {
    handleNumChange (e) {
      console.log('eeeeeeee', e)
      this.totlePrice = 0
      this.goodsList.forEach(v => {
        if (this.checkboxResult.indexOf(v.id) !== -1) {
          this.totlePrice += Number(v.number) * Number(v.nowPrice) * 100
        }
      })
    },
    selectGood (value) {
      console.log(value)
      this.totlePrice = 0
      this.goodsList.forEach(v => {
        if (value.indexOf(v.id) !== -1) {
          this.totlePrice += Number(v.number) * Number(v.nowPrice) * 100
        }
      })
    },
    delGood (id, index) {
      this.$post('/api/goodsCar/delGoodsCar', {
        id: id
      }).then(res => {
        if (res.result === 0) {
          this.goodsList.forEach(v => {
            if (v.id === id) {
              this.goodsList.splice(index, 1)
            }
          })
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        Toast.fail('系统内部错误')
      })
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
      this.$post('/api/goodsCar/getGoodsCarList', this.sendData).then(res => {
        if (res.result === 0) {
          if (this.sendData.pageNumber === 1) {
            this.goodsList = res.data.list
          } else {
            this.goodsList = this.goodsList.concat(res.data.list)
          }
          this.filePath = res.filePath
          sessionStorage.setItem('filePath', this.filePath)
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
        Toast.fail('系统内部错误')
      })
    }
  },
  mounted () {
    this.filePath = sessionStorage.getItem('filePath')
    this.getGoodsList()
  },
  watch: {
  }
}
</script>
