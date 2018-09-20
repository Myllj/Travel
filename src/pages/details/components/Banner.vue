<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{this.bannerName}}</div>
        <div class="banner-number">
          <span class="iconfont icon-tupian"></span>
          39
        </div>
      </div>
    </div>
  <FadeAnimation>
      <gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallarySlose"></gallary>
  </FadeAnimation>
  </div>
</template>
<script>
import gallary from "../../../commom/gallary/gallary";
import FadeAnimation from "../../../commom/fade/Fade";
export default {
  name: "DetailsBanner",
  data() {
    return {
      showGallary: false
    };
  },
  props: {
    bannerImg:String,
    bannerName:String,
    gallaryImgs:Array
  },
  components: {
    gallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick: function() {
      this.showGallary = true;
    },
    handleGallarySlose: function() {
      this.showGallary = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      padding: 0 0.4rem;
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      border-radius: 0.2rem;
      border-radius: 0.2rem;
      background-color: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>

