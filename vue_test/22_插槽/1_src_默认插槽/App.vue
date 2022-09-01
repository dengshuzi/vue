<template>
	<div class="container">
		<Category title="美食">
			<img src="https://s3.ax1x.com/2010/01/16/srJ1q0.jpg" alt="">
		</Category>

		<Category title="游戏">
			<ul>
				<li v-for="(game,index) in games" :key="index">{{game}}</li>
			</ul>
		</Category>

		<Category title="电影">
			<video controls src="https://haokan.baidu.com/v?vid=12902415524907627747&pd=pcshare"></video>
		</Category>
	</div>
</template>

<script>
import Category from './components/Category.vue';
	export default {
    name: "App",
    components: { Category },
    data() {
      return {
        foods: ['火锅', '烧烤', '小龙虾', '牛排'],
        games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
        films: ['教父', '拆弹专家', '你好，李焕英', '当幸福来敲门']
      }
    }
}
</script>
<style scoped>
	.container {
		display: flex;
		justify-content: space-around;
	}
	video {
		width: 100px;
	}
	img {
    width: 100%;
  }
</style>