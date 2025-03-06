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
                    :key="category + questionIndex"
                    :to="`/game/${question.id}`"
                    style="display: contents"
                >
                    <QuestionCard :question="question" />
                </router-link>
            </div>
        </div>
        <div id="player-container">
            <div id="player">{{ userStorage.loggedInUser.username }}</div>
            <div v-if="twoPlayer" id="opponent" @click="toggleInviteModal">
                {{ displayOpponent }}
            </div>
            <router-link v-if="outOfQuestions" to="/game/result"
                ><div>Resultat</div></router-link
            >
        </div>
        <InviteModal v-if="isInviteOpen" @is-invite-open="toggleInviteModal" />
    </div>
</template>

<script>
    import questions from "../lib/questions.json"
    import QuestionCard from "./QuestionCard.vue"
    import InviteModal from "./InviteModal.vue"
    import { useUserStorage } from "../stores/storage"
    import { useQuestionStore } from "../stores/questionStore"
    export default {
        data() {
            return {
                isInviteOpen: false,
                questions: questions,
                categoryList: [],
                questionsList: [],
                userStorage: useUserStorage(),
                questionStore: useQuestionStore(),
                outOfQuestions: false,
                activeUser: useUserStorage().activeUser,
                twoPlayer: useUserStorage().twoplayer
            }
        },
        components: { QuestionCard, InviteModal },
        methods: {
            checkStoredQuestions() {
                return this.questionStore.storedQuestionsList === null
            },
            createBoard() {
                console.log("Active User: " + this.activeUser)
                console.log("isTwoPlayer?: " + this.twoPlayer)
                //Hantera Kategorier
                // Skapa ett set av en array, alla unika.
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

                this.categoryList = [
                    ...new Set(
                        this.questions.map((question) => question.category)
                    )
                ]

                // Quick and dirty shuffle
                this.categoryList.sort(() => Math.random() - 0.5)

                // Limits categories to 3

                const selectedCategories = this.categoryList.slice(0, 3)
                console.log(selectedCategories)

                for (let i = 0; i < selectedCategories.length; i++) {
                    this.questionsList.push(
                        this.questions.filter(
                            (question) =>
                                question.category === selectedCategories[i]
                        )
                    )
                }
                // console.log(this.questionsList)
                // Så questionslist är egentligen 3 arrayer med frågor i varje array.
                // Man bör kunna sortera dom per poäng och sen slica av listan (6) eller så.
                // Vi måste bara vara skra på att poängen är unika.
                this.questionStore.storedQuestionsList = {
                    ...this.questionsList
                }
                this.questionStore.categoryList = { ...this.categoryList }
            },
            toggleInviteModal() {
                this.isInviteOpen = !this.isInviteOpen
                //  console.log(this.isInviteOpen)
            },
            checkGameOver() {
                this.outOfQuestions = this.questionStore.checkGameOver()
            }
        },

        created() {
            console.log(!this.checkStoredQuestions)
            if (this.checkStoredQuestions) {
                this.createBoard()
            } else {
                this.categoryList = { ...this.questionStore.categoryList }
                this.questionsList = { ...this.questionStore.questionsList }
            }
            this.userStorage.setPlayers()
            this.checkGameOver()
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
    #opponent {
        &:hover {
            background-color: var(--color-secondary-hover);
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
