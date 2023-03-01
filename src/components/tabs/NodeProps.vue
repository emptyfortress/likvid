<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
const store = useStore()

const typ = ref('one')
const ban = ref(false)
const quan = ref(1)
</script>

<template lang="pug">

.mygr
	q-input(v-model="store.selected" type="text" label="Название").ful
	// .label Тип:
	// div
		q-radio(dense v-model="typ" val="one" label="Папка").q-mr-lg
		q-radio(dense v-model="typ" val="two" label="Узел")
	.label Количество:
	.quan
		q-checkbox(v-model="ban" dense label="Ограничить")
		q-input(v-model="quan" type="number" dense v-if="ban")
		div(v-if="ban") шт.

br
br
q-card-actions(align="left")
	q-btn(flat color="primary" label="Отмена" @click="action" size="sm") 
	q-btn(unelevated color="primary" label="Применить" @click="action" size="sm") 

q-separator
ul
	li Возможные подчиненные объекты - <span>нет</span>
	li Порядок следования подчиненных объектов - <span>нет</span>
	li Способ сортировки - <span>нет</span>
	li Правила наследования
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
