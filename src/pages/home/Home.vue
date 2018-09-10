
<template>
  <div>
    <Homeheader></Homeheader>  <!-- 模板里使用Homeheader组件 -->
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
  </div>
</template>

<script>
//引入Homeheader组件，'Homeheader'为引入的组件名，自己自定义的名字，可以随意起，不一定要与'Header.vue'组件里的name一样,但是注册的组件名与模板里使用的标签名必须与之一致；
import Homeheader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
  export default({
    name:'Home',
    components:{
      Homeheader,//注册组件(es6里键和值一样，可以直接写值)
      HomeSwiper,
      HomeIcons
    }

  })
</script>

<style>

</style>