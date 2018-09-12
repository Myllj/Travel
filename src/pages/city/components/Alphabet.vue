<template>
    <ul class="list-sidebar">
      <li class="item"
      :class="{active:ActiveIndex==index}"
      v-for="(item,index) in letter"
      :key="item"
      @click="giveData(index)"
      @touchstart='touchstart'
      @touchmove='touchmove'
      @touchend='touchend'
      :ref="item">{{item}}</li>
      <!-- 几个手指触摸事件 --> 
    </ul>
</template>

<script>
  export default {
    name: 'CityAlphabet',
     props:{
      cityList:Object
    },
    data(){
      return{
        ActiveIndex:0,//默认点中的index(给点中的添加active)
        touchState:false,//定义一个开关,判断手指是否触碰
        startY:0//右侧A字母距离顶部的距离(初始值)
      }
    },
    computed:{
      letter(){
        let letter=[];
        for(let i in this.cityList){//把拿到的cityList再进行遍历
          letter.push(i)
        }
        return letter
      }
    },
    updated(){//数据更新后调用该钩子
       this.startY=this.$refs['A'][0].offsetTop;//获取右侧A字母距离顶部的距离
    },
    methods:{
      //传值给兄弟组件List.vue,要先传给父组件,由父组件作为桥梁负责传值给List.vue
      giveData(index,e){
        var e = e || event;//事件对象的兼容写法,直接写e,chrom取不到值
        console.log(e)
        this.$emit('change',e.target.innerText)//向父组件传在该子组件点中的值
        this.ActiveIndex=index
      },
      touchstart(){
        this.touchState=true
      },
      touchmove(e){
        let touchY=e.touches[0].clientY-79;//表示手指拖动事件Dom元素在Y轴拖动的距离,79为header和search的高度和
        let index=Math.floor((touchY-this.startY)/20);//可以得到点中的是哪个字母（20为每个字母的高度）
         if(index>=0&&index<this.letter.length){//判断index的值范围，才触发下面的方法
             this.$emit('change',this.letter[index])
         }
      },
      touchend(){
          this.touchState=false
      }
    }
  }
</script>

<style scoped lang='stylus' type='text/stylus'>
  @import "~styles/variables.styl"
  .active
    background:red
    color:#ffffff
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
