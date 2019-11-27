// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios';
import "babel-polyfill";
import store from '@/store/main.js';
//自定义全局mixin
import mixins from '@/components/common/mixins'
Vue.mixin(mixins)
//自定义全局指令
import directive from '@/components/common/directive'
Vue.use(directive)
//自定义组件
import WUI from '../packages/index'
Vue.use(WUI)

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

//引入nprogress页面加载进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入


// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })


router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

Vue.config.productionTip = false
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
