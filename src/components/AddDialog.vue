<script setup lang="ts">
import SvgIcon from '@/components/global/SvgIcon.vue'

const items = [
	{ id: 0, icon: 'users', label: 'Сотрудников', to: '', className: '' },
	{ id: 1, icon: 'partner', label: 'Контрагентов', to: '', className: '' },
	{
		id: 2,
		icon: 'packet',
		label: 'Пакет документов',
		to: '',
		className: '',
	},
	{ id: 3, icon: 'nomenclatura', label: 'Номенклатура дел', to: '', className: '' },
	{ id: 4, icon: 'cran', label: 'С нуля', to: '', className: '' },
]
</script>

<template lang="pug">
q-card.new
	q-card-section.row.items-baseline.q-pb-none
		.title Создать справочник
		q-space
		q-btn(icon="mdi-close" flat round dense v-close-popup)

	q-card-section
		q-list(separator)
			q-item(v-for="item in items" :key="item.id" clickable v-ripple tag="router-link" :to="`/new/${item.id}`" v-close-popup)
				q-item-section(avatar)
					svg-icon(:name="item.icon")
				q-item-section
					q-item-label {{item.label}}
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
}
</style>
