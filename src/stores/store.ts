import { defineStore } from 'pinia'

type N = string | null

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		mini: false,
		selection: false,
		draggedNode: null as N,
	}),
	getters: {},
	actions: {
		toggleMini() {
			this.mini = !this.mini
		},
		setDraggedNode(e: string) {
			this.draggedNode = e
		},
	},
})
