import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		mini: false,
		selection: false,
		draggedNode: null,
	}),
	getters: {},
	actions: {
		toggleMini() {
			this.mini = !this.mini
		},
		setDraggedNode(e: null | string) {
			this.draggedNode = e
		},
	},
})
