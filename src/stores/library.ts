import { defineStore } from 'pinia'

export const useLib = defineStore({
	id: 'lib',
	state: () => ({
		list: [
			{ id: 0, branch: 0, vid: 'шаблон', text: 'Коды полномочий' },
			{ id: 1, branch: 1, vid: 'организация', text: 'Организация' },
			{ id: 2, branch: 1, vid: 'филиал', text: 'Филиал' },
			{ id: 3, branch: 1, vid: 'подразделение', text: 'Подразделение' },
			{ id: 4, branch: 1, vid: 'контрагент', text: 'Контрагент' },
			{ id: 5, branch: 1, vid: 'группа', text: 'Группа' },
			{ id: 6, branch: 1, vid: 'роль', text: 'Роль' },
			{ id: 7, branch: 1, vid: 'папка', text: 'Папка' },
			{ id: 8, branch: 2, vid: 'сотрудник', text: 'Сотрудник' },
			{ id: 9, branch: 2, vid: 'должность', text: 'Должность' },
			{ id: 10, branch: 2, vid: 'вложение', text: 'Вложение' },
			{ id: 11, branch: 2, vid: 'документ', text: 'Документ' },
			{ id: 12, branch: 2, vid: 'задание', text: 'Задание' },
			{ id: 13, branch: 2, vid: 'группа заданий', text: 'Группа заданий' },
			{ id: 14, branch: 2, vid: 'card', text: 'Карточка' },
			{ id: 15, branch: 2, vid: 'file', text: 'Файл' },
			{ id: 16, branch: 2, vid: 'ссылка', text: 'Ссылка' },
			{ id: 17, branch: 2, vid: 'отчет', text: 'Отчет' },
			{ id: 18, branch: 2, vid: 'код полномочий', text: 'Код полномочий' },
			{ id: 19, branch: 2, vid: 'этап', text: 'Этап' },
			{ id: 20, branch: 2, vid: 'цикл', text: 'Цикл' },
			{ id: 21, branch: 2, vid: 'база данных', text: 'База данных' },
			{ id: 22, branch: 2, vid: 'запись', text: 'Запись' },
			{ id: 23, branch: 2, vid: 'логин', text: 'Логин' },
			{ id: 24, branch: 2, vid: 'журнал', text: 'Журнал' },
			{ id: 25, branch: 2, vid: 'таблица', text: 'Таблица' },
			{ id: 26, branch: 2, vid: 'строка', text: 'Строка' },
			{ id: 27, branch: 2, vid: 'запрос', text: 'Поисковый запрос' },
			{ id: 28, branch: 2, vid: 'объект', text: 'Объект' },
		],
	}),
	getters: {},
	actions: {
		addItem(e: any) {
			this.list.unshift(e)
		},
	},
})
