import { defineStore } from 'pinia'
import { getMembers } from '@/utils/utils'

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
		// selection: false,
		// selection1: false,
		rightDrawer: false,
		treeChanged: false,
		draggedNode: null as A,
		currentNode: null as C,
		currentCode: null as C,
		selected: 'Контракт',
		selected1: 'ООО "Доксвижн"',

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
		contract: [
			{
				id: 0,
				text: 'Контракт',
				header: 'root',
				selected: true,
				icon: 'mdi-folder-outline',
				branch: true,
				quan: 1,
				children: [
					{
						id: 1,
						text: 'Информация о заказчике',
						selected: false,
						quan: 1,
						branch: false,
					},
					{
						id: 2,
						text: 'Исполнитель',
						selected: false,
						icon: 'mdi-folder-outline',
						quan: 1,
						branch: true,
						children: [
							{
								id: 3,
								text: 'Файл',
								quan: 0,
								branch: false,
							},
						],
					},
					{
						id: 4,
						text: 'Исполнение контракта',
						quan: 1,
						selected: false,
						branch: false,
					},
					{
						id: 5,
						text: 'Изменение контракта',
						quan: 1,
						selected: false,
						branch: false,
					},
				],
			},
		],
		cod: [
			{
				id: 0,
				text: 'Коды полномочий',
				header: 'root',
				selected: false,
				icon: 'mdi-folder-outline',
				branch: true,
				quan: 1,
				children: [
					{
						id: 1,
						text: 'Папка',
						icon: 'mdi-folder-outline',
						selected: false,
						quan: 0,
						branch: true,
						children: [
							{
								id: 2,
								text: 'Код полномочий',
								icon: 'mdi-key-chain-variant',
								selected: false,
								quan: 0,
								branch: false,
							},
						],
					},
				],
			},
		],
		codes: [
			{
				id: 0,
				text: 'ООО "Доксвижн"',
				header: 'root',
				selected: true,
				icon: 'NodeFolder',
				children: [
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
			{
				id: 10,
				text: 'МинЦифры',
				selected: false,
				icon: 'NodeFolder',
				children: [
					{
						id: 11,
						text: 'CPMD-1 Приказы по министерству',
						icon: 'keychain',
						code: 'CPMD-1',
						name: 'Подписание приказов',
						descr: 'Подписание и отправка приказов по министерству',
						doveritel: 'Минцифры',
					},
					{
						id: 12,
						text: 'CPMD-2 Приказы по управлению',
						icon: 'keychain',
						code: 'CPMD-2',
						name: 'Подписание приказов',
						descr: 'Подписание и отправка приказов по управлению',
						doveritel: 'Минцифры',
					},
				],
			},
		] as Code[],
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
				quan: 0,
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
			{
				id: 2,
				title: 'Контракт',
				icon: 'mdi-ruler-square-compass',
				url: '/new/1',
			},
			{
				id: 3,
				title: 'Коды полномочий',
				icon: 'mdi-ruler-square-compass',
				url: '/new/2',
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
		flatCodes(state) {
			return getMembers(state.codes)
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
		setCurrentCode(e: C) {
			this.currentCode = e
			this.selected1 = e!.data.text
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
