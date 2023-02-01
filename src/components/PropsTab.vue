<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('one')

const tabs = [
	{ id: 0, modified: false, name: 'one', label: 'Общие' },
	{ id: 1, modified: true, name: 'two', label: 'Ветвь' },
	{ id: 2, modified: false, name: 'three', label: 'Представления' },
	{ id: 4, modified: false, name: 'five', label: 'Права' },
	{ id: 3, modified: false, name: 'four', label: 'Состояния' },
]
</script>

<template lang="pug">
q-tabs(v-model='activeTab' dense align="left").text-primary
	q-tab(v-for='tab in tabs' :key='tab.id' :name='tab.name')
		span {{tab.label}}
			q-badge(rounded float color="red" align="top" v-if="tab.modified")

q-tab-panels(v-model='activeTab' animated)
	q-tab-panel(name='one')
		div test
</template>

<style scoped lang="scss">
.q-badge {
	padding: 0 4px;
	min-height: 8px;
}
</style>
