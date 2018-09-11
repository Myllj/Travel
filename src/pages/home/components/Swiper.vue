
<template>
<div class="wrap">
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="item in swiperList" :key="item.id">
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
     props: {//接收父组件传过来的值
      swiperList: Array
    },
    data(){
        return {
          swiperOption:{
            pagination:".swiper-pagination",
            loop: true,
            autoplay:3000
          }
        }
    },
  })
</script>

<style lang="stylus" scoped>
//这个写法指的是"wrap"下所有带有"swiper-pagination-bullet-active"类的分页器背景颜色改变,不受'scoped'影响，该样式可以作用于所有组件
.wrap >>> .swiper-pagination-bullet-active 
    background #fff !important
.wrap
  overflow:hidden
  width:100%
  // height:0
  // padding-bottom:31.25%
  height:2rem
  .swiper-img
    width:100%
    height:2rem
   

</style>