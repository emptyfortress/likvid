<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Draggable } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import SvgIcon from '@/components/global/SvgIcon.vue'

const tree = ref()
const trigger = ref()

let treedata = reactive([
	{
		text: 'Справочник',
		root: true,
		selected: false,
		children: [{ text: 'Node 1', selected: false, children: [] }],
	},
])

const toggle = (stat: any) => {
	stat.open = !stat.open
}

const add = () => {
	const temp = { text: 'node', children: [] }
	tree.value.add(temp, null)
}
const del = (e: any) => {
	tree.value.remove(e)
}
defineExpose({ add })

const select = (e: any) => {
	tree.value.statsFlat.map((item: any) => (item.data.selected = false))
	e.data.selected = true
}
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
			.node(@click="select(stat)" :class="{'selected' : stat.data.selected}")
				q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{'closed' : !stat.open}").trigger
				SvgIcon(name="sprav" size="16px" v-if="node.root === true").sp
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
	// border: 1px solid $borderColor;
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
		// border: 1px solid $secondary;
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
	transform: translateY(2px);
	margin-right: 0.5rem;
}
</style>
