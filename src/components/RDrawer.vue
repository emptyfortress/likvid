<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import draggable from 'vuedraggable'

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
})

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
	{ id: 13, name: 'Карточка' },
	{ id: 14, name: 'База данных' },
	{ id: 15, name: 'Запись' },
	{ id: 16, name: 'Логин' },
	{ id: 17, name: 'Журнал' },
	{ id: 18, name: 'Таблица' },
	{ id: 19, name: 'Строка' },
	{ id: 20, name: 'Объект' },
])
const filter = ref('')
const filteredList = computed(() => {
	return list.filter((item) => item.name.toLowerCase().includes(filter.value.toLowerCase()))
})
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
		ghost-class='ghost'
		).list-group
		template(#item="{ element, index }")
			.tabel
				div
					q-icon(name="mdi-square-medium" size="18px" style="vertical-align: top;")
					span.q-ml-sm {{ element.name }}

</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.tabel {
	padding: 4px 1rem;
	width: 100%;
	cursor: pointer;
	background: $bgMain;
	font-size: 0.9rem;
}
.zg {
	margin: 1rem;
	font-size: 0.9rem;
	display: flex;
	justify-content: flex-start;
	gap: 1rem;
}
</style>
