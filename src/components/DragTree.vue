<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { Draggable } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import SvgIcon from '@/components/global/SvgIcon.vue'
import { useStore } from '@/stores/store'

const tree = ref()
// const trigger = ref()
const store = useStore()

const toggle = (stat: any) => {
	stat.open = !stat.open
}

const del = (e: Stat) => {
	tree.value.remove(e)
	store.setCurrentNode(null)
}

const select = (e: Stat) => {
	tree.value.statsFlat.map((item: any) => (item.data.selected = false))
	e.data.selected = true
	store.setCurrentNode(e)
	store.selection = true
}
const externalDataHandler = () => {
	store.setTreeChanged(true)
	return {
		text: store.draggedNode,
		id: Date.now(),
		selected: false,
	}
}
const treedata = [
	{
		id: 0,
		text: 'Root',
		header: 'root',
		selected: false,
		children: [
			{
				id: 1,
				text: 'one',
				selected: false,
			},
			{
				id: 2,
				text: 'one',
				selected: false,
			},
		],
	},
]
</script>

<template lang="pug">
.test
	component(:is="Draggable"
		ref="tree"
		v-model="treedata"
		virtualization
		triggerClass="trigger"
		:onExternalDragOver="()=> true"
		:externalDataHandler="externalDataHandler"
		:watermark="false")
			template(#default="{ node, stat }")
				.node(@click="select(stat)" :class="{'selected' : stat.data.selected}")
					q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{'closed' : !stat.open}").trigger
					component(:is="SvgIcon" name="book" size="20px" v-if="node.root === true").sp
					label {{ node.text }}
					q-btn(flat round icon="mdi-close" size="sm")
						q-menu
							q-list
								q-item(clickable @click="del(stat)" label="Удалить" v-close-popup).pink
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
