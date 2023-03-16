import { defineStore } from 'pinia'

export const useLib = defineStore({
	id: 'lib',
	state: () => ({
		list: [
			{ id: 0, branch: 0, vid: 'шаблон', name: 'Коды полномочий' },
			{ id: 1, branch: 1, vid: 'организация', name: 'Организация' },
			{ id: 2, branch: 1, vid: 'филиал', name: 'Филиал' },
			{ id: 3, branch: 1, vid: 'подразделение', name: 'Подразделение' },
			{ id: 4, branch: 1, vid: 'контрагент', name: 'Контрагент' },
			{ id: 5, branch: 1, vid: 'группа', name: 'Группа' },
			{ id: 6, branch: 1, vid: 'роль', name: 'Роль' },
			{ id: 7, branch: 1, vid: 'папка', name: 'Папка' },
			{ id: 8, branch: 2, vid: 'сотрудник', name: 'Сотрудник' },
			{ id: 9, branch: 2, vid: 'должность', name: 'Должность' },
			{ id: 10, branch: 2, vid: 'вложение', name: 'Вложение' },
			{ id: 11, branch: 2, vid: 'документ', name: 'Документ' },
			{ id: 12, branch: 2, vid: 'задание', name: 'Задание' },
			{ id: 13, branch: 2, vid: 'группа заданий', name: 'Группа заданий' },
			{ id: 14, branch: 2, vid: 'card', name: 'Карточка' },
			{ id: 15, branch: 2, vid: 'file', name: 'Файл' },
			{ id: 16, branch: 2, vid: 'ссылка', name: 'Ссылка' },
			{ id: 17, branch: 2, vid: 'отчет', name: 'Отчет' },
			{ id: 18, branch: 2, vid: 'код полномочий', name: 'Код полномочий' },
			{ id: 19, branch: 2, vid: 'этап', name: 'Этап' },
			{ id: 20, branch: 2, vid: 'цикл', name: 'Цикл' },
			{ id: 21, branch: 2, vid: 'база данных', name: 'База данных' },
			{ id: 22, branch: 2, vid: 'запись', name: 'Запись' },
			{ id: 23, branch: 2, vid: 'логин', name: 'Логин' },
			{ id: 24, branch: 2, vid: 'журнал', name: 'Журнал' },
			{ id: 25, branch: 2, vid: 'таблица', name: 'Таблица' },
			{ id: 26, branch: 2, vid: 'строка', name: 'Строка' },
			{ id: 27, branch: 2, vid: 'запрос', name: 'Поисковый запрос' },
			{ id: 28, branch: 2, vid: 'объект', name: 'Объект' },
		],
	}),
	getters: {},
	actions: {
		addItem(e: any) {
			this.list.unshift(e)
		},
	},
})
