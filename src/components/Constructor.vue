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
				q-btn(round icon="mdi-plus" dark color="primary" @click="add" size="md").fab
		template(#after)
			q-scroll-area.home.pr
				PropsTab
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
	bottom: 0.5rem;
	right: 0.5rem;
}
</style>
