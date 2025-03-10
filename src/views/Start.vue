<template>
    <div>
        <UserInfo />

        <div id="start-game-wrapper">
            <div id="start-btn-wrapper">
                <RouterLink to="/game"> <Button @click="initialiseSingleGame">Spela (1p)</Button> </RouterLink>
            </div>
            <div>
                <RouterLink to="/game"> <Button @click="initialiseMultiGame">Spela (2p)</Button> </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import UserInfo from "../components/UserInfo.vue";
import Button from "../components/Button.vue"
import { useUserStorage } from "../stores/storage"
import { useQuestionStore } from "../stores/questionStore"

export default {
	components: {
		UserInfo,
		Button
	},
    data() {
        return {
            userStorage: useUserStorage(),
            questionStore: useQuestionStore()
        }
    },
    methods: {
        initialiseSingleGame() {
            this.userStorage.setSinglePlayer(), 
            this.userStorage.clearPlayers(), 
            this.questionStore.resetQuestions(), 
            this.userStorage.setActiveUser(this.userStorage.loggedInUser)
        },
        initialiseMultiGame() {
            this.userStorage.setMultiPlayer(), 
            this.userStorage.clearPlayers(), 
            this.questionStore.resetQuestions(), 
            this.userStorage.setActiveUser(this.userStorage.loggedInUser)
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
