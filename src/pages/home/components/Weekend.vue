<template>
  <div>
    <div class='title'>周末去哪儿</div>
    <ul>
      <li class='item border-bottom' v-for='item in weekendList' :key='item.id'>
        <div class='item-img-wrapper'>
          <img class='item-img'
               :src='item.imgUrl'>
        </div>
        <div class='item-info'>
          <p class='item-title'>{{item.title}}</p>
          <p class='item-desc'>{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    data() {
      return {
         weekendList:[{
          id:"0001",
          imgUrl:"http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg",
          title:"当地人游深圳",
          desc:"当地人带你发现不一样的深圳"
        },{
          id:"0002",
          imgUrl:"http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg",
          title:"欢乐长隆",
          desc:"世界欢乐汇聚长隆"
        },{
          id:"0003",
          imgUrl:"http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg",
          title:"当地人游深圳",
          desc:"当地人带你发现不一样的深圳"
        },{
          id:"0004",
          imgUrl:"http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg",
          title:"欢乐长隆",
          desc:"世界欢乐汇聚长隆"
        }]
      }

    }
  }
</script>

<style scoped lang='stylus' type='text/stylus'>
  @import '~styles/mixins.styl'
  .title
    padding-left .2rem
    line-height .8rem
    background #ccc
    text-align .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
</style>
