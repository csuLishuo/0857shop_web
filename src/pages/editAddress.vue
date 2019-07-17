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
          <van-field v-model="sendData.reciever" placeholder="请填写收货人姓名" />
        </div>
      </div>
      <div class="line">
        <div class="label">联系电话</div>
        <div class="input-box">
          <van-field v-model="sendData.phone" placeholder="请填写收货人联系电话" />
        </div>
      </div>
      <div class="line">
        <div class="label">邮政编码</div>
        <div class="input-box">
          <van-field v-model="sendData.zipCode" placeholder="请填写邮政编码" />
        </div>
      </div>
      <div class="line line-1">
        <div class="label">所在地区</div>
        <div class="right-box" @click="showPop">
          <span>{{sendData.province==''&&sendData.city==''&&sendData.county==''?'请选择':sendData.province+'/'+sendData.city+'/'+sendData.county}}</span>
          <img src="../images/icon21.png" alt="">
        </div>
      </div>
      <div class="line">
        <div class="label">详细地址</div>
        <div class="input-box">
          <van-field v-model="sendData.address" placeholder="街道、楼牌号等" />
        </div>
      </div>
    </div>
    <van-popup v-model="showArea" position="bottom">
      <van-area :area-list="areaList" :columns-num="3" @confirm="handleConfirmCity" @cancel="handleCancel"/>
    </van-popup>
    <div class="btn-bottom" @click="handleConfirmData">
      保存
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import areaList from '../js/framework/areaList'

export default {
  name: 'editAddress',
  components: {
  },
  data () {
    return {
      sendData: {
        reciever: '',
        phone: '',
        province: '',
        city: '',
        county: '',
        address: '',
        zipCode: '',
        isDefault: 1
      },
      areaList: areaList,
      showArea: false
    }
  },
  methods: {
    handleConfirmData () {
      for (let item in this.sendData) {
        if (this.sendData[item] === '') {
          Toast.fail('请完善地址信息')
          return
        }
      }
      this.$post('/api/userAddress/saveUserAddress', this.sendData).then(res => {
        if (res.result === 0) {
          Toast.fail(res.message)
          this.$router.back(-1)
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    showPop () {
      this.showArea = true
    },
    handleConfirmCity (value) {
      console.log('handleConfirm', value)
      this.sendData.province = value[0].name
      this.sendData.city = value[1].name
      this.sendData.county = value[2].name
      this.showArea = false
    },
    handleCancel () {
      this.showArea = false
    },
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
