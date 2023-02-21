<script setup lang="ts">
// import { useStore } from '@/stores/store'

interface Item {
	id: number
	text: string
	icon: string
}
const props = defineProps<{
	item: Item
}>()

// const store = useStore()
</script>

<template lang="pug">
div
	.mygrid
		.label Автор:
		.val Фамилия Имя
		.label Дата:
		.val 2023-01-12
		.label Тип:
		.val {{ props.item.icon }}

	.not(v-if="props.item.id === 7") Просмотр недоступен.<br />Скачайте файл и откройте его локально.
	q-img(v-else :src="`${item.id}.jpg`").imag
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
	margin-top: 1rem;
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
.not {
	margin-top: 4rem;
	text-align: center;
	font-size: 1.2rem;
}
</style>
