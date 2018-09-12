<template>
<!-- ref="wrapper"能帮助我们获得该Dom元素 -->
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <button class="button">北京</button>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="item in hotCity" :key="item.id">
              <button class="button">{{item.name}}</button>
            </div>
          </div>
        </div>
        <div class="area" v-for="(item,key) in cityList" :key="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div class="item border-bottom" v-for="option in item" :key="option.id">{{option.name}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

  import Bscroll from 'better-scroll'//引入better-scroll'插件，使得城市列表部分可以上下滚动
  export default {
    name: 'CityList',
    props:{
      hotCity:Array,
      cityList:Object
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper)//this.$refs.wrapper获得在模板绑定ref属性的Dom元素
    }
  }
</script>

<style scoped lang='stylus' type='text/stylus'>
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:after
      border-color #ccc
  .list
    position absolute
    overflow hidden
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          width 90%
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
          background #fff
    .item-list
      .item
        line-height .68rem
        padding-left .24rem
</style>
