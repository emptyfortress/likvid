<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '@/components/global/SvgIcon.vue'
// import { useStore } from '@/stores/store'

const props = defineProps({
	dialog: Boolean,
})

const emit = defineEmits(['update:modelValue', 'add'])
// const store = useStore()

const text = ref('')
const code = ref('')
const descr = ref('')
const doveritel = ref('ООО "Доксвижн"')

const cancel = () => {
	emit('update:modelValue', false)
}
const save = () => {
	const temp = {
		id: Date.now(),
		selected: false,
		text: text.value,
		icon: 'keychain',
		code: code.value,
		descr: descr.value,
		doveritel: 'ООО "Доксвижн"',
	}
	emit('add', temp)
	emit('update:modelValue', false)
	text.value = ''
	code.value = ''
	descr.value = ''
}
</script>

<template lang="pug">
q-dialog(:model-value="props.dialog")
	q-card.create
		.row.justify-between.items-center
			.text-h6.q-mt-none
				component(:is="SvgIcon" name="keychain").q-mr-md
				span Новый код полномочий
			q-btn(flat round icon="mdi-close" @click="cancel")

		q-card-section.mygrid
			.label Название:
			q-input(dense v-model="text" ).quick
			.label Код полномочий:
			q-input(dense v-model="code" ).quick
			.label  Описание:
			q-input(dense v-model="descr" ).quick
			.label  Доверитель:
			q-select(dense v-model="doveritel" ).quick
				template(v-slot:prepend)
					q-icon(name="mdi-book-open-page-variant-outline")

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
