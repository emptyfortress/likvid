<script setup lang="ts">
import { ref } from 'vue'

const docs = [
	{ id: 0, value: 0, label: 'Я - автор' },
	{ id: 1, value: 1, label: 'Служебные записки' },
	{ id: 2, value: 2, label: 'Входящие документы' },
	{ id: 3, value: 3, label: 'Исходящие документы' },
	{ id: 4, value: 4, label: 'Заявки' },
	{ id: 5, value: 5, label: 'Все документы' },
]
const tasks = [
	{ id: 6, value: 6, label: 'Задания_Начато' },
	{ id: 7, value: 7, label: 'Замещение_Все задания' },
	{ id: 8, value: 8, label: 'Замещение_Автор' },
	{ id: 9, value: 9, label: 'Задания_Автор' },
	{ id: 10, value: 4, label: 'Задания_Контролер' },
	{ id: 11, value: 5, label: 'Задания_Завершено' },
]
const rdoc = ref()
</script>

<template lang="pug">
div
	.text-h6 Доступно только для папок
	ul
		li Документы
			ul
				li(v-for="item in docs" :key="item.id")
					q-radio(v-model="rdoc" :val="item.id" dense :label="item.label")
		li Задания
			ul
				li(v-for="item in tasks" :key="item.id")
					q-radio(v-model="rdoc" :val="item.id" dense :label="item.label")

</template>

<style scoped lang="scss"></style>
