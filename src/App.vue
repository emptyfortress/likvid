<script setup lang="ts">
import { ref } from 'vue'
import Drawer from '@/components/Drawer.vue'
import RDrawer from '@/components/RDrawer.vue'
import AddDialog from '@/components/AddDialog.vue'
import SearchComponent from '@/components/SearchComponent.vue'
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
const showSearch = ref(false)
</script>

<template lang="pug">
q-layout(view="hHh LpR fFf")
	q-header.head
		q-toolbar
			q-btn(dense flat round icon="mdi-menu" @click="toggleLeftDrawer" color="white")
			q-toolbar-title Docsvision
			q-space
			SearchComponent(:search="showSearch" )
			q-btn(dense flat round icon="mdi-magnify" @click="showSearch = !showSearch")
			q-btn(dense round unelevated color="light-blue-2").q-mx-md
				q-avatar
					img(src="@/assets/img/users/user0.svg")
					.mybadge
			q-btn(dense flat round icon="mdi-help-circle-outline")

	Drawer(v-model="leftDrawer" )
	RDrawer(v-model="store.rightDrawer" )

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
	color: white;
	// background: rgba(0, 0, 0, 0.07);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	height: 64px;
	line-height: 64px;
	background: $primary;
}
.mybadge {
	position: absolute;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	left: -3px;
	bottom: -2px;
	background: green;
	border: 1px solid #fff;
}
.search {
	width: 60%;
}
// .filt {
// 	display: flex;
// 	align-items: center;
// 	justify-items: flex-end;
// 	width: 60%;
// 	background: pink;
// }
</style>
