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
	{ id: 0, icon: 'mdi-account', label: 'Сотрудников', to: '', className: '' },
	{ id: 1, icon: 'mdi-account-tie', label: 'Контрагентов', to: '', className: '' },
	{
		id: 2,
		icon: 'mdi-file-document-multiple-outline',
		label: 'Пакет документов',
		to: '',
		className: '',
	},
	{ id: 3, icon: '', label: 'Номенклатура дел', to: '', className: '' },
	{ id: 4, icon: '', label: 'С нуля', to: '', className: '' },
]
</script>

<template lang="pug">
q-dialog(:model-value="props.modelValue" persistent)
	q-card.new
		q-card-section.row.items-baseline.q-pb-none
			q-icon(name="mdi-book-outline" size="sm").q-mr-sm
			.title Создать справочник
			q-space
			q-btn(icon="mdi-close" flat round dense @click="close" v-close-popup)

		q-card-section
			q-list(separator)
				q-item(v-for="item in items" :key="item.id" clickable v-ripple)
					q-item-section(avatar)
						q-icon(:name="item.icon")
					q-item-section
						q-item-label {{item.label}}
					// q-item-section(side)
					// 	q-icon(name="mdi-close")
</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.new {
	width: 450px;
}
.title {
	text-transform: uppercase;
	font-size: 1.1rem;
}
.q-item {
	background: $bgMain;
	/* border-bottom: 1px solid white; */
}
</style>
