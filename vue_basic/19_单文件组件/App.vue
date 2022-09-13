<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
  //引入组件
  import {School, Student} from './'
import Student from './Student.vue';

  export default {
    name: 'App',
    components: {
    School,
    Student,
    Student
}
  }
</script>
