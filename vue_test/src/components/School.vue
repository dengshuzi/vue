<template>
  <div class="school">
    <h2 class="title">学校名称: {{name}}</h2>
    <h2>学校地址: {{address}}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
  export default {
    name: 'School',
    props: ['getSchoolName'],
    data() {
      return {
        name: '辽宁工业大学',
        address: '辽宁锦州'
      }
    },
    methods: {
      sendSchoolName() {
        this.getSchoolName(this.name)
      }
    }
  }
</script>
<style lang="less" scoped>
  .school {
    background-color: skyblue;
    padding: 5px;
    margin-top: 30px;
  }
</style>