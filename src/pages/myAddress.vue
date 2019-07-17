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
      /*background: #fff;*/
      /*padding-left: px2rem(30);*/
      .wrapper{
        background: #fff;
        margin-top: px2rem(20);
        padding-left: px2rem(30);
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
      <van-list
        v-model="loadingList"
        :finished="finished"
        :immediate-check="false"
        finished-text="没有更多了"
        @load="getOneMorePage"
      >
        <van-radio-group v-model="defaultResult" @change="setDefault">
          <div class="wrapper" v-for="item in addressList" :key="item.id">
            <div class="area-1-1 clearfix">
              <div class="line-1">
                <span class="name">{{item.reciever}}</span>
                <span class="phone">{{item.phone}}</span>
              </div>
              <div class="line-2 ellipsis-1">{{item.province + item.city + item.county + item.address}}</div>
            </div>
            <div class="area-1-2">
              <div class="checkbox">
                <van-radio :name="item.id">设为默认地址</van-radio>
              </div>
              <div class="btn-box">
                <!--<div class="btn btn-1" @click="goEdit">
                  <img src="../images/icon59.png" alt="">
                  编辑
                </div>-->
                <div class="btn btn-1" @click="showPopDel(item.id)">
                  <img src="../images/icon60.png" alt="">
                  删除
                </div>
              </div>
            </div>
          </div>
        </van-radio-group>
      </van-list>
    </div>
    <div class="btn-bottom" @click="goEdit()">
      新建收货地址
    </div>
  </div>
</template>

<script>
import { Toast, Dialog } from 'vant'

export default {
  name: 'myAddress',
  components: {
  },
  data () {
    return {
      checked: false,
      addressList: [],
      total: '',
      totalPage: '',
      sendData: {
        pageNumber: 1,
        pageSize: 20
      },
      defaultResult: '',
      loadingList: false,
      finished: false
    }
  },
  methods: {
    setDefault (id) {
      console.log('setDefault', id)
      this.$post('/api/userAddress/updateDefaultUserAddress', {
        id: id
      }).then(res => {
        if (res.result === 0) {
          Toast.fail(res.message)
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    showPopDel (id) {
      Dialog.confirm({
        title: '标题',
        message: '确定删除？'
      }).then(() => {
        this.$post('/api/userAddress/deleteUserAddress', {
          id: id
        }).then(res => {
          if (res.result === 0) {
            Toast.fail(res.message)
            this.sendData = {
              pageNumber: 1,
              pageSize: 20
            }
            this.getAddressList()
          } else {
            Toast.fail(res.message)
          }
        }).catch(res => {
          console.error(res)
        })
      }).catch(() => {
        // on cancel
      })
    },
    getOneMorePage () {
      setTimeout(() => {
        if (Number(this.sendData.pageNumber) < Number(this.totalPage)) {
          this.sendData.pageNumber++
          this.getAddressList()
        }
      }, 500)
    },
    getAddressList () {
      this.$post('/api/userAddress/index', this.sendData).then(res => {
        if (res.result === 0) {
          if (this.sendData.pageNumber === 1) {
            this.addressList = res.data.list
          } else {
            this.addressList = this.addressList.concat(res.data.list)
          }
          this.addressList.forEach(v => {
            if (v.isDefault === 1) {
              this.defaultResult = v.id
            }
          })
          this.total = res.data.totalCount
          this.totalPage = res.data.totalPage
          // 加载状态结束
          this.loadingList = false
          // 数据全部加载完成
          if (this.addressList.length >= Number(this.total)) {
            this.finished = true
          }
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
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
    this.getAddressList()
  },
  watch: {
  }
}
</script>
