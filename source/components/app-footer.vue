
<template lang="pug">

include ../view/mixin


footer

	.footer
		div(grid)
			div(grid-row="xs-1 md-2 xl-4")


				.footer-item(grid-col="")
					h3.u-h3.heading About Blog
					p Lorem ipsum dolor sit amet, conser adipisicing  esse cillum dolore nulla pariatur.

					img.responsive(src="http://unsplash.it/360/150")


				.footer-item(grid-col="")
					h3.u-h3.heading Latest Tweets

					.tweets

						.tweet(v-for="i in 2")
							+svg('twitter')(class="tweet-icon")

							a.tweet-author(href="#") @Twitter@magicalrebekah
							p.tweet-text Developer Advocate @heyval isaiyou knows the very well is about things.


				.footer-item(grid-col="")
					h3.u-h3.heading Follow me instagram

					.photos
						a.photo(
							href="#"
							v-bind:style="{ backgroundImage: 'url(http://unsplash.it/120/100)' }"
							v-for="i in 6"
						)


				.footer-item(grid-col="")
					h3.u-h3.heading Latest Comments

					.comments

						.comment(v-for="i in 2")
							.comment-author
								| From
								| #{' '}
								a(href="#") Alex
								|  :

							.comment-text Developer Advocate @heyval isaiyou know the very well is talking about things.


	.copy
		div(grid)
			ul.copy-list

				li @2015 copyright .all right reserved by
					| #{' '}
					a(href="#") Awesome Theme

				li
					a(href="#") Terms Policy

				li
					a(href="#") Disclaimer

</template>


<script>

export default Vue.component('app-footer', {});

</script>


<style lang="stylus" scoped>

@import '~imp'


$bg-color = #212429
$text-color = #f9f9fb


.footer
	background $bg-color
	color $text-color
	font-size 15px
	font-weight 300
	padding 55px 0 20px

	_ww()

	+media(to lg)
		padding-bottom 20px


.footer-item
	+media(to xl)
		margin-bottom 40px

	+media(to md)
		&:last-of-type
			margin-bottom 0



.heading
	color #f9f9fb
	margin 0 0 30px 0



// .tweets
.tweet
	position relative
	padding-left 23px

	&:not(:last-of-type)
		margin-bottom 30px


.tweet-icon
	width 14px
	height @width
	position absolute
	top 5px
	left 0


.tweet-author
	display inline-block
	border-bottom 1px solid transparent
	margin-bottom 7px

	_tr(color, border-color)

	&:hover
		color #fff
		border-color @color


.tweet-text
	margin 0



$margin = 4px
.photos
	display flex
	margin 0 -($margin) 0
	flex-wrap wrap


.photo
	display block
	flex-basis 'calc(100% / 3 - %s)' % $margin
	margin 0 ($margin / 2) ($margin / 2)
	background-color #f3f3f3
	background-size cover
	background-position center
	background-repeat no-repeat
	height 100px


// .comments

.comment
	padding-bottom 23px

	&:not(:last-of-type)
		border-bottom 1px solid #65676a
		margin-bottom @padding-bottom


.comment-author
	margin-bottom 7px

	a
		border-bottom 1px solid transparent

		_tr(color, border-color)

		&:hover
			color #fff
			border-color @color

// .comment-text



.copy
	background-color #17191c
	color rgba(white, .4)
	padding 14px 0

	_tr(color)

	&:hover
		color rgba(white, .7)


.copy-list
	font-weight 300
	list-style none
	padding 0
	margin 0
	text-align center

	text-transform uppercase
	line-height 1

	+media(to sm)
		line-height inherit

	a
		border-bottom 1px solid transparent

		_tr(border-color)

		&:hover
			color #fff
			border-color @color

	li
		display inline-block
		margin 0
		padding 0 15px

		+media(from sm)
			&:not(:last-child)
				border-right 1px solid

		+media(to sm)
			display block

			&:not(:last-child)
				margin-bottom 10px

</style>
