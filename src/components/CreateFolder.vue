<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	dialog1: Boolean,
})

const emit = defineEmits(['update:modelValue', 'add'])

const name = ref('')

const cancel = () => {
	emit('update:modelValue', false)
}
const save = () => {
	emit('add', name.value)
	emit('update:modelValue', false)
}
</script>

<template lang="pug">
q-dialog(:model-value="props.dialog1")
	q-card.create
		.row.justify-between.items-center
			.text-h6.q-mt-none
				q-icon(name="mdi-folder-outline" color="primary")
				span Новая папка
			q-btn(flat round icon="mdi-close" @click="cancel")

		q-card-section.mygrid
			.label Название:
			q-input(dense v-model="name" ).quick

		q-card-actions(align="right")
			q-btn(label="Отмена" flat color="primary" @click="cancel")
			q-btn(label="Добавить" flat color="primary" @click="save")
</template>

<style scoped lang="scss">
.create {
	padding: 1rem;
	padding-top: 0.5rem;
	min-width: 500px;
	border-top: 7px solid var(--q-primary);
}
.mygrid {
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: baseline;
	column-gap: 1rem;
	row-gap: 0.7rem;
}
.label {
	text-align: right;
}
.inp {
	height: 32px;
}
</style>
