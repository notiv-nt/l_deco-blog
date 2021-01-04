
<template lang="pug">

include ../view/mixin


.post(v-bind:id="'p-' + post.id")

	router-link.post-poster(
		v-bind:style="{ backgroundImage: 'url(' + post.image + ')' }"
		v-show="post.image"
		v-bind:to="{ name: 'post', params: { id: 1 } }"
	)
		//- TODO:
		//- .post-poster-src
		//- 	+svg('pinterest-p')

	.post-content.post-media-wrap(
		v-bind:class="{ \
			'post-content-inverted': isPost('quote') \
		}"
	)
		.post-media-icon
			+svg('pen')(v-show="!post.image && post.text")
			+svg('picture')(v-show="post.image")
			+svg('quote')(v-show="isPost('quote')")


		div(v-show="isPost('text')")
			header.post-header
				.post-category {{ post.category }}

				h1.u-h1.post-title {{ post.title }}

				.post-meta(v-show="post.author || post.date")
					div(v-if="post.author")
						+svg('user')

						a(v-bind:href="'#/user/' + post.author.username") {{ post.author.name }}

					div
						+svg('calendar')

						span {{ post.date | to-date }}


			div.u-plain-text
				div(v-html="post.text")


			.post-readmore(v-show="showReadmore")
				router-link.post-readmore-link(
					v-bind:to="{ name: 'post', params: { id: 1 } }"
				) Read More


		.post-quote(v-show="isPost('quote')")
			p.post-quote-text {{ post.quote }}

			.post-quote-author(v-show="post.quote_author") {{ post.quote_author }}


	footer.post-footer(v-show="showFooter()")

		.post-footer-stats

			.post-footer-item
				+svg('comments')
				span {{ getComments() }}

			button.post-footer-item(type="button")
				+svg('heart')
				span {{ getLikes() }}


		//- .post-footer-rating


		.post-footer-social
			a.post-footer-social-item.post-footer-item(href="#")
				+svg('dribbble')

			a.post-footer-social-item.post-footer-item(href="#")
				+svg('facebook')

			a.post-footer-social-item.post-footer-item(href="#")
				+svg('twitter')

			a.post-footer-social-item.post-footer-item(href="#")
				+svg('pinterest')

</template>


<script>

export default Vue.component('app-post', {
	props: {
		post: {
			type: Object,
			default: {}
		},

		showReadmore: {
			type: Boolean,
			default: true
		}
	},

	methods: {

		isPost(type) {
			let post = this.post;

			switch (type) {

				case 'quote': {
					if (post.quote && !post.text) {
						return true;
					}

					break;
				}

				case 'text': {
					if (!post.quote) {
						return true;
					}

					break;
				}

			}
		},

		getComments() {
			if (this.post.comments === null) {
				return;
			}

			return 'No Comments';
		},

		getLikes() {
			if (this.post.likes === null) {
				return;
			}

			return 'Like ' + this.post.likes;
		},

		showFooter() {
			if (
				this.post.comments !== null ||
				this.post.likes !== null ||
				this.post.rating !== null
			) {
				return true;
			}

			return false;
		}

	}
});

</script>


<style lang="stylus" scoped>

@import '~imp'


.post
	box-shadow $block-box-shadow


.post-poster
	background-color #f2f2f2
	background-size cover
	background-position center
	background-repeat no-repeat
	position relative
	display block

	_('height', $adaptive.postPoster)


.post-poster-src
	position absolute
	top 0
	right 0
	width 50px
	height 44px
	line-height @height
	background-color #cc2127
	text-align center
	font-size 26px
	color white


.post-content
	background-color white

	_('padding', $adaptive.postContent)

.post-media-wrap
	position relative

.post-media-icon
	position absolute
	display block
	top 0
	left 0
	right 0
	margin 0 auto
	transform translateY(-50%)
	width 40px
	height 35px
	line-height @height
	text-align center
	color white
	font-size 20px
	background $main-color


.post-content-inverted
	background-color #131d1c
	color #fff


.post-media-icon
	color white
	background $main-color


.post-content-inverted .post-media-icon
	color $main-color
	background white


.post-header
	text-align center
	text-transform uppercase
	margin-bottom 25px


.post-category
	color #999
	font-size 16px
	margin-bottom 10px


.post-title
	margin 10px 0 17px
	letter-spacing 2px

	_ww()
	_('font-size', $adaptive.postTitle)


.post-meta
	color #999
	display inline-flex
	align-items center
	font-size 15px

	.svg-icon
		color #464646
		line-height 24px
		margin-right 10px

	a
		_link()

	+media(from sm)
		& > :not(:last-child)
			margin-right 30px

	+media(to sm)
		& > :not(:last-child)
			margin-right 15px

.post-readmore
	font-size 14px
	font-weight 500
	text-transform uppercase
	text-align center
	padding 24px 0 0


.post-readmore-link
	background transparent
	display inline-block
	border-left 1px solid #d7d7d7
	border-right @border-left
	padding 8px 20px
	letter-spacing 2.5px
	color $main-color
	text-transform uppercase
	cursor pointer
	text-indent 2px

	_tr(background, color, border-color)

	&:hover
		background $main-color
		color #fff
		border-color @background


.post-footer
	display flex
	justify-content space-between
	align-items center
	background white
	border 1px solid #f7f7f7

	_('padding', $adaptive.postFooter)

	+media(to md)
		flex-wrap wrap

.post-footer-item
	padding 10px
	border-radius 4px
	line-height 1

	button&
		background-color transparent
		border none
		font inherit
		text-transform inherit
		letter-spacing inherit
		color inherit
		letter-spacing inherit
		line-height 1

	_tr(background-color)

	button&,
	a&
		cursor pointer

	a&:hover,
	button&:hover
		background-color #f0f0f0


.post-footer-stats
	display inline-flex
	color #999
	font-size 14px
	font-weight 400
	text-transform uppercase
	letter-spacing 1.5px

	+media(from sm)
		& > :not(:last-child)
			margin-right 15px

	+media(from lg)
		& > :not(:last-child)
			margin-right 28px

	+media(to md)
		display flex
		justify-content space-between
		margin-bottom 12px
		width 100%

	.svg-icon
		fill #464646
		margin-right 14px
		width 15px
		height @width


.post-footer-social
	display inline-flex
	align-items center

	+media(to md)
		display inline-flex
		margin 0 auto

.post-footer-social-item
	display block
	color #464646
	line-height 1

	&:not(:first-child)
		margin-left 12px

	.svg-icon
		width 18px
		height @width



.post-quote
	text-align center
	text-transform uppercase


.post-quote-text
	color white
	font-weight 500
	letter-spacing 2px
	margin 30px 0

	_('font-size', $adaptive.postQuote)


.post-quote-author
	color #999
	font-size 16px
	font-weight 400
	margin 48px 0 0 0

	+media(to md)
		margin-top 15px

</style>
