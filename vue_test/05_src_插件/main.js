import { createApp } from 'vue'
import App from './App.vue'
import plugins from './plugins'
//应用插件
createApp(App).use(plugins, 1, 2, 3).mount('#app')
