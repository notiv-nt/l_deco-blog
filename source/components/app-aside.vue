
<template lang="pug">

include ../view/mixin


.c-main__aside.aside


	form.aside-item.search
		input.form__control.search-control(type="text" placeholder="Search")

		button.search-submit(type="submit")
			+svg('search')


	img.responsive.aside-item(src="assets/img/bn/pic-01.png" alt="")

	.aside-item
		h2.u-h2.title Categories

		.categories

			a.categories-item(href="#" v-for="i in 7")
				span Lifestyle
				span.categories-count 98


	img.responsive.aside-item(src="assets/img/bn/pic-02.png" alt="")


	.aside-item
		h2.u-h2.title Latest Post

		.latest

			a.latest-item(href="#" v-for="i in 3")
				.latest-image(v-bind:style="{ backgroundImage: 'url(http://unsplash.it/80/60/?random)' }")

				.latest-text
					h3.u-h3.latest-title Jurney towards a lifestyle

					.latest-meta
						span Jan. 16 2015
						span Like 2555


	.aside-item.socials
		a.socials-item(href="#")
			+svg('twitter')

		a.socials-item(href="#")
			+svg('facebook')

		a.socials-item(href="#")
			+svg('dribbble')

		a.socials-item(href="#")
			+svg('pinterest')

		a.socials-item(href="#")
			+svg('linkedin')

</template>


<script>

export default Vue.component('app-aside', {});

</script>


<style lang="stylus" scoped>

@import '~imp'


.aside
	background-color #fff
	box-shadow $block-box-shadow
	padding 40px 30px

	+media(to lg)
		padding 20px 15px

	+media(from md to lg)
		display flex
		flex-wrap wrap
		align-items flex-start

		> :nth-child(even)
			margin-left 10px

		> :nth-child(odd)
			margin-right 10px

.aside-item
	margin-bottom 40px

	+media(to lg)
		flex-basis calc(50% - 10px)


.search
	display flex

.search-control
	display block
	background #f9f9fb
	font-size 15px
	font-weight 300
	flex-grow 1
	padding 0 20px
	box-shadow none
	border-right none

	&:not(:hover):not(:focus)
		border-color @background

.search-submit
	display block
	border none
	outline none
	background $main-color
	flex-shrink 0
	width 50px
	height @width
	font-size 16px
	text-align center
	line-height normal
	color #fff
	cursor pointer

	_tr(background)

	&:hover
		background lighten($main-color, 8%)

	&:active
		background lighten($main-color, 14%)


.title
	line-height 1
	margin-top 0
	margin-bottom 27px
	text-align center

	_ww()


.categories,
.latest
	+media(from sm)
		margin 0 -30px

	+media(to sm)
		margin 0

.categories-item,
.latest-item
	border-top 3px solid #f7f7f7
	display flex
	text-transform uppercase

	_tr(background)
	_ww()

	&:last-child
		border-bottom @border-top

	&:hover
		background #f7f7f7

.categories-item
	justify-content space-between
	padding 11px 30px
	color $main-color
	font-size 16px
	font-weight 500

	_ww()

	+media(to sm)
		padding 11px 0

.categories-count
	white-space nowrap


.latest-item
	padding 20px 30px

	+media(to sm)
		padding 20px 0

.latest-image
	width 80px
	height 60px
	margin-right 14px
	flex-shrink 0

.latest-text
	flex 1

.latest-title
	margin-bottom 11px
	margin-top -3px
	line-height 1.2
	letter-spacing 2px

	_crop-text(2, 16px, 1.2)

.latest-meta
	color #999
	font-weight 300
	line-height 1

	& > :not(:last-child)
		margin-right 20px


.socials
	display flex
	justify-content space-between
	margin -8px

	+media(to md)
		margin -8px -8px 2px

	+media(to lg)
		justify-content space-around

.socials-item
	display inline-block
	padding 8px
	color #464646
	font-size 21px
	line-height 1

	_tr(color)

	&:hover
		color black

</style>
