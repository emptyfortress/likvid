<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/stores/store'
import { columns } from '@/stores/table'

const store = useStore()
const route = useRoute()

const item = computed(() => {
	return store.myfolders.find((item: any) => item.url === route.path)
})

const rows = store.myfolders[0].children

const calcTo = computed(() => {
	if (item.value.typ == '1') {
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
			.zag {{ item.title }}
			q-btn(round color="primary" icon="mdi-plus" size="sm" :to="calcTo")
		q-table(:columns="columns" :rows="rows").q-mt-md
</template>

<style scoped lang="scss">
.create {
	margin-top: 1rem;
}
</style>
