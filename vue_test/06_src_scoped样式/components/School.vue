<template>
  <div class="demo">
    <h2 class="title">学校名称: {{name}}</h2>
    <h2 class="qwe">学校地址: {{address}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        name: '辽宁工业大学lnnt',
        address: '辽宁锦州'
      }
    }
  }
</script>
<style lang="less">
  .demo {
    background-color: pink;
    .qwe {
      font-size: 40px;
    }
  }
</style>