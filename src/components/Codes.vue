<script setup lang="ts">
interface Item {
	id: number
	text: string
	icon: string
	code?: string
	name?: string
	descr?: string
	doveritel?: string
}
const props = defineProps<{
	item: Item
}>()

// const store = useStore()
</script>

<template lang="pug">
div
	.mygrid(v-if="props.item.code")
		.label Код полномочий:
		.val {{ props.item.code}}
		.label Название полномочий:
		.val {{ props.item.name}}
		.label Описание:
		.val {{ props.item.descr }}
		.label Доверитель:
		.val {{ props.item.doveritel }}
	.mygrid(v-else)
		.label Код справочника:
		.val PPDV_05
		.label Составитель:
		.val {{props.item.text}}
		.label Дата обновления:
		.val 22.07.2022

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
