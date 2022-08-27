<template>
  <div class="student">
    <h2>学生姓名: {{name}}</h2>
    <h2>学校性别: {{sex}}</h2>
    <h2>当前求和为 {{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑lnnt事件</button>
    <button @click="death">销毁当前Student组件的实例(vc)</button>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        name: '张三',
        sex: '男',
        number: 0
      }
    },
    methods: {
      sendStudentName() {
        //触发Student组件实例身上的lnnt事件
        this.$emit('lnnt', this.name)
        this.$emit('demo')
      },
      unbind() {
        //解绑一个自定义事件
        // this.$off('lnnt')

        //解绑多个自定义事件
        // this.$off(['lnnt', 'demo'])

        //解绑所有自定义事件
        // this.$off()
      },
      death() {
        //销毁了当前Student组件的实例, 销毁后所有Student实例的自定义事件全都不奏效
        this.$destroy()
      },
      add() {
        console.log('add回调被调用了');
        this.number++
      }
    }
  }
</script>
<style lang="less" scoped>
  .student {
    background-color: pink;
  }
</style>