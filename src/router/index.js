import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({ 
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve =>require(['../components/Index.vue'],resolve),
    },
    {
      path:'/api',
      component:resolve =>require(['../components/Api.vue'],resolve)
    },
    {
      path:'/component',
      component:resolve =>require(['../components/Component.vue'],resolve)
    },
    // {//重定向
    //   path: '*', 
    //   redirect: '/' 
    // }
  ]
})
