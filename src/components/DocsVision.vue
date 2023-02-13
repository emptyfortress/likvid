<script setup lang="ts">
import { ref } from 'vue'
import type { QTableProps } from 'quasar'

const columns: QTableProps['columns'] = [
	{
		name: 'name',
		required: true,
		label: 'Название',
		field: 'name',
		sortable: true,
		align: 'left',
	},
	{
		name: 'date',
		required: true,
		label: 'Дата',
		field: 'date',
		sortable: true,
		align: 'left',
	},
]
const rows = [
	{
		typ: 2,
		name: 'Выписка из ЕГРЮЛ',
		date: '20.10.2021',
	},
	{
		typ: 1,
		name: 'Устав предприятия',
		date: '16.11.2015',
	},
	{
		typ: 1,
		name: 'Доверенность',
		date: '21.11.2021',
	},
	{
		typ: 3,
		name: 'Учредительные документы',
		date: '20.11.2021',
	},
	{
		typ: 2,
		name: 'Декларация о доходах за 2021 год',
		date: '20.07.2022',
	},
	{
		typ: 2,
		name: 'Сертификат банковской гарантии',
		date: '22.09.2022',
	},
]
</script>

<template lang="pug">
q-form.mygrid
	.label Исполнитель:
	.val ООО "Доксвижн"
	.label ИНН:
	.val 45438899338292
	.label КПП:
	.val 569043
	.label Юридический адрес:
	.val Спб, наб. р. Смоленки 31
	.label Руководитель:
	.val Федорович Ю.
br
br
.inf Список документов:
q-table(:columns="columns"
	:rows="rows"
	row-key="name"
	hide-bottom
	flat
	)
	template(v-slot:body-cell-name='props')
		q-td(:props="props")
			.row.items-center
				img(src="@/assets/img/doc.svg" v-if="props.row.typ === 1")
				img(src="@/assets/img/pdf.svg" v-if="props.row.typ === 2")
				img(src="@/assets/img/zip.svg" v-if="props.row.typ === 3")
				.link {{props.row.name}}
</template>

<style scoped lang="scss">
.mygrid {
	margin-top: 1rem;
	display: grid;
	grid-template-columns: auto 2fr;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
	font-size: 0.9rem;
	.q-input {
		max-width: 350px;
		font-size: 1.1rem;
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
	font-size: 0.9rem;
}
.inf {
	font-size: 0.9rem;
}
.q-td img {
	height: 20px;
	margin-right: 0.5rem;
}
</style>
