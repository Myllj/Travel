<template>
<div>
    <div class="search">
      <input v-model="keyWord" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" v-show="keyWord">
        <ul>
            <li class="search-item border-bottom" v-for="item in searchList" :key="item.id" @click="CityClick(item.name)">{{item.name}}</li>
            <li class="search-item border-bottom" v-show="!searchList.length">没有找到匹配得选项</li>
        </ul>
    </div>
</div>
</template>

<script>
    import {mapMutations } from 'vuex';
    export default {
        name: 'CitySearch',
        props:{
            cityList:Object
        },
        data(){
            return{
                    keyWord:'',//搜索框关键词
                    searchList:[]
            }
        },
        watch:{
            keyWord(){
                let result=[];
                if(this.keyWord==""){//如果搜索栏为空就清空searchList
                    this.searchList=[];
                    return
                }
                for(let i in this.cityList){//循环的得到得数据对象
                    this.cityList[i].forEach(val => {//再循环数据对象里得数组
                        if(val.spell.indexOf(this.keyWord)>-1||val.name.indexOf(this.keyWord)>-1){//判断每个对象里得value值是否与搜索栏得匹配
                            result.push(val)
                        }
                    });
                }
                this.searchList=result
            }
        },
         methods:{
          CityClick(city){
            //this.$router.push('/')//Vue Router的编程试导航,此时跳回首页
            this.changeCity(city);//上一句注释的功能与该句一样,但该写法简化了,因为下面 ...mapMutations(['changeCity'])
            this.$router.push('/')
     aa
    
    },
         ...mapMutations(['changeCity'])//...mapMutation把本组件的mutations映射到changeCity方法里(changeCity在mutations里)
  }
    }
</script>

<style scoped lang='stylus' type='text/stylus'>
  @import "~styles/variables.styl"
.search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      padding 0 .1rem
      line-height .62rem
      text-align center
      color #666
      border-radius .06rem
.search-content
    position:absolute
    z-index:9999
    top:1.58rem
    left:0
    right:0
    bottom:0
    background: #eee
    .search-item
        height .68rem
        line-height .68rem
        color balck
        padding-left .1rem 
    .border-bottom
        border-bottom:.01rem solid #cccccc57

</style>
