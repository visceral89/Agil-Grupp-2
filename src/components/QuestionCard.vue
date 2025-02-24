<template>
	<div class="question-card">{{ question.points }}</div>
</template>
<script>
export default {
	props: ["question"],
	data() {
		return { isDisabeled: false };
	},
};
</script>
<style scoped>
.question-card {
	background-color: #e4cff1;
	color: #181818;
	box-shadow: -2px 4px 0 0 rgba(0, 0, 0, 0.2);
	min-width: 82px;
	min-height: 44px;
	border-radius: var(--border-radius);
	display: flex;
	justify-content: center;
	align-items: center;
	transition: var(--transition);
}
.question-card:hover {
	background-color: #c99be5;
	color: var(--color-neutral-light);
}

.disabeled {
	background-color: #c99be5;
	color: var(--color-neutral-light);
	box-shadow: none;
}

@media (min-width: 500px) {
	.question-card {
		min-width: 100px;
	}
}
</style>
