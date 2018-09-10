import Vue from 'vue' //引入Vue
import Router from 'vue-router' //引入vue-router
import Home from '@/pages/home/Home' //引入Home组件

Vue.use(Router) //Vue全局使用Router

/*
组件名命名首写字母建议都大写;
"/"代表根路径,要访问同级目录文件夹下的组件,直接"/xxx组件名"的格式访问即可;
*/
export default new Router({
  routes: [   //配置路由，这里是个数组
    {
      path: '/',  //链接路径
      name: 'Home',  //路由名称，
      component: Home //对应的组件模板
     }
    
  ]
})
