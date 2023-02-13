<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import DocsVision from '@/components/DocsVision.vue'

interface Docs {
	label: string
}
const store = useStore()

const docs = ref([] as Docs[])

const id = ref()
const num = ref()
const sum = ref()
const deadline = ref()
const remove = () => {
	store.removeNode()
}
</script>

<template lang="pug">
q-tab-panels(v-model="store.selected"
	animated
	transition-prev="jump-up"
	transition-next="jump-up")

	q-tab-panel(name="Контракт")
		.title(v-if="store.currentNode") {{store.currentNode.label}}

		q-form.mygrid
			.label id:
			q-input(dense v-model="id" type="number")
			.label Номер контракта:
			q-input(dense v-model="num" type="number")
			.label Исполнитель:
			.link ООО "Доквижн"
			.label Общая стоимость контракта:
			q-input(dense v-model="sum" type="number")
			.label Сроки исполнения:
			q-input(dense v-model="deadline" type="date").dat

	q-tab-panel(name="Информация о заказчике")
		.title(v-if="store.currentNode") {{store.currentNode.label}}
	
		q-form.mygrid
			.label Заказчик:
			q-input(dense v-model="id" type="text")
			.label ИНН:
			q-input(dense v-model="id" type="number")
			.label КПП:
			q-input(dense v-model="id" type="number")
			.label Юридический адрес:
			q-input(dense v-model="id" type="text")
			.label Руководитель:
			q-input(dense v-model="id" type="text")
		q-separator.q-my-md
		.inf Документы, подтверждающие статус, необходимый для заключения контракта:
		q-btn(unelevated color="primary" label="Добавить" size="sm")
		ul(v-if="docs.length > 0")
			li(v-for="item in docs" :key="item.label") {item.label}

	q-tab-panel(name="Исполнитель")
		.title(v-if="store.currentNode") {{store.currentNode.label}}
		DocsVision

	q-tab-panel(name="Исполнение контракта")
		.title(v-if="store.currentNode") {{store.currentNode.label}}
		q-form.mygrid
			.label Сумма контракта:
			q-input(dense v-model="id" type="number")
			.label Стоимость исполненных работ:
			q-input(dense v-model="id" type="number")
			.label Фактически оплачено:
			q-input(dense v-model="id" type="number")
		q-separator.q-my-md
		.title Этап контракта
		q-form.mygrid
			.label Название этапа:
			q-input(dense v-model="id" type="number")
			.label Срок исполнения этапа:
			q-input(dense v-model="id" type="number")
			.label Стоимость этапа:
			q-input(dense v-model="id" type="number")
			.label Содержание этапа:
			q-input(dense v-model="id" type="number")
			.label Статус:
			q-input(dense v-model="id" type="number")
		q-separator.q-my-md
		.inf Список документов:
		q-btn(unelevated color="primary" label="Добавить" size="sm")
		ul(v-if="docs.length > 0")
			li(v-for="item in docs" :key="item.label") {item.label}

	q-tab-panel(name="Изменение контракта")
		.row.justify-between.items-center
			.title(v-if="store.currentNode") {{store.currentNode.label}}
			q-btn(unelevated color="primary" label="Удалить документ" @click="remove") 
		br
		q-form.mygrid
			.label Условие 1:
			q-input(dense v-model="id" type="number")
			.label Условие 2:
			q-input(dense v-model="id" type="number")
			.label Условие 3:
			q-input(dense v-model="id" type="number")
		q-separator.q-my-md
		.inf Список документов:
		q-btn(unelevated color="primary" label="Добавить" size="sm")
		ul(v-if="docs.length > 0")
			li(v-for="item in docs" :key="item.label") {item.label}
</template>

<style scoped lang="scss">
.title {
	font-size: 1.3rem;
}
.mygrid {
	display: grid;
	grid-template-columns: auto 2fr;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
	font-size: 0.9rem;
	.q-input {
		max-width: 350px;
		font-size: 1.1rem;
	}
}
.label {
	text-align: right;
	opacity: 0.75;
}
.link {
	cursor: pointer;
	color: $primary;
	text-decoration: underline;
	font-size: 1.1rem;
	margin-top: 0.5rem;
}
.inf {
	font-size: 0.9rem;
	margin-bottom: 1rem;
}
li {
	color: $primary;
	text-decoration: underline;
	cursor: pointer;
}
</style>
