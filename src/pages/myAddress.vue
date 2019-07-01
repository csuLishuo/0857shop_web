<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .myAddress-container{
    padding-bottom: px2rem(160);
    .topBar{
      background: #fff;
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
    .area-1{
      margin-top: px2rem(20);
      background: #fff;
      padding-left: px2rem(30);
      .wrapper{
        .area-1-1{
          height: px2rem(144);
          border-bottom: 1px solid #eff0f4;
          .line-1{
            font-size: px2rem(32);
            font-weight: bold;
            margin-top: px2rem(30);
            .name{
              margin-right: px2rem(40);
            }
          }
          .line-2{
            font-size: px2rem(24);
            margin-top: px2rem(20);
          }
        }
        .area-1-2{
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: px2rem(80);
          .checkbox{
            font-size: px2rem(26)
          }
          .btn-box{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            font-size: px2rem(26);
            .btn{
              margin-right: px2rem(40);
            }
            img{
              width: px2rem(26);
              height: px2rem(26);
              display: inline;
              margin-right: px2rem(2);
            }
          }
        }
      }
    }
    .btn-bottom {
      width: px2rem(690);
      height: px2rem(80);
      line-height: px2rem(80);
      background-color: rgba(240,0,0,1);
      border-radius: px2rem(80);
      position: fixed;
      bottom: px2rem(40);
      left: px2rem(30);
      right: px2rem(30);
      font-size: px2rem(30);
      color: #fff;
      text-align: center;
    }
  }
</style>
<template>
  <div class="myAddress-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon39.png" alt=""></div>
      <div class="title">收货地址</div>
    </div>
    <div class="area-1">
      <div class="wrapper">
        <div class="area-1-1 clearfix">
          <div class="line-1">
            <span class="name">虞维文</span>
            <span class="phone">15100002222</span>
          </div>
          <div class="line-2 ellipsis-1">湖南省长沙市岳麓区桐梓坡路湖南商学院出枫桥下</div>
        </div>
        <div class="area-1-2">
          <div class="checkbox">
            <van-checkbox v-model="checked">设为默认地址</van-checkbox>
          </div>
          <div class="btn-box">
            <div class="btn btn-1" @click="goEdit">
              <img src="../images/icon1.png" alt="">
              编辑
            </div>
            <div class="btn btn-1">
              <img src="../images/icon1.png" alt="">
              删除
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-bottom">
      新建收货地址
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'myAddress',
  components: {
  },
  data () {
    return {
      checked: false
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    goEdit () {
      this.$router.push({
        name: 'editAddress'
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
