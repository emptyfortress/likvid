<script setup lang="ts">
import { useStore } from '@/stores/store'
import Codes from '@/components/Codes.vue'
import SvgIcon from '@/components/global/SvgIcon.vue'
// import { codes } from '@/stores/store'

const emit = defineEmits(['remove'])
const remove = () => {
	emit('remove')
}
const store = useStore()
</script>

<template lang="pug">
q-tab-panels(v-model="store.selected1"
	animated
	transition-prev="jump-up"
	transition-next="jump-up").rel

	q-tab-panel(v-for="item in store.flatCodes" :key="item.id" :name="item.text")
		.row.items-center
			component(:is="SvgIcon" :name="item.icon").im
			.title {{item.text}}
		q-separator.q-my-sm
		component(:is="Codes" :item="item")
</template>

<style scoped lang="scss">
.title {
	font-size: 1.3rem;
}
.im {
	transform: translateY(-2px);
	margin-right: 0.7rem;
}
</style>
