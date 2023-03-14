import { defineStore } from 'pinia'

export const useLib = defineStore({
	id: 'lib',
	state: () => ({
		list: [
			{ id: 0, branch: 1, name: 'Организация' },
			{ id: 1, branch: 1, name: 'Филиал' },
			{ id: 2, branch: 1, name: 'Подразделение' },
			{ id: 3, branch: 1, name: 'Контрагент' },
			{ id: 4, branch: 1, name: 'Группа' },
			{ id: 5, branch: 1, name: 'Папка' },
			{ id: 7, branch: 1, name: 'Роль' },
			{ id: 6, branch: 2, name: 'Сотрудник' },
			{ id: 8, branch: 2, name: 'Должность' },
			{ id: 9, branch: 2, name: 'Вложение' },
			{ id: 10, branch: 2, name: 'Документ' },
			{ id: 11, branch: 2, name: 'Задание' },
			{ id: 12, branch: 2, name: 'Группа заданий' },
			{ id: 13, branch: 2, name: 'Карточка' },
			{ id: 14, branch: 2, name: 'Файл' },
			{ id: 15, branch: 2, name: 'Ссылка' },
			{ id: 16, branch: 2, name: 'Отчет' },
			{ id: 27, branch: 2, name: 'Код полномочий' },
			{ id: 17, branch: 2, name: 'Этап' },
			{ id: 18, branch: 2, name: 'Цикл' },
			{ id: 19, branch: 2, name: 'База данных' },
			{ id: 20, branch: 2, name: 'Запись' },
			{ id: 21, branch: 2, name: 'Логин' },
			{ id: 22, branch: 2, name: 'Журнал' },
			{ id: 23, branch: 2, name: 'Таблица' },
			{ id: 24, branch: 2, name: 'Строка' },
			{ id: 25, branch: 2, name: 'Поисковый запрос' },
			{ id: 26, branch: 2, name: 'Объект' },
		],
	}),
	getters: {},
	actions: {
		addItem(e: any) {
			this.list.unshift(e)
		},
	},
})
