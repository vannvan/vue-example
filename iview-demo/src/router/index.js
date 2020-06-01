import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '*',
      redirect: '/HelloWorld'
    },
    {
      path: '/Scroll',
      component: resolve => require(['@/components/views/Scroll.vue'], resolve),
      meta: {
        title: 'Scroll'
      }
    },
    {
      path: '/menu',
      component: resolve => require(['@/components/common/menu.vue'], resolve),
      children: [{
          path: '/HelloWorld',
          component: resolve => require(['@/components/views/HelloWorld'], resolve),
          meta: {
            title: 'helloWorld'
          }
        },
        {
          path: '/iviewTable',
          component: resolve => require(['@/components/views/iviewTable'], resolve),
          meta: {
            title: 'iview合并表格(跨行情况)'
          }
        },
        {
          path: '/iviewTable1',
          component: resolve => require(['@/components/views/iviewTable1'], resolve),
          meta: {
            title: 'iview合并表格(跨行情况)'
          }
        },

        {
          path: '/iviewTableCount',
          component: resolve => require(['@/components/views/iviewTableCount'], resolve),
          meta: {
            title: 'iview合并合计'
          }
        },
        {
          path: '/tableInputAndSelect',
          component: resolve => require(['@/components/views/tableInputAndSelect'], resolve),
          meta: {
            title: 'iview表格input'
          }
        },
        {
          path: '/JsxTable',
          component: resolve => require(['@/components/views/JsxTable'], resolve),
          meta: {
            title: 'JSX表格'
          }
        },

      ]
    },

  ]
})
