<template>
  <div class="container" @click="handleContainerClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="swiperImg" :src="item">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "gallary",
  props: {
    imgs: {
      type: Array,
      default: function() {//默认值,如果没接收到数据,默认取得值
        return ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg', 'http://img1.qunarzz.com/sight/p0/1508/2f/e615bc3c8e0cf46d9fb92c58ac305f45.water.jpg_200x200_e4e69a48.jpg'];
      }
    }
  },
  data: function() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observeParents: true,
        observer: true
      }
    };
  },
  methods: {
    handleContainerClick: function() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="stylus" scoped>
.container
  display: flex;
  z-index: 2;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  .wrapper
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    .swiperImg 
      width: 100%;
      height:3.3rem;
    .swiper-pagination
      color: white;
      bottom: -1rem;
</style>
<style lang="stylus">
.container
  .swiper-container
    overflow: visible;
</style>
