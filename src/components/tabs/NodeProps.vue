<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/stores/store'
const store = useStore()

const typ = computed(() => {
	if (store.currentNode && store.currentNode.data.branch == 2) {
		return 'node'
	}
	return 'branch'
})
// const filetype = ref(false)
const sel = ref('Не указано')
const options = ['Не указано', 'word', 'excel', 'txt', 'pdf', 'zip']
const shab = ref(false)
const path = ref('C:/Program Files/Docsvision/Examples/Files/test.docx')
const more = ref('=')
const options1 = ['=', '<=', '=>', '>', '<']
</script>

<template lang="pug">
template(v-if="!store.currentNode")
	.text-bold.text-center.q-mt-lg Выберите узел
template(v-else)
	.mygr
		.label Тип:
		div
			q-radio(disable dense v-model="typ" val="branch" label="Папка").q-mr-lg
			q-radio(disable dense v-model="typ" val="node" label="Узел")
		.label Вид карточки:
		.row.items-center
			.q-mr-xl {{ store.currentNode.data.vid }}
			q-select(v-if="store.currentNode.data.vid === 'file'" v-model="sel" dense label="Тип файла" :options="options").typ

		q-input(v-model="store.currentNode.data.text" type="text" label="Название").ful
		.quan
			q-checkbox(v-model="store.currentNode.data.restrict" dense label="Ограничить количество")
			q-select(v-model="more" dense v-if="store.currentNode.data.restrict" :options="options1")
			q-input(v-model="store.currentNode.data.quan" type="number" dense v-if="store.currentNode.data.restrict" min="1")
			div(v-if="store.currentNode.data.restrict") шт.
		.quan
			q-checkbox(v-model="store.currentNode.data.mandatory" dense label="Обязательный узел")
				q-icon(name="mdi-asterisk" color="primary").q-ml-sm
	.row.items-center.q-mt-md
		q-checkbox(v-model="shab" dense label="Заполнить при создании").q-mr-xl
		q-input(v-if="shab" v-model="path" label="Источник" style="width: 300px" :disable="!shab").q-mr-xl 
		q-btn(v-if="shab" unelevated color="primary" label="Выбрать" size="sm")

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
.typ {
	width: 150px;
}
.full {
	widows: 300px;
}
</style>
