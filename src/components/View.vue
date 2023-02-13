<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '@/components/global/SvgIcon.vue'
import { useStore } from '@/stores/store'
import PropertyView from '@/components/PropertyView.vue'

const store = useStore()
const ratio = ref(32)

const add = () => {
	store.toggleRightDrawer()
}
</script>

<template lang="pug">
q-page(padding)
	.text-h6 Пакет документов "КОНТРАКТ"

	q-splitter(v-model="ratio").q-mt-md
		template(#before)
			q-scroll-area.home
				q-btn(round icon="mdi-plus" size="md" dark color="primary" @click="add").fab
				q-tree(:nodes="store.packet"
					node-key="label"
					default-expand-all
					v-model:selected="store.selected"
					icon="mdi-chevron-right")
					template(v-slot:header-root="prop")
						.row.items-center
							component(:is="SvgIcon" name="packet" size="30px").q-mr-sm
							div {{ prop.node.label }}
					template(v-slot:default-header="prop")
						.row.items-center
							q-icon(:name="prop.node.icon" size="24px").q-mr-sm
							span {{ prop.node.label }}
				
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
:deep(.q-tree__arrow) {
	font-size: 1.3rem;
}
.q-tree:deep(.q-icon) {
	color: $primary;
}
:deep(.q-tree__node--selected) {
	background: #b1ddfc;
	color: $primary;
}
:deep(.q-tree__node--selected .q-tree__node-header-content) {
	color: $primary;
}
</style>
