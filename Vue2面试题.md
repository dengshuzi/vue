# Vue面试题

## 面试题: Vue2.x生命周期

1. 有哪些生命周期:
系统自带:
```beforeCreate```
```created```
```beforeMount```
```mounted```
```beforeUpdate```
```updated```
```beforedeStroy```
```destroyed```
2. 一旦进入到页面或者组件, 会执行哪些生命周期,顺序
```beforeCreated```
```create```
```beforeMount```
```mounted```
3. 在哪个阶段有```$el```, 在哪个阶段有```$data```
```create``` 有```date```没有```el``` ```mounted```都有
4. 如果加入了```keep-alive```会多两个生命周期
```activated```, ```deactivated```
5. 如果加入了```keep-alive```, 第一次进入组件会执行哪些生命周期
```beforeCreated```
```create```
```beforeMount```
```mounted```
```activated```
6. 如果加入了```keep-alive```, 诶二次或者第N次进入组件会执行哪些生命周期
只执行一个生命周期: ```activated```

## 面试题: 谈谈你对keep-alive的了解

1. 是什么:
Vue系统自带的一个组件, 功能: 缓存组件 --> 提升性能
2. 使用场景:
缓存组件, 提升项目的性能, 具体实现比如: 首页进入到详情页, 如果用户在首页点击每次都是相同的, 那么详情页就没必要请求N次了, 直接缓存起来就可以, 当然如果点击的不是同一个, 那么就直接请求

## 面试题: v-if和v-show区别

1. 展示形式不同:
```v-if```   是创建一个Dom节点
```v-show``` 是```display:none, blck```
2. 使用场景:
初次加载```v-if```要比```v-show```好, 页面不会加载```Dom```
频换切换```v-show```要比```v-if```好, 创建和删除的开销太大了, 显示和隐藏开销较小

## 面试题: v-if和v-for优先级

```v-for```要比```v-if```优先级高
是在源码中体现的: function genElement

## 面试题: ref是什么

来获取```Dmo```的

## 面试题: nextTick是什么?

获取更新后的dom内容

## 面试题: scoped原理

1. 作用: 让样式在本组件中生效, 不影响其他组件
2. 原理: 给阶段新增自定义属性, 然后css根据属性选择器增添样式

## 面试题: 如何让CSS只在当前组件中起作用?

1. 只让css在当前组件生效
```js
<style scoped>
```

2. scss, stylus
  scss:
    npm install sass-loader sass-node --save
    ```js
    <style lang='scss' scoped>
    ```
    css 样式穿透
    父元素 /deep/子元素
  stylus:
    npm install stylus stylus-loader --save
    ```js
    <style lang='stylus' scoped>
    ```
## 面试题: vue组件之间如何传值通信

 1. 父组件 传值 子组件
  父组件:
    ```js
    <Header :msg='msg'></Header>
    ```
  子组件:
    ```js
    props: [msg]
    props: {
      msg: 数据类型
    }
    ```
 2. 子组件 传值 父组件
  子组件：
    ```js
    this.$emit('自定义事件名称', 要传的数据)
    ```
  父组件:
    ```js
    <Header @childInput='getVal'></Header>
    methods: {
      getVal(msg) {
        // msg就是子组件传递的数据
      }
    }
    ```
 3. 兄弟组件之间的传值
  通过一个中转(bus)
  A 兄弟传值:
  ```js
  import bus from '@/common/bus'
  bus.$emit("toFotter", this.msg)
  ```
  B 兄弟接收:
  ```js
  import bus from '@/common/bus'
  bus.$on('toFotter', (data) =>> {
    // data是this.msg数据
  })
  ```

## 面试题: computed, methods, watch有什么区别

1. computed vs methods区别
```
computed是有缓存的
methods没有缓存
```
2. computed vs watch区别
```
watch是监听, 数据或者路由发生了改变才可以响应(执行)
computed计算某一个属性的改变, 如果某一个值改变了, 计算属性会监听到进行返回
watch是当前监听到了数据改变了, 才会执行内部代码
```

## 面试题: props和data优先级谁高

```props ==> methods ==> data ==> computed ==> watch```

## 面试题: Vuex有哪些属性

```State, Getters, Mutations, Actions, Modules

State 类似于组件中的data, 存放数据
Getters 类似于组件中computed
Mutations 类似于组件中methods
Actions 提交Mutations的
Modules 把以上四个属性再细分, 让仓库更好管理
```

## 面试题: Vuex是单向数据流还是双向数据流

```Vuex是单向数据流```

## 面试题: Vuex中的Mutations和Actions区别

```
Mutations: 都是同步事务
Actions: 可以包含任意异步操作 
```

## 面试题: Vuex如何做持久化存储

```
Vuex本身不是持久化存储
1. 使用localStorage字节写
2. 使用vuex-persist插件
```

## 面试题: 路由模式

```
history, hash(default)带#
前端如果自己测试项目, hash
项目上线要求是history模式, 怎么办? 重定向
```

## 模式和环境变量

```
开发环境: .env.development
生产环境: .env.production
在项目中的根目录
```

## 面试题: Vue路由模式

```
路由模式有两种: history, hash
区别: 
  1. 表现形态不同
  history: http://localhost:8080
  hash: http://localhost:8080/#/
  2. 跳转请求
  history: http://localhost:8080/id ==> 发送请求
  hash: 不会发送请求
  3. 打包后前端自测要使用hash, 如果使用history会出现空白页
```

## 面试题: 介绍一下SPA以及SPA有什么缺点
```
SPA是什么? 单页面应用
缺点:
  1. SEO优化不好
  2. 性能不是特别好
```

## 面试题: Vue路径传值

```js
1. 显式
  http://localhost:8080/about?a=1
  1.1 传: 
  this.$router.push({
    path: '/about',
    query: {
      a: 1
    }
  })
  1.2 接:
  this.$route.query.a

2. 隐式:
  2.1 传:
  this.$router.push({
    name: 'About',
    params: {
      a: 1
    }
  })
  2.2 接:
  this.$route.params.a
```

## 面试题: 路由导航守卫有哪些

```
全局, 路由独享, 组件内
1. 全局
  befoerEach(to, from, next), beforeResolve(to, from, next), afterEach(to, from)
2. 路由独享
  beforeEnter
3. 组件内
  beforeRouteEnter, beforeRouteUpdate, beforeRouteLeave
  使用场景: 判断是否登录, 如果登录就next否则就跳转到登录页面
```

## 面试题: Vue动态路由

```js
场景: 详情页(文章, 商品)
router.js配置:
  {
    path: "/list",
    name: "List",
    children: [
      {
        path: "/list/:id",
        name: "Details",
        component: () => {
          import("../views/Details.vue")
        }
      }
    ],
    component: () => 
      import("../views/List.vue")
  }
```