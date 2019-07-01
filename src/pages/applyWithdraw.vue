<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .applyWithdraw-container{
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
      padding-left: px2rem(30);
      background: #fff;
      .area-1-1{
        height: px2rem(166);
        border-bottom: 1px solid #eff0f4;
        .van-cell{
          height: 100%;
          display: flex;
          align-items: center;
        }
        .icon-box{
          font-size: px2rem(80);
          font-weight: bold;
          color: #fe0000;
        }
      }
      .line{
        height: px2rem(104);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-bottom: 1px solid #eff0f4;
        font-size: px2rem(28);
        padding: 0 px2rem(25) 0 px2rem(10);
        .price{
          color: #898888;
          margin-left: px2rem(20);
        }
      }
    }
    .area-2{
      padding: 0 px2rem(40);
      line-height: px2rem(74);
      font-size: px2rem(24);
      color: #a8a8a8;
    }
    .area-3{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: px2rem(100);
      border-bottom: 1px solid #ebebeb;
      justify-content: space-between;
      padding: 0 px2rem(37);
      background: #fff;
      .label{
        font-size: px2rem(28);
        width: px2rem(140);
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
    .area-4{
      background: #fff;
      padding-left: px2rem(30);
      .line{
        .icon-box{
          width: px2rem(145);
        }
      }
    }
    .btn-bottom {
      width: px2rem(690);
      height: px2rem(80);
      line-height: px2rem(80);
      background-color: #ff2841;
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
  <div class="applyWithdraw-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon39.png" alt=""></div>
      <div class="title">申请提现</div>
    </div>
    <div class="area-1">
      <div class="area-1-1">
        <van-field
          v-model="price"
          type="number"
          clearable
          placeholder="请输入提现金额"
        >
          <div class="icon-box" slot="left-icon">￥</div>
        </van-field>
      </div>
      <div class="line">
        <div class="name">账户剩余余额</div>
        <div class="price">10000.00元</div>
      </div>
    </div>
    <div class="area-2">提现金额不能小于100.00元</div>
    <div class="area-3">
      <div class="label">提现方式</div>
      <div class="right-box">
        <span>银行卡</span>
        <img src="../images/icon21.png" alt="">
      </div>
    </div>
    <div class="area-4">
      <div class="line">
        <van-field
          type="text"
          required
          clearable
          placeholder="请输入开户人姓名"
        >
          <div class="icon-box" slot="left-icon">开户人</div>
        </van-field>
      </div>
      <div class="line">
        <van-field
          type="text"
          required
          clearable
          placeholder="请输入正确的银行名称"
        >
          <div class="icon-box" slot="left-icon">开户行</div>
        </van-field>
      </div>
      <div class="line">
        <van-field
          type="number"
          required
          clearable
          placeholder="请输入正确的银行账号"
        >
          <div class="icon-box" slot="left-icon">账号</div>
        </van-field>
      </div>
    </div>
    <div class="btn-bottom" @click="go">
      提交申请
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'applyWithdraw',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    go () {
      this.$router.push({
        name: 'success_withdraw'
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
