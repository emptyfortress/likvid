<script setup lang="ts">
const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
})
</script>

<template lang="pug">
q-drawer(:model-value="props.modelValue" side="right" :width="300" overlay bordered)
	q-list.q-mt-lg
		q-item(clickable v-ripple)
			q-item-section(avatar)
				q-icon(name="mdi-information")
			q-item-section
				q-item-label Info

</template>

<style scoped lang="scss"></style>
