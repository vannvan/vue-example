import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/theme.css'
import router from './router/index.ts'
import store from './store/index.ts'

const app = createApp(App)
// 通过use 将 路由插件安装到 app 中
app.use(router)
app.use(store)
app.mount('#app')
