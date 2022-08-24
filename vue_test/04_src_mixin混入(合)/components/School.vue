<template>
  <div>
    <h2 @click="showName">学校名称: {{name}}</h2>
    <h2>学校地址: {{address}}</h2>
  </div>
</template>

<script>
  //引入一个混合
  // import {mixin, minxin2} from '../mixin'
  export default {
    name: 'School',
    data() {
      return {
        name: '辽宁工业大学',
        address: '辽宁锦州',
        x: 666
      }
    },
    // mixins: [mixin, minxin2]
  }
  
</script>