import { createApp } from 'vue'
// App
import App from './App.vue'
// 引入路由器
import router from './router'

createApp(App).use(router).mount('#app')
