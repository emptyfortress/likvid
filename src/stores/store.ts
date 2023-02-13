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
		// draggedNode: null as N,
		// currentNode: null as C,
		// mytree: [] as Stat[],
		selected: 'Контракт',
		packet: [
			{
				id: 0,
				label: 'Контракт',
				header: 'root',
				children: [
					{
						id: 1,
						label: 'Информация о заказчике',
						icon: 'mdi-file-document-outline',
					},
					{
						id: 2,
						label: 'Исполнитель',
						icon: 'mdi-folder-outline',
					},
					{
						id: 3,
						label: 'Исполнение контракта',
						icon: 'mdi-file-document-outline',
					},
				],
			},
		],
	}),
	getters: {
		currentNode(state) {
			if (state.selected === 'Контракт') {
				return state.packet[0]
			} else {
				return state.packet[0].children.find((item) => item.label === state.selected)
			}
		},
	},
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
