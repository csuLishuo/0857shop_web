<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .settingUp-container{
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
      margin-top: px2rem(20);
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
  <div class="settingUp-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon39.png" alt=""></div>
      <div class="title">设置</div>
    </div>
    <div class="area-1">
      <div class="line line-1" @click="go(1)">
        <div class="label">关于我们</div>
        <div class="right-box">
          <img src="../images/icon21.png" alt="">
        </div>
      </div>
    </div>
    <div class="area-1">
      <div class="line line-1" @click="go(2)">
        <div class="label">意见反馈</div>
        <div class="right-box">
          <img src="../images/icon21.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'settingUp',
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
    go (status) {
      if (status === 1) {
        this.$router.push({
          path: '/aboutUs'
        })
      } else if (status === 2) {
        this.$router.push({
          path: '/commentFeedback'
        })
      }
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
