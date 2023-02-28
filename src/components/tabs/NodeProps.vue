<script setup lang="ts"></script>

<template lang="pug">
ul
	li Возможные подчиненные объекты - <span>нет</span>
	li Порядок следования подчиненных объектов - <span>нет</span>
	li Способ сортировки - <span>нет</span>
	li Правила наследования
q-separator

</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.tabel {
	width: 600px;
	display: grid;
	justify-items: space-between;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.2rem;
	cursor: pointer;
	background: $bgMain;
	font-size: 0.9rem;
	padding: 0.5rem 1rem;
	grid-template-columns: 1fr auto;
	.q-icon,
	.q-btn {
		color: $primary;
	}
}
.hrinfo {
	padding: 1rem;
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: flex-end;
	column-gap: 1rem;
	row-gap: 3px;

	.label {
		color: grey;
		justify-self: end;
	}
}
li span {
	color: red;
}
</style>
