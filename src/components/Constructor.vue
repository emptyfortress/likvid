<script setup lang="ts">
import { ref } from 'vue'
import PropsTab from '@/components/PropsTab.vue'
import DragTree from '@/components/DragTree.vue'

const ratio = ref(30)

const dragtree = ref(DragTree)

const add = () => {
	dragtree.value.add()
}
</script>

<template lang="pug">
q-page(padding)
	q-splitter(v-model="ratio")
		template(#before)
			q-scroll-area.home
				DragTree(ref="dragtree")
				q-btn(fab icon="mdi-plus" dark color="primary" @click="add").fab
		template(#after)
			q-scroll-area.home
				PropsTab()
</template>

<style scoped lang="scss">
h2 {
	margin: 0;
}
.home {
	height: calc(100vh - 99px);
	position: relative;
}
.fab {
	position: absolute;
	bottom: 1rem;
	right: 1rem;
}
</style>
