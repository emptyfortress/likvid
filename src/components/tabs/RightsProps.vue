<script setup lang="ts">
import { ref } from 'vue'

const rights = [
	{ id: 0, label: 'Наследовать дискреционные права' },
	{ id: 1, label: 'Использовать ролевую модель' },
]

const right = ref(0)
</script>

<template lang="pug">
ul
	li(v-for="item in rights" :key="item.id")
		q-radio(v-model="right" :val="item.id" dense :label="item.label")

q-form.form
</template>

<style scoped lang="scss">
ul {
	list-style: none;
}
</style>
