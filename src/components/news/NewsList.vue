<template>
    <div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
          <a href="javascript:">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
              <h1>{{item.title}}</h1>
              <p class='mui-ellipsis'>
                <span>发表时间：{{item.add_time}}</span>
                <span>点击：{{item.click}}</span>
              </p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:">
            <img class="mui-media-object mui-pull-left" src="../../images/menu2.png">
            <div class="mui-media-body">
              <h1>木屋</h1>
              <p class='mui-ellipsis'>
                <span>发表时间：2019-08-09 12：22：33</span>
                <span>点击：3次</span>
              </p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:">
            <img class="mui-media-object mui-pull-left" src="../../images/menu2.png">
            <div class="mui-media-body">
              <h1>CBD</h1>
              <p class='mui-ellipsis'>
                <span>发表时间：2019-08-09 12：22：33</span>
                <span>点击：3次</span>
              </p>
            </div>
          </a>
        </li>

      </ul>
    </div>
</template>

<script>
  import $ from 'jquery'
  import Toast from 'mint-ui'
    export default {
        name: "NewsList",
      data(){
          return{
            newsList:[]
          }
      },
      created(){
          this.getNewsList();
      },
      methods:{
          //请求获取新闻列表
          getNewsList() {
            //   var self = this;
            //   $.ajax({
            //     url:'http://192.168.1.8:8080/yjy/np?requestType=get',
            //     // url:'http://oc.imcoming.com/ok',
            //     type : 'POST',
            //     contentType:"application/json",
            //     data:JSON.stringify({
            //       url: "http://vue.studyit.io/api/getnewslist"
            //     }),
            //     dataType:'JSONP',
            //     success:function (res) {
            //       if (res.body.status === 0) {
            //         self.newsList = res.result.body.data;
            //         console.log(self.newsList)
            //       }else {
            //         console.log(err.message)
            //       }
            //     }
            //   })
            this.$http.get(
              'http://www.escook.cn:3000/api/getnewslist',)
              // {url: "http://www.escook.cn:3000/api/getnewslist"},
              // // {JSON.stringify({"url": "http://vue.studyit.io/api/getnewslist"})},
              // {emulateJSON:true})
            .then(result => {
              if (result.body.status === 0) {
                this.newsList = result.body.data;
                console.log(this.newsList)
              } else {
                Toast("获取新闻列表失败")
              }
            })
          }
      }
    }
</script>

<style lang="scss" scoped>
.mui-table-view{
  li{
    h1{
      font-size: 14px;
    }
    .mui-ellipsis{
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }

  }
}
</style>
