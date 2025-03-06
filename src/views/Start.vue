<template>
    <div>
        <UserInfo />

        <div id="start-game-wrapper">
            <div id="start-btn-wrapper">
                <RouterLink to="/game">
                    <Button @click="setPlayersAmount(1)">Spela (1p)</Button>
                </RouterLink>
            </div>
            <div>
                <RouterLink to="/game">
                    <Button @click="setPlayersAmount(2)">Spela (2p)</Button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
    import UserInfo from "../components/UserInfo.vue"
    import Button from "../components/Button.vue"
    import { useUserStorage } from "../stores/storage"

    export default {
        data() {
            return { userStorage: useUserStorage() }
        },
        components: {
            UserInfo,
            Button
        },
        methods: {
            setPlayersAmount(ammount) {
                if (ammount === 1) {
                    this.userStorage.twoplayer = false
                } else {
                    this.userStorage.twoplayer = true
                }
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
        Button {
            width: 180px;
            height: 60px;
        }
    }
</style>
