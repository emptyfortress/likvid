<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Draggable } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'

const tree = ref()
const trigger = ref()

const treedata = reactive([
	{ text: 'Node 1', children: [] },
	{ text: 'Node 2', children: [] },
])

const toggle = (stat: any) => {
	stat.open = !stat.open
}

const add = () => {
	const temp = { text: 'node', children: [] }
	tree.value.add(temp, null)
}
const del = (e: unknown) => {
	tree.value.remove(e)
}
defineExpose({ add })
</script>

<template lang="pug">
.test
	component(:is="Draggable"
		ref="tree"
		v-model="treedata"
		virtualization
		:triggerClass="trigger"
		:watermark="false")
		template(#default="{ node, stat }")
			.node
				q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click="toggle(stat)" :class="{'closed' : !stat.open}").trigger
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
}
.trigger {
	font-size: 1.3rem;
	margin-right: 0.5rem;
	transition: 0.2s ease all;
	&.closed {
		transform: rotate(-90deg);
	}
}
</style>
