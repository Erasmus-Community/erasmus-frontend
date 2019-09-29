<template>
	<v-content>
		<v-container>
			<h2>{{org.country}} {{org.name}}</h2>
			<p>{{org.description}}</p>
			<p>{{org.email}}</p>
		</v-container>
	</v-content>
</template>

<script>
	import axios from 'axios';
	export default {
		props: ['org'],
		name: 'orgInfo',
	}
</script>

<style lang="scss" scoped>
</style>
