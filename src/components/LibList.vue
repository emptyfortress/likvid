<script setup lang="ts">
import { ref, computed } from 'vue'
import draggable from 'vuedraggable'
import { useStore } from '@/stores/store'
import { useLib } from '@/stores/library'
import WordHighlighter from 'vue-word-highlighter'

const props = defineProps({
	zag: {
		type: Boolean,
		default: false,
	},
})
const store = useStore()
const lib = useLib()

const list = ref(lib.list)

const drag = ref(false)
const filter = ref('')

const filteredList = computed(() => {
	return list.value.filter((item) => item.text.toLowerCase().includes(filter.value.toLowerCase()))
})
const ondragstart = (e: any) => {
	drag.value = true
	const node = list.value.find((item) => item.text === e.item.innerText)
	if (node) {
		store.setDraggedNode(node)
	}
}
const ondragend = () => {
	drag.value = false
	store.setDraggedNode(null)
}
const calcClass = (e: any) => {
	if (e.branch === 1) {
		return 'multi'
	} else if (e.branch === 0) {
		return 'templ'
	}
	return ''
}
</script>

<template lang="pug">
.zg(v-if="props.zag")
	div Библиотека
	q-badge {{ list.length }}
q-input(ref="input" dense v-model="filter" clearable hide-bottom-space @clear="filter = ''").q-mx-md.q-mb-md
	template(v-slot:prepend)
		q-icon(name="mdi-magnify")

component(:is="draggable" :list="filteredList"
	item-key="id"
	:group="{ name: 'node', pull: 'clone', put: false }"
	@start="ondragstart" 
	@end="ondragend"
	ghost-class="ghost"
	).list-group
	template(#item="{ element, index }")
		.tabel(:class="calcClass(element)")
			div
				q-icon(name="mdi-ruler-square-compass" size="20px" color="primary" v-if="element.branch === 0")
				q-icon(name="mdi-folder-outline" size="20px" color="primary" v-if="element.branch === 1")
				q-icon(name="mdi-square-medium" size="18px" style="vertical-align: top;" v-if="element.branch === 2")
				span.q-ml-sm
					component(:is="WordHighlighter" :query="filter" ) {{ element.text }}
			q-btn(dense flat round icon="mdi-information-outline" size="sm")
</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.tabel {
	padding: 4px 1rem;
	width: 100%;
	cursor: pointer;
	background: $bgMain;
	font-size: 0.9rem;
	display: grid;
	grid-template-columns: 1fr auto;
	&.multi {
		background: #dbded3;
	}
	&.templ {
		background: #dce7bd;
	}
	.q-icon,
	.q-btn {
		color: $primary;
	}
}
.zg {
	margin: 1rem;
	font-size: 0.9rem;
	display: flex;
	justify-content: flex-start;
	gap: 1rem;
}
</style>
