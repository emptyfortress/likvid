<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore()

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: true,
	},
})
const fold = ref(true)
const mini = ref(false)
const toggleMini = () => {
	mini.value = !mini.value
}

const pages1 = [
	{
		id: 0,
		title: 'Главная',
		icon: 'mdi-home-roof',
		url: '/',
	},
	{
		id: 1,
		title: 'Последние карточки',
		icon: 'mdi-history',
		url: '/path/history',
	},
	{
		id: 2,
		title: 'Мои задания',
		url: '/path/task',
	},
	{
		id: 2,
		title: 'Мои документы',
		url: '/path/doc',
	},
]

const pages = [
	{
		id: 1,
		title: 'Design mode',
		icon: 'mdi-ruler-square-compass',
		url: '/new/0',
	},
	{
		id: 2,
		title: 'Контракт',
		icon: 'mdi-ruler-square-compass',
		url: '/new/1',
	},
	{
		id: 3,
		title: 'Коды полномочий',
		icon: 'mdi-ruler-square-compass',
		url: '/new/2',
	},
]
</script>

<template lang="pug">
q-drawer(:model-value="props.modelValue" side="left" :mini="mini" :width="250").rel
	q-list.q-mt-lg
		q-item(clickable v-ripple v-for="page in pages" :to="page.url" :key="page.id")
			q-item-section(avatar)
				q-icon(:name="page.icon")
			q-item-section
				q-item-label {{ page.title }}
	hr.q-mt-xl
	q-list
		q-item(clickable v-ripple v-for="page in pages1" :to="page.url" :key="page.id")
			q-item-section(avatar)
				q-icon(:name="page.icon")
			q-item-section
				q-item-label {{ page.title }}
	q-expansion-item(v-model="fold" label="Мои папки" switch-toggle-side :class="{open : fold}")
		q-list
			q-item(clickable v-ripple v-for="page in store.myfolders" :to="page.url" :key="page.id")
				q-item-section(avatar)
					q-icon( name="mdi-folder-outline")
				q-item-section
					q-item-label {{ page.title }}

	q-btn(round flat dense  @click="toggleMini").mini.gt-sm
		q-icon(name="mdi-backburger" v-if="!mini")
		q-icon(name="mdi-forwardburger" v-else)


</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

:deep(.q-drawer) {
	background: $primary;
	color: white;
}
.mini {
	position: absolute;
	bottom: 1rem;
	left: 0.5rem;
	overflow-x: hidden;
}
.q-item--active,
.q-item.q-router-link--active {
	background: $accent1;
	color: white;
}
.spi {
	font-size: 0.9rem;
	/* background: $primary; */
	color: $primary;
	text-align: center;
	padding: 3px 0;
	border-top: 1px solid $primary;
	border-bottom: 1px solid $primary;
}
.open {
	background: $accent2;
}
</style>
