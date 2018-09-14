import Vue from 'vue'
import Vuex from 'vuex'//引入Vuex

Vue.use(Vuex) //使用Vuex

export default new Vuex.Store({
  state: {//状态对象
    city: localStorage.city||'上海'//给当前city默认先从localStorage里去取值
  },
  mutations: {//修改状态
    changeCity(current,New){//两个参数,current为当前值,New为最新值(改变后子组件传过来得值)
      this.state.city=New
      localStorage.city=New //城市点击改变同时存localStorage
    }
  }

})