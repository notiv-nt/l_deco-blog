
<script>

// transition magic
Vue.component('transition-fade', {
	// component just as 'function'
	functional: true,

	render(createElement, context) {
		const data = {
			props: {
				// name for CSS classes
				name: 'fade'
			},

			on: {
				// set parent's (.container) min-height for NEW element
				enter(el) {
					if (el.parentNode) {
						el.parentNode.style.minHeight = `${el.offsetHeight}px`;
					}
				},

				// remove unnecessary (now) min-height, after transition end
				afterEnter(el) {
					if (el.parentNode) {
						el.parentNode.style.minHeight = '';
					}
				},
			}
		}

		// return to DOM
		return createElement('transition', data, context.children);
	}
});

</script>


<style lang="stylus">

/****** What we need for transition effect: ******/
.router-wrap
	position relative

// When transition IN PROCESS, (enter and leave both)
.fade-enter-active, .fade-leave-active
	position absolute
	top 0
	left 0
	right 0
	transform-origin top
	transition opacity .6s cubic-bezier(.50, 0, .2, 1), transform .6s cubic-bezier(.50, 0, .2, 1)

// foreground
.fade-enter-active
	z-index 1

// background
.fade-leave-active
	z-index -1

.fade-enter-to, .fade-leave
	opacity 1
	transform scale(1)

.fade-leave-to, .fade-enter
	opacity 0

.fade-leave-to
	transform scale(1.01)

.fade-enter
	transform scale(.99)

</style>
