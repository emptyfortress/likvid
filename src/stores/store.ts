import { defineStore } from 'pinia'

type N = string | null
type C = Stat | null

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		mini: false,
		selection: false,
		rightDrawer: false,
		treeChanged: false,
		draggedNode: null as N,
		currentNode: null as C,
		mytree: [] as Stat[],
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
		showRightDrawer() {
			this.rightDrawer = true
		},
		hideRightDrawer() {
			this.rightDrawer = false
		},
		toggleRightDrawer() {
			this.rightDrawer = !this.rightDrawer
		},
		setTreeChanged(payload: boolean) {
			this.treeChanged = payload
		},
		setMyTree(e: Stat[]) {
			this.mytree = [...e]
		},
	},
})
