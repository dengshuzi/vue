<template>
	<div class="container">
		<Category title="美食">
			<img slot="center" src="https://s3.ax1x.com/2010/01/16/srJ1q0.jpg" alt="">
			<a slot="footer" href="http://www.baidu.com">更多美食</a>
		</Category>

		<Category title="游戏">
			<ul slot="center">
				<li v-for="(game,index) in games" :key="index">{{game}}</li>
			</ul>
			<div class="foot" slot="footer">
				<a href="http://www.baidu.com">单机游戏</a>
				<a href="http://www.baidu.com">网络游戏</a>
			</div>
		</Category>

		<Category title="电影">
			<video slot="center" controls src="https://haokan.baidu.com/v?vid=12902415524907627747&pd=pcshare"></video>
			<template v-slot:footer>
				<div class="foot">
					<a href="http://www.baidu.com">经典</a>
					<a href="http://www.baidu.com">热门</a>
					<a href="http://www.baidu.com">推荐</a>
				</div>
				<h4>欢迎前来观影</h4>
			</template>
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
	.container, .foot {
		display: flex;
		justify-content: space-around;
	}
	video {
		width: 100px;
	}
	img {
    width: 100%;
  }
	h4 {
		text-align: center;
	}
</style>