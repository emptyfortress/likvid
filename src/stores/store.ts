import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		mini: false,
		treedata: [
			{ text: 'Node 1', children: [] },
			{ text: 'Node 2', children: [] },
		],
	}),
	getters: {},
	actions: {
		toggleMini() {
			this.mini = !this.mini
		},
		addChild() {
			const node = {
				text: 'Node',
				children: [],
			}
			this.treedata.push(node)
			console.log('fuck')
		},
	},
})
