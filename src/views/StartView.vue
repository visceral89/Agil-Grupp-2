<template>
    <div>
        <UserInfo />

        <div id="start-game-wrapper">
            <div id="start-btn-wrapper">
                <RouterLink to="/game">
                    <CustomButton @click="initialiseSingleGame"
                        >Spela (1p)</CustomButton
                    >
                </RouterLink>
            </div>
            <div>
                <RouterLink to="/game">
                    <CustomButton @click="initialiseMultiGame"
                        >Spela (2p)</CustomButton
                    >
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
    import UserInfo from "../components/UserInfo.vue"
    import CustomButton from "../components/CustomButton.vue"
    import { useUserStorage } from "../stores/storage"
    import { useQuestionStore } from "../stores/questionStore"

    export default {
        components: {
            UserInfo,
            CustomButton
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
                    this.userStorage.clearSessionPoints(),
                    this.questionStore.resetQuestions(),
                    this.userStorage.setActiveUser(
                        this.userStorage.loggedInUser
                    )
            },
            initialiseMultiGame() {
                this.userStorage.setMultiPlayer(),
                    this.userStorage.clearPlayers(),
                    this.userStorage.clearSessionPoints(),
                    this.questionStore.resetQuestions(),
                    this.userStorage.setActiveUser(
                        this.userStorage.loggedInUser
                    )
            }
        }
    }
</script>

<style scoped>
    #start-game-wrapper {
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
        CustomButton {
            width: 180px;
            height: 60px;
        }
    }
</style>
