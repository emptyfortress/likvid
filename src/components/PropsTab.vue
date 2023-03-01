<script setup lang="ts">
import { ref } from 'vue'
import LibList from '@/components/LibList.vue'
// import CommonProps from '@/components/tabs/CommonProps.vue'
import NodeProps from '@/components/tabs/NodeProps.vue'
import ViewProps from '@/components/tabs/ViewProps.vue'
import RightsProps from '@/components/tabs/RightsProps.vue'
import StateProps from '@/components/tabs/StateProps.vue'
import { useStore } from '@/stores/store'
const store = useStore()

const activeTab = ref('zero')

const tabs = [
	{ id: 0, modified: false, name: 'zero', label: 'Библиотека' },
	{ id: 2, modified: true, name: 'two', label: 'Узел' },
	{ id: 3, modified: false, name: 'three', label: 'Представления' },
	{ id: 4, modified: false, name: 'four', label: 'Права' },
	{ id: 5, modified: false, name: 'five', label: 'Состояния' },
]
</script>

<template lang="pug">
q-tabs(v-model='activeTab' dense align="left").text-primary
	q-tab(v-for='tab in tabs' :key='tab.id' :name='tab.name')
		span {{tab.label}}

.sel(v-if="store.currentNode") {{ store.currentNode.data.text }}
.sel(v-else) {{ store.selected }}

q-tab-panels(v-model='activeTab' animated)
	q-tab-panel(name='zero')
		component(:is="LibList")
	q-tab-panel(name='two')
		component(:is="NodeProps")
	q-tab-panel(name='three')
		component(:is="ViewProps")
	q-tab-panel(name='four')
		component(:is="RightsProps")
	q-tab-panel(name='five')
		component(:is="StateProps")
	
</template>

<style scoped lang="scss">
.q-badge {
	padding: 0 4px;
	min-height: 8px;
}
.sel {
	margin-top: 2rem;
	font-weight: 600;
}
</style>
