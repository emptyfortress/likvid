<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/stores/store'
import { columns } from '@/stores/table'
import cloneDeepWith from 'lodash.clonedeepwith'
import Toolbar from '@/components/Toolbar.vue'

const store = useStore()
const route = useRoute()
const router = useRouter()

const item = computed(() => {
	return store.myfolders.find((item: any) => item.url === route.path)
})

const rows = item.value?.children

const calcTo = computed(() => {
	if (item.value?.typ == '1') {
		return '/contract'
	} else if (item.value?.url == '/folders/2') {
		return '/polnomoch'
	}
	return '/'
})
const selected = ref([])

const select = (e: any) => {
	router.push('/contract')
}

function selectCode(tree: any, id: number) {
	return cloneDeepWith(tree, (node) => {
		if (node.id === id) {
			return { ...node, selected: true }
		}
	})
}
</script>

<template lang="pug">
q-page(padding)
	.container
		.row.items-baseline.justify-between.q-gutter-x-lg
			.zag {{ item?.title }}
			q-btn(round color="primary" icon="mdi-plus" size="sm" :to="calcTo")

		Toolbar()
		q-table(:columns="columns"
			flat
			color="primary"
			:rows="rows"
			rows-per-page-label="Показать на странице"
			:rows-per-page-options=[10,20,50,0]
			row-key="id"
      selection="multiple"
			no-data-label="Данные отсутствуют."
      v-model:selected="selected"
			).q-mt-md

</template>

<style scoped lang="scss">
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
