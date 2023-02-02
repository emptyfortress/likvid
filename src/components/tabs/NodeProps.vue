<script setup lang="ts">
import { ref, reactive } from 'vue'
import draggable from 'vuedraggable'

const list1 = reactive([{ id: 0, name: 'Объект' }])
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

				q-btn(flat round dense icon="mdi-trash-can-outline" size="sm" )
					q-menu
						q-list
							q-item(clickable v-close-popup @click="remove1(index)").pink
								q-item-section Удалить


</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.tabel {
	width: 400px;
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
</style>
