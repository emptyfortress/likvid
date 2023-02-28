<script setup lang="ts">
import { ref } from 'vue'
import { BaseTree } from '@he-tree/vue'
import { useStore } from '@/stores/store'
import { tree, select1, toggle } from '@/composables/hetree'
import PropertyView1 from '@/components/PropertyView1.vue'
import SvgIcon from '@/components/global/SvgIcon.vue'
import CreateCode from '@/components/CreateCode.vue'
import CreateFolder from '@/components/CreateFolder.vue'
// import PropsTab from './PropsTab.vue'

const store = useStore()
const ratio = ref(38)
const dialog = ref(false)
const dialog1 = ref(false)

const addCode = () => {
	dialog.value = true
}

const addFolderToTree = (e: string) => {
	const temp = {
		id: Date.now(),
		text: e,
		selected: false,
		icon: 'NodeFolder',
	}
	tree.value.add(temp)
}
const addCodeToTree = (e: Code) => {
	const temp = {
		id: Date.now(),
		text: e.text,
		selected: true,
		icon: 'keychain',
	}
	const node = tree.value.statsFlat.find((item: Stat) => item.data.selected === true)
	const parent = node.parent || node
	tree.value.statsFlat.map((item: Stat) => (item.data.selected = false))
	tree.value.add(temp, parent)
}

const addFolder = () => {
	dialog1.value = true
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
					updateBehavior="new"
					:indent="30"
					:watermark="false"
					ref="tree").tree
					template(#default="{ node, stat }")
						.node(@click="select1(stat)" :class="{'selected' : stat.data.selected | node.selected}")
							template(v-if="stat.children.length")
								q-icon(name="mdi-chevron-down" @click.stop="toggle(stat)" :class="{'closed' : !stat.open}" size="20px").trig
							component(:is="SvgIcon" :name="stat.data.icon" size="20px").ic
							label {{ node.text }}

		template(#after)
			q-scroll-area.home
				component(:is="PropertyView1" @remove="remove")

	component(:is="CreateCode" v-model="dialog" @add="addCodeToTree")
	component(:is="CreateFolder"  v-model="dialog1" @add="addFolderToTree")

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
	transform: translateY(3px);
}
</style>
