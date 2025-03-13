<template>
    <div id="players-wrapper">
        <div id="active-player">
            <p class="player-header">Spelare på tur:</p>
            <div id="player-1-wrapper">
                <p class="player">{{ userStorage.activeUser.username }}</p>
            </div>
        </div>
        <div v-if="userStorage.player2" id="next-player">
            <p class="player-header">Därefter:</p>
            <div id="player-2-wrapper">
                <p
                    class="player"
                    v-if="userStorage.activeUser !== userStorage.player2"
                >
                    {{ userStorage.player2.username }}
                </p>
                <p class="player" v-else>{{ userStorage.player1.username }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { useUserStorage } from "../stores/storage"

    export default {
        data() {
            return {
                userStorage: useUserStorage()
            }
        }
    }
</script>

<style scoped>
    #players-wrapper {
        display: flex;
        gap: 2em;
        flex-direction: row;
        justify-content: center;
    }

    #active-player,
    #next-player {
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    #active-player {
        margin-bottom: 2em;
    }

    #player-1-wrapper {
        background: var(--color-secondary);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        padding: 0.6em 2em;
        width: fit-content;
    }

    #player-2-wrapper {
        padding: 3px 18px;
        background: var(--color-disabled);
        border-radius: var(--border-radius);
        box-shadow: -2px 4px 0px 0px #6d698f;
        padding: 0.6em 2em;
        margin-bottom: 20px;
    }

    .player-header {
        color: var(--color-neutral-light);
        font-size: 17px;
        font-weight: 500;
    }

    .player {
        color: var(--color-neutral-light);
        font-size: 20px;
        font-weight: 500;
        margin: 0;
    }
</style>
