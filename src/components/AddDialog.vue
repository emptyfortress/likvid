<script setup lang="ts">
import SvgIcon from '@/components/global/SvgIcon.vue'
import { useStore } from '@/stores/store'

const store = useStore()
</script>

<template lang="pug">
q-card.new
	q-card-section.row.items-baseline.q-pb-none
		.title Создать справочник
		q-space
		q-btn(icon="mdi-close" flat round dense v-close-popup)

	q-card-section
		q-list(separator)
			q-item(v-for="item in store.createList" :key="item.id" clickable v-ripple tag="router-link" :to="item.to" :class="item.className" v-close-popup)
				q-item-section(avatar)
					component(:is="SvgIcon" :name="item.icon")
				q-item-section
					q-item-label {{item.label}}
</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.new {
	width: 450px;
}
.title {
	text-transform: uppercase;
	font-size: 1.1rem;
}
.q-item {
	background: $bgMain;
	&.act {
		background: #d3e8d4;
	}
}
</style>
