<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch :cityList="cityList"></CitySearch>
    <CityList :hotCity="hotCity" :cityList="cityList" :letter="letter"></CityList>
    <!-- change事件是在子组件定义的,命名自定义，但要和子组件"$emit(xxx事件名)"方法里的事件名相同 -->
    <CityAlphabet :cityList="cityList" @change="getData"></CityAlphabet>
  </div>
</template>


<script>
import CityHeader from "./components/Header"
import CitySearch from "./components/Search"
import CityList from "./components/List"
import CityAlphabet from "./components/Alphabet"
import axios from 'axios'
export default {
  name:"City",
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data(){
    return {
      hotCity:[],
      cityList:{},
      letter:""//向子组件传递的List.vue传递的值
      
    }
  },
  mounted(){
    this.getHotCity()
  },
  methods:{
    getHotCity(){
      let that=this;
      axios.get('api/city.json').then(function(res){
            res=res.data;
        let data=res.data;
           if(res.ret&&data){
              that.hotCity=data.hotCities;
              that.cityList=data.cities;
           }
      }).catch(function(err){
        console.log('请求错误,请检查原因')
      })
    },
    getData(letter){
     this.letter=letter;
    }
  }
}

</script>
<style>

</style>
