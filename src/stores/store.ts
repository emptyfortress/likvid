import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		mini: false,
		selection: false,
		selectedNode: {
			isStat: true,
			hidden: false,
			checked: false,
			style: null,
			class: null,
			draggable: null,
			droppable: null,
			data: {
				text: 'Справочник',
				root: true,
				selected: true,
			},
			open: true,
			parent: null,
			children: 'Node 1',
			level: 1,
		},
	}),
	getters: {},
	actions: {
		toggleMini() {
			this.mini = !this.mini
		},
		setSelectedNode(e: Stat) {
			this.selectedNode = e
		},
	},
})
