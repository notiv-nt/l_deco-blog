
<template lang="pug">

include ../view/mixin


div


	.u-loader(
		v-if="pageState === 'loading'"
	)


	div(v-else)

		app-post.block(:post="post")


		.block(grid-row="xs-2")
			router-link.nav-item(
				v-bind:to="{ name: 'post', params: { id: 1 } }"
				grid-col=""
			)
				+svg('long-left-arrow')
				span Previous post

			router-link.nav-item(
				v-bind:to="{ name: 'post', params: { id: 1 } }"
				grid-col=""
			)
				span Next post
				+svg('long-right-arrow')


		.block
			.u-light-shadow.author
				a.author-photo(
					href="#"
					v-bind:style="{ backgroundImage: 'url('+ author.avatar +')' }"
				)

				.author-content
					header.author-header
						a.author-name(href="#") {{ author.name }}
						a.author-post-link(href="#") All Post

					p.author-text {{ author.about }}

			.social(grid-row="xs-1 sm-2 lg-2 xl-3 hg-4")

				a.u-light-shadow.social-item(href="#" grid-col="")
					.social-icon
						+svg('facebook')

					.social-text Facebook {{ socials.facebook }}

				a.u-light-shadow.social-item(href="#" grid-col="")
					.social-icon
						+svg('twitter')

					.social-text Twitter {{ socials.twitter }}

				a.u-light-shadow.social-item(href="#" grid-col="")
					.social-icon
						+svg('tumblr')

					.social-text Tumbler {{ socials.tumbler }}

				a.u-light-shadow.social-item(href="#" grid-col="")
					.social-icon
						+svg('pinterest')

					.social-text Pinterest {{ socials.pinterest }}


		.u-light-shadow.recomended
			app-post-recomended(
				:posts="recomended"
			)

</template>


<script>

import config from 'config';


export default Vue.component('', {

	data() {
		return {
			pageState: 'loading',

			post: {},
			author: {},
			socials: {},
			recomended: []
		};
	},

	mounted() {
		let vm = this;

		vm.$http.get(`${config.api}post`)
			.then(function({body}) {
				vm.pageState = '';

				vm.post = body.post;
				vm.author = body.author;
				vm.socials = body.socials;
				vm.recomended = body.recomended;

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
	margin-bottom 60px

	+media(to xl)
		margin-bottom 50px

	+media(to lg)
		margin-bottom 40px

	+media(to sm)
		margin-bottom 30px


// :local(.nav)
.nav-item
	background-color black
	text-align center
	color white
	font-size 14px
	font-weight 500
	text-transform uppercase
	padding 60px 0
	letter-spacing 2.5px
	display block
	flex 1

	_tr(background-color)

	&:hover
		background-color #3a3c49

	+media(to hg)
		padding 50px 0

	+media(to xl)
		padding 15px 0
		letter-spacing 1.1px

	+media(to sm)
		padding 10px 0

		span
			display none

	.svg-icon
		width 20px
		height @width

		&:first-child
			margin-right 20px

			+media(to xl)
				margin-right 10px

			+media(to sm)
				margin-right 0

		&:last-child
			margin-left 20px

			+media(to xl)
				margin-left 10px

			+media(to sm)
				margin-left 0


.author
	margin-bottom 20px
	background-color white
	// box-shadow
	display flex
	align-items stretch

	+media(to xl)
		flex-wrap wrap


.author-photo
	background-size cover
	background-position center
	background-repeat no-repeat
	width 210px
	flex-shrink 0
	cursor pointer
	display block

	+media(to xl)
		width 100%
		height 200px


.author-content
	flex-grow 1
	padding 38px 30px
	flex 1

	+media(to md)
		padding 28px 20px


.author-header
	border-bottom 1px solid #eaeaeb
	display flex
	align-items center
	color $main-color
	font-weight 400
	text-transform uppercase
	margin-bottom 15px
	padding-bottom 12px
	font-weight 400


.author-name
	font-size 16px
	font-weight 600
	letter-spacing 3px
	margin-right 10px

	_link()
	_ww()


.author-post-link
	font-size 14px
	margin-left auto
	letter-spacing 1.5px
	white-space nowrap

	_link()


.author-text
	margin 0
	color $font-color
	font-size 16px
	font-weight 300
	letter-spacing 1.6px

	_crop-text(2, @font-size)



// .social
.social-item
	background-color white
	color #999
	font-size 16px
	font-weight 400
	text-transform uppercase
	text-align center
	display flex
	align-items center
	margin-bottom 20px


.social-item:hover .social-icon
	background-color $main-color
	color white


.social-icon
	width 55px
	height 46px
	line-height @height
	border-right 1px solid #f1f1f3
	flex-shrink 0
	color $font-color

	_tr(background-color, color)

	.svg-icon
		width 16px
		height @width


.social-text
	flex-grow 1
	letter-spacing 1.5px

	_crop-text()


.recomended
	background-color white
	padding 40px 30px 20px

	+media(to md)
		padding 20px ($grid-spacing / 2) 5px

</style>
