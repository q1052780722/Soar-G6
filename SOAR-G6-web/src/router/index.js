import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
// import G6Editor from '../views/G6Editor.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
	{
	  path: '/edit',
	  name: 'edit',
	  component: () => import(/* webpackChunkName: "about" */ '../views/G6Editor.vue')
	},
	{
		path:'/edit/:num',
		name:'edit',
		component: () => import(/* webpackChunkName: "about" */ '../views/G6Editor.vue')
	},
	{
		path:'/playbookList',
		name:'playbookList',
		component: () => import(/* webpackChunkName: "about" */ '../views/playbookList.vue')
	}
  ]
})
