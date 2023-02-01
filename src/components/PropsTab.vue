<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('one')

const tabs = [
	{ id: 0, name: 'one', label: 'Общие' },
	{ id: 1, name: 'two', label: 'Ветвь' },
	{ id: 2, name: 'three', label: 'Представления' },
	{ id: 4, name: 'five', label: 'Права' },
	{ id: 3, name: 'four', label: 'Состояния' },
]
</script>

<template lang="pug">
q-tabs(v-model='activeTab' dense align="left").text-primary
	q-tab(v-for='tab in tabs' :key='tab.id' :name='tab.name')
		span {{tab.label}}
		// 	q-badge(rounded float color="red" align="top" v-if="tab.modified")

</template>

<style scoped lang="scss"></style>
