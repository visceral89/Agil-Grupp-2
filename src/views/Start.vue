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
	<!-- userinfo displayed here -->

	<router-link to="/"> <!-- btn to 1p game --> </router-link>

	<router-link to="/"> <!-- btn to 2p game --> </router-link>
</template>

<style scoped></style>
