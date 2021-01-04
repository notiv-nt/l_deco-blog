
<template lang="pug">

include ../view/mixin


.carousel-wrap

	.carousel.js-slick-carousel

		.carousel-item(v-for="item in items" v-bind:style="{ backgroundImage: 'url(' + item.image + ')' }")
			.carousel-inner
				.carousel-caption {{ item.caption }}
				h3.carousel-title {{ item.title }}

	.carousel-controls
		.js-slick-dots-container

		.carousel-arrows
			button.js-slick-next-arrow.carousel-arrow(type="button")
				+svg('long-left-arrow')

			a.carousel-article-link(href="#") Featured Article

			button.js-slick-prev-arrow.carousel-arrow(type="button")
				+svg('long-right-arrow')

</template>


<script>

import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';


export default Vue.component('app-carousel', {
	data() {
		return {
			items: [

				{
					image: 'assets/img/carousel/pic-01.png',
					title: 'BodyBuilding best for you health',
					caption: 'Latest News'
				},

				{
					image: 'http://unsplash.it/1500/500/?image=1038&blur',
					title: 'The best title i ever seen',
					caption: 'Awesome News'
				},

				{
					image: 'http://unsplash.it/1500/500/?image=958&blur',
					title: 'Another best of the best article',
					caption: 'Super News'
				}

			]
		}
	},

	mounted() {
		let $elem = $(this.$el);

		$elem.find('.js-slick-carousel').slick({
			accessibility: false,
			vertical: true,
			prevArrow: $elem.find('.js-slick-prev-arrow'),
			nextArrow: $elem.find('.js-slick-next-arrow'),
			dots: true,
			appendDots: $elem.find('.js-slick-dots-container'),
			speed: 300,
			// better animations
			infinite: false,
			swipe: false,
			autoplay: true,
			autoplaySpeed: 8000,

			responsive: [
				{
					breakpoint: 1024,
					settings: {
						vertical: false,
						swipe: true
					}
				}
			]
		});
	}
});

</script>


<style lang="stylus">

@import '~imp'

$dot-size = 20px


.slick-dots
	margin 0
	padding 0
	list-style none
	text-align center
	display flex
	flex-direction row-reverse
	justify-content center

	li
		display inline-block

	button
		width $dot-size
		height @width
		position relative
		color transparent
		text-indent -100px
		overflow hidden
		background none
		border none
		outline none
		padding 0
		cursor pointer

		&:after
			content ''
			position absolute
			top 50%
			left @top
			transform translate(-50%, -50%)
			width ($dot-size / 2)
			height @width
			border 1px solid #fff

	li.slick-active button:after
		background-color #999

</style>


<style lang="stylus" scoped>

@import '~imp'


.carousel-wrap
	position relative
	color white


.carousel-item
	background-color black
	background-size cover
	background-position center
	display flex !important
	align-items center

	_('height', $adaptive.carouselItemHeight, '%s !important')


.carousel-inner
	max-width 600px
	padding-left 100px
	position relative
	opacity 1

	_ww()
	_tr(transform, opacity)

	+media(from md)
		transform scale(.95) translateX(-40px)
		transition-delay 100ms

	+media(to md)
		transform-origin left center
		transform perspective(200px) scale(0.98) rotateY(2deg)
		transition-delay 200ms

	.slick-current &
		opacity 1
		transform scale(1) translateX(0)

	+media(to lg)
		padding-left 60px

	+media(to md)
		padding-left 40px

	+media(to sm)
		padding-left 25px
		padding-right @padding-left


.carousel-caption
	font-size 18px
	font-weight 600
	letter-spacing 4px
	margin 0 0 20px

	+media(to md)
		font-size 16px
		margin 0 0 10px


.carousel-title
	text-shadow 1px 1.7px 0 rgba(0, 0, 0, 0.44)
	font-size 40px
	font-weight 700
	line-height 1.2
	letter-spacing 6px
	text-transform uppercase
	margin 0

	_crop-text(3, @font-size, @line-height)

	+media(to lg)
		font-size 32px
		line-height 1.4

	+media(to md)
		font-size 28px

	+media(to sm)
		font-size 24px
		letter-spacing 3px


.carousel-controls
	position absolute
	top 50%
	right -60px
	transform translateY(-50%) rotateZ(-90deg)

	+media(to md)
		transform none
		top auto
		bottom 20px
		left 0
		right 0
		margin auto


.carousel-arrows
	margin-top 14px
	text-align center


.carousel-article-link
	font-weight 600
	text-transform uppercase
	letter-spacing 3px
	display inline-block
	margin 0 15px


.carousel-arrow
	background none
	border none
	outline none
	padding 0
	cursor pointer
	color inherit
	font-size 22px
	line-height @font-size
	vertical-align middle

</style>
