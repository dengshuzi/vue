//该文件专门用于创建整个应用的路由器
import { createRouter, createWebHistory } from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

//创建并暴露一个路由器
const router = new createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'guanyu',
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      }
    },
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
      meta: {
        title: '主页'
      },
      children: [
        {
          name: 'xinwen',
          path: 'news',
          component: News,
          meta: {
            isAuth: true,
            title: '新闻'
          },
          beforeEnter: (to, from ,next) => {
            console.log('独享路由守卫', to, from);
            if (to.meta.isAuth) { //判断是否序号鉴权
              if(localStorage.getItem('school') === 'lnnt1') {
                next()
              } else {
                alert('学校名不对无权限查看')
              }
            } else {
              next()
            } 
          }
        },
        {
          name: 'xiaoxi',
          path: 'message',
          component: Message,
          meta: {
            isAuth: true,
            title: '消息'
          },
          children: [
            {
              name: 'xiangqing',
              path: 'detail',
              component: Detail,
              props($route) {
                return {id: $route.query.id, title: $route.query.title}
              },
              meta: {
                isAuth: true,
                title: '详情'
              }
            }
          ]
        },
      ]
    }
  ]
})

//全局前置路由守卫——初始化的时候被调用, 每次路由切换之前被调用
/* router.beforeEach((to, from, next) => {
  console.log('前置路由守卫', to, from);
  if (to.meta.isAuth) { //判断是否序号鉴权
    if(localStorage.getItem('school') === 'lnnt1') {
      next()
    } else {
      alert('学校名不对无权限查看')
    }
  } else {
    next()
  }
}) */

//全局后置路由守卫——初始化的时候被调用, 每次路由切换之后被调用
router.afterEach((to, from) => {
  console.log('后置路由守卫', to, from);
  document.title = to.meta.title || '辽宁工业大学'
})

export default router