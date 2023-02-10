<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '@/components/global/SvgIcon.vue'
import DragTree from '@/components/DragTree.vue'
import { useStore } from '@/stores/store'

const store = useStore()
const ratio = ref(50)
// const filter = ref('')
const activeTab = ref('one')
const structure = ref('struct')

const tabs = [
	{ id: 0, modified: false, name: 'one', label: 'Справочник' },
	{ id: 1, modified: true, name: 'two', label: 'Узел' },
	{ id: 2, modified: false, name: 'three', label: 'Представления' },
]
const paket = ref([
	{
		label: 'One',
		header: 'root',
		children: [{ label: 'Two' }, { label: 'trhee' }, { label: 'foru' }],
	},
])
const add = () => {
	store.toggleRightDrawer()
}

const dragtree = ref(DragTree)
const saveTree = () => {
	dragtree.value.save()
}
</script>

<template lang="pug">
q-page(padding)
	q-splitter(v-model="ratio")
		template(#before)
			q-tabs(v-model="structure" dense align="left").text-primary
				q-tab(name="struct") Структура
				q-tab(name="model") Просмотр

			q-scroll-area.home
				q-btn(round icon="mdi-plus" size="md" dark color="primary" @click="add").fab
				q-btn(v-if="store.treeChanged" flat color="primary" label="Сохранить" @click="saveTree").save 

				q-tab-panels(v-model="structure" animated)
					q-tab-panel(name="struct")
						DragTree( ref="dragtree")
					
					q-tab-panel(name="model")
						q-tree(:nodes="paket" node-key="label" default-expand-all icon="mdi-chevron-right")
							template(v-slot:header-root="prop")
								.row.items-center
									svg-icon(name="packet").q-mr-sm
									div {{ prop.node.label }}
				
		template(#after)
			q-tabs(v-model='activeTab' dense align="left").text-primary
				q-tab(v-for='tab in tabs' :key='tab.id' :name='tab.name')
					span {{tab.label}}
			q-scroll-area.home.pr
				p fuck
</template>

<style scoped lang="scss">
.home {
	height: calc(100vh - 140px);
	position: relative;
	margin-right: 0.5rem;
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
.q-tree {
	margin-top: 2rem;
}
:deep(.q-tree__arrow) {
	font-size: 1.3rem;
}
</style>
