<template>
  <div>
      <!--<mt-swipe :auto="4000">-->
        <!--<mt-swipe-item>1</mt-swipe-item>-->
        <!--<mt-swipe-item>2</mt-swipe-item>-->
        <!--<mt-swipe-item>3</mt-swipe-item>-->
      <!--</mt-swipe>-->

      <!--6宫格-->
    <!--<ul class="mui-table-view mui-grid-view mui-grid-9">-->
      <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">-->
        <!--<router-link to="/home/newslist">-->
        <!--<img src="../../images/menu1(1).png" alt="">-->
        <!--<div class="mui-media-body">新闻资讯</div>-->
        <!--</router-link>-->
      <!--</li>-->
      <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">-->
        <!--<a href="#">-->
        <!--<img src="../../images/menu2.png" alt="">-->
        <!--<div class="mui-media-body">图片分享</div>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">-->
        <!--<a href="#">-->
        <!--<img src="../../images/menu3.png" alt="">-->
        <!--<div class="mui-media-body">商品购买</div>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">-->
        <!--<a href="#">-->
        <!--<img src="../../images/menu4.png" alt="">-->
        <!--<div class="mui-media-body">留言反馈</div>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">-->
        <!--<a href="#">-->
        <!--<img src="../../images/menu5.png" alt="">-->
        <!--<div class="mui-media-body">视频专区</div>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">-->
        <!--<a href="#">-->
        <!--<img src="../../images/menu6.png" alt="">-->
        <!--<div class="mui-media-body">联系我们</div>-->
        <!--</a>-->
      <!--</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
  import $ from 'jquery'
  import {Toast} from 'mint-ui'
  export default {
    data() {
      return {
        lunboList: []
      }
    },
    created() {
      this.getBanner()
    },
    methods:{
      // getBanner(){
      //     this.$http.get('api/getlunbo').then(res =>{
      //       console.log(res.body);
      //     })
      //   }
      // },
    // methods: {
      getBanner(){
        $.ajax({
          url:"http://vue.studyit.io/api/getlunbo",
          type:'GET',
          dataType: "jsonP",
          success:function(data){
              console.log(data);
          },
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.mint-swipe{
  height: 200px;
  .mint-swipe-item{
    &:nth-child(1){
      background-color: lightblue;
    }
    &:nth-child(2){
      background-color: lightgreen;
    }
    &:nth-child(3){
      background-color: lightpink;
    }
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img{
    width: 60px;
    height: 60px;
  }
}

.mui-media-body{
  font-size: 13px;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>
