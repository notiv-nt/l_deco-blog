
<template lang="pug">

include ../view/mixin


header.js-main-header.header

	.header-wrap

		div(grid)
			div(grid-row="align-center nowrap")

				.header-col(grid-col)
					button.js-navmenu-toggle.header-link(type="button")
						+svg('menu')

				.header-col.logo(grid-col)
					a(href="#")
						span Deco
						| Blog

				.header-col.search-toggle(grid-col)
					button.js-search-toggle.header-link(type="button")
						+svg('menu')

				.js-navsearch.search-wrap.header-col(grid-col).u-hidden
					form.search-form
						input.search-input(type="text" placeholder="Search something")

						button.js-navsearch-close.search-close
							+svg('close')

					.social
						a.header-link(href="#")
							+svg('rss')

						a.header-link(href="#")
							+svg('twitter')

						a.header-link(href="#")
							+svg('tumblr')

						a.header-link(href="#")
							+svg('facebook')

						button.js-navsearch-toggle.header-link(type="button")
							+svg('search')


	.js-navmenu.nav-wrap
		div(grid)
			nav.nav

				router-link.nav-link(v-bind:to="{ name: 'home' }") Home
				router-link.nav-link(v-bind:to="{ name: 'post', params: { id: 1 } }") Post
				router-link.nav-link(v-bind:to="{ name: 'about' }") About
				router-link.nav-link(v-bind:to="{ name: 'contacts' }") Contacts

</template>


<script>

const NAV_MENU = '.js-navmenu';
const SEARCH = '.js-navsearch';
const SEARCH_WRAP = '.js-navsearch';


export default Vue.component('app-header', {
	mounted() {
		let vm = this;
		let toggleNav = vm.$el.querySelector('.js-navmenu-toggle');
		let toggleSearch = vm.$el.querySelector('.js-navsearch-toggle');
		let closeSearch = vm.$el.querySelector('.js-navsearch-close');
		let searchToggle = vm.$el.querySelector('.js-search-toggle');

		toggleNav.addEventListener('click', function(e) {
			e.preventDefault();

			state(NAV_MENU, 'toggle');

			e._meta.onNav = true;
		});

		toggleSearch.addEventListener('click', function(e) {
			e.preventDefault();

			state(SEARCH, 'show');
		});

		searchToggle.addEventListener('click', function(e) {
			e.preventDefault();

			state(SEARCH_WRAP, 'toggle', 'is-open');

			e._meta.onSearch = true;
		});

		vm.$el.querySelector('.js-navmenu').addEventListener('click', function(e) {
			e._meta.onNav = true;
		});

		closeSearch.addEventListener('click', function(e) {
			e.preventDefault();

			state(SEARCH, 'hide');
		});

		vm.$router.beforeEach(function(from, to, next) {
			state(NAV_MENU, 'hide');

			next();
		});


		document.body.addEventListener('click', function(e) {
			if (!e._meta) {
				e._meta = {};
			}
		}, true);

		document.body.addEventListener('click', function(e) {
			if (!e._meta.onNav) {
				state(NAV_MENU, 'hide');
			}

			// if (!e._meta.onSearch) {
			// 	state(SEARCH_WRAP, 'hide', 'is-open');
			// }
		});

		document.body.addEventListener('keyup', function(e) {
			let target = e.target.tagName;

			if (target !== 'INPUT' && target !== 'TEXTAREA' && e.keyCode === 27) {
				state(NAV_MENU, 'hide');
				state(SEARCH, 'hide');
				// state(SEARCH_WRAP, 'hide', 'is-open');
			}
		});


		function state(elem, state, elemClass = 'is-active') {
			if (state === 'show') {
				vm.$el.querySelector(elem).classList.add(elemClass);
			}

			else if (state === 'hide') {
				vm.$el.querySelector(elem).classList.remove(elemClass);
			}

			else if (state === 'toggle') {
				vm.$el.querySelector(elem).classList.toggle(elemClass);
			}
		}
	}
});

</script>


<style lang="stylus" scoped>

@import '~imp'


$bg-color = #212429
$z-index_header = 10


.header
	color #fefefe
	position fixed
	top 0
	left 0
	right 0
	z-index $z-index_header


.header-wrap
	background-color $bg-color
	z-index $z-index_header + 1
	position relative


.header-col

	+media(from lg)
		width 'calc(100% / 3 - %s)' % $grid-spacing

	+media(to lg)
		width auto


.header-link
	background transparent
	// outline none
	border none
	color inherit
	width 56px
	height @width
	border-left 2px solid #3c3c3c
	cursor pointer
	display inline-block
	text-align center
	flex-shrink 0
	user-select none
	padding 0

	_tr(background)

	a&
		line-height @width

	&:last-child
		border-right @border-left

	&:hover, &.is-active
		background lighten($bg-color, 10%)

	.svg-icon
		width 1.5em
		height @width



.logo
	font-size 22px
	text-transform uppercase
	text-align center
	font-weight 600
	letter-spacing 4px
	white-space nowrap
	user-select none

	a
		display inline-block

	span
		font-size 26px
		margin-right 2px



.social
	display inline-flex
	justify-content flex-end
	transform scale(1)
	transform-origin 50% 0px
	opacity 1
	visibility visible

	_tr(transform, opacity, visibility)


.social .header-link
	.svg-icon
		width 1rem
		height @width



.nav-wrap
	position absolute
	top 100%
	left 0
	right 0
	background-color rgba($bg-color, .7)
	// under the header
	z-index $z-index_header - 1
	opacity 0
	transform-origin top
	// transform translateY(-100%) rotateX(20deg)
	transform perspective(1000px) rotateX(-90deg)
	visibility hidden

	_tr(opacity, visibility, transform)

	&.is-active
		opacity 1
		visibility visible
		// transform translateY(0) rotateX(0)
		transform rotateX(0)


.nav
	padding 7px 0px

	clearfix()


.nav-link
	font-weight 400
	text-transform uppercase
	display block
	float left
	padding 10px 20px
	letter-spacing 1px
	user-select none
	transform translateY(-8px) scale(.9) rotateX(10deg)
	transform-origin top
	opacity 0

	_tr(transform, opacity)

	&:not(:last-child)
		margin-right 2px

	&:hover
		color white

	.is-active &
		transform none
		opacity 1

	for i in (0..15)
		.is-active &:nth-of-type({i})
			transition-duration (300ms + (50ms * i))


.search-toggle
	margin-left auto

	+media(from sm)
		display none

.search-wrap
	position relative
	display flex
	justify-content flex-end

	+media(from sm to lg)
		margin-left auto

	+media(to sm)
		position absolute
		top 100%
		left 0
		right 0
		background-color rgba($bg-color, .7)
		justify-content center

		opacity 0
		transform-origin top
		// transform translateY(-100%) rotateX(20deg)
		transform perspective(1000px) rotateX(-90deg)
		visibility hidden

		_tr(opacity, visibility, transform)

		&.is-open
			opacity 1
			visibility visible
			// transform translateY(0) rotateX(0)
			transform rotateX(0)



.search-wrap.is-active .social
	transform scale(.85)
	opacity 0
	visibility hidden


.search-wrap.is-active .search-form
	transform translateY(-50%) scale(1)
	opacity 1
	visibility visible


.search-form
	position absolute
	top 50%
	transform translateY(-50%) scale(1.2)
	transform-origin 50% 0px
	opacity 0
	visibility hidden
	max-width 360px
	width 100%
	display flex

	_tr(transform, opacity, visibility)


.search-input
	background-color transparent
	border none
	// outline none
	font inherit
	border-bottom 1px solid #999
	color inherit
	padding 3px 10px
	font-size 15px
	font-weight 300
	letter-spacing 1px
	width 100%
	flex-basis auto
	display block

	_tr(border-color)

	&:focus
		border-color white


.search-close
	background transparent
	// outline none
	border none
	width 30px
	height @width
	cursor pointer
	display inline-block
	text-align center
	user-select none
	padding 0
	color #999
	margin-right 15px
	margin-left 10px
	flex-shrink 0

	_tr(color)

	&:hover
		color white

</style>
