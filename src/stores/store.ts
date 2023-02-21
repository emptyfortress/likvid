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
				selected: true,
				children: [
					{
						id: 1,
						text: 'Информация о заказчике',
					},
					{
						id: 2,
						text: 'Исполнитель',
						children: [
							{
								id: 4,
								text: 'Выписка из ЕГРЮЛ',
								icon: 'pdf',
							},
							{
								id: 5,
								text: 'Устав предприятия',
								icon: 'doc',
							},
							{
								id: 6,
								text: 'Доверенность',
								icon: 'doc',
							},
							{
								id: 7,
								text: 'Учредительные документы',
								icon: 'zip',
							},
							{
								id: 8,
								text: 'Декларация о доходах за 2021г.',
								icon: 'pdf',
							},
						],
					},
					{
						id: 3,
						text: 'Исполнение контракта',
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
				to: '/contract',
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
				isDrop: true,
				children: [],
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
				url: '/contract',
			},
			// {
			// 	id: 2,
			// 	title: 'Edit mode',
			// 	icon: 'mdi-folder-outline',
			// 	url: '/contract1',
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
			this.selected = e!.data.text
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
				id: 9,
				text: 'Изменение контракта',
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
				to: '/view',
				className: 'act',
			}
			this.createList.push(temp)
		},
		addNewItemToDrawer(e: string) {
			const temp = {
				id: Math.floor(Math.random() * 10000),
				icon: 'mdi-folder-outline',
				title: e,
				url: '/view',
			}
			this.pages.push(temp)
		},
	},
})
