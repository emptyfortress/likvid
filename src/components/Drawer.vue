<script setup lang="ts">
// import { ref } from 'vue'
import { useStore } from '@/stores/store'

const mystore = useStore()

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: true,
	},
})

const pages = [
	{
		id: 0,
		title: 'Главная',
		icon: 'mdi-home-roof',
		url: '/',
	},
	// {
	// 	id: 1,
	// 	title: 'Отчеты',
	// 	icon: 'mdi-finance',
	// 	url: '/report',
	// },
]
</script>

<template lang="pug">
q-drawer(:model-value="props.modelValue" side="left" :mini="mystore.mini" :width="200").rel
	q-list.q-mt-lg
		q-item(clickable v-ripple v-for="page in pages" :to="page.url")
			q-item-section(avatar)
				q-icon(:name="page.icon")
			q-item-section
				q-item-label {{ page.title }}

	q-btn(round flat dense  @click="mystore.toggleMini").mini.gt-sm
		q-icon(name="mdi-backburger" v-if="!mystore.mini")
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
	color: $blue-9;
}
</style>
