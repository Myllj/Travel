
<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
      class="item border-bottom"
      tag="li"
      v-for="item in RecommendList"
      :key="item.id"
      :to="{name:'Details',params:{id:item.id}}">  <!-- 跳到Details页面(Details是路由里定义的name值),并传个参数id过去 -->
        <img class="item-img"
             :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>

  export default({
    name:'HomeRecommend',
    props:{
      RecommendList:Array
    },
    data () {
      return {
        // RecommendList:[{
        //   id:"0001",
        //   imgUrl:"http://img1.qunarzz.com/sight/p0/1809/5a/5a830e3948493224a3.water.jpg_200x200_8d0fd369.jpg",
        //   title:"世界之窗",
        //   desc:"深圳世界之窗成人票（刷身份证直接入园）"
        // },{
        //   id:"0002",
        //   imgUrl:"http://img1.qunarzz.com/sight/p0/1807/99/992c99c98928c509a3.water.jpg_200x200_fc4df6ea.jpg",
        //   title:"深圳欢乐谷",
        //   desc:"深圳欢乐谷夜场成人票（含玛雅水公园）"
        // },{
        //   id:"0003",
        //   imgUrl:"http://img1.qunarzz.com/sight/p0/1809/5a/5a830e3948493224a3.water.jpg_200x200_8d0fd369.jpg",
        //   title:"世界之窗",
        //   desc:"深圳世界之窗成人票（刷身份证直接入园）"
        // },{
        //   id:"0004",
        //   imgUrl:"http://img1.qunarzz.com/sight/p0/1807/99/992c99c98928c509a3.water.jpg_200x200_fc4df6ea.jpg",
        //   title:"深圳欢乐谷",
        //   desc:"深圳欢乐谷夜场成人票（含玛雅水公园）"
        // },{
        //   id:"0005",
        //   imgUrl:"http://img1.qunarzz.com/sight/p0/1809/5a/5a830e3948493224a3.water.jpg_200x200_8d0fd369.jpg",
        //   title:"世界之窗",
        //   desc:"深圳世界之窗成人票（刷身份证直接入园）"
        // },{
        //   id:"0006",
        //   imgUrl:"http://img1.qunarzz.com/sight/p0/1807/99/992c99c98928c509a3.water.jpg_200x200_fc4df6ea.jpg",
        //   title:"深圳欢乐谷",
        //   desc:"深圳欢乐谷夜场成人票（含玛雅水公园）"
        // }]
      }
    }
  })
</script>

<style lang="stylus" scoped>
.title
    padding-left .2rem
    margin-top .2rem
    line-height .8rem
    background #ccc
    text-align .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
      .item-button
        line-height .44rem
        margin-top .2rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #fff
</style>