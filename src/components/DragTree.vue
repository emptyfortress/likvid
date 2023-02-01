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
defineExpose({ add })

const get = () => {
	const temp = tree.value.getData()
	console.log(temp)
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
			.node
				q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click="toggle(stat)" :class="{'closed' : !stat.open}").trigger
				span {{ node.text }}
// q-btn(unelevated color="primary" label="add" @click="add") 
// q-btn(unelevated color="primary" label="get" @click="get") 
</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.node {
	padding: 0.3rem 1rem;
	background: $borderColor;
	margin-bottom: 2px;
}
.place {
	height: 3rem;
	/* width: 100%; */
	/* background: red; */
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
