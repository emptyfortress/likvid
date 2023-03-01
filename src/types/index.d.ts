interface NodeData {
	id: number
	text: string
	selected: boolean
	branch?: boolean
	restrict?: boolean
	quan?: number
	icon?: string
	header?: string
	mandatory?: boolean
}

interface Stat {
	data: NodeData
	open: boolean // Is opened.
	parent: Stat<T> | null // Parent stat.
	children: Stat<T>[] // Children stats.
	level: number // Level start from 1.
	isStat: boolean // Detect if is stat object.
	hidden: boolean // If hidden.
	checked: boolean | null // If checked. null mean just some children checked.
	draggable: boolean | null // null means inherit parent.
	droppable: boolean | null // null means inherit parent.
	style: any // Customize node style. Vue's style format.
	class: any // Customize node class name. Vue's class format.
}

interface Code {
	id: number
	selected: boolean
	text: string
	header?: string
	icon?: string
	code?: string
	name?: string
	descr?: string
	doveritel?: string
	children?: Code[]
}
