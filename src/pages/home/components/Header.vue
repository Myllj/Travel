
<template>
  <div class="header">
      <div class="header-left">
          <span class="iconfont back-icon">&#xe624;</span>
      </div>
      <div class="header-input">
         <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
      <div class="header-right">
       <!-- 北京 -->
       {{this.city}}
         <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
      </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex';//引入vuex提供的mapState方法,mapState方法把stroe.js中的值，赋值给我们模板
  export default({
    name:'Homeheader', //组件名称，自定义的，随便怎么起名字
    computed:{
      ...mapState(['city'])//扩展运算符...mapState,意思是把vuex的state数据映射到计算属性里面,映射后的名字为city,所以上面直接用this.city,就不用写this.$store.state.city这个长串了
    }
  })
</script>

<!--lang="stylus"是引用stylus的css书写格式,'scoped'使该css只作用于当前组件，不影响其他组件样式; -->
<style lang="stylus" scoped type="text/stylus">

// "variables.styl"为公共的样式文件,在样式里引用样式文件,"import"前要加"@"符号
//"@"代表"src"目录,但是在style里使用需在前添加"~"波浪符号,'stules'代表'src/assets/styles'目录(在webpack.base.conf.js文件里配置好的),所以下方路径可以写成"~styles/xxx.xx"
@import "~styles/variables.styl" 

  .header
    display:flex 
    line-height:$headerHeight
    background:$bgColor 
    color:#fff
    .header-left
      width:.64rem 
      float left
      text-align:center
      .back-icon
        font-size .4rem
    .header-input
      flex:1
      height:.64rem
      line-height:.64rem
      margin-top:.12rem
      margin-left:.2rem
      padding-left:.2rem
      background:#fff
      border-radius:.1rem
      box-sizing:border-box
      color:#ccc
    .header-right
      min-width:1.04rem
      padding 0 .1rem
      float:right
      text-align:center
      color #fff
      .arrow-icon
        font-size:.24rem
        margin-left:-.05rem;

</style>