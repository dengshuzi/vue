<template>
  <div>
    <button>原生的按钮</button>
    <input type="text">
    <el-row class="mb-4">
    <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <div class="demo-date-picker">
      <div class="block">
        <span class="demonstration">Default</span>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="Pick a day"
          :size="size"
        />
      </div>
    </div>
  </div>
</template>

<script>
	export default {
    name: "App"
	}
</script>
<style scoped>
</style>