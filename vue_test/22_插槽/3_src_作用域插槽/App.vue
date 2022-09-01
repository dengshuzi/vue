<template>
	<div class="container">
		<Category title="游戏">
			<!-- <template slot-scope="{games}"> -->
			<template v-slot="games">
				<ul>
					<li v-for="(g,index) in games" :key="index">{{g}}</li>
				</ul>
			</template>
		</Category>

		<!-- <Category title="游戏">
			<template :slot-scope="lnnt">
				<ol>
					<li v-for="(game,index) in lnnt.games" :key="index">{{game}}</li>
				</ol>
			</template>
		</Category>
		
		<Category title="游戏">
			<template :slot-scope="lnnt">
				<h4>
					<li v-for="(game,index) in lnnt.games" :key="index">{{game}}</li>
				</h4>
			</template>
		</Category> -->
	</div>
</template>

<script>
	import Category from './components/Category.vue';
	export default {
    name: "App",
    components: { Category }
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