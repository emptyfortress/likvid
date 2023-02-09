<script setup lang="ts"></script>

<template lang="pug">
q-page(padding)
	q-splitter(v-model="ratio")
		template(#before)
			q-scroll-area.home
				p fuck
				q-btn(fab icon="mdi-plus" dark color="primary" @click="add").fab
		template(#after)
			q-scroll-area.home.pr
				p fuck
</template>

<style scoped lang="scss"></style>
