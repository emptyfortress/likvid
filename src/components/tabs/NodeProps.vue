<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/stores/store'
const store = useStore()

const ban = ref(false)
const opt = ref(false)
// const quan = ref(store.currentNode?.data.quan) | 0

// const typ = ref('one')
const typ = computed(() => {
	if (store.currentNode?.data.branch === true) {
		return 'branch'
	}
	return 'node'
})
</script>

<template lang="pug">
template(v-if="!store.currentNode")
	.text-bold.text-center.q-mt-lg Выберите узел
template(v-else)
	.mygr
		q-input(v-model="store.selected" type="text" label="Название").ful
		.label Тип:
		div
			q-radio(dense v-model="typ" val="branch" label="Папка").q-mr-lg
			q-radio(dense v-model="typ" val="node" label="Узел")
		.quan
			q-checkbox(v-model="store.currentNode.data.restrict" dense label="Ограничить количество")
			q-input(v-model="store.currentNode.data.quan" type="number" dense v-if="store.currentNode.data.restrict" min="1")
			div(v-if="store.currentNode.data.restrict") шт.
		.quan
			q-checkbox(v-model="opt" dense label="Обязательный узел")

	br
	br
	q-card-actions(align="left")
		q-btn(flat color="primary" label="Отмена" size="sm") 
		q-btn(unelevated color="primary" label="Применить" @click="apply" size="sm") 

	q-separator

</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.mygr {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: center;
	gap: 1.3rem;
	:deep(.q-field) {
		font-size: 1rem;
	}
	.ful {
		grid-column: 1/-1;
		width: 400px;
	}
}
li span {
	color: red;
}
.quan {
	grid-column: 1/-1;
	display: flex;
	align-items: center;
	gap: 3rem;
	.q-field {
		width: 80px;
	}
	:deep(.q-field__native) {
		text-align: center;
	}
}
</style>
