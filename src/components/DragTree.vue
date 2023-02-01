<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Draggable } from '@he-tree/vue'
// import data from '@/stores/data.json'
import '@he-tree/vue/style/default.css'

const data = [
	{ text: 'Fuck 1', children: [] },
	{ text: 'Fuck 2', children: [] },
	{ text: 'Fuck 3', children: [] },
	{ text: 'Fuck 4', children: [] },
]

const tree = ref()

const trigger = ref()

const toggle = (stat: any) => {
	stat.open = !stat.open
}

const test = () => {
	// const temp = tree.value.getStat()
	console.log(tree.value.getStat())
}
</script>

<template lang="pug">
div
	component(:is="Draggable"
		ref="tree"
		v-model="data"
		virtualization
		:triggerClass="trigger"
		:watermark="false")
		template(#default="{ node, stat }")
			.node
				q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click="toggle(stat)" :class="{'closed' : !stat.open}").trigger

				span {{ node.text }}
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
