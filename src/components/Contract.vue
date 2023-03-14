<script setup lang="ts">
import { ref } from 'vue'
import { BaseTree } from '@he-tree/vue'
import { useStore } from '@/stores/store'
import { tree, select, toggle } from '@/composables/hetree'
import PropertyView from '@/components/PropertyView.vue'
// import PropsTab from './PropsTab.vue'

const store = useStore()
const ratio = ref(32)

const add = () => {
	store.addNode()
	const node = {
		id: 9,
		text: 'Изменение контракта',
	}
	const par = tree.value.statsFlat.find((item: Stat) => item.data.text === 'Контракт')
	tree.value.add(node, par)
	const current = tree.value.statsFlat.find(
		(item: Stat) => item.data.text === 'Изменение контракта'
	)
	select(current)
}
const remove = () => {
	const node = tree.value.statsFlat.find((item: Stat) => item.data.text === 'Изменение контракта')
	const root = tree.value.statsFlat.find((item: Stat) => item.data.text === 'Контракт')
	tree.value.remove(node)
	select(root)
}
</script>

<template lang="pug">
q-page(padding)
	.text-h6 Пакет документов "КОНТРАКТ"

	q-splitter(v-model="ratio").q-mt-md
		template(#before)
			q-scroll-area.home
				q-btn(:disable="store.packet[0].children.length > 3" icon="mdi-plus" round size="md" dark color="primary" @click="add").fab

				component(:is="BaseTree" v-model="store.packet"
					:indent="30"
					:watermark="false"
					ref="tree").tree
					template(#default="{ node, stat }")
						.node(@click="select(stat)" :class="{'selected' : stat.data.selected | node.selected}")
							.row
								template(v-if="stat.children.length")
									q-icon(name="mdi-chevron-down" @click.stop="toggle(stat)" :class="{'closed' : !stat.open}" size="20px").trig
									q-icon(name="mdi-folder-outline" ).trig
								img(:src="`${node.icon}.svg`" v-if="node.icon").ic
							label {{ node.text }}
							q-icon(v-if="node.mandatory" name="mdi-lock" color="primary")

		template(#after)
			q-scroll-area.home
				component(:is="PropertyView" @remove="remove")

			// q-card-actions(align="right")
			// 	q-btn(flat color="primary" label="Отмена" to="/folders/1") 
			// 	q-btn(unelevated color="primary" label="Сохранить") 

</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';
@import '@/assets/styles/hetree.scss';

.home {
	height: calc(100vh - 150px);
	position: relative;
	margin-right: 0.5rem;
	padding: 1rem;
	background: #fff;
}
// .home1 {
// 	height: calc(100vh - 200px);
// 	position: relative;
// 	margin-right: 0.5rem;
// 	padding: 1rem;
// 	background: #fff;
// }
.fab {
	position: absolute;
	bottom: 0.5rem;
	right: 0.5rem;
}
.save {
	position: absolute;
	bottom: 0.5rem;
	right: 5rem;
}
.title {
	font-size: 1.2rem;
}
.filt {
	width: 150px;
	margin-left: 1rem;
	margin-top: 1rem;
}
.node {
	display: grid;
	grid-template-columns: auto 1fr auto;
	justify-items: start;
	align-items: center;
	column-gap: 0.5rem;
	background: #f7f7f7;
}
.ic {
	width: 14px;
	transform: translateY(3px);
	margin-right: 0.2rem;
}
</style>
