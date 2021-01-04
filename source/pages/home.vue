
<template lang="pug">

div
	app-banner

	div(grid)
		.c-main(grid-row)

			.c-main__content.router-wrap(grid-col)
				transition-fade
					router-view

			app-aside(grid-col)

</template>


<script>

export default Vue.component('', {});

</script>
