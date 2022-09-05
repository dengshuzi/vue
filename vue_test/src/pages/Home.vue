<template>
  <h2>我是Home的内容</h2>
</template>

<script>
  export default {
    name: 'About',
    beforeDestroy() {
      console.log('Home组件即将被销毁了');
    },
    mounted() {
      console.log('Home组件挂在完毕了', this);
      window.homeRoute = this.$route
      window.homeRouter = this.$router
    }
  }
</script>