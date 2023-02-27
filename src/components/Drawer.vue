<script setup lang="ts">
// import { ref } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore()

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: true,
	},
})
</script>

<template lang="pug">
q-drawer(:model-value="props.modelValue" side="left" :mini="store.mini" :width="250").rel
	q-list.q-mt-lg
		q-item(clickable v-ripple v-for="page in store.pages" :to="page.url" :key="page.id")
			q-item-section(avatar)
				q-icon(:name="page.icon")
			q-item-section
				q-item-label {{ page.title }}

	q-btn(round flat dense  @click="store.toggleMini").mini.gt-sm
		q-icon(name="mdi-backburger" v-if="!store.mini")
		q-icon(name="mdi-forwardburger" v-else)


</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.mini {
	position: absolute;
	bottom: 1rem;
	left: 0.5rem;
	overflow-x: hidden;
}
.q-item--active,
.q-item.q-router-link--active {
	background: $accent1;
	color: $primary;
}
</style>
