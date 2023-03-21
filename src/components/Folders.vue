<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/stores/store'
import { columns, columns1 } from '@/stores/table'
import cloneDeepWith from 'lodash.clonedeepwith'

const store = useStore()
const route = useRoute()
const router = useRouter()

const item = computed(() => {
	return store.myfolders.find((item: any) => item.url === route.path)
})

const rows = item.value?.children
const rows1 = ref(store.flatCodes1)

const calcTo = computed(() => {
	if (item.value?.typ == '1') {
		return '/contract'
	} else if (item.value?.url == '/folders/2') {
		return '/polnomoch'
	}
	return '/'
})
const selected = ref([])
const selected1 = ref([])

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

const select1 = (e: any) => {
	let temp = selectCode(store.codes, e.id)
	store.setCodes(temp)
	store.selected1 = e.text
	router.push('/polnomoch')
}
</script>

<template lang="pug">
q-page(padding)
	.container
		.row.items-baseline.justify-between.q-gutter-x-lg
			.zag {{ item?.title }}
			q-btn(round color="primary" icon="mdi-plus" size="sm" :to="calcTo")

		q-table(v-if="item?.typ == '1'" :columns="columns"
			flat
			:rows="rows"
			rows-per-page-label="Показать на странице"
			:rows-per-page-options=[10,20,50,0]
			row-key="id"
      selection="single"
      v-model:selected="selected"
			).q-mt-md
			template(v-slot:body-selection)
			template(v-slot:body="props")
				q-tr(:props="props" @click="select(props.row)")
					q-td(auto-width)
					q-td(key="num" :props="props") {{ props.row.num }}
					q-td(key="due" :props="props") {{ props.row.due }}
					q-td(key="client" :props="props") {{ props.row.client }}
					q-td(key="executor" :props="props") {{ props.row.executor }}
					q-td(key="sum" :props="props") {{ props.row.sum }}

		q-table(v-if="item?.typ == '2'" :columns="columns1"
			:rows="rows1"
			rows-per-page-label="Показать на странице"
			:rows-per-page-options=[10,20,50,0]
			row-key="id"
      selection="single"
      v-model:selected="selected1"
			).q-mt-md
			template(v-slot:body-selection)
			template(v-slot:body="props")
				q-tr(:props="props" @click="select1(props.row)")
					q-td(auto-width)
					q-td(key="code" :props="props") {{ props.row.code }}
					q-td(key="text" :props="props") {{ props.row.text }}
					q-td(key="descr" :props="props") {{ props.row.descr }}
					q-td(key="doveritel" :props="props") {{ props.row.doveritel }}
</template>

<style scoped lang="scss">
.create {
	margin-top: 1rem;
}
.q-tr {
	cursor: pointer;
}
</style>
