<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .detail_bargin-container{
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
        width: 68%;
        height: px2rem(100);
        line-height: px2rem(100);
        background: #ff3e31;
        color: #fff;
        text-align: center;
        font-size: px2rem(36);
        font-weight: bold;
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
  }
</style>
<template>
  <div class="detail_bargin-container">
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
                <span>已售{{detailData.totalSales}}/库存{{detailDataAttrs[0].stock}}</span>
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
              【{{detailData.title}}】{{detailData.subTitle}}
            </div>
            <!--<div class="share">分享</div>-->
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
        <!-- <div class="num-box">
          <div class="name">购买数量</div>
          <div class="step-view">
            <van-stepper v-model="value" min="1" max="99" />
          </div>
        </div> -->
        <div class="btn" @click="closePop">确定</div>
      </van-popup>
    </div>
    <div class="bottom-box">
      <div class="icon-box">
        <img src="../images/icon36.png" alt="">
        <div class="text">首页</div>
      </div>
      <div class="icon-box icon-box-1">
        <img src="../images/icon37.png" alt="">
        <div class="text">收藏</div>
      </div>
      <div class="btn" @click="handleConfirm">
        砍价免费拿
      </div>
    </div>
  </div>
</template>
<script>
import { Toast, ImagePreview } from 'vant'
import commentPage from '../components/commentPage'

export default {
  name: 'detail_bargin',
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
      value: '',
      detailData: {},
      filePath: '',
      bannerData: [],
      detailPics: [],
      detailDataAttrs: [],
      groupTime: '',
      collectionStatus: false,
      orderSendData: {},
      showIndex: 0,
      userAddressId: ''
    }
  },
  methods: {
    handleConfirm () {
      console.log('orderSendData', this.orderSendData)
      console.log('detailData', this.detailData)
      this.$post('/api/goodsFree/insertGoodsFreeUsers', {
        goodsId: this.orderSendData.goodsId,
        goodsIssueId: this.detailData.goodsIssueId,
        goodsFreeId: this.detailData.id,
        attrSn: this.orderSendData.attrSn,
        userAddressId: this.userAddressId
      }).then(res => {
        if (res.result === 0) {
          Toast.success('砍价成功')
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        Toast.fail('系统内部错误')
      })
    },
    selectAttrSn (index) {
      this.showIndex = index
      this.orderSendData = this.detailDataAttrs[index]
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
        Toast.fail('系统内部错误')
      })
    },
    getDetailData () {
      this.$post('/api/goodsFree/getGoodsFreeById', {
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
        Toast.fail('系统内部错误')
      })
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
    this.getDefaultAddress()
  },
  watch: {
  }
}
</script>
