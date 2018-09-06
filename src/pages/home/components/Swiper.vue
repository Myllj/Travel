
<template>
<div class="wrap">
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="item of swiperList">
      <img 
      class="swiper-img" 
      :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
  export default({
    name:'HomeSwiper',
    data(){
        return {
          swiperOption:{
            pagination:".swiper-pagination",
            loop: true,
            autoplay:3000
          },
          swiperList:[{
            id:"0001",
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1808/59/371af39a4ca5702.jpg_750x200_1a9cfe57.jpg"
          },{
            id:"0002",
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1805/e8/14b75b1c81fbe702.jpg_750x200_e6d4f1f1.jpg"
          }]
        }
    }
  })
</script>

<style lang="stylus" scoped>
//这个写法指的是"wrap"下所有带有"swiper-pagination-bullet-active"类的分页器背景颜色改变,不受'scoped'影响，该样式可以作用于所有组件
.wrap >>> .swiper-pagination-bullet-active 
    background #fff !important
.wrap
  overflow:hidden
  width:100%
  height:0
  padding-bottom:31.25%
  .swiper-img
    width:100%

</style>