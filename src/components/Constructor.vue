<script setup lang="ts">
import { ref } from 'vue'
import PropsTab from '@/components/PropsTab.vue'
import DragTree from '@/components/DragTree.vue'

const ratio = ref(40)

const dragtree = ref(DragTree)
</script>

<template lang="pug">
q-page(padding)
	q-splitter(v-model="ratio")
		template(#before)
			q-scroll-area.home
				component(:is="DragTree" ref="dragtree")
				
		template(#after)
			q-scroll-area.home
				component(:is="PropsTab" )

</template>

<style scoped lang="scss">
h2 {
	margin: 0;
}
.home {
	height: calc(100vh - 99px);
	position: relative;
}
:deep(.q-tab-panels) {
	background: transparent;
}
</style>
