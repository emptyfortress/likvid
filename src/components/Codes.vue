<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/stores/store'
import type { QTableProps } from 'quasar'
import Toolbar from '@/components/Toolbar.vue'

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

const store = useStore()

const columns: QTableProps['columns'] = [
	{
		name: 'code',
		required: true,
		label: 'Код',
		field: 'code',
		sortable: true,
		align: 'left',
	},
	{
		name: 'name',
		required: true,
		label: 'Название',
		field: 'name',
		sortable: true,
		align: 'left',
	},
	{
		name: 'descr',
		required: true,
		label: 'Описание',
		field: 'descr',
		sortable: true,
		align: 'left',
	},
	{
		name: 'doveritel',
		required: true,
		label: 'Доверитель',
		field: 'doveritel',
		sortable: true,
		align: 'left',
	},
]

const rows = computed(() => {
	const index = store.codes.findIndex((item) => item.id === props.item.id)
	return store.codes[index].children
})
</script>

<template lang="pug">
div
	.mygrid(v-if="props.item.code")
		.label Код полномочий:
		.val {{ props.item.code}}
		.label Название полномочий:
		.val {{ props.item.text}}
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

		component(:is="Toolbar" :total="rows?.length").tab
		q-table(:columns="columns"
			:rows="rows"
			row-key="id"
			:rows-per-page-options="[0]"
			no-data-label="Данные отсутствуют"
			wrap-cells
			flat
			).tab1
			template(v-slot:body="props")
				q-tr(:props="props")
					q-td(:props="props" key="code") {{ props.row.code }}
					q-td(:props="props" key="name") {{ props.row.name }}
					q-td(:props="props" key="descr") {{ props.row.descr }}
					q-td(:props="props" key="doveritel") {{ props.row.doveritel }}

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
.tab,
.tab1 {
	grid-column: 1/-1;
}
.tab {
	margin-top: 5rem;
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
