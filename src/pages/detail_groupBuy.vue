<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .detail_seckill-container{
    padding-bottom: px2rem(100);
    .van-swipe-item{
      height: px2rem(612) !important;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .price-wrapper{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      background: #ff3f31;
      padding: 0 px2rem(20);
      .price-box{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        height: px2rem(112);
        /*line-height: px2rem(112);*/
        .price{
          color: #fff;
          font-size: px2rem(30);
          font-weight: bold;
          display: flex;
          align-items: flex-end;
          span{
            font-size: px2rem(50);
          }
        }
        .price-origin{
          font-size: px2rem(24);
          color: #fff;
          opacity: 0.3;
        }
        .info{
          color: #fffefe;
          font-size: px2rem(18);
        }
      }
      .right-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: px2rem(80);
        .time-box{
          padding: 0 px2rem(16);
          background: rgba(0, 0, 0, 0.1);
          line-height: px2rem(36);
          color: #ffe92d;
          font-size: px2rem(20);
          border-radius: px2rem(18);
        }
      }
    }
    .title{
      padding: px2rem(20) 0 px2rem(10) px2rem(32);
      font-size: px2rem(32);
      line-height: px2rem(50);
      font-weight: bold;
      background: #fff;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      .text{
        width: px2rem(575);
      }
      .share{
        width: px2rem(112);
        height: px2rem(48);
        font-size: px2rem(24);
        color: #9f9f9f;
        font-weight: bold;
        padding-left: px2rem(52);
        border-radius: px2rem(24) 0 0 px2rem(24);
        background-image: url("../images/icon34.png");
        background-repeat: no-repeat;
        background-size: px2rem(26) px2rem(30);
        background-position: px2rem(21) px2rem(10);
        background-color: #f4f4f4;
      }
    }
    .area-1{
      background: #fff;
      margin-top: px2rem(20);
      .line{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        height: px2rem(90);
        line-height: px2rem(90);
        .name{
          font-size: px2rem(26);
          color: #999;
          padding-left: px2rem(25);
          padding-right: px2rem(34);
        }
        .right-box{
          font-size: px2rem(26);
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-start;
          .location{
            padding-left: px2rem(35);
            background-image: url("../images/icon35.png");
            background-repeat: no-repeat;
            background-size: px2rem(21) px2rem(27);
            background-position: left center;
          }
          .border{
            margin: 0 px2rem(26);
          }
          .text-1{
            color: #ff3f31;
          }
          .text-2{
            margin-right: px2rem(26);
          }
        }
        .right-box-2{
          padding-right: px2rem(25);
          justify-content: space-between;
          width: px2rem(635);
          .icon-box{
            width: px2rem(12);
            height: px2rem(21);
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .area-2{
      margin-top: px2rem(20);
      .area-2-title{
        background: #fff;
        height: px2rem(112);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        .border{
          width: px2rem(103);
          border-bottom: 1px solid #eee;
        }
        .name{
          font-size: px2rem(28);
          font-weight: bold;
          margin: 0 px2rem(30);
        }
      }
      .img-box{
        width: 100%;
        img{
          width: 100%;
        }
      }
    }
    .bottom-box{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: px2rem(100);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      .icon-box{
        width: 16%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: px2rem(100);
        img{
          width: px2rem(38);
          height: px2rem(36);
        }
        .text{
          font-size: px2rem(18);
          color: #666;
          margin-top: px2rem(10);
        }
        .icon-box-1{
          img{
            width: px2rem(44);
            height: px2rem(36);
          }
        }
      }
      .btn{
        width: 34%;
        height: px2rem(100);
        color: #fff;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .price{
          font-size: px2rem(26);
          line-height: px2rem(36)
        }
        .text{
          font-size: px2rem(28);
          line-height: px2rem(36);
        }
        &.btn-1{
          background-image: linear-gradient(-90deg, #ff7836 0%, #ffd851 100%), linear-gradient(#404040, #404040);
        }
        &.btn-2{
          background-image: linear-gradient(-90deg, #ff2736 0%, #ff2b71 100%), linear-gradient(#ff3f31, #ff3f31);
        }
      }
    }
    .area-3{
      padding: px2rem(36) 0 px2rem(14);
      background: #fff;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      .wrapper{
        width: px2rem(159);
        height: px2rem(54);
        line-height: px2rem(54);
        border-radius: px2rem(27);
        background: #fbf2f1;
        color: #000;
        font-size: px2rem(24);
        text-align: center;
        &.on{
          color: #ff3e31;
          border: 1px solid #ff4436;
        }
        span{
          font-weight: bold;
        }
      }
    }
    .area-4{
      padding-top: px2rem(36);
      background: #fff;
      .name-box{
        padding-left: px2rem(23);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        .img-box{
          width: px2rem(57);
          height: px2rem(57);
          border-radius: 50%;
          overflow: hidden;
          margin-right: px2rem(24);
          img{
            width: 100%;
            height: 100%;
          }
        }
        .name{
          font-size: px2rem(30);
          font-weight: bold;
        }
      }
      .comment-content{
        padding: px2rem(23);
        font-size: px2rem(26);
        line-height: px2rem(42);
      }
      .img-list{
        padding: px2rem(20) px2rem(23) 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        .img-box{
          width: px2rem(172);
          height: px2rem(172);
          border-radius: px2rem(8);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: px2rem(5);
          img{
            max-width: 100%;
            max-height: 100%;
          }
        }
      }
    }
    .pop-select{
      .van-popup{
        max-height: 60%;
        overflow: scroll;
        padding: px2rem(20) px2rem(20) px2rem(100);
      }
      .goodDetail{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;
        background: #fff;
        padding-bottom: px2rem(40);
        border-bottom: px2rem(1) solid #ededed;
        .img-box{
          width: px2rem(225);
          height: px2rem(225);
          border-radius: px2rem(6);
          overflow: hidden;
          margin-right: px2rem(20);
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: center;
          img{
            max-width: 100%;
            max-height: 100%;
          }
        }
        .right-box{
          width: px2rem(450);
          height: px2rem(225);
          position: relative;
          .price-box-pop{
            position: absolute;
            bottom: 0;
            left: 0;
            .price{
              color: #ff3f31;
              font-size: px2rem(24);
              font-weight: bold;
              margin-bottom: px2rem(10);
              span{
                font-size: px2rem(34);
                vertical-align: bottom;
              }
            }
            .info{
              color: #898989;
              font-size: px2rem(28);
            }
          }
        }
      }
      .label-list{
        padding: px2rem(20) 0;
        border-bottom: px2rem(1) solid #ededed;
        .name{
          font-size: px2rem(28);
          color: #000;
        }
        .wrapper{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-start;
          margin-top: px2rem(24);
          .wrap{
            padding: 0 px2rem(23);
            height: px2rem(64);
            line-height: px2rem(64);
            border-radius: px2rem(12);
            background: #f5f5f5;
            color: #010101;
            font-size: px2rem(24);
            text-align: center;
            margin-right: px2rem(25);
            &.on{
              color: #ff3f31;
              border: 1px solid #ff3f31;
              background: #ffeae9;
            }
          }
        }
      }
      .num-box{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        margin-top: px2rem(30);
        .name{
          font-size: px2rem(28);
          color: #000;
        }
        .van-stepper{
          display: flex;
        }
      }
      .btn{
        background-image: linear-gradient(-90deg, #ff3657 0%, 	#ff7836 100%), linear-gradient(#ff3f31, #ff3f31);
        width: px2rem(704);
        height: px2rem(78);
        text-align: center;
        border-radius: px2rem(39);
        margin: px2rem(100) auto 0;
        font-size: px2rem(32);
        color: #fff;
        line-height: px2rem(78);
      }
    }
    .share_wrapper{
      width: px2rem(610);
      background: #f3f3f3;
      padding: px2rem(30);
      .wrapper{
        background: #fff;
        border-radius: px2rem(20);
        overflow: hidden;
        .downloadImg{
          background: #fff;
          padding: px2rem(10);
          .img-box{
            width: 100%;
            height: px2rem(512);
            display: flex;
            align-items: center;
            justify-content: space-around;
            img{
              max-width: 100%;
              max-height: 100%;
            }
          }
          .wrap{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left-box{
              .name{
                font-size: px2rem(26);
                line-height: px2rem(30);
                height: px2rem(60);
                width: px2rem(300);
              }
              .price{
                font-size: px2rem(30);
                margin-top: px2rem(10);
                color: #ff3f31;
              }
            }
            .right-box{
              width: px2rem(140);
              height: px2rem(140);
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .finalImage{
          width: px2rem(550);
          height: px2rem(704);
          margin: px2rem(30) auto 0;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .btn{
          text-align: center;
          font-size: px2rem(30);
          margin: px2rem(30) 0;
        }
      }
    }
  }
</style>
<template>
  <div class="detail_seckill-container">
    <div class="tabs">
      <van-tabs sticky v-model="active">
        <van-tab title="商品详情">
          <div class="banner">
            <van-swipe :autoplay="3000">
              <van-swipe-item v-for="(item, index) in bannerData" :key="index">
                <img :src="filePath + item" alt="">
              </van-swipe-item>
            </van-swipe>
          </div>
          <div class="price-wrapper">
            <div class="price-box">
              <div class="price">￥<span>{{detailData.nowPrice}}</span></div>
              <div class="info">
                <div class="price-origin">￥{{detailData.marketPrice}}</div>
                <span>已售{{detailData.totalSales}}/库存{{detailDataAttrs.stock}}</span>
              </div>
            </div>
            <div class="right-box">
              <div class="time-box">
                <div class="time">开始：{{detailData.startTime}}</div>
              </div>
              <div class="time-box">
                <div class="time">开始：{{detailData.endTime}}</div>
              </div>
            </div>
          </div>
          <div class="title">
            <div class="text ellipsis-2">
              {{detailData.title}}{{detailData.subTitle}}
            </div>
            <div class="share" @click="share">分享</div>
          </div>
          <div class="area-1">
            <div class="line">
              <div class="name">发货</div>
              <div class="right-box">
                <div class="location">湖南长沙</div>
                <div class="border">|</div>
                <div class="text">快递：免运费</div>
              </div>
            </div>
            <!--<div class="line">
              <div class="name">优惠</div>
              <div class="right-box">
                <div class="text-1">满2000元减200元</div>
              </div>
            </div>-->
            <div class="line">
              <div class="name">保障</div>
              <div class="right-box">
                <div class="text-2">正品保证</div>
                <div class="text-2">极速发货</div>
                <div class="text-2">极速退款</div>
                <div class="text-2">七天退换货</div>
              </div>
            </div>
          </div>
          <div class="area-1">
            <div class="line">
              <div class="name">选择</div>
              <div class="right-box right-box-2" @click="showPop">
                <div class="text">规格</div>
                <div class="icon-box"><img src="../images/icon21.png" alt=""></div>
              </div>
            </div>
          </div>
          <div class="area-2">
            <div class="area-2-title">
              <div class="border"></div>
              <div class="name">详情介绍</div>
              <div class="border"></div>
            </div>
            <div class="img-box">
              <img v-for="(item, index) in detailPics" :key="index" :src="filePath + item" alt="">
            </div>
          </div>
        </van-tab>
        <van-tab title="用户评价">
          <commentPage :goodsId="detailData.goodsId"></commentPage>
        </van-tab>
      </van-tabs>
    </div>
    <van-popup v-model="showPop_share">
      <div class="share_wrapper">
        <div class="wrapper">
          <div class="finalImage" v-if="finalImage"><img :src="finalImage" alt=""></div>
          <div class="btn">长按保存到系统相册</div>
        </div>
      </div>
    </van-popup>
    <div class="pop-select">
      <van-popup v-model="showPop_select" position="bottom">
        <div class="goodDetail">
          <div class="img-box">
            <img :src="filePath + orderSendData.pic" alt="">
          </div>
          <div class="right-box">
            <div class="price-box-pop">
              <div class="price">￥<span>{{orderSendData.price}}</span></div>
              <div class="info">包邮 · 七天退换货</div>
            </div>
          </div>
        </div>
        <div class="label-list">
          <div class="name">{{detailDataAttrs[0].attrType}}</div>
          <div class="wrapper">
            <div class="wrap" @click="selectAttrSn(index)" :class="{'on':index==showIndex}" v-for="(item, index) in detailDataAttrs" :key="index">{{item.attrTitle}}</div>
          </div>
        </div>
        <div class="num-box">
          <div class="name">购买数量</div>
          <div class="step-view">
            <van-stepper v-model="value" min="1" max="99" />
          </div>
        </div>
        <div class="btn" @click="closePop">确定</div>
      </van-popup>
    </div>
    <div class="bottom-box">
      <div class="icon-box" @click="goHome">
        <img src="../images/icon36.png" alt="">
        <div class="text">首页</div>
      </div>
      <div class="icon-box icon-box-1" @click="handleCollect">
        <img v-if="!collectionStatus" src="../images/icon37.png" alt="">
        <img v-if="collectionStatus" src="../images/icon37_on.png" alt="">
        <div class="text">收藏</div>
      </div>
      <div class="btn btn-1">
        <div class="price">￥{{detailData.nowPrice}}</div>
        <div class="text" @click="handleConfirmBuy">单独购买</div>
      </div>
      <div class="btn btn-2">
        <div class="price">￥{{detailData.groupPrice}}</div>
        <div class="text">发起拼团</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast, ImagePreview } from 'vant'
import lf from 'lf'
import commentPage from '../components/commentPage'
import QRCode from 'qrcode'

export default {
  name: 'detail_groupBuy',
  components: {
    commentPage
  },
  data () {
    return {
      active: 0,
      images: [
        require('../images/icon1.png'),
        require('../images/icon1_on.png'),
        require('../images/img1.png'),
        require('../images/icon3.png')
      ],
      detailId: '',
      showPop_select: false,
      value: 1,
      detailData: {},
      filePath: '',
      bannerData: [],
      detailPics: [],
      detailDataAttrs: [],
      groupTime: '',
      collectionStatus: false,
      orderSendData: {},
      showIndex: 0,
      userAddressId: '',
      message: '',
      testImg: require('../images/img1.png'),
      showPop_share: false,
      qrcode: '',
      finalImage: ''
    }
  },
  methods: {
    share () {
      this.showPop_share = true
      let self = this
      let text = window.location.href
      // 获取页面的canvas
      var msg = document.createElement('canvas')
      // 将获取到的数据（val）画到msg（canvas）上
      QRCode.toCanvas(msg, text, error => {
        self.qrcode = msg.toDataURL('image/png')
        console.log('msg', msg.toDataURL('image/png'))
        let finalCanvas = document.createElement('canvas')
        finalCanvas.width = 550
        finalCanvas.height = 704
        let context = finalCanvas.getContext('2d')
        Promise.all([
          // self.loadimage(self.testImg),
          self.loadimage(self.filePath + self.bannerData[0]),
          self.loadimage(self.qrcode)
        ]).then(res => {
          console.log(res)
          context.fillStyle = '#fff'
          context.fillRect(0, 0, 550, 704)
          context.drawImage(res[0], 20, 20, 512, 512)
          context.drawImage(res[1], 392, 550, 140, 140)
          context.font = '26px 微软雅黑'
          context.fillStyle = '#333'
          if (self.detailData.title.length > 24) {
            self.detailData.title = self.detailData.title.substring(0, 24) + '...'
          }
          self.canvasTextAutoLine(self.detailData.title, finalCanvas, 36, 590, 30)
          // self.canvasTextAutoLine('【同价618】旗舰店 卡西欧（CASIO）樱花款女表时...', finalCanvas, 36, 590, 30)
          context.font = '30px 微软雅黑'
          context.fillStyle = '#ff3f31'
          context.fillText('￥' + self.detailData.nowPrice, 36, 680)
          self.finalImage = finalCanvas.toDataURL('image/png')
        })
      })
    },
    canvasTextAutoLine (str, canvas, initX, initY, lineHeight) {
      var ctx = canvas.getContext('2d')
      var lineWidth = 0
      var canvasWidth = 300
      var lastSubStrIndex = 0
      for (let i = 0; i < str.length; i++) {
        lineWidth += ctx.measureText(str[i]).width
        if (lineWidth > canvasWidth - initX) { // 减去initX,防止边界出现的问题
          if (str[i] === '，') {
            ctx.fillText(str.substring(lastSubStrIndex, i + 1), initX, initY)
            initY += lineHeight
            lineWidth = 0
            lastSubStrIndex = i + 1
          } else {
            ctx.fillText(str.substring(lastSubStrIndex, i), initX, initY)
            initY += lineHeight
            lineWidth = 0
            lastSubStrIndex = i
          }
        }
        if (i === str.length - 1) {
          ctx.fillText(str.substring(lastSubStrIndex, i + 1), initX, initY)
        }
      }
    },
    loadimage (src) {
      var image = new Image()
      image.setAttribute("crossOrigin",'Anonymous')
      image.src = src
      return new Promise((resolve, reject) => {
        image.onload = () => {
          resolve(image)
        }
      })
    },
    goHome () {
      this.$router.push({
        name: 'home'
      })
    },
    handleConfirmBuy () {
      if (this.userAddressId) {
        let sendData = {
          list: [{
            shareId: 0,
            goodsIssueId: this.detailData.id,
            goodsId: this.detailData.goodsId,
            attrSn: this.orderSendData.attrSn,
            number: this.value,
            shareType: 0
          }]
        }
        this.$post('/api/orders/orderBuy', sendData).then(res => {
          if (res.result === 0) {
            this.$router.push({
              name: 'orderConfirm',
              params: {
                initData: JSON.stringify(res.data),
                detailData: JSON.stringify(this.detailData)
              }
            })
          } else {
            Toast.fail(res.message)
          }
        }).catch(res => {
          console.error(res)
        })
      } else {
        this.$router.push({
          name: 'editAddress'
        })
      }
    },
    selectAttrSn (index) {
      this.showIndex = index
      this.orderSendData = this.detailDataAttrs[index]
    },
    handleCollect () {
      if (this.collectionStatus === false) {
        this.$post('/api/goodsCollection/insertGoodsCollection', {
          goodsId: this.detailData.goodsId,
          goodsIssueId: this.detailId
        }).then(res => {
          if (res.result === 0) {
            this.collectionStatus = true
          } else {
            Toast.fail(res.message)
          }
        }).catch(res => {
          console.error(res)
        })
      } else {
        this.$post('/api/goodsCollection/updateGoodsCollection', {
          goodsId: this.detailData.goodsId,
          goodsIssueId: this.detailId
        }).then(res => {
          if (res.result === 0) {
            this.collectionStatus = false
          } else {
            Toast.fail(res.message)
          }
        }).catch(res => {
          console.error(res)
        })
      }
    },
    getCollectionStatus () {
      this.$post('/api/goodsCollection/isCollection', {
        goodsIssueId: this.detailId
      }).then(res => {
        if (res.result === 0) {
          if (res.data.count !== 0) {
            this.collectionStatus = true
          } else {
            this.collectionStatus = false
          }
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    closePop () {
      this.showPop_select = false
    },
    showPop () {
      this.showPop_select = true
    },
    // 查询默认地址
    getDefaultAddress () {
      this.$post('/api/userAddress/queryDefaultUserAddress').then(res => {
        if (res.result === 0) {
          this.userAddressId = res.data.id
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    getDetailData () {
      this.$post('/api/goodsGroupRules/getGoodsGroupRulesById', {
        id: this.detailId
        // goodsId: 1
      }).then(res => {
        if (res.result === 0) {
          this.detailData = res.data
          this.bannerData = this.detailData.pics.split(';')
          this.detailPics = this.detailData.details.split(';')
          this.detailDataAttrs = JSON.parse(this.detailData.attrs)
          this.orderSendData = this.detailDataAttrs[0]
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    timeConfirm (value) {
      console.log(value)
      var month = value.getMonth() + 1
      var strDate = value.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      this.time = value.getFullYear() + '-' + month + '-' + strDate
    },
    preview (i) {
      ImagePreview({
        images: this.images,
        startPosition: i
      })
    }
  },
  mounted () {
  },
  created () {
    this.filePath = sessionStorage.getItem('filePath')
    this.detailId = this.$route.query.detailId
    this.getDetailData()
    this.getCollectionStatus()
    this.getDefaultAddress()
  },
  watch: {
  }
}
</script>
