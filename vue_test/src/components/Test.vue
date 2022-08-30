<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition> -->
    <!-- <transition name="hello" :appear="true"> -->
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data() {
      return {
        isShow: true
      }
    }    
  }
</script>

<style scoped>
  h1 {
    background-color: orange;
  }
  /* .v-enter-active { */
  .hello-enter-active {
    animation: lnnt 0.5s linear;
  }
  /* .v-leave-active { */
  .hello-leave-active {
    animation: lnnt 0.5s linear reverse;
  }
  @keyframes lnnt {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>