<script setup lang="ts">
import { ref, reactive } from 'vue'
import draggable from 'vuedraggable'

const list1 = reactive([{ id: 0, name: 'Объект' }])

const remove = (ind: number) => {
	list1.splice(ind, 1)
}
</script>

<template lang="pug">
ul
	li Возможные подчиненные объекты
	li Порядок следования подчиненных объектов
	li Способ сортировки
	li Правила наследования
q-separator
.q-mb-md Список возможных подчиненных объектов:

component(:is="draggable" :list="list1"
	item-key="id"
	group="node"
	ghost-class='ghost'
	).list-group
	template(#item="{ element, index }")
		.tabel
			div
				q-icon(name="mdi-square-medium" size="18px" style="vertical-align: top;")
				span.q-ml-sm {{ element.name }}

			div
				q-btn(flat round dense icon="mdi-information-outline" size="sm" ).q-mr-sm
					q-menu
						q-card.hrinfo
							.label Псевдоним:
							div {{ element.name}}
							.label Тип:
							div {{ element.type}}
							.label Состояние:
							div {{ element.state}}
							.label Размер:
							div {{ element.size}} Gb
							.label Раздел:
							div
								span(v-if="element.main") основной, 
								span(v-if="element.arch") архивный, 
								span(v-if="element.temp") временный

				q-btn(flat round dense icon="mdi-close" size="sm" )
					q-menu
						q-list
							q-item(clickable v-close-popup @click="remove(index)").pink
								q-item-section Удалить


</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.tabel {
	width: 600px;
	display: grid;
	justify-items: space-between;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.2rem;
	cursor: pointer;
	background: $bgMain;
	font-size: 0.9rem;
	padding: 0.5rem 1rem;
	grid-template-columns: 1fr auto;
	.q-icon,
	.q-btn {
		color: $primary;
	}
}
.hrinfo {
	padding: 1rem;
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: flex-end;
	column-gap: 1rem;
	row-gap: 3px;

	.label {
		color: grey;
		justify-self: end;
	}
}
</style>
