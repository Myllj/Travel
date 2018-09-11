import Vue from 'vue' //引入Vue
import Router from 'vue-router' //引入vue-router
import Home from '@/pages/home/Home' //引入Home组件
import City from '@/pages/city/City'


Vue.use(Router) //Vue全局使用Router

/*
组件名命名首写字母建议都大写;
"/"代表根路径,要访问同级目录文件夹下的组件,直接"/xxx组件名"的格式访问即可;
*/
export default new Router({
  //配置路由，这里是个数组
  routes: [//注意:'routes'千万别要写成'routers',多了一个字母'r'不会报错,但路由失效
    {
      path: '/',  //链接路径
      name: 'Home',  //路由名称，
      component: Home //对应的组件模板
     },{
       path:"/city",
       name:"City",
       component:City
     }
    
  ]
})
