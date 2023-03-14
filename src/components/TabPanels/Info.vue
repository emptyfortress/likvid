<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref(null)
const val3 = ref(null)
const val4 = ref(null)
const val5 = ref(null)
</script>

<template lang="pug">
div
	q-form
		.mygrid
			.label Заказчик:
			q-input(dense v-model="val1" type="text" )
			.label ИНН:
			q-input(dense v-model="val2" type="number" )
			.label КПП:
			q-input(dense v-model="val3" type="number" )
			.label Юридический адрес:
			q-input(dense v-model="val4" type="text" )
			.label Руководитель:
			q-input(dense v-model="val5" type="text" )

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
