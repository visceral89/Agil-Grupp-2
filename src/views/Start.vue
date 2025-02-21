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
	
	<div id="start-game-wrapper">
		<div id="start-btn-wrapper">
			<RouterLink to="/game"> <Button>Spela (1p)</Button> </RouterLink>
		</div>
		<div>
			<RouterLink to="/game"> <Button>Spela (2p)</Button> </RouterLink>
		</div>
	</div>
</template>

<style scoped>
	#start-game-wrapper{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	#start-btn-wrapper {
		margin-top: 61px;
		margin-bottom: 39px;
	}
	Button {
		background: var(--color-secondary);
		padding: 9px 26px 9px 25px;
		color: #ECECEC;
		font-family: Poppins;
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
</style>
