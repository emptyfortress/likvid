<script setup lang="ts">
import { ref } from 'vue'
import Drawer from '@/components/Drawer.vue'
import RDrawer from '@/components/RDrawer.vue'

const leftDrawer = ref(true)
const rightDrawer = ref(false)

const toggleLeftDrawer = () => {
	leftDrawer.value = !leftDrawer.value
}

const toggleRightDrawer = () => {
	rightDrawer.value = !rightDrawer.value
}
</script>

<template lang="pug">
q-layout(view='hHh LpR fFf')
	q-header.head
		q-toolbar
			q-btn(dense flat round icon='mdi-menu' @click='toggleLeftDrawer')
			q-toolbar-title
			q-btn(dense flat round icon='mdi-menu' @click='toggleRightDrawer')

	Drawer(v-model="leftDrawer")
	RDrawer(v-model="rightDrawer")

	q-page-container
		router-view(v-slot="{ Component, route }")
			transition(name="fade")
				component(:is="Component")

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
