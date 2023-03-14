<script setup lang="ts">
const props = defineProps({
	id: {
		type: String,
		required: true,
		default: 'history',
	},
})
</script>

<template lang="pug">
q-page(padding)
	.container
		.zag {{props.id}}
</template>

<style scoped lang="scss"></style>
