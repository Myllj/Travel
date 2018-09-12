<template>
    <ul class="list-sidebar">
      <li class="item" v-for="(item,key) in cityList" :key="key">{{key}}</li>
    </ul>
</template>

<script>
  export default {
    name: 'CityAlphabet',
     props:{
      cityList:Object
    },
  }
</script>

<style scoped lang='stylus' type='text/stylus'>
  @import "~styles/variables.styl"
  .list-sidebar
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      text-align center
      line-height .4rem
      color $bgColor
</style>
