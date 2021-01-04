
import 'object-fit-polyfill';
import '_styles/index.styl';


import VueRouter from 'vue-router';
import VueResource from 'vue-resource';


// components
import '_components/app-header.vue';
import '_components/app-banner.vue';
import '_components/app-aside.vue';
import '_components/app-footer.vue';
import '_components/app-carousel.vue';
import '_components/transition-fade.vue';
import '_components/app-post.vue';
import '_components/app-post-recomended.vue';


// filters
import '_filters/to-date';


Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
	// mode: 'history',

	routes: [

		{
			path: '/',
			component: (resolve) => require(['_pages/home.vue'], resolve),
			children: [

				{
					path: '',
					name: 'home',
					component: (resolve) => require(['_pages/posts.vue'], resolve),
					meta: {
						ignoreScroll: true
					}
				},

				{
					path: 'post/:id',
					name: 'post',
					component: (resolve) => require(['_pages/post.vue'], resolve)
				}

			]
		},

		{
			path: '/about',
			name: 'about',
			component: (resolve) => require(['_pages/about.vue'], resolve)
		},

		{
			path: '/contacts',
			name: 'contacts',
			component: (resolve) => require(['_pages/contacts.vue'], resolve)
		},

		{
			path: '*',
			redirect: '/'
		}

	]
});


new Vue({
	el: '#app-root',

	router,

	data: {
		aside: {
			temp: 'here'
		}
	},

	mounted() {
		let vm = this;

		vm.$router.afterEach(function(to, from) {
			setTimeout(function() {
				let $banner = $('div:not(.fade-leave-active) > .js-banner');
				let offset = 0

				if ($banner.length && !(to.meta && to.meta.ignoreScroll)) {
					offset = $banner.outerHeight() + $banner.offset().top - $('.js-main-header').outerHeight();
				}

				$('html, body').stop().animate({
					scrollTop: offset + 'px'
				}, 300);
			}, 10);
		});
	}
});

document.querySelector('.boot-loader').style.display = 'none';
