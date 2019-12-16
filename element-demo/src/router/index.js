import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/Index'
    },
    {
      path:'/Index',
      component: resolve => require(['@/components/Index.vue'], resolve),
    },
    {
      path: '/HelloWorld',
      component: resolve => require(['@/components/views/HelloWorld'], resolve),
      meta:{
          title:'helloWorld'
      }
    },
    {
      path: '/TimeAxis',
      component: resolve => require(['@/components/views/TimeAxis'], resolve),
      meta:{
          title:'TimeAxis'
      }
    },
    {
      path: '/TimeAxis1',
      component: resolve => require(['@/components/views/TimeAxis1'], resolve),
      meta:{
          title:'TimeAxis1'
      }
    }
  ]
})
