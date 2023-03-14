import type { QTableProps } from 'quasar'

const columns: QTableProps['columns'] = [
	{
		name: 'num',
		required: true,
		label: 'Номер',
		field: 'num',
		sortable: true,
		align: 'left',
	},
	{
		name: 'due',
		required: true,
		label: 'Срок исполнения',
		field: 'due',
		sortable: true,
		align: 'left',
	},
	{
		name: 'client',
		required: true,
		label: 'Заказчик',
		field: 'client',
		sortable: true,
		align: 'left',
	},
	{
		name: 'executor',
		required: true,
		label: 'Исполнитель',
		field: 'executor',
		sortable: true,
		align: 'left',
	},
	{
		name: 'sum',
		required: true,
		label: 'Сумма контракта',
		field: 'sum',
		sortable: true,
		align: 'right',
	},
]

export { columns }
