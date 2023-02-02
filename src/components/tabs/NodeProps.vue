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


</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.tabel {
	width: 400px;
	cursor: pointer;
	background: $bgMain;
	font-size: 0.9rem;
	div {
		padding: 4px 1rem;
		border-bottom: 1px solid $borderColor;
	}
}
</style>
