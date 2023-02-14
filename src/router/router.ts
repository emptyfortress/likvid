import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home.vue'

declare module 'vue-router' {
	interface Bread {
		label: string
		to: string
	}
	interface RouteMeta {
		title: string
		bread?: Bread[]
	}
}

export const router = createRouter({
	history: createWebHashHistory(),

	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			// meta: { title: 'Admin console', bread: [{ label: 'Dashboard', to: '/' }] },
		},
		{
			path: '/view',
			name: 'view',
			component: () => import('@/components/View.vue'),
			// meta: { title: 'Admin console', bread: [{ label: 'Dashboard', to: '/' }] },
		},
		{
			path: '/view1',
			name: 'view1',
			component: () => import('@/components/View1.vue'),
			// meta: { title: 'Admin console', bread: [{ label: 'Dashboard', to: '/' }] },
		},
		{
			path: '/run',
			name: 'runtime',
			component: () => import('@/components/RunTime.vue'),
			// meta: { title: 'Admin console', bread: [{ label: 'Dashboard', to: '/' }] },
		},
		{
			path: '/new/:id',
			name: 'new',
			component: () => import('@/components/Constructor.vue'),
			// meta: { title: 'Admin console', bread: [{ label: 'Dashboard', to: '/' }] },
		},
	],
})

const DEFAULT_TITLE = 'DV prototype'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})
