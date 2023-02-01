<script setup lang="ts">
import { ref } from 'vue'

const ratio = ref(50)
</script>

<template lang="pug">
q-page(padding)
	.container
		q-splitter(v-model="ratio")
			template(#before)
				q-scroll-area.home
					h2 New tree {{$route.params.id}}
			template(#after)
				q-scroll-area.home
					h2 fuck
</template>

<style scoped lang="scss">
h2 {
	margin: 0;
}
.home {
	height: calc(100vh - 99px);
}
</style>
