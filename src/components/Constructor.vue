<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import PropsTab from '@/components/PropsTab.vue'
import DragTree from '@/components/DragTree.vue'
import { useStore } from '@/stores/store'
import { useLib } from '@/stores/library'

const ratio = ref(40)
const store = useStore()
const lib = useLib()
const route = useRoute()
const newName = ref('')

const dragtree = ref(DragTree)
const newSprav = ref(false)

const save = () => {
	newSprav.value = true
}

const addnew = () => {
	store.addNewItemToDrawer(newName.value, route.params.id[0])
	newSprav.value = false
	if (shab.value === true) {
		lib.addItem({
			id: Date.now(),
			name: 'Контракт',
			branch: 0,
		})
	}
	newName.value = ''
}
const shab = ref(false)

const rule = computed(() => {
	return [(val: any) => (val !== null && val !== '') || 'Обязательное поле']
})
</script>

<template lang="pug">
q-page(padding)
	q-splitter(v-model="ratio")
		template(#before)
			q-scroll-area.home
				component(:is="DragTree" ref="dragtree")
				
				q-btn(unelevated  color="primary" :disable="route.path =='/new/2'" label="Сохранить" @click="save").fab1
		template(#after)
			q-scroll-area.home
				component(:is="PropsTab" )

	q-dialog(v-model="newSprav")
		q-card(style="min-width: 400px")
			q-form(@submit="addnew")
				q-card-section.row.items-center.q-pb-none
					.text-h6 Родительская папка:
					q-space
					q-btn(icon="mdi-close" flat round dense @click="newSprav = false")
				q-card-section
					q-input(v-model="newName" autofocus lazy-rules :rules="rule").inp
					br
					q-checkbox(v-model="shab" dense label="Сохранить как шаблон")
				q-card-section
					q-card-actions(align="right")
						q-btn(flat color="primary" label="Отмена" @click="newSprav = false")
						q-btn(:disable="newName.length == 0" unelevated color="primary" label="Сохранить" type="submit") 
		
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
:deep(.q-tab-panels) {
	background: transparent;
}
</style>
