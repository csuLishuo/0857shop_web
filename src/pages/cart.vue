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
      <van-checkbox-group v-model="result">
        <div class="wrapper" v-for="(item, index) in list" :key="index">
          <van-swipe-cell
            :right-width="70"
          >
            <div class="item">
              <div class="c" catchtap="loop">
                <van-checkbox
                  checked-color="#ff0000"
                  :name="item"
                >
                </van-checkbox>
              </div>
              <div class="good-image">
                <img src="../images/icon16.png">
              </div>
              <div class="content">
                <div class="a">
                  <div class="name ellipsis-2">蒙古包特产马奶酒互动式疏堵是地负海涵烧烤活动啊蒙古包特产马奶酒互动式疏堵是地负海涵烧烤活动啊</div>
                  <div class="desc ellipsis-1">2瓶1000ml【送小瓶品尝酒】</div>
                </div>
                <div class="b">
                  <div class="price">￥2222</div>
                  <div class="good-step-view">
                    <van-stepper v-model="value" min="1" max="99" />
                  </div>
                </div>
              </div>
            </div>
            <div slot="right" class="del-good">
              <span>删除</span>
              <img src="../images/icon01.png">
            </div>
          </van-swipe-cell>
        </div>
      </van-checkbox-group>
    </div>
    <van-submit-bar
      custom-class="submitBar"
      checked-color="#ff0000"
      :price="3050"
      button-text="结算"
    >
      <div class="all">
        <van-checkbox
          checked-color="#ff0000"
          v-model="allChecked"
        >
          全选
        </van-checkbox>
      </div>
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
      list: ['a', 'b', 'c'],
      result: ['a', 'b'],
      value: 10,
      allChecked: false
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
