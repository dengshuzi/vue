<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link> -->
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item " active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
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