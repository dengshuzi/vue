import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
//引入插件
import vueResource from 'vue-resource'
const app = createApp(App)
app.config.globalProperties.$bus = new mitt();
// app.use(vueResource)
app.mount('#app')
