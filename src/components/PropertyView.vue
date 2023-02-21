<script setup lang="ts">
import { useStore } from '@/stores/store'
import DocsVision from '@/components/DocsVision.vue'
import Files from '@/components/Files.vue'
import Contract from '@/components/TabPanels/Contract.vue'
import Info from '@/components/TabPanels/Info.vue'
import ChangeContract from '@/components/TabPanels/ChangeContract.vue'
import Ispolnenie from '@/components/TabPanels/Ispolnenie.vue'

const emit = defineEmits(['remove'])
const remove = () => {
	emit('remove')
}
const store = useStore()
</script>

<template lang="pug">
q-tab-panels(v-model="store.selected"
	animated
	transition-prev="jump-up"
	transition-next="jump-up").rel

	q-tab-panel(name="Контракт")
		.title(v-if="store.currentNode1") {{store.currentNode1.text}}
		component(:is="Contract" )

	q-tab-panel(name="Информация о заказчике")
		.title(v-if="store.currentNode1") {{store.currentNode1.text}}
		component(:is="Info" )

	q-tab-panel(name="Исполнитель")
		.title(v-if="store.currentNode1") {{store.currentNode1.text}}
		component(:is="DocsVision" )

	q-tab-panel(name="Исполнение контракта")
		.title(v-if="store.currentNode1") {{store.currentNode1.text}}
		component(:is="Ispolnenie" )

	q-tab-panel(name="Изменение контракта")
		.title(v-if="store.currentNode1") {{store.currentNode1.text}}
		component(:is="ChangeContract" @remove="remove")

	q-tab-panel(v-for="item in store.packet[0].children[1].children" :key="item.id" :name="item.text")
		.title {{item.text}} fuck
		// component(:is="Files")
</template>

<style scoped lang="scss"></style>
