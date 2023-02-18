<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '@/components/global/SvgIcon.vue'
import { useStore } from '@/stores/store'
import PropertyView from '@/components/PropertyView.vue'
import EditTree from '@/components/EditTree.vue'

const store = useStore()
const ratio = ref(32)

const add = () => {
	store.addNode()
}
</script>

<template lang="pug">
q-page(padding)
	.text-h6 {{ store.treedata[0].text}}

	q-splitter(v-model="ratio").q-mt-md
		template(#before)
			q-scroll-area.home
				q-btn(icon="mdi-plus" round size="md" dark color="primary" @click="add").fab
				component(:is="EditTree" ref="dragtree" :watermark="false")
				pre {{ store.treedata }}

		template(#after)
			q-scroll-area.home
				PropertyView

</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.home {
	height: calc(100vh - 150px);
	position: relative;
	margin-right: 0.5rem;
	padding: 1rem;
	background: #fff;
}
.fab {
	position: absolute;
	bottom: 0.5rem;
	right: 0.5rem;
}
.save {
	position: absolute;
	bottom: 0.5rem;
	right: 5rem;
}
.title {
	font-size: 1.2rem;
}
.filt {
	width: 150px;
	margin-left: 1rem;
	margin-top: 1rem;
}
</style>
