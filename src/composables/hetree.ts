import { ref } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore()
const tree = ref()

const select = (e: Stat) => {
	tree.value.statsFlat.map((item: any) => (item.data.selected = false))
	e.data.selected = true
	store.setCurrentNode(e)
	store.selection = true
}

const toggle = (stat: any) => {
	stat.open = !stat.open
}

export { tree, select, toggle }
