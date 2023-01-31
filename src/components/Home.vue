<script setup lang="ts">
import SvgIcon from '@/components/global/SvgIcon.vue'
</script>

<template lang="pug">
q-page(padding)
	.container
		h2 Home
		SvgIcon(name="test")
</template>

<style scoped lang="scss">
h2 {
	margin: 0;
}
</style>
