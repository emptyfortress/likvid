<script setup lang="ts">
import { BaseTree } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import { useStore } from '@/stores/store'
import SvgIcon from '@/components/global/SvgIcon.vue'
import { tree, select, toggle } from '@/composables/hetree'

const store = useStore()
</script>

<template lang="pug">
component(:is="BaseTree" v-model="store.treedata"
	:indent="40"
	:watermark="false"
	ref="tree")
	template(#default="{ node, stat }")
		.node(@click="select(stat)" :class="{'selected' : stat.data.selected}")
			q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{'closed' : !stat.open}").trigger
			component(:is="SvgIcon" name="book" size="20px" v-if="node.root === true").sp
			label {{ node.text }}

</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';
@import url('@/assets/styles/hetree.scss');

.node {
	display: block;
}
</style>
