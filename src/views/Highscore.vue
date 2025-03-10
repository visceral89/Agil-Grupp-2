<template>
    <div class="highscore-wrapper">
        <section class="highscore-top-section">
            <img
                class="highscore-top-trophy"
                src="../assets/images/highscore-trophy.webp"
                alt="Highscore trophy"
            />
            <h2 class="highscore-top-title">Highscore</h2>
        </section>
        <section class="highscore-table">
            <div
                v-for="(player, index) in highscoreList"
                :key="player.id"
                class="highscore-cell"
            >
                <div class="highscore-avatar-container">
                    <img
                        :src="base_url + player.avatar"
                        class="highscore-avatar"
                        alt="avatar"
                    />
                </div>
                <span>{{ index + 1 }}. {{ player.username }}</span>
                <span class="highscore-cell-points">{{ player.totalPoints }} p</span>
            </div>
        </section>
    </div>
</template>

<script>
    import users from "../lib/users.json"
    import { useUserStorage } from "../stores/storage" //Guest HSL

    export default {
        created() { //Guest HSL
            if (this.userStorage.loggedInGuestUser) {
                if (!users.includes(this.userStorage.loggedInUser)) {
                    users.push(this.userStorage.loggedInUser)
                }
                console.log(users)
                let tempHighscoreList = users.sort((a, b) => {
                    return b.totalPoints - a.totalPoints
                })
                this.highscoreList = tempHighscoreList
            }
            console.log(users)
        },
        data() {
            return {
                base_url: "src/",
                highscoreList: users.sort((a, b) => {
                    return b.totalPoints - a.totalPoints
                }),
                userStorage: useUserStorage() //Guest HSL
            }
        }
    }
</script>

<style>
    .highscore-wrapper {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 4em;
        padding-top: 2em;
    }
    .highscore-top-section {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .highscore-top-trophy {
            width: 50%;
        }
        .highscore-top-title {
            font-size: 1.5em;
        }
    }
    .highscore-table {
        display: flex;
        flex-direction: column;
        gap: 0.8em;
        height: 550px;
        overflow-y: scroll;
        padding-top: 2.1em;
        scrollbar-width: none;
    }
    .highscore-cell {
        align-items: center;
        background: var(--color-card-background);
        border-radius: 1.25em;
        color: var(--color-neutral-dark);
        display: flex;
        gap: 3em;
        padding: 0.2em 1.5em;
        .highscore-cell-points {
            font-weight: bold;
            margin-left: auto;
        }
        .highscore-avatar-container {
            position: relative;
        }
        .highscore-avatar {
            display: block;
            transform: translateY(-4px);
            width: 5.5em;
        }
        &:first-of-type div::after {
            background: url("../assets/images/highscore-crown.webp") no-repeat;
            content: "";
            display: inline-block;
            height: 64px;
            position: absolute;
            translate: 13px -136px;
            width: 64px;
        }
    }
    @media (min-width: 890px) {
        .highscore-top-section {
            flex-direction: row;
            gap: 2em;
            .highscore-top-title {
                font-size: 3em;
            }
        }
        .highscore-cell {
            gap: 6em;
        }
    }
</style>
