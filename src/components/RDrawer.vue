<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import draggable from 'vuedraggable'
import { useStore } from '@/stores/store'
import WordHighlighter from 'vue-word-highlighter'

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
})

const store = useStore()

const list = reactive([
	{ id: 0, name: 'Справочник' },
	{ id: 1, name: 'Организация' },
	{ id: 2, name: 'Филиал' },
	{ id: 3, name: 'Контрагент' },
	{ id: 4, name: 'Подразделение' },
	{ id: 5, name: 'Сотрудник' },
	{ id: 6, name: 'Группа' },
	{ id: 7, name: 'Роль' },
	{ id: 8, name: 'Должность' },
	{ id: 9, name: 'Папка' },
	{ id: 10, name: 'Файл' },
	{ id: 11, name: 'Вложение' },
	{ id: 12, name: 'Документ' },
	{ id: 13, name: 'Задание' },
	{ id: 14, name: 'Группа заданий' },
	{ id: 15, name: 'Согласование' },
	{ id: 16, name: 'Карточка' },
	{ id: 17, name: 'Ссылка' },
	{ id: 18, name: 'Отчет' },
	{ id: 19, name: 'Этап' },
	{ id: 20, name: 'Цикл' },
	{ id: 21, name: 'База данных' },
	{ id: 22, name: 'Запись' },
	{ id: 23, name: 'Логин' },
	{ id: 24, name: 'Журнал' },
	{ id: 25, name: 'Таблица' },
	{ id: 26, name: 'Строка' },
	{ id: 27, name: 'Поисковый запрос' },
	{ id: 28, name: 'Объект' },
])
const drag = ref(false)
const filter = ref('')
const filteredList = computed(() => {
	return list.filter((item) => item.name.toLowerCase().includes(filter.value.toLowerCase()))
})

const ondragstart = (e: any) => {
	drag.value = true
	store.setDraggedNode(e.item.innerText)
}
const ondragend = () => {
	drag.value = false
	store.setDraggedNode(null)
}
</script>

<template lang="pug">
q-drawer(:model-value="props.modelValue" side="right" :width="300" overlay bordered)
	.zg
		div Библиотека
		q-badge {{ list.length }}
	q-input(ref="input" dense v-model="filter" clearable hide-bottom-space @clear="filter = ''").q-mx-md.q-mb-md
		template(v-slot:prepend)
			q-icon(name="mdi-magnify")

	component(:is="draggable" :list="filteredList"
		item-key="id"
		:group="{ name: 'node', pull: 'clone', put: false }"
		@start="ondragstart" 
		@end="ondragend"
		ghost-class="ghost"
		).list-group
		template(#item="{ element, index }")
			.tabel
				div
					q-icon(name="mdi-square-medium" size="18px" style="vertical-align: top;")
					span.q-ml-sm
						WordHighlighter(:query="filter") {{ element.name }}
				q-btn(dense flat round icon="mdi-information-outline" size="sm")

</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.tabel {
	padding: 4px 1rem;
	width: 100%;
	cursor: pointer;
	background: $bgMain;
	font-size: 0.9rem;
	display: grid;
	grid-template-columns: 1fr auto;
	.q-icon,
	.q-btn {
		color: $primary;
	}
}
.zg {
	margin: 1rem;
	font-size: 0.9rem;
	display: flex;
	justify-content: flex-start;
	gap: 1rem;
}
</style>
