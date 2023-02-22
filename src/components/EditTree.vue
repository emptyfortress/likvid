<script setup lang="ts">
import { BaseTree } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import { useStore } from '@/stores/store'
// import SvgIcon from '@/components/global/SvgIcon.vue'
import { tree, select, toggle } from '@/composables/hetree'

const store = useStore()
</script>

<template lang="pug">
component(:is="BaseTree" v-model="store.treedata"
	:watermark="false"
	ref="tree")
	template(#default="{ node, stat }")
		.node(@click="select(stat)" :class="{'selected' : stat.data.selected | node.selected}")
			template(v-if="stat.children.length")
				q-icon(name="mdi-chevron-down" @click.stop="toggle(stat)" :class="{'closed' : !stat.open}" size="20px").trig
				q-icon(name="mdi-folder-outline" ).trig
			img(:src="`${node.icon}.svg`" v-if="node.icon").ic
			label {{ node.text }}

</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';
@import '@/assets/styles/hetree.scss';

.node {
	display: block;
	background: #f7f7f7;
}
.ic {
	width: 14px;
	transform: translateY(3px);
	margin-right: 0.4rem;
}
</style>
