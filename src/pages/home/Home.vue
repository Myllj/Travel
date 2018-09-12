
<template>
  <div>
    <Homeheader :city="city"></Homeheader>  <!-- 模板里使用Homeheader组件,:city="city"在父组件向子组件传值,是通过绑定属性形式的 -->
    <HomeSwiper :swiperList="swiperList"></HomeSwiper>
    <HomeIcons :iconList="iconList"></HomeIcons>
    <HomeRecommend :RecommendList="RecommendList"></HomeRecommend>
    <HomeWeekend :weekendList="weekendList"></HomeWeekend>
  </div>
</template>

<script>
//引入Homeheader组件，'Homeheader'为引入的组件名，自己自定义的名字，可以随意起，不一定要与'Header.vue'组件里的name一样,但是注册的组件名与模板里使用的标签名必须与之一致；
import Homeheader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios"; //在首页发请求，'axios'就在该组件下引入
export default {
  name: "Home",
  data() {
    return {
      swiperList: [],
      iconList:[],
      RecommendList:[],
      weekendList:[],
      city:""
    }
  },
  components: {
    Homeheader, //注册组件(es6里键和值一样，可以直接写值)
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      let that=this;//注意:在外面要事先保存this,因为下面axios的方法里获取不到,作用域问题
      axios.get("api/index.json").then(function(res) {
        res = res.data;
        let data = res.data;
        if (res.ret && data) {
          that.swiperList = data.swiperList;
          that.iconList = data.iconList;
          that.RecommendList=data.recommendList;
          that.weekendList=data.weekendList;
        }
      }).catch(function(err){//捕获错误
        console.log('请求错误,请检查原因')
      })
    }
  }
};
</script>

<style>
</style>