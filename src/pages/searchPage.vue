<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .searchPage-container{
    padding-bottom: px2rem(50);
    .search-box{
      background: #fff;
      padding: px2rem(10) px2rem(30);
      display: flex;
      align-items: center;
      justify-content: space-between;
      .input-box{
        background: #eee;
        border-radius: px2rem(29);
        padding-left: px2rem(50);
        height: px2rem(58);
        width: 90%;
        position: relative;
        overflow: hidden;
        img{
          width: px2rem(25);
          height: px2rem(25);
          position: absolute;
          left: px2rem(16);
          top: px2rem(17);
        }
        input{
          width: 100%;
          line-height: px2rem(58);
          font-size: px2rem(25);
          background: transparent;
        }
      }
      .btn{
        font-size: px2rem(26);
        color: #666;
      }
    }
    .area-3{
      background: #fff;
      .scroll-box{
        height: px2rem(86);
        padding-left: px2rem(30);
        display: -webkit-box;
        overflow-x: scroll;
        -webkit-overflow-scrolling:touch;
        width: 100%;
        .item{
          font-size: px2rem(26);
          line-height: px2rem(86);
          color: #7c7c7c;
          margin-right: px2rem(30);
          position: relative;
          &.on{
            color: #000000;
            font-weight: bold;
            span{
              position: absolute;
              bottom: 0;
              left: 50%;
              margin-left: px2rem(-16);
              width: px2rem(32);
              height: px2rem(7);
              border-radius: px2rem(3);
              background-color: #ff3e31;
            }
          }
        }
      }
      .listbox{
        padding-left: px2rem(24);
        .wrapper{
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-between;
          background: #fff;
          padding: px2rem(22) px2rem(24) px2rem(22) 0;
          border-bottom: px2rem(1) solid #f0f0f0;
          .img-box{
            width: px2rem(225);
            height: px2rem(225);
            border-radius: px2rem(6);
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .right-box{
            width: px2rem(450);
            .title{
              font-size: px2rem(28);
              width: px2rem(390);
              line-height: px2rem(38);
              margin-top: px2rem(16);
              font-weight: bold;
              color: #393939;
            }
            .des{
              line-height: px2rem(40);
              font-size: px2rem(22);
              color: #7c7c7c;
            }
            .tag-box{
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: center;
              justify-content: flex-start;
              .tag{
                height: px2rem(30);
                line-height: px2rem(30);
                padding: 0 px2rem(10);
                border: px2rem(1) solid #ff981e;
                border-radius: px2rem(10);
                color: #ff981e;
                font-size: px2rem(20);
              }
            }
            .price-box{
              margin-top: px2rem(30);
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: center;
              justify-content: space-between;
              .price{
                color: #ff6c00;
                font-size: px2rem(24);
                font-weight: bold;
                span{
                  font-size: px2rem(34);
                  vertical-align: bottom;
                }
              }
              .info{
                color: #bababa;
                font-size: px2rem(18);
              }
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="searchPage-container">
    <div class="search-box">
      <div class="input-box">
        <img src="../images/icon6.png" alt="">
        <input type="text" v-model="sendData.title">
      </div>
      <div class="btn" @click="search">搜索</div>
    </div>
    <div class="area-3">
      <div class="scroll-box">
        <div class="item" :class="{'on':sendData.categoryId == 0}" @click="changeCate(0)">
          热门
        </div>
        <div class="item" :class="{'on':sendData.categoryId == item.id}" v-for="item in categoryList" :key="item.id" @click="changeCate(item.id)">
          {{item.chname}}
        </div>
      </div>
      <div class="listbox">
        <van-list
          v-model="loadingList"
          :finished="finished"
          :immediate-check="false"
          finished-text="没有更多了"
          @load="getOneMorePage"
        >
          <div class="wrapper" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
            <div class="img-box"><img :src="filePath + item.pics.split(';')[0]" alt=""></div>
            <div class="right-box">
              <div class="title ellipsis-2">{{item.title}}{{item.subTitle}}</div>
              <!--<div class="des">已售{{item.totalSales}}/库存{{JSON.parse(item.attrs)[0].stock}}</div>-->
              <!--<div class="tag-box">
                <div class="tag">满38减10</div>
              </div>-->
              <div class="price-box">
                <div class="price">￥<span>{{item.nowPrice}}</span></div>
                <div class="info">包邮 · 七天退换货</div>
              </div>
            </div>
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'searchPage',
  components: {
  },
  data () {
    return {
      categoryList: [],
      goodsList: [],
      filePath: '',
      total: '',
      sendData: {
        categoryId: 0,
        title: '',
        pageNumber: 1,
        pageSize: 5
      },
      loadingList: false,
      finished: false
    }
  },
  methods: {
    goDetail (id) {
      this.$router.push({
        path: 'detailPage',
        query: {
          detailId: id
        }
      })
    },
    changeCate (id) {
      this.sendData.pageNumber = 1
      this.finished = false
      this.goodsList = []
      this.sendData.categoryId = id
      this.getGoodsList()
    },
    search () {
      this.finished = false
      this.sendData.pageNumber = 1
      this.goodsList = []
      this.getGoodsList()
    },
    getGoodsCategory () {
      this.$post('/api/goodsIssue/getGoodsCategoryByLevel', {
        level: 1
      }).then(res => {
        if (res.result === 0) {
          this.categoryList = res.data
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    getOneMorePage () {
      setTimeout(() => {
        if (Number(this.sendData.pageNumber) < Number(this.totalPage)) {
          this.sendData.pageNumber++
          this.getGoodsList()
        }
      }, 500)
    },
    getGoodsList () {
      this.$post('/api/goodsIssue/getGoodsIssueListByCategoryId', this.sendData).then(res => {
        if (res.result === 0) {
          if (this.sendData.pageNumber === 1) {
            this.goodsList = res.data.list
          } else {
            this.goodsList = this.goodsList.concat(res.data.list)
          }
          this.filePath = res.filePath
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
    init () {
      this.getGoodsList()
      this.getGoodsCategory()
    }
  },
  mounted () {
    this.init()
  },
  watch: {
  }
}
</script>
