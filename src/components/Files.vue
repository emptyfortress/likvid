<script setup lang="ts">
import { useStore } from '@/stores/store'

const store = useStore()
</script>

<template lang="pug">
p {{ store.selected }}
</template>

<style scoped lang="scss"></style>
