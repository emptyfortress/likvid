<script setup lang="ts">
const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
})

const emit = defineEmits(['update:modelValue'])

const close = () => {
	emit('update:modelValue', false)
}

const items = [
	{ id: 0, icon: '', label: 'Сотрудников', to: '', className: '' },
	{ id: 1, icon: '', label: 'Контрагентов', to: '', className: '' },
	{ id: 2, icon: '', label: 'Пакет документов', to: '', className: '' },
	{ id: 3, icon: '', label: 'Номенклатура дел', to: '', className: '' },
	{ id: 4, icon: '', label: 'С нуля', to: '', className: '' },
]
</script>

<template lang="pug">
q-dialog(:model-value="props.modelValue" persistent)
	q-card.new
		q-card-section.row.items-center.q-pb-none
			.title Создать справочник
			q-space
			q-btn(icon="mdi-close" flat round dense @click="close" v-close-popup)

		q-card-section
			q-list(separator)
				q-item(v-for="item in items" :key="item.id" clickable v-ripple)
					q-item-section(avatar)
						q-icon(name="mdi-close")
					q-item-section
						q-label {{item.label}}
					// q-item-section(side)
					// 	q-icon(name="mdi-close")
</template>

<style scoped lang="scss">
.new {
	width: 450px;
}
.title {
	text-transform: uppercase;
	font-size: 1.1rem;
}
.q-item {
	background: #ccc;
	/* margin-bottom: 1px; */
}
</style>
