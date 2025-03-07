<template>
    <div>
        <UserInfo />

        <div id="start-game-wrapper">
            <div id="start-btn-wrapper">
                <RouterLink to="/game"> <Button @click="userStorage.setSinglePlayer">Spela (1p)</Button> </RouterLink>
            </div>
            <div>
                <RouterLink to="/game"> <Button @click="userStorage.setMultiPlayer">Spela (2p)</Button> </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import UserInfo from "../components/UserInfo.vue";
import Button from "../components/Button.vue"
import { useUserStorage } from "../stores/storage"

export default {
	components: {
		UserInfo,
		Button
	},
    data() {
        return {
            userStorage: useUserStorage()
        }
    }
};
</script>

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

	@media (min-width: 890px) {
    Button {
      width: 180px;
		height: 60px;
    }
  }
</style>
