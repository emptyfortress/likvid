<script setup lang="ts">
import { compile, ref } from 'vue'
import { BaseTree } from '@he-tree/vue'
import { useStore } from '@/stores/store'
import { tree, select1, toggle } from '@/composables/hetree'
import PropertyView1 from '@/components/PropertyView1.vue'
import SvgIcon from '@/components/global/SvgIcon.vue'
import CreateCode from '@/components/CreateCode.vue'
// import PropsTab from './PropsTab.vue'

const store = useStore()
const ratio = ref(38)

// const add = () => {
// 	store.addNode()
// 	const node = {
// 		id: 9,
// 		text: 'Изменение контракта',
// 	}
// 	const par = tree.value.statsFlat.find((item: Stat) => item.data.text === 'Контракт')
// 	tree.value.add(node, par)
// 	const current = tree.value.statsFlat.find(
// 		(item: Stat) => item.data.text === 'Изменение контракта'
// 	)
// 	select1(current)
// }
const dialog = ref(false)

const mode = ref('code')

const addFolder = () => {
	mode.value = 'code'
	dialog.value = true
}
const remove = () => {
	const node = tree.value.statsFlat.find((item: Stat) => item.data.text === 'Изменение контракта')
	const root = tree.value.statsFlat.find((item: Stat) => item.data.text === 'Контракт')
	tree.value.remove(node)
	select1(root)
}
</script>

<template lang="pug">
q-page(padding)
	.text-h6 Коды полномочий

	q-splitter(v-model="ratio").q-mt-md
		template(#before)
			q-scroll-area.home
				q-fab(icon="mdi-plus" size="sm" dark color="primary" direction="up").fab
					q-fab-action(color="secondary" icon="mdi-folder-outline" @click="addFolder" )
					q-fab-action(color="secondary" icon="mdi-key-chain-variant" @click="addCode" )

				component(:is="BaseTree" v-model="store.codes"
					:indent="30"
					:watermark="false"
					ref="tree").tree
					template(#default="{ node, stat }")
						.node(@click="select1(stat)" :class="{'selected' : stat.data.selected | node.selected}")
							template(v-if="stat.children.length")
								q-icon(name="mdi-chevron-down" @click.stop="toggle(stat)" :class="{'closed' : !stat.open}" size="20px").trig
								q-icon(name="mdi-folder-outline" ).trig
							component(v-if="!stat.children.length" :is="SvgIcon" name="keychain" size="20px").ic
							label {{ node.text }}

		template(#after)
			q-scroll-area.home
				component(:is="PropertyView1" @remove="remove")

	q-dialog(:model-value="dialog")
		component(:is="CreateCode" v-if="mode == 'code'")

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
	display: block;
	background: #f7f7f7;
}
.ic {
	margin-right: 0.5rem;
	transform: translateY(2px);
}
</style>
