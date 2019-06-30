<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .editAddress-container{
    min-height: 100%;
    background: #fff;
    .border{
      border-bottom: 1px solid #ebebeb;
    }
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
    .form-box{
      padding-left: px2rem(30);
      .line{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: px2rem(104);
        border-bottom: 1px solid #ebebeb;
        .label{
          font-size: px2rem(28);
          width: px2rem(140);
        }
        &.line-1{
          justify-content: space-between;
          padding-right: px2rem(30);
        }
        .right-box{
          display: flex;
          align-items: center;
          span{
            font-size: px2rem(28);
            color: #bebebe;
            margin-right: px2rem(20);
          }
          img{
            width: px2rem(12);
            height: px2rem(21);
          }
        }
      }
    }
  }
</style>
<template>
  <div class="editAddress-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon39.png" alt=""></div>
      <div class="title">编辑地址</div>
    </div>
    <div class="border"></div>
    <div class="form-box">
      <div class="line">
        <div class="label">用户名</div>
        <div class="input-box">
          <van-field placeholder="请填写收货人姓名" />
        </div>
      </div>
      <div class="line">
        <div class="label">联系电话</div>
        <div class="input-box">
          <van-field placeholder="请填写收货人联系电话" />
        </div>
      </div>
      <div class="line line-1">
        <div class="label">所在地区</div>
        <div class="right-box">
          <span>请选择</span>
          <img src="../images/icon21.png" alt="">
        </div>
      </div>
      <div class="line">
        <div class="label">详细地址</div>
        <div class="input-box">
          <van-field placeholder="街道、楼牌号等" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'editAddress',
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
