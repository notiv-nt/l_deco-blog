<template lang="pug">

include ../view/mixin


div(grid)
	.c-main(grid-row="")


		.c-main__content(grid-col="")

			.u-loader(
				v-if="pageState === 'loading'"
			)

			div(v-else)
				.info.block.u-shadow
					.info-map
						img(
							v-bind:src="body.map.url"
							alt=""
							data-object-fit="cover"
						)

					.info-content
						h2.u-h2.info-title Contact information
						hr.info-hr

						p {{ body.contact.text }}

						ul.info-list
							li
								+svg('home')
								span Address: {{ body.contact.address }}

							li
								+svg('mail')
								span Email: {{ body.contact.email }}

							li
								+svg('globe')
								a(
									v-bind:href="body.contact.site"
								) {{ body.contact.site }}

				form.form(action="")

					div(grid-row="xs-1 md-2")

						input.form__control.u-shadow.block(
							type="text"
							grid-col=""
							placeholder="Your Name"
						)

						input.form__control.u-shadow.block(
							type="text"
							grid-col=""
							placeholder="Your Email Address"
						)

					input.form__control.u-shadow.block.input(
						type="text"
						placeholder="Website Address"
					)

					textarea.form__control.u-shadow.block.input(
						placeholder="Please write a message here!"
						rows="6"
					)

					button.btn.submit-btn(
						type="submit"
					) Send message


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

		vm.$http.get(`${config.api}contacts`)
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


<style lang="stylus" scoped>

@import '~imp'


.block
	margin-bottom 30px


.input
	width 100%


.info
	background-color white
	display flex
	align-items stretch

	+media(to xl)
		flex-wrap wrap


.info-map
	width 440px
	min-height 290px
	flex-shrink 0

	+media(to hg)
		width 290px

	+media(to xl)
		width 100%

	img
		display block
		width 100%
		height 100%
		object-fit cover
		object-position center


.info-content
	padding 30px 30px
	flex 1

	+media(to sm)
		padding 20px ($grid-spacing / 2)


.info-title
	margin-top 0
	letter-spacing 1.3px


.info-hr
	display block
	margin 23px 0
	height 1px
	background-color #eaeaeb
	width 100%


.info-list
	list-style none
	margin 0
	padding 0

	li
		margin 0
		padding 5px 0

	.svg-icon
		width 13px
		height @width
		margin-right @width

.submit-btn
	+media(to sm)
		width 100%
		display block

</style>
