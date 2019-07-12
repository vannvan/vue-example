import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/HelloWorld'
    },
    {
      path:'/menu',
      component: resolve => require(['@/components/common/menu.vue'], resolve),
      children:[
        {
          path: '/HelloWorld',
          component: resolve => require(['@/components/views/HelloWorld'], resolve),
          meta:{
              title:'helloWorld'
          }
        },
        {
          path: '/iviewTable',
          component: resolve => require(['@/components/views/iviewTable'], resolve),
          meta:{
              title:'iview合并表格'
          }
        },
        {
          path: '/iviewTableCount',
          component: resolve => require(['@/components/views/iviewTableCount'], resolve),
          meta:{
              title:'iview合并合计'
          }
        }
      ]
    },

  ]
})
