<script>
import UserInfo from "../components/UserInfo.vue";

export default {
	components: {
		UserInfo,
	},
};
</script>

<template>
	<UserInfo />

	<RouterLink to="/"> <!-- btn to 1p game --> </RouterLink>

	<RouterLink to="/"> <!-- btn to 2p game --> </RouterLink>
</template>

<style scoped></style>
