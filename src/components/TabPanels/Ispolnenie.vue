<script setup lang="ts">
import { ref } from 'vue'

const val6 = ref(null)
const val7 = ref(null)
const val8 = ref(null)
const val9 = ref(null)
const val10 = ref(null)
const val11 = ref(null)
const val12 = ref(null)
const val13 = ref(null)
</script>

<template lang="pug">
div
	q-form
		.mygrid
			.label Сумма контракта:
			q-input(dense v-model="val6" type="number" )
			.label Стоимость исполненных работ:
			q-input(dense v-model="val7" type="number" )
			.label Фактически оплачено:
			q-input(dense v-model="val8" type="number" )

			q-separator.q-my-md
			.title Этап контракта

			.label Название этапа:
			q-input(dense v-model="val9" type="number" )
			.label Срок исполнения этапа:
			q-input(dense v-model="val10" type="number" )
			.label Стоимость этапа:
			q-input(dense v-model="val11" type="number" )
			.label Содержание этапа:
			q-input(dense v-model="val12" type="number" )
			.label Статус:
			q-input(dense v-model="val13" type="number" )
			.fil
				q-separator.q-my-md
				.inf Список документов:
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
