<script setup lang="ts">
import { useStore } from '@/stores/store'

const store = useStore()
</script>

<template lang="pug">
div
	.title(v-if="store.currentNode") {{store.currentNode.data.text}} fuck
	p lakjsdl
</template>

<style scoped lang="scss">
.title {
	font-size: 1.3rem;
}
</style>
