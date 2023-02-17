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
		selected: 'Контракт',
		packet: [
			{
				id: 0,
				text: 'Контракт',
				header: 'root',
				children: [
					{
						id: 1,
						text: 'Информация о заказчике',
						icon: 'mdi-file-document-outline',
					},
					{
						id: 2,
						text: 'Исполнитель',
						icon: 'mdi-folder-outline',
					},
					{
						id: 3,
						text: 'Исполнение контракта',
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
		treedata: [
			{
				id: 0,
				text: 'Root',
				header: 'root',
				selected: false,
				children: [
					{
						id: 1,
						text: 'Node',
						selected: false,
						children: [],
					},
				],
			},
		],
		pages: [
			{
				id: 0,
				title: 'Главная',
				icon: 'mdi-home-roof',
				url: '/',
			},
			{
				id: 1,
				title: 'Design mode',
				icon: 'mdi-ruler-square-compass',
				url: '/new/0',
			},
			{},
			{
				id: 4,
				title: 'Контракт',
				icon: 'mdi-folder-outline',
				url: '/view',
			},
			// {
			// 	id: 2,
			// 	title: 'Edit mode',
			// 	icon: 'mdi-folder-outline',
			// 	url: '/view1',
			// },
		],
	}),
	getters: {
		currentNode1(state) {
			if (state.selected === 'Контракт') {
				return state.packet[0]
			} else {
				return state.packet[0].children.find((item) => item.text === state.selected)
			}
		},
	},
	actions: {
		toggleRight() {
			this.rightDrawer = !this.rightDrawer
		},
		toggleMini() {
			this.mini = !this.mini
		},
		setDraggedNode(e: N) {
			this.draggedNode = e
		},
		setCurrentNode(e: C) {
			this.currentNode = e
		},
		// setMyTree(e: any) {
		// 	this.mytree = [...e]
		// },
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
				text: 'Изменение контракта',
				icon: 'mdi-file-document-outline',
			}
			this.packet[0].children.push(change)
			this.selected = 'Изменение контракта'
		},
		removeNode() {
			this.packet[0].children.pop()
			this.selected = 'Контракт'
		},
		addNewItemToAddDialog(e: string) {
			const temp = {
				id: this.createList.length + 1,
				icon: 'book',
				label: e,
				to: '/view1',
				className: 'act',
			}
			this.createList.push(temp)
		},
	},
})
