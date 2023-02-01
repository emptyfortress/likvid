<script setup lang="ts">
import { ref } from 'vue'
import PropsTab from '@/components/PropsTab.vue'
import DragTree from '@/components/DragTree.vue'

const ratio = ref(30)
</script>

<template lang="pug">
q-page(padding)
	q-splitter(v-model="ratio")
		template(#before)
			q-scroll-area.home
				DragTree()
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
	// background: #fff;
}
</style>
