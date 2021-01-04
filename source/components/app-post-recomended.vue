
<template lang="pug">

include ../view/mixin


div
	header.header
		h2.u-h2.header-title Recomended Posts

		.arrows
			button.js-recomended-prev.arrow(type="button")
				+svg('long-left-arrow')

			button.js-recomended-next.arrow(type="button")
				+svg('long-right-arrow')


	.js-recomended-carousel.carousel

		.carousel-item(v-for="post in posts")
			a.carousel-image(
				href="#"
				v-bind:style="{ backgroundImage: 'url('+ post.image +')' }"
			)

			a.u-h3.carousel-title(href="#") {{ post.title }}

</template>


<script>

import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';


export default Vue.component('app-post-recomended', {
	props: [
		'posts'
	],

	mounted() {
		let vm = this;
		let $elem = $(this.$el);

		$elem.find('.js-recomended-carousel').slick({
			accessibility: false,
			prevArrow: $elem.find('.js-recomended-prev'),
			nextArrow: $elem.find('.js-recomended-next'),
			speed: 300,
			// better animations
			infinite: true,
			swipe: false,
			slidesToShow: 3,

			responsive: [

				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2
					}
				},

				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1
					}
				}

			]
		});
	}
});

</script>


<style lang="stylus" scoped>

@import '~imp'


.header
	margin-bottom 28px
	display flex


.header-title
	margin 0


.arrows
	margin-left auto
	white-space nowrap


.arrow
	background-color #464646
	border none
	color white
	width 30px
	height @width
	line-height @width
	padding 0
	text-align center
	cursor pointer
	outline none

	_tr(background-color)

	&:hover
		background-color black

	&:not(:last-child)
		margin-right 10px

	.svg-icon
		width 14px
		height @width


.carousel
	margin 0 -15px


.carousel-item
	padding 0 15px


.carousel-image
	height 220px
	background-position center
	background-size cover
	background-repeat no-repeat
	display block


.carousel-title
	padding 10px 16px
	letter-spacing 1.5px
	display block

	_crop-text()

</style>
