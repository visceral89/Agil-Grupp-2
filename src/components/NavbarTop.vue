<script>
export default {
	data() {
		return {};
	},
};
</script>
<template>
	<nav class="navbar">
		<router-link to="/"> <span class="material-icons">account_circle</span></router-link>
		<img src="../assets/FF-simple-logo.webp" alt="frage fejden logo" />
		<router-link to="/"><span class="material-icons">help</span></router-link>
	</nav>
</template>
<style scoped>
span {
	height: 40px;
	width: 40px;
}
img {
	width: 154px;
	height: 77px;
}

.navbar {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: transparent;
}
</style>
