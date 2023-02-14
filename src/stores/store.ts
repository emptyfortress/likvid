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
		// currentNode1: null as C,
		mytree: [] as Stat[],
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
		createList: [
			{ id: 0, icon: 'users', label: 'Сотрудников', to: '', className: '' },
			{ id: 1, icon: 'partner', label: 'Контрагентов', to: '', className: '' },
			{ id: 3, icon: 'nomenclatura', label: 'Номенклатура дел', to: '', className: '' },
			{
				id: 2,
				icon: 'packet',
				label: 'Пакет документов "Контракт"',
				to: '/view',
				className: 'act',
			},
			{ id: 4, icon: 'cran', label: 'С нуля', to: '/new/0', className: 'act' },
		],
	}),
	getters: {
		currentNode1(state) {
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
		setMyTree(e: Stat[]) {
			this.mytree = [...e]
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
		addNode() {
			const change = {
				id: 4,
				label: 'Изменение контракта',
				icon: 'mdi-file-document-outline',
			}
			this.packet[0].children.push(change)
			this.selected = 'Изменение контракта'
		},
		removeNode() {
			this.packet[0].children.pop()
			this.selected = 'Контракт'
		},
	},
})
