<template>
    <div id="game-wrapper">
        <div class="question-wrapper">
            <h2>Välj fråga</h2>
        </div>

        <div id="game-board">
            <div
                class="category-column"
                v-for="(category, index) in categoryList"
                :key="index"
            >
                <div class="category-card">{{ category }}</div>
                <router-link
                    v-for="(question, questionIndex) in questionsList[index]"
                    :key="questionIndex"
                    :to="`/game/${question.id}`"
                    style="display: contents"
                >
                    <QuestionCard :question="question" />
                </router-link>
            </div>
        </div>
        <div id="player-container">
            <div id="player">{{ userStorage.activeUser.username }}</div>
            <div id="opponent" @click="toggleInviteModal">
                {{ displayOpponent }}
            </div>
        </div>
        <InviteModal v-if="isInviteOpen" @is-invite-open="toggleInviteModal" />
    </div>
</template>

<script>
    import questions from "../lib/questions.json"
    import QuestionCard from "./QuestionCard.vue"
    import InviteModal from "./InviteModal.vue"
    import { useUserStorage } from "../stores/storage"
    export default {
        data() {
            return {
                isInviteOpen: false,
                questions: questions,
                categoryList: [],
                questionsList: [],
                userStorage: useUserStorage()
            }
        },
        components: { QuestionCard, InviteModal },
        methods: {
            createBoard() {
                //Hantera Kategorier
                // Skapa ett set av en array, alla unika.
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

                this.categoryList = [
                    ...new Set(
                        this.questions.map((question) => question.category)
                    )
                ]

                for (let i = 0; i < this.categoryList.length; i++) {
                    this.questionsList.push(
                        this.questions.filter(
                            (question) =>
                                question.category === this.categoryList[i]
                        )
                    )
                }
                console.log(this.questionsList)
            },
            toggleInviteModal() {
                this.isInviteOpen = !this.isInviteOpen
                console.log(this.isInviteOpen)
            }
        },

        created() {
            this.createBoard()
            this.userStorage.setPlayers()
        },
        computed: {
            displayOpponent() {
                return this.userStorage.player2?.username || "Bjud in vän"
            }
        }
    }
</script>

<style scoped>
    h2 {
        color: #fff;
        text-align: center;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
    }
    #game-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #game-board {
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: 10px;
        grid-template-rows: auto;
        align-items: center;
        justify-items: center;
        border-radius: 12px;
        max-width: 1200px;
        text-align: center;
        background-color: rgba(246, 246, 246, 0.3);
        margin: 0.5rem;
        padding: 0.6rem 0.6rem;
        padding-bottom: 0.9rem;
    }
    #player-container {
        display: flex;
        gap: 2rem;
        margin-top: 2rem;
        cursor: pointer;
        div {
            display: flex;
            padding: 1rem 2rem;
            border-radius: var(--border-radius);
            background-color: var(--color-secondary);
        }
    }

    .category-column {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .category-card {
        background-color: var(--color-category-background);
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
        min-width: 82px;
        min-height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.2rem 0.6rem;
    }

    @media (min-width: 500px) {
        #game-board {
            grid-column-gap: 10px;
        }
        .category-card {
            min-width: 100px;
        }
        .category-column {
            width: 100%;
        }
    }
    @media (min-width: 700px) {
        .category-card {
            min-width: 200px;
            padding: 0.2rem 0.6rem;
        }
    }
</style>
