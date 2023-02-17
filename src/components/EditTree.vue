<script setup lang="ts">
import { ref } from 'vue'
import { BaseTree } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import { useStore } from '@/stores/store'
import SvgIcon from '@/components/global/SvgIcon.vue'

const store = useStore()
const tree = ref()

const toggle = (stat: any) => {
	stat.open = !stat.open
}

const select = (e: Stat) => {
	tree.value.statsFlat.map((item: any) => (item.data.selected = false))
	e.data.selected = true
	store.setCurrentNode(e)
	store.selection = true
}
</script>

<template lang="pug">
BaseTree(v-model="store.treedata"
	:triggerClass="trigger"
	ref="tree")
	template(#default="{ node, stat }")
		.node(@click="select(stat)" :class="{'selected' : stat.data.selected}")
			q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{'closed' : !stat.open}").trigger
			component(:is="SvgIcon" name="book" size="20px" v-if="node.root === true").sp
			label {{ node.text }}

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
