
<template>
  <div>
    <Homeheader></Homeheader>  <!-- 模板里使用Homeheader组件,:city="city"在父组件向子组件传值,是通过绑定属性形式的 -->
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
import {mapState} from 'vuex';//引入vuex提供的mapState方法,mapState方法把stroe.js中的值，赋值给我们模板
export default {
  name: "Home",
  data() {
    return {
      lastCity:"",//存储首页在未点击切换城市的城市
      swiperList: [],
      iconList:[],
      RecommendList:[],
      weekendList:[],
    }
  },
  computed:{
    ...mapState(['city'])//扩展运算符...mapState,意思是把vuex的state数据映射到计算属性里面,映射后的名字为city
  },
  components: {
    Homeheader, //注册组件(es6里键和值一样，可以直接写值)
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  mounted() {//当前路由外层包裹着keep-alive,因此该钩子只有在初始化时被执行
    this.getHomeInfo();
    this.lastCity=this.city;//把vuex传过来的城市赋值给lastCity
  },
  activated(){//该钩子keep-alive提供的,表示keep-alive 组件激活时调用。
    if(this.lastCity!==this.city){//判断如果点击切换为另一个城市,首页就会重新发送请求
        this.lastCity=this.city//再次存this.lastCity
        this.getHomeInfo()
    }
  },
  methods: {
    getHomeInfo() {
      let that=this;//注意:在外面要事先保存this,因为下面axios的方法里获取不到,作用域问题
      axios.get("api/index.json?city="+this.city).then(function(res) {
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