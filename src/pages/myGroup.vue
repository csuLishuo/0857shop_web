<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .myGroup-container{
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
    .wrapper{
      width: px2rem(702);
      margin: px2rem(20) auto 0;
      background: #fff;
      border-radius: px2rem(10);
      display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          padding: px2rem(30);
          padding-right: px2rem(40);
          .left-box{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            .portrait-box{
              width: px2rem(92);
              height: px2rem(92);
              border-radius: 50%;
              overflow: hidden;
              margin-right: px2rem(22);
              img{
                width: 100%;
                height: 100%;
              }
            }
            .text-box{
              .name{
                font-size: px2rem(26);
              }
              .des{
                font-size: px2rem(22);
                margin-top: px2rem(18);
                color: #656565;
              }
            }
          }
          .right-box{
            color: #000;
            font-size: px2rem(26);
            font-weight: bold;
          }
    }
  }
</style>
<template>
  <div class="myGroup-container">
    <div class="topBar">
      <div class="left-box" @click="goBack"><img src="../images/icon39.png" alt=""></div>
      <div class="title">我的团队</div>
    </div>
    <van-tabs v-model="active" @change="tabChange">
      <van-tab title="一级用户"></van-tab>
      <van-tab title="二级用户"></van-tab>
    </van-tabs>
    <van-list
      v-model="loadingList"
      :finished="finished"
      :immediate-check="false"
      finished-text="没有更多了"
      @load="getOneMorePage"
    >
      <div class="wrapper" v-for="item in goodsList" :key="item.id">
        <div class="left-box">
          <div class="portrait-box"><img :src="filePath + item.avatar" alt=""></div>
          <div class="text-box">
            <div class="name">{{item.updateTime}}</div>
          </div>
        </div>
        <div class="right-box">
          {{item.userLevel}}
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'myGroup',
  components: {
  },
  data () {
    return {
      active: 0,
      filePath: '',
      goodsList: [],
      total: '',
      totalPage: '',
      sendData: {
        pageNumber: 1,
        pageSize: 10
      },
      loadingList: false,
      finished: false
    }
  },
  methods: {
    tabChange (e) {
      console.log('eeeeeeeeeee', e)
      this.active = e
      this.goodsList = []
      this.total = ''
      this.totalPage = ''
      this.sendData = {
        pageNumber: 1,
        pageSize: 10
      }
      this.loadingList = false
      this.finished = false
      this.getGoodsList(this.active)
    },
    goBack () {
      this.$router.back(-1)
    },
    getOneMorePage () {
      setTimeout(() => {
        if (Number(this.sendData.pageNumber) < Number(this.totalPage)) {
          this.sendData.pageNumber++
          this.getGoodsList(this.active)
        }
      }, 500)
    },
    getGoodsList (active) {
      let url = ''
      if (active === 0) {
        url = '/api/user/getTwoUserList'
      } else {
        url = '/api/user/getFirstUserList'
      }
      this.$post(url, this.sendData).then(res => {
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
        console.error(res)
      })
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
    this.filePath = sessionStorage.getItem('filePath')
    this.getGoodsList(0)
  },
  watch: {
  }
}
</script>
