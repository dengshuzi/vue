<template>
  <div>
    <h1>当前求和为: {{sum}}</h1>
    <h1>当前求和放大10倍为: {{bigSum}}</h1>
    <h3>我在{{school}}, 学习{{subject}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为基数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  export default {
    name: 'Count',
    data() {
      return {
        n: 1, //用户选择的数字
      }
    },
    methods: {
      increment () {
        this.$store.commit('JIA', this.n);
      },
      decrement () {
        this.$store.commit('JIAN', this.n);
      },
      incrementOdd () {
        this.$store.dispatch('jiaOdd', this.n);
      },
      incrementWait () {
        this.$store.dispatch('jiaWait', this.n);
      }
    },
    computed: {
      //靠程序员亲自去写计算属性
      /* he() {
        return this.$store.state.sum
      },
      xuexiao() {
        return this.$store.state.school
      },
      xueke() {
        return this.$store.state.subject
      }, */

      //借助mapState生成计算属性, 从state中读取数据(对象写法)
      // ...mapState({
      //   he: 'sum',
      //   xuexiao: 'school',
      //   xueke: 'subject'
      // }),

      //借助mapState生成计算属性, 从state中读取数据(数组写法)
      ...mapState(['sum','school', 'subject']),

      /* ***************************** */
      
      //靠程序员亲自去写计算属性
      // bigSum() {
      //   return this.$store.getters.bigSum
      // },
      
      //借助mapGetters生成计算属性, 从state中读取数据(对象写法)
      // ...mapGetters({bigSum: 'bigSum'}),

      //借助mapGetters生成计算属性, 从state中读取数据(数组写法)
      ...mapGetters(['bigSum'])
    },
    mounted() {
    }
  }
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>