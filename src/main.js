// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/*项目的入口文件，项目需要引入的文件可以在这里引入*/
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick' //引入解决移动端点击延迟300ms的fastClick文件（该文件是需在命令行用npm安装）
import VueAwesomeSwiper from 'vue-awesome-swiper' //引用'vue-awesome-swiper'轮播插件
import './assets/styles/reset.css' //引入css默认初始化文件
import './assets/styles/border.css' //引入解决移动端1px问题的border.css文件
import './assets/styles/iconfont.css' //引入字符图标css
import 'swiper/dist/css/swiper.css' //引用'vue-awesome-swiper'插件的css文件

Vue.config.productionTip = false
fastClick.attach(document.body) //使用fastClick，把其绑定到document.body上
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
