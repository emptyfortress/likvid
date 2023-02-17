<script setup lang="ts">
import LibList from '@/components/LibList.vue'

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
})
</script>

<template lang="pug">
q-drawer(:model-value="props.modelValue" side="right" :width="300" overlay bordered)
	LibList(:zag="true")

</template>

<style scoped lang="scss"></style>
