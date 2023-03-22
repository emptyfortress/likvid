<script setup lang="ts">
import { ref, computed } from 'vue'
import { Draggable } from '@he-tree/vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/stores/store'
import { useLib } from '@/stores/library'
import { tree, select, toggle } from '@/composables/hetree'
import '@he-tree/vue/style/default.css'

const store = useStore()
const lib = useLib()

const del = (e: Stat) => {
	tree.value.remove(e)
	store.setCurrentNode(null)
}

const externalDataHandler = () => {
	return {
		id: Date.now(),
		text: store.draggedNode!.text,
		icon: store.draggedNode!.icon,
		selected: false,
		branch: store.draggedNode!.branch,
		vid: store.draggedNode!.vid,
		drag: true,
		restrict: false,
		quan: 1,
		mandatory: false,
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
	if (e.data.branch == 2) return false
	else return true
}

const dialog = ref(false)
const newName = ref('')

const addnew = () => {
	store.addNewItemToDrawer(newName.value, route.params.id[0])
	dialog.value = false
	if (shab.value === true) {
		lib.addItem({
			id: Date.now(),
			text: 'Контракт',
			branch: 1,
		})
	}
	newName.value = ''
}
const shab = ref(false)

const rule = computed(() => {
	return [(val: any) => (val !== null && val !== '') || 'Обязательное поле']
})
const save = () => {
	dialog.value = true
}
</script>

<template lang="pug">
.col
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

					q-icon(v-if="node.mandatory" name="mdi-exclamation-thick").q-mr-md
					.infi(v-if="node.restrict") {{ node.quan }}
						q-popup-edit(v-model="node.quan" v-slot="scope" buttons)
							q-input(v-model.number="scope.value" dense autofocus type="number" @keyup.enter="scope.set" min="1")

					q-btn(flat round icon="mdi-close" size="sm")
						q-menu
							q-list
								q-item(clickable @click="del(stat)" v-close-popup).pink
									q-item-section Удалить

	q-btn(unelevated  color="primary" :disable="route.path =='/new/2'" label="Сохранить" @click="save").fab1

q-dialog(v-model="dialog")
	q-card(style="min-width: 400px")
		q-form(@submit="addnew")
			q-card-section.row.items-center.q-pb-none
				.text-h6 Родительская папка:
				q-space
				q-btn(icon="mdi-close" flat round dense @click="dialog = false")
			q-card-section
				q-input(v-model="newName" autofocus lazy-rules :rules="rule").inp
				br
				q-checkbox(v-model="shab" dense label="Сохранить в библиотеку")
			q-card-section
				q-card-actions(align="right")
					q-btn(flat color="primary" label="Отмена" @click="dialog = false")
					q-btn(:disable="newName.length == 0" unelevated color="primary" label="Сохранить" type="submit") 

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
.col {
	height: calc(100vh - 99px);
	position: relative;
}
.fab1 {
	transition: 0.2s ease all;
	position: absolute;
	bottom: 0.5rem;
	right: 0.5rem;
}
.inp {
	font-size: 1.1rem;
}
</style>
