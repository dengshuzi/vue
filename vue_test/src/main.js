import { createApp } from 'vue'
// App
import App from './App.vue'
// 引入ElementUI组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
