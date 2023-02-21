<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

const emit = defineEmits(['remove'])

const store = useStore()
const id = ref()

const remove = () => {
	store.removeNode()
	emit('remove')
}
</script>

<template lang="pug">
div
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
