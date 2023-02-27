import { defineStore } from 'pinia'

type A = {
	id: number
	name: string
	branch?: boolean
} | null
type C = Stat | null

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		mini: false,
		selection: false,
		rightDrawer: false,
		treeChanged: false,
		draggedNode: null as A,
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
		codes: [
			{
				id: 0,
				text: 'Коды полномочий',
				header: 'root',
				selected: true,
				children: [
					{
						id: 1,
						icon: 'keychain',
						text: 'CPDV_1 договоры до 50 т. руб.',
						code: 'CPDV_1',
						name: 'Подписание договоров до 50 т. руб',
						descr: 'Подписание и отправка договоров до 50 т. руб',
						doveritel: 'ООО "ДоксВижн"',
					},
					{
						id: 2,
						icon: 'keychain',
						text: 'CPDV_2 договоры до 100 т. руб.',
						code: 'CPDV_2',
						name: 'Подписание договоров до 100 т. руб',
						descr: 'Подписание и отправка договоров до 100 т. руб',
						doveritel: 'ООО "ДоксВижн"',
					},
					{
						id: 3,
						icon: 'keychain',
						text: 'CPDV_3 договоры от 500 т. руб.',
						code: 'CPDV_3',
						name: 'Подписание и отправка договоров от 500 т. руб',
						descr: 'Подписание договоров от 500 т. руб',
						doveritel: 'ООО "ДоксВижн"',
					},
					{
						id: 4,
						icon: 'keychain',
						text: 'CPDV_4 договоры от 1 млн. руб.',
						code: 'CPDV_4',
						name: 'Подписание договоров от 1 млн. руб',
						descr: 'Подписание и отправка договоров от 1 млн. руб',
						doveritel: 'ООО "ДоксВижн"',
					},
					{
						id: 5,
						icon: 'keychain',
						text: 'CPDV_5 договоры с зарубежными партнерами',
						code: 'CPDV_5',
						name: 'Подписание договоров с зарубежными партнерами',
						descr: 'Подписание и отправка договоров с зарубежными партнерами',
						doveritel: 'ООО "ДоксВижн"',
					},
					{
						id: 6,
						icon: 'keychain',
						text: 'CPDV_6 приказы по группе компаний',
						code: 'CPDV_6',
						name: 'Приказы по группе компаний',
						descr: 'Подписание и отправка приказов по группе компаний',
						doveritel: 'ООО "ДоксВижн"',
					},
					{
						id: 7,
						icon: 'keychain',
						text: 'CPDV_7 приказы по филиалу',
						code: 'CPDV_7',
						name: 'Приказы по филиалу',
						descr: 'Подписание и отправка приказов по филиалу',
						doveritel: 'ООО "ДоксВижн"',
					},
					{
						id: 8,
						icon: 'keychain',
						text: 'CPDV_8 больничные листы',
						code: 'CPDV_8',
						name: 'Подписание больничных',
						descr: 'Оформление и подписание больничных листов',
						doveritel: 'ООО "ДоксВижн"',
					},
					{
						id: 9,
						icon: 'keychain',
						text: 'CPDV_9 служебные записки',
						code: 'CPDV_9',
						name: 'Служебные записки',
						descr: 'Подписание внутренних служебных записок',
						doveritel: 'ООО "ДоксВижн"',
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
				branch: true,
				children: [
					// {
					// 	id: 1,
					// 	text: 'Node 1',
					// 	selected: false,
					// 	branch: true,
					// 	children: [
					// 		{
					// 			id: 2,
					// 			text: 'Node 2',
					// 			selected: false,
					// 			branch: false,
					// 		},
					// 	],
					// },
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
				url: '/contract',
			},
			{
				id: 5,
				title: 'Коды полномочий',
				icon: 'mdi-folder-outline',
				url: '/polnomoch',
			},
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
		setDraggedNode(e: A) {
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
		// setBookName(e: string) {
		// 	this.bookName = e
		// },
	},
})
