<template>
  <div>
    <h2 @click="showName">学生姓名: {{name}}</h2>
    <h2>学校性别: {{sex}}</h2>
  </div>
</template>

<script>
  // import {mixin, minxin2} from '../mixin'
  export default {
    name: 'Student',
    data() {
      return {
        name: '张三',
        sex: '男'
      }
    },
    // mixins: [mixin, minxin2]
  }
</script>