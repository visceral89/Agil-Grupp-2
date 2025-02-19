<script>
import UserInfo from "../components/UserInfo.vue";
import Button from "../components/Button.vue"

export default {
	components: {
		UserInfo,
		Button
	},
};
</script>

<template>
	<UserInfo />

	<RouterLink to="/game"> <Button>Starta spel 1p</Button> </RouterLink>

	<RouterLink to="/game"> <Button>Starta spel 2p</Button> </RouterLink>
</template>

<style scoped></style>
