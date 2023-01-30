import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		mini: false,
	}),
	getters: {},
	actions: {
		toggleMini() {
			this.mini = !this.mini
		},
	},
})
