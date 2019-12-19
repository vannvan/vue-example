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
<<<<<<< HEAD
      path: '/ElementTable',
      component: resolve => require(['@/components/views/ElementTable'], resolve),
      meta:{
          title:'ElementTable'
=======
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
>>>>>>> ea5e9b11d9526438bc66e9d0b1bdf3d69d09c01f
      }
    }
  ]
})
