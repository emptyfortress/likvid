<script setup lang="ts">
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from '@/stores/store'

const store = useStore()
const $q = useQuasar()

const rule = computed(() => {
	return [(val: any) => (val !== null && val !== '') || 'Обязательное поле']
})
const id = ref(null)
const num = ref(null)
const sum = ref(null)
const deadline = ref(null)

const reset = () => {
	id.value = null
	num.value = null
	sum.value = null
	deadline.value = null
}
const save = () => {
	$q.notify({
		color: 'positive',
		textColor: 'white',
		icon: 'mdi-check-bold',
		message: 'Сохранено',
	})
}
</script>

<template lang="pug">
div
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
	row-gap: 0.3rem;
	font-size: 0.9rem;
	.q-input {
		max-width: 350px;
		font-size: 1.1rem;
	}
	.q-separator,
	.title,
	.fil {
		grid-column: 1/-1;
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
}
</style>
