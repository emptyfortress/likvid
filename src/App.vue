<script setup lang="ts">
import { ref } from 'vue'
import Drawer from '@/components/Drawer.vue'
import RDrawer from '@/components/RDrawer.vue'
import AddDialog from '@/components/AddDialog.vue'
import { useStore } from '@/stores/store'

const store = useStore()
const leftDrawer = ref(true)

const toggleLeftDrawer = () => {
	leftDrawer.value = !leftDrawer.value
}

const addDialog = ref(false)

const showDialog = () => {
	addDialog.value = !addDialog.value
}
</script>

<template lang="pug">
q-layout(view="hHh LpR fFf")
	q-header.head
		q-toolbar
			q-btn(dense flat round icon="mdi-menu" @click="toggleLeftDrawer" color="primary")
			q-toolbar-title Сложные структуры хранения данных
			// q-btn(dense flat round icon="mdi-plus-box-multiple" @click="showDialog" color="primary")
			// q-btn(dense flat round icon="mdi-menu" @click="store.toggleRightDrawer" color="primary")

	Drawer(v-model="leftDrawer")
	RDrawer(v-model="store.rightDrawer")

	q-page-container
		router-view(v-slot="{ Component, route }")
			transition(name="fade" mode="out-in")
				component(:is="Component")


	q-dialog(v-model="addDialog")
		AddDialog
</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.head {
	color: $text-bright;
	background: rgba(0, 0, 0, 0.07);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
</style>
