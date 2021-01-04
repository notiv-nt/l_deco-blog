
<template lang="pug">

div
	.u-loader(
		v-if="pageState === 'loading'"
	)

	div(v-else)
		app-post.post(v-for="post in posts" v-bind:post="post")

</template>


<script>

import config from 'config';


export default Vue.component('', {

	data() {
		return {
			pageState: 'loading',

			posts: []
		}
	},

	mounted() {
		let vm = this;

		vm.$http.get(`${config.api}posts`)
			.then(function({body}) {
				vm.pageState = '';

				vm.posts = body;
			}, function(err) {
				vm.pageState = 'error';

				console.error(err);
			});
	}

});

</script>


<style lang="stylus" scoped>

@import '~imp'


.post
	&:not(:last-child)
		margin-bottom 60px

</style>
