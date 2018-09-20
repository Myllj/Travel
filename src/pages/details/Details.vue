
<template>
  <div>
    <DetailsBanner :bannerImg="bannerImg" :bannerName="bannerName" :gallaryImgs="gallaryImgs"></DetailsBanner>
    <DetailHeader></DetailHeader>
    <DetailList :list="list"></DetailList>
    <div class="box"></div>
  </div>
</template>

<script>
import DetailsBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/list";
import axios from "axios"; 
export default {
  name: "Details",
  components: {
    DetailsBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      bannerImg:"",
      bannerName:"",
      gallaryImgs:[],
      list: [
       
      ]
    };
  },
  mounted(){
    this.getDetailsInfo();  
  },
  methods:{
    getDetailsInfo() {
      let that=this;//注意:在外面要事先保存this,因为下面axios的方法里获取不到,作用域问题
      axios.get("api/detail.json",{
        params:{//发送请求并携带参数,
          id:this.$route.params.id//获取当前路由(url)的id;把该值作为参数
        }
      }).then(function(res) {
         console.log(res)
          res=res.data
          let data = res.data;
        if (res.ret && data) {
            that.bannerName=data.sightName;
            that.bannerImg=data.bannerImg;
            that.gallaryImgs=data.gallaryImgs;
            that.list=data.categoryList;


        }
      }).catch(function(err){//捕获错误
        console.log('请求错误,请检查原因')
      })
    }
  
  }
};
</script>

<style lang="stylus" scoped>

.box {
  width: 100%;
  height: 50rem;
}
</style>