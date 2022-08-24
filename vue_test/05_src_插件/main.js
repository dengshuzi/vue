// //引入Vue
// import Vue from 'vue'
// //引入App
// import App from './App.vue'
// //关闭Vue的生产提示
// Vue.config.productionTip = false
// //创建vm
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })



import { createApp } from 'vue'
import App from './App.vue'
import plugins from './plugins'
//应用插件
createApp(App).use(plugins, 1, 2, 3).mount('#app')
