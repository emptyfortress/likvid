<script setup lang="ts">
import { ref } from 'vue'

const ratio = ref(30)
</script>

<template lang="pug">
q-page(padding)
	q-splitter(v-model="ratio")
		template(#before)
			q-scroll-area.home
				p fuck
				q-btn(fab icon="mdi-plus" dark color="primary" @click="").fab
		template(#after)
			q-scroll-area.home.pr
				p fuck
</template>

<style scoped lang="scss">
.home {
	height: calc(100vh - 99px);
	position: relative;
}
.fab {
	position: absolute;
	bottom: 1rem;
	right: 1rem;
}
</style>
