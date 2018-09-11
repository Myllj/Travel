<template>
<div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page,index) in pages" :key="index">
      <div class="icon" v-for="item in page">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
      </swiper-slide>
  </swiper>
  </div>
</template>

<script>
export default({
    name:'HomeIcons',
    props:{
      iconList:Array
    },
    data () {
      return {
         swiperOption: {
          autoplay: false
        }
      }
    },
    computed:{
      pages(){//计算icon的个数，如果超过8个,自动添加到下一页
        let pages=[]
        this.iconList.forEach((item,index) => {
           let page=Math.floor(index/8);
            if(!(pages[page])){//判断下一页如果没有数据，定义为一个空数组
              pages[page]=[]
            }
            pages[page].push(item)
        });
         return pages
      }
    }

   
  })
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
    height 0
    padding-bottom 50%
    padding-top: .2rem
    box-sizing border-box
  .icon
    overflow:hidden
    float:left
    width:25%
    height:0
    padding-bottom:25%
    position:relative
    .icon-img
        position: absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        box-sizing:border-box
        podding:.1rem
        .icon-img-content
          height:100%
          display:block
          margin:0 auto
    .icon-desc
      position:absolute
      left:0
      right:0
      bottom:0
      height:.44rem
      line-height:.44rem
      text-align:center
      color:$darkTextColor
      ellipsis()
      
</style>