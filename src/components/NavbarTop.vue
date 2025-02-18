<script>
export default {
	data() {
		return { isExpanded: false };
	},
};
</script>
<template>
	<nav class="navbar">
		<span class="material-icons">account_circle</span>
		<img src="../assets/FF-simple-logo.webp" alt="" />
		<span class="material-icons">help</span>
		<nav v-if="isExpanded"></nav>
	</nav>
</template>
<style scoped>
.navbar {
	display: flex;
	background: hsl(0, 0%, 60%);
}
</style>
