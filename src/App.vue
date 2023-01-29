<script setup lang="ts">
import { ref } from 'vue'

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
	q-header
		q-toolbar
			q-btn(dense flat round icon='mdi-menu' @click='toggleLeftDrawer')
			q-toolbar-title
			q-btn(dense flat round icon='mdi-menu' @click='toggleRightDrawer')

	q-drawer(v-model='leftDrawer' show-if-above behavior="desktop" side='left' bordered)
		div fuck
		div fuck
	
	q-drawer(v-model='rightDrawer' side='right' overlay bordered)
		div fuck

	q-page-container
		router-view(v-slot="{ Component, route }")
			transition(name="fade")
				component(:is="Component")


</template>

<style scoped lang="scss"></style>
