<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '@/components/global/SvgIcon.vue'
import { useStore } from '@/stores/store'

const store = useStore()
const ratio = ref(45)
const activeTab = ref('one')

const tabs = [
	{ id: 0, modified: false, name: 'one', label: 'Атрибуты' },
	{ id: 1, modified: true, name: 'two', label: 'Узел' },
	{ id: 2, modified: false, name: 'three', label: 'Представления' },
]
const paket = ref([
	{
		id: 0,
		label: 'Контракт',
		header: 'root',
		children: [
			{
				id: 1,
				label: 'Исполнитель',
				icon: 'mdi-folder-outline',
				children: [
					{
						id: 5,
						label: 'Выписка из ЕГРЮЛ',
						icon: 'mdi-file-document-outline',
					},
					{
						id: 6,
						label: 'Устав предприятия',
						icon: 'mdi-file-document-outline',
					},
					{
						id: 7,
						label: 'Учредительные документы',
						icon: 'mdi-file-document-outline',
					},
					{
						id: 8,
						label: 'Доверенность на представителя директора',
						icon: 'mdi-file-document-outline',
					},
					{
						id: 9,
						label: 'Декларации за прошедший год',
						icon: 'mdi-file-document-outline',
					},
					{
						id: 10,
						label: 'Документы о соответствии тендеру',
						icon: 'mdi-file-document-outline',
					},
					{
						id: 11,
						label: 'Сертификат банковской гарантии',
						icon: 'mdi-file-document-outline',
					},
				],
			},
			{
				id: 2,
				label: 'Документы об оплате',
				icon: 'mdi-folder-outline',
			},
			{
				id: 3,
				label: 'Исполнение контракта',
				icon: 'mdi-file-document-outline',
			},
			{
				id: 4,
				label: 'Информация о заказчике',
				icon: 'mdi-file-document-outline',
			},
		],
	},
])
const add = () => {
	store.toggleRightDrawer()
}
const selected = ref(1)
</script>

<template lang="pug">
q-page(padding)
	.container
		.text-h6 Пакет документов "КОНТРАКТ"

		q-splitter(v-model="ratio")
			template(#before)
				q-scroll-area.home.pr
					q-btn(round icon="mdi-plus" size="md" dark color="primary" @click="add").fab
					q-tree(:nodes="paket"
						node-key="id"
						default-expand-all
						v-model:selected="selected"
						icon="mdi-chevron-right")
						template(v-slot:header-root="prop")
							.row.items-center
								component(:is="SvgIcon" name="packet" size="30px").q-mr-sm
								div {{ prop.node.label }}
						template(v-slot:default-header="prop")
							.row.items-center
								q-icon(:name="prop.node.icon" size="24px").q-mr-sm
								span {{ prop.node.label }}
					
			template(#after)
				q-tabs(v-model='activeTab' dense align="left").text-primary
					q-tab(v-for='tab in tabs' :key='tab.id' :name='tab.name')
						span {{tab.label}}
				q-scroll-area.home
					p fuck
</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

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
.q-tree:deep(.q-icon) {
	color: $primary;
}
:deep(.q-tree__node--selected) {
	background: #b1ddfc;
	color: $primary;
}
:deep(.q-tree__node--selected .q-tree__node-header-content) {
	color: $primary;
}
</style>
