<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template lang="pug">
div
	h1 {{ msg }}

	.card
		button(type="button" @click="count++") count is {{ count }}
		p Edit
		q-btn(unelevated color="primary" label="Отмена") 
</template>

<style scoped lang="scss">
.read-the-docs {
	color: #888;
}
</style>
