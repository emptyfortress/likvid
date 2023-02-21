<script setup lang="ts">
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const val1 = ref(null)
const val2 = ref(null)
const val3 = ref(null)
const val4 = ref(null)
const val5 = ref(null)

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
	val1.value = null
	val2.value = null
	val3.value = null
	val4.value = null
	val5.value = null
}
</script>

<template lang="pug">
div
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
	/* position: absolute; */
	/* bottom: 0; */
	/* right: 0; */
	/* width: 100%; */
}
</style>
