
<template lang="pug">

include ../view/mixin


.js-banner

	.carousel-wrap
		div(grid)
			app-carousel

	div(grid)

		form.newsletter
			h2.u-h2.newsletter-title Signup to Newsletter

			input.form__control.newsletter-control(type="text" placeholder="Your Name")

			input.form__control.newsletter-control(type="text" placeholder="Your Email Address")

			button.btn.newsletter-submit(type="submit") Subscribe Now

</template>


<script>

export default Vue.component('app-banner', {});

</script>


<style lang="stylus" scoped>

@import '~imp'


$bg-color = #212429

$newsletter-margin = 15px


.carousel-wrap
	position relative

	&:before
		content ''
		position absolute
		z-index -1
		top 0
		left 0
		right 0
		height 50%
		background-color $bg-color


.newsletter
	display flex
	align-items center
	background-color #f7f7f7
	padding 20px $newsletter-margin

	+media(from sm)
		& > *
			margin-left $newsletter-margin
			margin-right @margin-left

	+media(to lg)
		flex-wrap wrap

	+media(to sm)
		padding 30px 0 20px


.newsletter-title
	width 200px
	flex-shrink 0
	margin-top 0
	margin-bottom 0
	line-height 1.5
	letter-spacing 4px

	+media(to lg)
		flex-basis 'calc(100% - %s)' % ($newsletter-margin * 2)
		width auto
		margin-bottom $newsletter-margin

	+media(to sm)
		flex-basis 100%


.newsletter-control
	flex-basis 30%

	+media(to lg)
		flex-basis 'calc(50% - %s)' % ($newsletter-margin * 2)
		margin-bottom $newsletter-margin * 2

	+media(to sm)
		flex-basis 100%


.newsletter-submit
	font-size 14px
	font-weight 500
	display block
	flex-grow 1

</style>
