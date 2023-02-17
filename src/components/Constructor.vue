<script setup lang="ts">
import { ref } from 'vue'
import PropsTab from '@/components/PropsTab.vue'
import DragTree from '@/components/DragTree.vue'
import { useStore } from '@/stores/store'

const ratio = ref(40)
const store = useStore()
const newName = ref('')

const dragtree = ref(DragTree)

const save = () => {
	newSprav.value = true
}

const newSprav = ref(false)

const addnew = () => {
	store.addNewItemToDrawer(newName.value)
	newSprav.value = false
	newName.value = ''
	store.setTreeChanged(false)
}
</script>

<template lang="pug">
q-page(padding)
	q-splitter(v-model="ratio")
		template(#before)
			q-scroll-area.home
				component(:is="DragTree" ref="dragtree")
				
			q-btn(v-if="store.treeChanged" unelevated  color="primary" label="Сохранить" @click="save").fab1
		template(#after)
			q-scroll-area.home.pr
				component(:is="PropsTab" )

	q-dialog(:model-value="newSprav")
		q-card(style="min-width: 400px")
			q-card-section.row.items-center.q-pb-none
				.text-h6 Назовите справочник
				q-space
				q-btn(icon="mdi-close" flat round dense @click="newSprav = false")
			q-card-section
				q-input(v-model="newName" autofocus).inp
			q-card-section
				q-card-actions(align="right")
					q-btn(flat color="primary" label="Отмена" @click="newSprav = false") 
					q-btn(unelevated color="primary" label="Сохранить" @click="addnew") 
		

</template>

<style scoped lang="scss">
h2 {
	margin: 0;
}
.home {
	height: calc(100vh - 99px);
	position: relative;
}
.fab {
	position: absolute;
	bottom: 0.5rem;
	right: 0.5rem;
}
.fab1 {
	transition: 0.2s ease all;
	position: absolute;
	bottom: 0.5rem;
	right: 0.5rem;
}
.inp {
	font-size: 1.1rem;
}
</style>
