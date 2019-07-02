<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .applyAgencyForm-container{
    min-height: 100%;
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
      background: #fff;
      .title{
        font-size: px2rem(28);
        text-align: center;
        margin-top: px2rem(35);
        margin-bottom: px2rem(25);
      }
      .wrapper{
        display: flex;
        align-items: center;
        justify-content: space-around;
        .wrap{
          .img-box{
            width: px2rem(349);
            height: px2rem(201);
            img{
              width: 100%;
              height: 100%;
            }
          }
          .text{
            font-size: px2rem(24);
            background: #fbb931;
            color: #fff;
            line-height: px2rem(53);
            text-align: center;
          }
        }
      }
    }
    .area-2{
      margin-top: px2rem(20);
      background: #fff;
      padding-left: px2rem(30);
      .title{
        font-size: px2rem(32);
        line-height: px2rem(80);
      }
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
      background-color: #fbb931;
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
  <div class="applyAgencyForm-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon39.png" alt=""></div>
      <div class="title">申请成为代理</div>
    </div>
    <div class="area-1 clearfix">
      <div class="title">请上传身份证</div>
      <div class="wrapper">
        <div class="wrap">
          <div class="img-box"><img src="../images/img8.png" alt=""></div>
          <div class="text">上传身份证正面</div>
        </div>
        <div class="wrap">
          <div class="img-box"><img src="../images/img9.png" alt=""></div>
          <div class="text">上传身份证反面</div>
        </div>
      </div>
    </div>
    <div class="area-2">
      <div class="title">身份信息填写</div>
      <div class="form-box">
        <div class="line">
          <van-field
            type="text"
            required
            clearable
            placeholder="请输入姓名"
          >
            <div class="icon-box" slot="left-icon">姓名</div>
          </van-field>
        </div>
        <div class="line">
          <van-field
            type="number"
            required
            clearable
            placeholder="请输入身份证号"
          >
            <div class="icon-box" slot="left-icon">身份证号</div>
          </van-field>
        </div>
        <div class="line">
          <van-field
            type="tel"
            required
            clearable
            placeholder="请输入正确的手机号"
          >
            <div class="icon-box" slot="left-icon">手机号</div>
          </van-field>
        </div>
      </div>
    </div>
    <div class="area-2">
      <div class="form-box">
        <div class="line">
          <van-field
            type="text"
            required
            clearable
            placeholder="请选择地址"
          >
            <div class="icon-box" slot="left-icon">所在地址</div>
          </van-field>
          <van-field
            type="text"
            required
            clearable
            placeholder="请填写身份证详细地址"
          >
            <div class="icon-box" slot="left-icon">详细地址</div>
          </van-field>
        </div>
      </div>
    </div>
    <div class="area-2">
      <div class="form-box">
        <div class="line">
          <van-field
            type="tel"
            required
            clearable
            placeholder="请输入推荐人的手机号"
          >
            <div class="icon-box" slot="left-icon">推荐人号码</div>
          </van-field>
        </div>
      </div>
    </div>
    <div class="btn-bottom" @click="go">
      提交
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'applyAgencyForm',
  components: {
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    go () {
      this.$router.push({
        name: 'success_apply'
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
