<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList :hotCity="hotCity" :cityList="cityList"></CityList>
    <CityAlphabet :cityList="cityList"></CityAlphabet>
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
      cityList:{}
      
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
    }
  }
}

</script>
<style>

</style>
