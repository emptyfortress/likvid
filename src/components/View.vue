<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '@/components/global/SvgIcon.vue'
import { useStore } from '@/stores/store'

const store = useStore()
const ratio = ref(40)
// const filter = ref('')
const activeTab = ref('one')

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
</script>

<template lang="pug">
q-page(padding)
	.container
		.text-h6 Пакет документов "КОНТРАКТ"

		q-splitter(v-model="ratio")
			template(#before)
				q-scroll-area.home.pr
					q-btn(round icon="mdi-plus" size="md" dark color="primary" @click="add").fab
					q-tree(:nodes="paket" node-key="label" default-expand-all icon="mdi-chevron-right")
						template(v-slot:header-root="prop")
							.row.items-center
								svg-icon( name="packet").q-mr-sm
								div {{ prop.node.label }}
					
			template(#after)
				q-tabs(v-model='activeTab' dense align="left").text-primary
					q-tab(v-for='tab in tabs' :key='tab.id' :name='tab.name')
						span {{tab.label}}
				q-scroll-area.home
					p fuck
</template>

<style scoped lang="scss">
.home {
	height: calc(100vh - 170px);
	position: relative;
	margin-right: 0.5rem;
	padding: 1rem;
	background: #fff;
	&.pr {
		margin-top: 35px;
	}
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
