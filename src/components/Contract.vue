<script setup lang="ts">
import { ref } from 'vue'
import { BaseTree } from '@he-tree/vue'
import { useStore } from '@/stores/store'
import { tree, select, toggle } from '@/composables/hetree'
import PropertyView from '@/components/PropertyView.vue'

const store = useStore()
const ratio = ref(32)

const add = () => {
	store.addNode()
}
</script>

<template lang="pug">
q-page(padding)
	.text-h6 Пакет документов "КОНТРАКТ"

	q-splitter(v-model="ratio").q-mt-md
		template(#before)
			q-scroll-area.home
				q-btn(:disable="store.packet[0].children.length > 3" icon="mdi-plus" round size="md" dark color="primary" @click="add").fab

				component(:is="BaseTree" v-model="store.packet"
					:indent="30"
					:watermark="false"
					ref="tree").tree
					template(#default="{ node, stat }")
						.node(@click="select(stat)" :class="{'selected' : stat.data.selected | node.selected}")
							template(v-if="stat.children.length")
								q-icon(name="mdi-chevron-down" @click.stop="toggle(stat)" :class="{'closed' : !stat.open}" size="20px").trig
								q-icon(name="mdi-folder-outline" ).trig
							img(:src="`${node.icon}.svg`" v-if="node.icon").ic
							label {{ node.text }}

		template(#after)
			q-scroll-area.home
				PropertyView

</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';
@import '@/assets/styles/hetree.scss';

.home {
	height: calc(100vh - 150px);
	position: relative;
	margin-right: 0.5rem;
	padding: 1rem;
	background: #fff;
}
.fab {
	position: absolute;
	bottom: 0.5rem;
	right: 0.5rem;
}
.save {
	position: absolute;
	bottom: 0.5rem;
	right: 5rem;
}
.title {
	font-size: 1.2rem;
}
.filt {
	width: 150px;
	margin-left: 1rem;
	margin-top: 1rem;
}
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
