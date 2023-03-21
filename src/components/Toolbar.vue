<script setup lang="ts">
import SvgIcon from '@/components/global/SvgIcon.vue'

const props = defineProps({
	total: {
		type: Number,
		default: 0,
	},
})

const buttons = [
	{ id: 0, icon: 'sort' },
	{ id: 1, icon: 'read' },
	{ id: 2, icon: 'refresh' },
	{ id: 3, icon: 'xls' },
	{ id: 4, icon: 'reset' },
	{ id: 5, icon: 'sliders' },
	{ id: 6, icon: 'edit' },
]
</script>

<template lang="pug">
.all
	.tool
		.flex.items-center
			q-btn(flat round icon="mdi-backburger" dense)
			.q-ml-md
				span Всего:
				span.text-bold.q-ml-md {{props.total}}
		div
			q-btn(flat icon="mdi-table" dense) 
			q-btn(flat icon="mdi-format-list-bulleted-square" dense) 
		.toolcontent
			q-btn(flat round v-for="bt in buttons" size="md") 
				component(:is="SvgIcon" :name="bt.icon" size="19px" color="#666")
	
</template>

<style scoped lang="scss">
.all {
	background: white;
}
.line {
	border: 0;
	height: 0;
	border-top: 1px solid rgba(0, 0, 0, 0.23);
	border-bottom: 1px solid rgba(255, 255, 255, 0.6);
}
.tool {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	height: 44px;
	margin-top: 1rem;
	padding: 0 0.5rem;
	line-height: 44px;
}
</style>
