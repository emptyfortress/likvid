<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/stores/store'
import { columns, columns1 } from '@/stores/table'

const store = useStore()
const route = useRoute()

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
</script>

<template lang="pug">
q-page(padding)
	.container
		.row.items-baseline.justify-between.q-gutter-x-lg
			.zag {{ item?.title }}
			q-btn(round color="primary" icon="mdi-plus" size="sm" :to="calcTo")
		q-table(v-if="item?.typ == '1'" :columns="columns"
			:rows="rows"
			rows-per-page-label="Показать на странице"
			:rows-per-page-options=[10,20,50,0]
			).q-mt-md
		q-table(v-if="item?.typ == '2'" :columns="columns1"
			:rows="store.flatCodes1"
			rows-per-page-label="Показать на странице"
			:rows-per-page-options=[10,20,50,0]
			).q-mt-md
</template>

<style scoped lang="scss">
.create {
	margin-top: 1rem;
}
</style>
