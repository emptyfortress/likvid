<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import CommonProps from '@/components/tabs/CommonProps.vue'
import NodeProps from '@/components/tabs/NodeProps.vue'
import ViewProps from '@/components/tabs/ViewProps.vue'
import RightsProps from '@/components/tabs/RightsProps.vue'
import StateProps from '@/components/tabs/StateProps.vue'

const activeTab = ref('two')

const tabs = [
	{ id: 0, modified: false, name: 'one', label: 'Справочник' },
	{ id: 1, modified: true, name: 'two', label: 'Узел' },
	{ id: 2, modified: false, name: 'three', label: 'Представления' },
	{ id: 4, modified: false, name: 'five', label: 'Права' },
	{ id: 3, modified: false, name: 'four', label: 'Состояния' },
]
</script>

<template lang="pug">
q-tabs(v-model='activeTab' dense align="left").text-primary
	q-tab(v-for='tab in tabs' :key='tab.id' :name='tab.name')
		span {{tab.label}}
			// q-badge(rounded float color="red" align="top" v-if="tab.modified")

q-tab-panels(v-model='activeTab' animated)
	q-tab-panel(name='one')
		CommonProps( )
	q-tab-panel(name='two')
		NodeProps
	q-tab-panel(name='three')
		ViewProps()
	q-tab-panel(name='four')
		RightsProps()
	q-tab-panel(name='five')
		StateProps()
	
</template>

<style scoped lang="scss">
.q-badge {
	padding: 0 4px;
	min-height: 8px;
}
/* .q-tab-panels, */
/* .q-tab-panel { */
/* 	height: 100%; */
/* 	background: #ccc; */
/* } */
</style>
