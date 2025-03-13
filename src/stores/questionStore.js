import { defineStore } from "pinia"
import questions from "../lib/questions.json"

export const useQuestionStore = defineStore("questionStore", {
    state: () => ({
        answeredQuestions: [],
        questionsList: questions,
        questions: null
    }),
    actions: {
        checkDisabeled(id) {
            return this.answeredQuestions.includes(id)
        },
        disableQuestion(id) {
            this.answeredQuestions.push(id)
        },
        checkGameOver() {
            return this.answeredQuestions.length >= this.questionsList.length
                ? true
                : false
        },
        resetQuestions() {
            this.answeredQuestions = []
        }
    }
})
