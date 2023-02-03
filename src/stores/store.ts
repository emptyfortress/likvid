import { defineStore } from 'pinia'

type N = string | null
type C = Stat | null

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		mini: false,
		selection: false,
		draggedNode: null as N,
		currentNode: null as C,
	}),
	getters: {},
	actions: {
		toggleMini() {
			this.mini = !this.mini
		},
		setDraggedNode(e: N) {
			this.draggedNode = e
		},
		setCurrentNode(e: C) {
			this.currentNode = e
		},
	},
})
