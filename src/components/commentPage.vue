<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .commentPage-container{
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
  }
</style>
<template>
  <div class="commentPage-container">
    <div class="area-3">
      <div class="wrapper on">全部 <span>407</span></div>
      <div class="wrapper">好评 <span>407</span></div>
      <div class="wrapper">中评 <span>407</span></div>
      <div class="wrapper">差评 <span>407</span></div>
    </div>
    <div class="area-4">
      <van-list
        v-model="loadingList"
        :finished="finished"
        :immediate-check="false"
        finished-text="没有更多了"
        @load="getOneMorePage"
      >
      <div class="wrapper" v-for="item in commentList" :key="item.id">
        <div class="name-box">
          <div class="img-box"><img :src="filePath + item.avatar" alt=""></div>
          <div class="name">{{item.nickName}}</div>
        </div>
        <div class="comment-content">{{item.evaluate}}</div>
        <!-- <div class="img-list">
          <div class="img-box" v-for="(image, index) in images" :key="index" @click="preview(index)"><img :src="image" alt=""></div>
        </div> -->
      </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { Toast, ImagePreview } from 'vant'

export default {
  name: 'tabbar',
  props: ['goodsId'],
  components: {
  },
  data () {
    return {
      sendDataComment: {
        goodsId: this.goodsId,
        pageNumber: 1,
        pageSize: 10,
        depictStar: 0
      },
      images: [
        require('../images/icon1.png'),
        require('../images/icon1_on.png'),
        require('../images/img1.png'),
        require('../images/icon3.png')
      ],
      commentList: [],
      filePath: '',
      total: '',
      totalPage: '',
      loadingList: false,
      finished: false,
    }
  },
  methods: {
    getOneMorePage () {
      setTimeout(() => {
        if (Number(this.sendDataComment.pageNumber) < Number(this.totalPage)) {
          this.sendDataComment.pageNumber++
          this.getCommentData()
        }
      }, 500)
    },
    getCommentData () {
      // this.sendDataComment.goodsId = this.goodsId
      console.log('this.sendDataComment', this.sendDataComment)
      this.$post('/api/goodsEvaluate/getGoodsEvaluateListByGoodsId', this.sendDataComment).then(res => {
        if (res.result === 0) {
          if (this.sendDataComment.pageNumber === 1) {
            this.commentList = res.data.list
          } else {
            this.commentList = this.commentList.concat(res.data.list)
          }
          this.filePath = res.filePath
          this.total = res.data.totalCount
          this.totalPage = res.data.totalPage
          // 加载状态结束
          this.loadingList = false
          // 数据全部加载完成
          if (this.commentList.length >= Number(this.total)) {
            this.finished = true
          }
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        Toast.fail('系统内部错误')
        // Toast.fail(res)
        // console.error(res)
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
    this.getCommentData()
  },
  watch: {
  }
}
</script>
