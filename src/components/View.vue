<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '@/components/global/SvgIcon.vue'

const ratio = ref(50)
const filter = ref('')
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
</script>

<template lang="pug">
q-page(padding)
	.container
		q-splitter(v-model="ratio")
			template(#before)
				.title Пакет документов
				q-scroll-area.home
					q-input(v-model="filter" dense placeholder="filter" clearable style="width:200px").filt
						template(v-slot:prepend)
							q-icon(name="mdi-magnify" color="primary")
					q-btn(round icon="mdi-plus" size="sm" dark color="primary" @click="").fab
					q-tree(:nodes="paket" node-key="label" default-expand-all icon="mdi-chevron-right")
						template(v-slot:header-root="prop")
							.row.items-center
								SvgIcon(name="packet").q-mr-sm
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
	background: #fff;
	margin-right: 0.5rem;
	padding: 1rem;
}
.fab {
	position: absolute;
	bottom: 0;
	right: 0;
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
