<template>
  <div>
    <h1 v-text="message" ref="tittle"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
  //引入School组件
  import School from './components/School'
  export default {
    name: 'App',
    components: { School },
    data() {
      return {
        message: 'hello'
      }
    },
    methods: {
      showDOM() {
        //真实DOM元素
        console.log(this.$refs.tittle);
        //真实DOM元素
        console.log(this.$refs.btn);
        //School组件的实例对象(vc)
        console.log(this.$refs.sch);
      }
    }
  }
</script>