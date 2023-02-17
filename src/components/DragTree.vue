<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { Draggable } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import SvgIcon from '@/components/global/SvgIcon.vue'
import { useStore } from '@/stores/store'
import { is } from 'quasar'

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
	console.log(e)
}
const externalDataHandler = () => {
	store.setTreeChanged(true)
	return {
		text: store.draggedNode,
		id: Date.now(),
		selected: false,
		quan: 0,
	}
}
const setDrag = (e: Stat) => {
	e.draggable = false
}
</script>

<template lang="pug">
component(:is="Draggable"
	ref="tree"
	v-model="store.treedata"
	virtualization
	:onExternalDragOver="()=> true"
	:externalDataHandler="externalDataHandler"
	:rootDroppable="false"
	:watermark="false")
		template(#default="{ node, stat }")
			.node(@click="select(stat)" :class="{'selected' : stat.data.selected}")
				div
					q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{'closed' : !stat.open}").trigger
					label {{ node.text }}
						q-popup-edit(v-if="node.id === 0" v-model="node.text" auto-save v-slot="scope")
							q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")

				.infi( v-if="node.id !== 0") {{ node.quan }}
					q-tooltip Допустимое количество. 0 - неограничено.
					q-popup-edit(v-model="node.quan" v-slot="scope" buttons)
						q-input(v-model.number="scope.value" dense autofocus type="number" @keyup.enter="scope.set")

				q-btn( v-if="node.id !== 0" flat round icon="mdi-close" size="sm")
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
	display: grid;
	grid-template-columns: 1fr auto auto;
	align-items: center;

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
.infi {
	margin-right: 0.5rem;
}
</style>
