<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from '@/stores/store'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const $q = useQuasar()

const rule = computed(() => {
	return [(val: any) => (val !== null && val !== '') || 'Обязательное поле']
})

const newContract: Contract = reactive({
	num: null,
	due: null,
	client: null,
	executor: 'ООО "Доксвижн"',
	sum: null,
})

const save = () => {
	store.addContract(newContract)
	router.push('/folders/1')
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
	q-form(@submit="save")
		.mygrid
			.label Номер контракта:
			q-input(dense v-model="newContract.num" )

			.label Исполнитель:
			.link ООО "Доквижн"
			.label Заказчик:
			q-input(dense v-model="newContract.client"  )
			.label Общая стоимость контракта:
			q-input(dense v-model="newContract.sum" )
			.label Сроки исполнения:
			q-input(dense v-model="newContract.due" ).dat

		q-card-actions(align="right")
			q-btn(flat color="primary" label="Отмена" to="/folders/1" type="reset")
			q-btn(unelevated color="primary" type="submit" label="Сохранить")
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
