<script setup lang="ts">
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from '@/stores/store'
import DocsVision from '@/components/DocsVision.vue'

interface Docs {
	label: string
}
const store = useStore()
const $q = useQuasar()

const docs = ref([] as Docs[])

const id = ref(null)
const num = ref(null)
const sum = ref(null)
const deadline = ref(null)
const remove = () => {
	store.removeNode()
}
const rule = computed(() => {
	return [(val: any) => (val !== null && val !== '') || 'Обязательное поле']
})

const save = () => {
	$q.notify({
		color: 'positive',
		textColor: 'white',
		icon: 'mdi-check-bold',
		message: 'Сохранено',
	})
}
const reset = () => {
	id.value = null
	num.value = null
	sum.value = null
	deadline.value = null
	val1.value = null
	val2.value = null
	val3.value = null
	val4.value = null
	val5.value = null
}
const val1 = ref(null)
const val2 = ref(null)
const val3 = ref(null)
const val4 = ref(null)
const val5 = ref(null)
</script>

<template lang="pug">
q-tab-panels(v-model="store.selected"
	animated
	transition-prev="jump-up"
	transition-next="jump-up").rel

	q-tab-panel(name="Контракт")
		.title(v-if="store.currentNode1") {{store.currentNode1.text}}

		q-form(@submit="save" @reset="reset")
			.mygrid
				.label id:
				q-input(dense v-model="id" type="number" lazy-rules :rules="rule")
				.label Номер контракта:
				q-input(dense v-model="num" type="number" lazy-rules :rules="rule")
				.label Исполнитель:
				.link ООО "Доквижн"
				.label Общая стоимость контракта:
				q-input(dense v-model="sum" type="number" lazy-rules :rules="rule")
				.label Сроки исполнения:
				q-input(dense v-model="deadline" type="date" lazy-rules :rules="rule").dat

			q-card-actions(align="right")
				q-btn(flat color="primary" label="Отмена" type="reset") 
				q-btn(unelevated color="primary" label="Сохранить" type="submit") 

	q-tab-panel(name="Информация о заказчике")
		.title(v-if="store.currentNode1") {{store.currentNode1.text}}
	
		q-form(@submit="save" @reset="reset")
			.mygrid
				.label Заказчик:
				q-input(dense v-model="val1" type="text" lazy-rules :rules="rule")
				.label ИНН:
				q-input(dense v-model="val2" type="number" lazy-rules :rules="rule")
				.label КПП:
				q-input(dense v-model="val3" type="number" lazy-rules :rules="rule")
				.label Юридический адрес:
				q-input(dense v-model="val4" type="text" lazy-rules :rules="rule")
				.label Руководитель:
				q-input(dense v-model="val5" type="text" lazy-rules :rules="rule")
			q-card-actions(align="right")
				q-btn(flat color="primary" label="Отмена" type="reset") 
				q-btn(unelevated color="primary" label="Сохранить" type="submit") 

		q-separator.q-my-md
		.inf Документы, подтверждающие статус, необходимый для заключения контракта:
		q-btn(unelevated color="primary" label="Добавить" size="sm")
		ul(v-if="docs.length > 0")
			li(v-for="item in docs" :key="item.label") {item.label}

	q-tab-panel(name="Исполнитель")
		.title(v-if="store.currentNode1") {{store.currentNode1.text}}
		component(:is="DocsVision" )

	q-tab-panel(name="Исполнение контракта")
		.title(v-if="store.currentNode1") {{store.currentNode1.text}}
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
			.title(v-if="store.currentNode1") {{store.currentNode1.text}}
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
.q-card__actions {
	margin-top: 2rem;
	/* position: absolute; */
	/* bottom: 0; */
	/* right: 0; */
	/* width: 100%; */
}
</style>
