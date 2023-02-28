<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Draggable } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import { useStore } from '@/stores/store'
import { tree, select, toggle } from '@/composables/hetree'

const store = useStore()

const del = (e: Stat) => {
	tree.value.remove(e)
	store.setCurrentNode(null)
}

const externalDataHandler = () => {
	store.setTreeChanged(true)
	return {
		id: Date.now(),
		text: store.draggedNode!.name,
		selected: false,
		branch: store.draggedNode!.branch,
		drag: true,
		quan: 0,
	}
}

const route = useRoute()

const treedata = computed(() => {
	switch (route.params.id) {
		case '0':
			return store.treedata
		case '1':
			return store.contract
		case '2':
			return store.cod
		default:
			return null
	}
})

const isDrop = (e: any) => {
	if (e.data.branch) return true
	else return false
}
</script>

<template lang="pug">
component(:is="Draggable"
	ref="tree"
	v-model="treedata"
	virtualization
	:onExternalDragOver="()=> true"
	:externalDataHandler="externalDataHandler"
	updateBehavior="disabled"
	:eachDroppable="isDrop"
	:watermark="false")
		template(#default="{ node, stat }")
			.node(@click="select(stat)" :class="{'selected' : stat.data.selected}")
				div
					q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{'closed' : !stat.open}").trig
					q-icon(:name="node.icon" v-if="stat.data.icon").fold
					label {{ node.text }}
						q-popup-edit(v-model="node.text" auto-save v-slot="scope")
							q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set").pop

				.infi( v-if="node.id !== 0") {{ node.quan }}
					q-tooltip Допустимое количество. 0 - неограничено.
					q-popup-edit(v-model="node.quan" v-slot="scope" buttons)
						q-input(v-model.number="scope.value" dense autofocus type="number" @keyup.enter="scope.set")

				q-btn(v-if="node.id !== 0" flat round icon="mdi-close" size="sm")
					q-menu
						q-list
							q-item(clickable @click="del(stat)" v-close-popup).pink
								q-item-section Удалить

</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';
@import '@/assets/styles/hetree.scss';

.node {
	background: $borderColor;
	margin-bottom: 2px;
	cursor: pointer;
	display: grid;
	grid-template-columns: 1fr auto auto auto;
	align-items: center;
}
.infi {
	margin-right: 0.5rem;
}
.fold {
	font-size: 1.3rem;
	margin-right: 0.5rem;
	transform: translateY(-1px);
}
.pop {
	width: 200px;
}
</style>
