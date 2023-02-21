<script setup lang="ts">
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from '@/stores/store'
import DocsVision from '@/components/DocsVision.vue'
import Files from '@/components/Files.vue'
import Contract from '@/components/TabPanels/Contract.vue'
import Info from '@/components/TabPanels/Info.vue'
import ChangeContract from '@/components/TabPanels/ChangeContract.vue'

const emit = defineEmits(['remove'])
const remove = () => {
	emit('remove')
}

const store = useStore()
const $q = useQuasar()

const rule = computed(() => {
	return [(val: any) => (val !== null && val !== '') || 'Обязательное поле']
})

const save = () => {
	$q.notify({
		color: 'positive',
		textColor: 'white',
		icon: 'mdi-check-bold',
		message: 'Сохранено',
	})
}
const reset = () => {
	val6.value = null
	val7.value = null
	val8.value = null
	val9.value = null
	val10.value = null
	val11.value = null
	val12.value = null
	val13.value = null
}
const val6 = ref(null)
const val7 = ref(null)
const val8 = ref(null)
const val9 = ref(null)
const val10 = ref(null)
const val11 = ref(null)
const val12 = ref(null)
const val13 = ref(null)
</script>

<template lang="pug">
q-tab-panels(v-model="store.selected"
	animated
	transition-prev="jump-up"
	transition-next="jump-up").rel

	q-tab-panel(name="Контракт")
		component(:is="Contract" )

	q-tab-panel(name="Информация о заказчике")
		component(:is="Info" )

	q-tab-panel(name="Исполнитель")
		.title(v-if="store.currentNode1") {{store.currentNode1.text}}
		component(:is="DocsVision" )

	q-tab-panel(name="Исполнение контракта")
		.title(v-if="store.currentNode1") {{store.currentNode1.text}}
		q-form
			.mygrid
				.label Сумма контракта:
				q-input(dense v-model="val6" type="number" lazy-rules :rules="rule")
				.label Стоимость исполненных работ:
				q-input(dense v-model="val7" type="number" lazy-rules :rules="rule")
				.label Фактически оплачено:
				q-input(dense v-model="val8" type="number" lazy-rules :rules="rule")

				q-separator.q-my-md
				.title Этап контракта

				.label Название этапа:
				q-input(dense v-model="val9" type="number" lazy-rules :rules="rule")
				.label Срок исполнения этапа:
				q-input(dense v-model="val10" type="number" lazy-rules :rules="rule")
				.label Стоимость этапа:
				q-input(dense v-model="val11" type="number" lazy-rules :rules="rule")
				.label Содержание этапа:
				q-input(dense v-model="val12" type="number" lazy-rules :rules="rule")
				.label Статус:
				q-input(dense v-model="val13" type="number" lazy-rules :rules="rule")
				.fil
					q-separator.q-my-md
					.inf Список документов:
					q-btn(unelevated color="primary" label="Добавить" size="sm")
			q-card-actions(align="right")
				q-btn(flat color="primary" label="Отмена" type="reset") 
				q-btn(unelevated color="primary" label="Сохранить" type="submit") 
		// ul(v-if="docs.length > 0")
		// 	li(v-for="item in docs" :key="item.label") {item.label}

	q-tab-panel(name="Изменение контракта")
		component(:is="ChangeContract" @remove="remove")

	q-tab-panel(name="Выписка из ЕГРЮЛ")
		component(:is="Files")
</template>

<style scoped lang="scss">
.title {
	font-size: 1.3rem;
}
.mygrid {
	display: grid;
	grid-template-columns: auto 2fr;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.3rem;
	font-size: 0.9rem;
	.q-input {
		max-width: 350px;
		font-size: 1.1rem;
	}
	.q-separator,
	.title,
	.fil {
		grid-column: 1/-1;
	}
}
.label {
	text-align: right;
	opacity: 0.75;
}
.link {
	cursor: pointer;
	color: $primary;
	text-decoration: underline;
	font-size: 1.1rem;
	margin-top: 0.5rem;
}
.inf {
	font-size: 0.9rem;
	margin-bottom: 1rem;
}
li {
	color: $primary;
	text-decoration: underline;
	cursor: pointer;
}
.q-card__actions {
	margin-top: 2rem;
	/* position: absolute; */
	/* bottom: 0; */
	/* right: 0; */
	/* width: 100%; */
}
</style>
