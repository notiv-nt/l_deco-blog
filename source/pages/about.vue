
<template lang="pug">

div(grid)
	.c-main(grid-row)

		.c-main__content(grid-col)

			.u-loader(
				v-if="pageState === 'loading'"
			)

			app-post(
				v-bind:post="body"
				v-bind:show-readmore="false"
				v-else
			)

		app-aside(grid-col)

</template>


<script>

import config from 'config';


export default Vue.component('', {

	data() {
		return {
			pageState: 'loading',

			body: {}
		}
	},

	mounted() {
		let vm = this;

		vm.$http.get(`${config.api}about`)
			.then(function({body}) {
				vm.pageState = '';

				vm.body = body;
			}, function(err) {
				vm.pageState = 'error';

				console.error(err);
			});
	}

});

</script>
