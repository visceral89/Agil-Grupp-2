<template>
	<div class="question-card">{{ question.points }}</div>
</template>
<script>
export default {
	props: ["question"],
	data() {
		return {};
	},
};
</script>
<style scoped>
.question-card {
	background-color: #e4cff1;
	color: #181818;
	box-shadow: -2px 4px 0 0 rgba(0, 0, 0, 0.2);
}
</style>
