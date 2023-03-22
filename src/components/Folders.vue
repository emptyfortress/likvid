<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/stores/store'
import { columns } from '@/stores/table'
import Toolbar from '@/components/Toolbar.vue'

const store = useStore()
const route = useRoute()
const router = useRouter()

const item = computed(() => {
	return store.myfolders.find((item: any) => item.url === route.path)
})

const rows = item.value?.children

const selected = ref([])
const clear = () => {
	selected.value = []
}
const setCurrContract = () => {
	store.setCurrContract(selected.value[0])
	router.push('/contract')
}
const newContract = () => {
	store.setCurrContract({
		id: null,
		num: null,
		due: null,
		sum: null,
		executor: null,
		client: null,
	})
	router.push('/contract')
}
</script>

<template lang="pug">
q-page.column.justify-between
	.container
		.row.items-baseline.justify-between.q-gutter-x-lg
			.zag {{ item?.title }}
			q-btn(round color="primary" icon="mdi-plus" size="sm" @click="newContract")

		component(:is="Toolbar" :total="rows?.length")
		q-table(:columns="columns"
			flat
			color="primary"
			:rows="rows"
			:filter="store.filter"
			rows-per-page-label="Показать на странице"
			:rows-per-page-options=[10,20,50,0]
			row-key="id"
      selection="single"
			no-data-label="Данные отсутствуют."
			no-results-label="Ничего не найдено."
      v-model:selected="selected"
			).q-mt-md
	.total(v-show="selected.length")
		.row.items-center.q-gutter-x-md
			q-btn(flat round dense icon="mdi-close" @click="clear")
			.tot {{selected.length}}
			.arr &rarr;
			q-btn(unelevated color="primary" label="Открыть" @click="setCurrContract")
			q-btn(unelevated color="primary" label="Создать на основе" @click="setCurrContract")
</template>

<style scoped lang="scss">
.container {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
}
.total {
	height: 50px;
	background: #e4e4e0;
	width: 100%;
	max-width: 1168px;
	margin: 0 auto;
	padding: 0.5rem;
	border-radius: 1rem 1rem 0 0;
	border-top: 1px solid #ccc;
	border-left: 1px solid #ccc;
	border-right: 1px solid #ccc;
	box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.12);
}

.create {
	margin-top: 1rem;
}
.q-tr {
	cursor: pointer;
}
.q-mt-md {
	margin-top: 0;
}
:deep(tr.selected) {
	background: #dbefff;
}
:deep(.q-table tbody tr.selected td:after) {
	background: none;
}
</style>
