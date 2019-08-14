<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .register-container{
    min-height: 100%;
    background: #fff;
    .goBack{
      padding-left: px2rem(60);
      img{
        width: px2rem(19);
        height: px2rem(37);
      }
      margin: px2rem(40) 0;
    }
    .page-title{
      padding-left: px2rem(60);
      font-size: px2rem(65);
      font-weight: bold;
      margin: px2rem(40) 0;
    }
    .form-box{
      padding: px2rem(20) px2rem(60) 0;
      .line{
        border-bottom: 1px solid #e7e7e7;
        margin-top: px2rem(60);
        .van-field{
          display: flex;
          align-items: center;
        }
        .icon-box{
          margin-right: px2rem(20);
          img{
            width: 100%;
            height: 100%;
          }
        }
        &.line-1{
          .icon-box{
            width: px2rem(22);
            height: px2rem(34);
          }
        }
        &.line-2{
          .icon-box{
            width: px2rem(26);
            height: px2rem(30);
          }
        }
      }
    }
    .area-1{
      padding: 0 px2rem(60) 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: px2rem(100);
      .van-checkbox{
        display: flex;
        align-items: center;
      }
      .van-icon{
        display: block !important;
      }
      .text{
        color: #aaa;
        span{
          color: #ff5656;
        }
        font-size: px2rem(26);
      }
    }
    .area-2 {
      width: px2rem(630);
      height: px2rem(88);
      line-height: px2rem(88);
      background-color: #ff3f31;
      border-radius: px2rem(44);
      text-align: center;
      color: #fff;
      font-size: px2rem(32);
      font-weight: bold;
      margin-top: px2rem(80);
      margin: px2rem(80) auto;
    }
  }
</style>
<template>
  <div class="register-container clearfix">
    <div class="goBack" @click="goBack"><img src="../images/icon39.png" alt=""></div>
    <div class="page-title">修改密码</div>
    <div class="form-box">
      <div class="line line-1">
        <van-field
          v-model="sendData.username"
          type="tel"
          required
          clearable
          placeholder="手机号"
        >
        </van-field>
      </div>
      <div class="line line-2">
        <van-field
          v-model="sendData.captcha"
          type="num"
          placeholder="验证码"
          required
        >
          <van-button slot="button" size="small" type="primary" @click="getCaptcha">发送验证码</van-button>
        </van-field>
      </div>
      <div class="line line-2">
        <van-field
          v-model="sendData.password"
          type="password"
          placeholder="请输入登录密码"
          required
        >
        </van-field>
      </div>
      <div class="line line-2">
        <van-field
          v-model="sendData.passwordSub"
          type="password"
          placeholder="确认登录密码"
          required
        >
        </van-field>
      </div>
    </div>
    <div class="area-2" @click="confirm">确认</div>
    <!-- <div class="area-2" @click="goLogin">已注册，立即登录</div> -->
  </div>
</template>
<script>
import { Toast } from 'vant'

export default {
  name: 'modifyPassword',
  components: {
  },
  data () {
    return {
      sendData: {
        username: '',
        captcha: '',
        password: '',
        passwordSub: ''
      },
      checkedStatus: false,
      timeStatus: 60,
      orderSn: '', // 短信标识
      wxUserInfo: {},
      urlUserName: ''
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    goLogin () {
      this.$router.push({
        name: 'login'
      })
    },
    confirm () {
      let sendData = this.sendData
      for (let i in sendData) {
        if (sendData[i] === '') {
          Toast.fail('请填写完整信息')
          return false
        }
      }
      if (sendData.password !== sendData.passwordSub) {
        Toast.fail('两次密码输入不一致')
        return false
      }
      this.$post('/api/user/resetPassword', {
        mobilePhone: this.sendData.username,
        password: this.sendData.password,
        verifyCode: this.sendData.captcha,
        orderSn: this.orderSn
      }).then(res => {
        if (res.result === 0) {
          Toast.success('修改成功')
          this.$router.push({
            name: 'login'
          })
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    getCaptcha () {
      let reg = /^1\d{10}$/
      if (this.timeStatus < 60 && this.timeStatus > 0) {
        Toast.fail('请勿频繁点击')
      } else if (!reg.test(this.sendData.username)) {
        Toast.fail('请按规范格式填写手机号码')
      } else {
        const interval = window.setInterval(() => {
          if (this.timeStatus-- <= 0) {
            this.timeStatus = 60
            window.clearInterval(interval)
          }
        }, 1000)
        this.$post('/api/user/sendPhoneMessageByResetPassword', {
          mobilePhone: this.sendData.username
        }).then(res => {
          if (res.result === 0) {
            Toast.success('获取验证码成功')
            this.orderSn = res.data.orderSn
          } else {
            Toast.fail(res.message)
          }
        }).catch(res => {
          console.error(res)
        })
      }
    }
  },
  mounted () {
  },
  created () {
    // this.sendData.invitationCode = this.urlUserName = this.$route.query.userName
  },
  watch: {
  }
}
</script>
