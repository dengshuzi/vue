<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名: {{name}}</h2>
    <h2>学校性别: {{sex}}</h2>
    <h2>学校年龄: {{myAge+1}}</h2>
    <button @click="updateAge">点我年龄+1</button>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        msg: '我是一名辽宁工业大学的学生',
        myAge: this.age
      }
    },
    methods: {
      updateAge() {
        this.myAge++
      }
    },
    //简单声明接受
    // props: ['name', 'sex', 'age']

    //接受的同时对数据进行类型限制
    // props: {
    //   name: String,
    //   sex: String,
    //   age: Number
    // }

    //接受的同时对数据: 进行类型限制 + 默认值的指定 + 必要性的限制
    props: {
      name: {
        type: String, //name的类型是字符串
        required: true  //name是必要的
      },
      age: {
        type: Number,
        default: 99 //默认值
      },
      sex: {
        type: String,
        required: true
      }
    }
  }
</script>