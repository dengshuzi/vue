<template>
  <div>
    <h1>一个人的信息</h1>
    <input type="text" v-model="person.firstName">
    <br>
    <input type="text" v-model="person.lastName">
    <br>
    <span>全名: {{person.fullName}}</span>
    <br>
    全名: <input type="text" v-model="person.fullName">
  </div>
</template>

<script>
  import { reactive, computed } from 'vue'
  export default {
    name: 'Demo',
    // vue2中的computed
    /* computed: {
      fullName() {
        return this.person.firstName + '-' +  this.person.lastName 
      }
    }, */
    setup() {
      // 数据
      let person = reactive({
        firstName: '张',
        lastName: '三'
      })

      // 计算属性——简写(没有考虑计算属性被修改的情况)
      /* person.fullName = computed(() => {
        return person.firstName + '-' + person.lastName
      }) */

      // 计算属性——完整写法(考虑读和写)
      person.fullName  = computed({
        get(){
          return person.firstName + '-' + person.lastName
        },
        set(value) {
          const nameArr = value.split('-')
          person.firstName = nameArr[0]
          person.lastName = nameArr[1]
        }
      })

      // 方法

      // 返回一个对象(常用)
      return {
        person
      }
    }
  }
</script>