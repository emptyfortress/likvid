<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { Draggable } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import SvgIcon from '@/components/global/SvgIcon.vue'
import { useStore } from '@/stores/store'

type C = Stat | null

const tree = ref()
const trigger = ref()
const store = useStore()

let treedata = reactive([
	{
		text: 'Справочник',
		root: true,
		selected: false,
		children: [],
		data: {
			text: 'Справочник',
			selected: false,
		},
	},
])

watch(treedata[0], () => {
	store.setTreeChanged(true)
})

const toggle = (stat: any) => {
	stat.open = !stat.open
}

const add = () => {
	const temp = { text: 'node', children: [] }
	tree.value.add(temp, null)
}
const del = (e: Stat) => {
	tree.value.remove(e)
	store.setCurrentNode(null)
}

// const save = () => {
// 	store.setMyTree(treedata)
// 	store.setTreeChanged(false)
// }

// defineExpose({ add, save })
defineExpose({ add })

const select = (e: Stat) => {
	tree.value.statsFlat.map((item: any) => (item.data.selected = false))
	e.data.selected = true
	store.setCurrentNode(e)
	store.selection = true
}
const externalDataHandler = () => {
	return { text: store.draggedNode }
}
</script>

<template lang="pug">
.test
	component(:is="Draggable"
		ref="tree"
		v-model="treedata"
		virtualization
		:triggerClass="trigger"
		:onExternalDragOver="()=> true"
		:externalDataHandler="externalDataHandler"
		:watermark="false")
		template(#default="{ node, stat }")
			.node(@click="select(stat)" :class="{'selected' : stat.data.selected}")
				q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{'closed' : !stat.open}").trigger
				svg-icon( name="book" size="20px" v-if="node.root === true").sp
				label {{ node.text }}
				q-btn(flat round icon="mdi-close" size="sm")
					q-menu
						q-list
							q-item(clickable @click="del(stat)" v-close-popup).pink
								q-item-section Удалить
</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.node {
	padding: 0.3rem 1rem;
	background: $borderColor;
	margin-bottom: 2px;
	cursor: pointer;
	position: relative;
	.q-btn {
		position: absolute;
		right: 5px;
		top: 2px;
		color: hsla(77, 13%, 74%, 1);
		&:hover {
			color: hsla(77, 13%, 40%, 1);
		}
	}
	&.selected {
		background: #b1ddfc;
		color: $primary;
		.q-btn {
			color: $secondary;
		}
	}
}
.trigger {
	font-size: 1.3rem;
	margin-right: 0.5rem;
	transition: 0.2s ease all;
	&.closed {
		transform: rotate(-90deg);
	}
}
.sp {
	transform: translateY(3px);
	margin-right: 0.5rem;
}
</style>
