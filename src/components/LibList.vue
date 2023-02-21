<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import draggable from 'vuedraggable'
import { useStore } from '@/stores/store'
import WordHighlighter from 'vue-word-highlighter'
// import { elementsFromPoint } from 'helper-js'

const props = defineProps({
	zag: {
		type: Boolean,
		default: false,
	},
})
const store = useStore()
const list = reactive([
	{ id: 0, branch: true, name: 'Организация' },
	{ id: 1, branch: true, name: 'Филиал' },
	{ id: 2, branch: true, name: 'Подразделение' },
	{ id: 3, branch: true, name: 'Контрагент' },
	{ id: 4, branch: true, name: 'Группа' },
	{ id: 5, branch: true, name: 'Папка' },
	{ id: 6, branch: false, name: 'Сотрудник' },
	{ id: 7, branch: false, name: 'Роль' },
	{ id: 8, branch: false, name: 'Должность' },
	{ id: 9, branch: false, name: 'Вложение' },
	{ id: 10, branch: false, name: 'Документ' },
	{ id: 11, branch: false, name: 'Задание' },
	{ id: 12, branch: false, name: 'Группа заданий' },
	{ id: 13, branch: false, name: 'Карточка' },
	{ id: 14, branch: false, name: 'Файл' },
	{ id: 15, branch: false, name: 'Ссылка' },
	{ id: 16, branch: false, name: 'Отчет' },
	{ id: 17, branch: false, name: 'Этап' },
	{ id: 18, branch: false, name: 'Цикл' },
	{ id: 19, branch: false, name: 'База данных' },
	{ id: 20, branch: false, name: 'Запись' },
	{ id: 21, branch: false, name: 'Логин' },
	{ id: 22, branch: false, name: 'Журнал' },
	{ id: 23, branch: false, name: 'Таблица' },
	{ id: 24, branch: false, name: 'Строка' },
	{ id: 25, branch: false, name: 'Поисковый запрос' },
	{ id: 26, branch: false, name: 'Объект' },
])
const drag = ref(false)
const filter = ref('')
const filteredList = computed(() => {
	return list.filter((item) => item.name.toLowerCase().includes(filter.value.toLowerCase()))
})
const ondragstart = (e: any) => {
	drag.value = true
	const node = list.find((item) => item.name === e.item.innerText)
	if (node) {
		store.setDraggedNode(node)
	}
}
const ondragend = () => {
	drag.value = false
	store.setDraggedNode(null)
}
</script>

<template lang="pug">
.zg(v-if="props.zag")
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
		.tabel(:class="{ multi : element.branch}")
			div
				q-icon(name="mdi-folder-outline" size="20px" color="primary" v-if="element.branch")
				q-icon(name="mdi-square-medium" size="18px" style="vertical-align: top;" v-else)
				span.q-ml-sm
					component(:is="WordHighlighter" :query="filter") {{ element.name }}
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
	&.multi {
		background: #dbded3;
	}
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
