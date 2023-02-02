<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore()
const mnoj = ref(1)
const name = ref('Справочник')
const root = ref(true)
</script>

<template lang="pug">
ul
	li Название вида
	li Множественность
	li Карточка папки
	li Ссылка на шаблон

q-form.form
	q-input(filled  v-model="name" label="Название").fill
	q-checkbox(v-model="root" label="Root" disable) 
	.item
		.label Карточка:
		.link Справочник сотрудников
		q-btn(dense flat round icon="mdi-dots-horizontal" color="primary") 
	div
	.item
		.label Шаблон создания:
		.link Справочник сотрудников
		q-btn(dense flat round icon="mdi-dots-horizontal" color="primary") 
	div
	.item.fall.fill
		.label Множественность:
		q-input(v-model="mnoj" type="number" dense).smm
		q-slider(dense v-model="mnoj"
			:min="1"
			:max="20"
			:step="1"
			label)

</template>

<style scoped lang="scss"></style>
