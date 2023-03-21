<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

const props = defineProps({
	search: {
		type: Boolean,
		default: false,
	},
})

const store = useStore()
const scope = ['Везде', 'В текущей папке', 'В моих папках']
const sel = ref('В текущей папке')
</script>

<template lang="pug">
transition(name="slide-right" mode="out-in")
	.all(v-if="props.search")
		q-select(:options="scope" dense dark v-model="sel" hide-detail).where
		q-input(v-model="store.filter" autofocus dense outlined bg-color="white" clearable).search
		q-btn(unelevated color="primary" label="Найти").q-mx-md

</template>

<style scoped lang="scss">
.all {
	display: flex;
	align-items: baseline;
	justify-content: flex-end;
	width: 70%;
	// background: pink;
}
.where {
	height: 24px;
	width: 200px;
	margin-right: 1rem;
}
.search {
	width: 80%;
}
</style>
