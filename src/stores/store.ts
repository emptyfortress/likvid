import { defineStore } from 'pinia'
import { getMembers } from '@/utils/utils'

type A = NodeData | null
type C = Stat | null

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		mini: false,
		rightDrawer: false,
		treeChanged: false,
		draggedNode: null as A,
		currentNode: null as C,
		currentCode: null as C,
		selected: 'Контракт',
		selected1: 'МинЦифры',

		packet: [
			{
				id: 0,
				text: 'Контракт',
				header: 'root',
				selected: false,
				children: [
					{
						id: 1,
						text: 'Информация о заказчике',
					},
					{
						id: 2,
						text: 'Исполнитель',
						mandatory: true,
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
				selected: false,
				icon: 'mdi-folder-outline',
				branch: 1,
				restrict: false,
				mandatory: false,
				quan: 1,
				vid: 'шаблон',
				children: [
					{
						id: 1,
						text: 'Информация о заказчике',
						selected: false,
						restrict: false,
						quan: 1,
						mandatory: true,
						branch: 2,
						vid: 'карточка',
					},
					{
						id: 2,
						text: 'Исполнитель',
						selected: false,
						icon: 'mdi-folder-outline',
						restrict: false,
						quan: 1,
						branch: 1,
						mandatory: true,
						vid: 'шаблон',
						children: [
							{
								id: 3,
								text: 'Файл',
								restrict: false,
								quan: 1,
								branch: 2,
								mandatory: false,
								vid: 'file',
							},
						],
					},
					{
						id: 4,
						text: 'Исполнение контракта',
						restrict: false,
						quan: 1,
						selected: false,
						branch: 2,
						mandatory: true,
						vid: 'карточка',
					},
					{
						id: 5,
						text: 'Изменение контракта',
						restrict: false,
						quan: 1,
						selected: false,
						branch: 2,
						mandatory: false,
						vid: 'карточка',
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
				branch: 1,
				restrict: false,
				mandatory: false,
				quan: 1,
				vid: 'шаблон',
				children: [
					{
						id: 1,
						text: 'Папка',
						icon: 'mdi-folder-outline',
						selected: false,
						restrict: false,
						mandatory: false,
						quan: 1,
						branch: 1,
						vid: 'папка',
						children: [
							{
								id: 2,
								text: 'Код полномочий',
								icon: 'mdi-key-chain-variant',
								selected: false,
								restrict: false,
								mandatory: false,
								quan: 1,
								branch: 2,
								vid: 'карточка',
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
				selected: false,
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
						selected: false,
					},
					{
						id: 3,
						icon: 'keychain',
						text: 'CPDV_3 договоры от 500 т. руб.',
						code: 'CPDV_3',
						name: 'Подписание и отправка договоров от 500 т. руб',
						descr: 'Подписание договоров от 500 т. руб',
						doveritel: 'ООО "ДоксВижн"',
						selected: false,
					},
					{
						id: 4,
						icon: 'keychain',
						text: 'CPDV_4 договоры от 1 млн. руб.',
						code: 'CPDV_4',
						name: 'Подписание договоров от 1 млн. руб',
						descr: 'Подписание и отправка договоров от 1 млн. руб',
						doveritel: 'ООО "ДоксВижн"',
						selected: false,
					},
					{
						id: 5,
						icon: 'keychain',
						text: 'CPDV_5 договоры с зарубежными партнерами',
						code: 'CPDV_5',
						name: 'Подписание договоров с зарубежными партнерами',
						descr: 'Подписание и отправка договоров с зарубежными партнерами',
						doveritel: 'ООО "ДоксВижн"',
						selected: false,
					},
					{
						id: 6,
						icon: 'keychain',
						text: 'CPDV_6 приказы по группе компаний',
						code: 'CPDV_6',
						name: 'Приказы по группе компаний',
						descr: 'Подписание и отправка приказов по группе компаний',
						doveritel: 'ООО "ДоксВижн"',
						selected: false,
					},
					{
						id: 8,
						icon: 'keychain',
						text: 'CPDV_8 больничные листы',
						code: 'CPDV_8',
						name: 'Подписание больничных',
						descr: 'Оформление и подписание больничных листов',
						doveritel: 'ООО "ДоксВижн"',
						selected: false,
					},
					{
						id: 9,
						icon: 'keychain',
						text: 'CPDV_9 служебные записки',
						code: 'CPDV_9',
						name: 'Служебные записки',
						descr: 'Подписание внутренних служебных записок',
						doveritel: 'ООО "ДоксВижн"',
						selected: false,
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
						selected: false,
					},
					{
						id: 12,
						text: 'CPMD-2 Приказы по управлению',
						icon: 'keychain',
						code: 'CPMD-2',
						name: 'Подписание приказов',
						descr: 'Подписание и отправка приказов по управлению',
						doveritel: 'Минцифры',
						selected: false,
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
				children: [],
			},
		],
		myfolders: [
			{
				id: 0,
				icon: 'mdi-folder-outline',
				title: 'Коды полномочий',
				url: '/folders/2',
				typ: '2',
			},
		] as Folder[],

		pages1: [
			{
				id: 0,
				title: 'Главная',
				icon: 'mdi-home-roof',
				url: '/',
			},
			{
				id: 1,
				title: 'Последние карточки',
				icon: 'mdi-history',
				url: '/path/history',
			},
			{
				id: 2,
				title: 'Мои задания',
				url: '/path/task',
			},
			{
				id: 2,
				title: 'Мои документы',
				url: '/path/doc',
			},
		],
		pages: [
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
			// return getMembers(state.codes).filter((item) => item.icon === 'keychain')
			return getMembers(state.codes)
		},
		flatCodes1(state) {
			return getMembers(state.codes).filter((item) => item.icon === 'keychain')
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
		setCodes(payload: any) {
			this.codes = payload
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
		addNewItemToDrawer(e: string, id: string) {
			const temp = {
				id: Math.floor(Math.random() * 10000),
				icon: 'mdi-folder-outline',
				title: e,
				url: '/folders/' + id,
				children: [],
				typ: id,
			}
			this.myfolders.push(temp)
		},
		addContract(e: Contract) {
			this.myfolders[1].children.push(e)
		},
	},
})
